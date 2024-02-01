import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MonacoEditor from 'react-monaco-editor';

const IdeFormatter = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialButtonState, setInitialButtonState] = useState(true);

    const executeCode = async () => {
        try {
            setIsLoading(true);
            setInitialButtonState(false);
            const response = await fetch('http://localhost:5000/compiler/executee', {
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
            setError(error);
        } finally {
            setIsLoading(false);
            setInitialButtonState(true);
        }
    };

    const { ideid } = useParams();

    useEffect(() => {
        setLanguage(ideid);
    }, [ideid]);

    return (
        <div className='p-6'>
            <h2 className='pt-6 text-center font-bold text-4xl'>{ideid.toUpperCase()} Online IDE</h2>
            <div className='w-full flex rounded bg-slate-100 mb-2 py-1 px-1 mt-6'>
                <div>
                    <div className='mx-2'>
                        <p className='bg-blue-500 text-white px-4 py-2 rounded-md'>{ideid}</p>
                    </div>
                </div>
                <div className='mx-2'>
                    <button
                        style={{ backgroundColor: '#e91e63' }}
                        className='text-white px-4 py-2 rounded-md'
                        onClick={executeCode}
                        disabled={!code.trim() || !language || isLoading || !initialButtonState}
                    >
                        {result ? (
                            <FontAwesomeIcon className='ms-2' icon={faChevronRight} />
                        ) : (
                            <>
                                {isLoading ? (
                                    <FontAwesomeIcon icon={faGear} />
                                ) : (
                                    <FontAwesomeIcon className='ms-2' icon={faChevronRight} />
                                )}
                            </>
                        )}
                    </button>
                </div>
            </div>
            <div className='flex rounded bg-slate-100'>
                <div className='w-[60%] p-2 rounded-md'>
                    <MonacoEditor
                        width='100%'
                        height={400}
                        language={language}
                        theme='vs-dark'
                        value={code}
                        onChange={(newCode) => setCode(newCode)}
                        options={{
                            fontSize: 15,
                            automaticLayout: true,
                            wordWrap: 'on',
                            // Add more Monaco Editor options as needed
                        }}
                    />
                </div>
                <div className='w-[40%] rounded-md p-2'>
                    <div
                        className='w-full text-sm p-1 min-h-[400px] max-h-[400px] text-slate-300'
                        style={{ backgroundColor: '#1e1e1e' }}
                    >
                        {result ? (
                            <pre>{result}</pre>
                        ) : error ? (
                            <div style={{ color: 'red' }}>{error.message}</div>
                        ) : (
                            <h3>Click Run button to see Output!</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeFormatter;
