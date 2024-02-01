import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MonacoEditor from 'react-monaco-editor';
import OnlineIDEObject from './OnlineIDEObject';

const IdeFormatter = () => {
    const { value } = useParams();
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [initialButtonState, setInitialButtonState] = useState(true);


    const selectedObject = OnlineIDEObject.find(obj => obj.value === value);
    const executeCode = async () => {
        try {
            setIsLoading(true);
            setInitialButtonState(false);
            const response = await fetch('http://localhost:5000/compiler/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code,
                    language,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData.details}`);
            }

            const data = await response.json();
            setResult(data.output);

        } catch (error) {
            console.error('Error executing code:', error);

        } finally {
            setIsLoading(false);
            setInitialButtonState(true);
        }
    };



    useEffect(() => {
        setLanguage(value);
    }, [value]);


    const handleNavigatePage = (id) => {
        navigate(`/ideformat/${id}`);
    };
    return (
        <div className='p-6 mb-20'>
            <h2 className='pt-6 text-center font-bold text-4xl'>{value.toUpperCase()} Online IDE</h2>
            <div className='w-full bg-slate-950 flex rounded  mb-2 py-1 px-1 mt-6'>
                <div className='flex items-center text-center text-sm'>

                    <img src={selectedObject.img} className='w-10' alt="" />


                    <div className='mx-2   h-8 flex items-center text-center   bg-blue-500 text-white px-3   py-1 rounded-sm'>

                        {value}
                    </div>
                </div>
                <div className='mx-2 flex items-center text-center text-sm'>
                    <button
                        style={{ backgroundColor: '#e91e63' }}
                        className='text-white   h-8 flex items-center text-center px-3   py-1 rounded-sm'
                        onClick={executeCode}
                        disabled={!code.trim() || !language || isLoading || !initialButtonState}
                    >Run
                        {result && !result ? (
                            <FontAwesomeIcon className='ms-2' icon={faChevronRight} />
                        ) : (
                            <>
                                {isLoading ? (
                                    <FontAwesomeIcon className='ms-2' icon={faGear} spin />
                                ) : (
                                    <FontAwesomeIcon className='ms-2' icon={faChevronRight} />
                                )}
                            </>
                        )}
                    </button>
                </div>
            </div>
            <div className='flex rounded bg-slate-950'>
                <div className='w-10 ps-2  h-full text-white   mx-auto'>
                    {OnlineIDEObject.map((unit) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={unit.id}
                            onClick={() => handleNavigatePage(unit.value)}
                        ><img className='mt-2' src={unit.img} alt="" /></a>
                    ))}
                </div>
                <div className='w-[60%] ps-2 pt-2 rounded-md'>
                    <MonacoEditor
                        width='100%'
                        height={400}
                        language={language}
                        theme='vs-dark'
                        value={code}
                        onChange={(newCode) => setCode(newCode)}
                        options={{
                            // General Editor Settings
                            fontSize: 14,
                            fontFamily: 'Fira Code, monospace',
                            fontWeight: 'normal', // 'normal' or 'bold'
                            lineHeight: 20,
                            automaticLayout: true,
                            wordWrap: 'on', // 'off', 'on', or 'wordWrapColumn'
                            wordWrapColumn: 80, // Number of characters before wrapping

                            // Text Configuration
                            tabSize: 4, // Number of spaces per tab
                            insertSpaces: true, // Insert spaces when pressing Tab
                            trimAutoWhitespace: true, // Trim trailing whitespace on each save

                            // Render Options
                            lineNumbers: 'on', // 'on', 'off', or 'relative'
                            renderIndentGuides: true,
                            renderLineHighlight: 'all', // 'none', 'gutter', or 'all'
                            rulers: [80], // Show a vertical line at a specific column
                            renderWhitespace: 'all', // 'none', 'boundary', or 'all'

                            // Scrollbar Configuration
                            scrollbar: {
                                vertical: 'visible', // 'visible', 'hidden', 'hidden-hover', or 'visible-hover'
                                horizontal: 'visible', // 'visible', 'hidden', 'hidden-hover', or 'visible-hover'
                            },

                            // Minimap Configuration
                            minimap: {
                                enabled: false, // Show or hide the minimap
                                renderCharacters: false, // Render actual characters in the minimap
                            },

                            // Folding
                            folding: true, // Enable code folding

                            // Suggest Configuration
                            suggest: {
                                snippets: true, // Enable or disable snippets in suggestions
                            },

                            // Accessibility
                            accessibilitySupport: 'auto', // 'auto', 'off', or 'on'

                        }}
                    />
                </div>
                <div className='w-[40%] rounded-md p-2'>
                    <div
                        className='w-full text-sm px-2 pt-1 min-h-[400px] max-h-[400px] text-slate-300'
                        style={{ backgroundColor: '#1e1e1e' }}
                    >
                        {result ?
                            <pre>{result}</pre>
                            :
                            <h3>Click Run button to see Output!</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeFormatter;
