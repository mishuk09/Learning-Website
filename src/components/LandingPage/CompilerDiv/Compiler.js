import { faC, faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MonacoEditor from 'react-monaco-editor';

import { useEffect, useState } from 'react';

const Compiler = () => {
    const [code, setCode] = useState('');
    // const [language, setLanguage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [initialButtonState, setInitialButtonState] = useState(true);

const language='python3'
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
        }
        finally {
            setIsLoading(false);
            setInitialButtonState(true);
        }
    };

    
    return (
        <div className=' p-6'>
            <h2 className='pt-6 text-center font-bold text-4xl'>CSEHacks All in One Online IDE</h2>
            <div className='w-full flex rounded bg-slate-100 mb-2 py-1 px-1 mt-6'>
                {/* <div>
                    <label>
                        <select className='px-2 py-2 rounded-md border' value={language} onChange={(e) => setLanguage(e.target.value)}>
                            <option value="c"><FontAwesomeIcon icon={faC} /> C</option>
                            <option value="cpp"><FontAwesomeIcon icon={faC} /> C++</option>
                            <option value="java">Java</option>
                            <option value="python3">Python</option>
                            <option value="ruby">Ruby</option>
                            <option value="csharp">C#</option>
                            <option value="php">PHP</option>
                            <option value="swift">Swift</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">TypeScript</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="scss">SCSS</option>
                            <option value="bash">Bash</option>
                            <option value="go">Go</option>
                            <option value="kotlin">Kotlin</option>
                            <option value="rust">Rust</option>
                            <option value="scala">Scala</option>
                            <option value="perl">Perl</option>
                            <option value="lua">Lua</option>
                        </select>
                    </label>
                </div> */}
                <div className='mx-2'>
                    <button
                        style={{ backgroundColor: '#e91e63' }}
                        className='  text-white px-4 py-2 rounded-md'
                        onClick={executeCode}
                        disabled={!code.trim() || !language || isLoading || !initialButtonState}
                    >
                        Run  {result && !result ? (
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
            <div className='flex rounded bg-slate-100'>
                <div className='w-[60%]   p-2   rounded-md'>
                    <MonacoEditor
                        width="100%"
                        height={400}
                        language={language}
                        theme="vs-dark"
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

                            // More options can be found in the official documentation
                        }}
                    />
                </div>
                <div className='w-[40%]     rounded-md p-2'>
                    <div className='w-full text-sm p-1 min-h-[400px] max-h-[400px]  text-slate-300' style={{ backgroundColor: '#1e1e1e' }}>
                        {
                            result ? <pre>{result}</pre> :
                                <h3>Click Run button to see Output!</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compiler;


