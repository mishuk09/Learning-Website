import AceEditor from 'react-ace';
import { faC, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import 'ace-builds/src-noconflict/mode-java';
// import 'ace-builds/src-noconflict/theme-github';
// import 'ace-builds/src-noconflict/ext-language_tools';
// import 'ace-builds/src-noconflict/snippets';
// import 'ace-builds/src-min-noconflict/ext-language_tools';
import MonacoEditor from 'react-monaco-editor';

import { useState } from 'react';



const Compiler = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('python');
    const [result, setResult] = useState(null);

    const executeCode = async () => {
        try {
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
        }
    };

    return (
        <div className=' p-6'>
            <h2 className='pt-6 text-center font-bold text-4xl'>CSEHacks Online IDE</h2>
            <div className='w-full flex rounded bg-slate-100 mb-2 py-1 px-1 mt-6'>
                <div>
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
                </div>
                <div className='mx-2'>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded-md'
                        onClick={executeCode}
                    >
                        Run <FontAwesomeIcon className='ms-2' icon={faChevronRight} />
                    </button>
                </div>
            </div>
            <div className='flex rounded bg-slate-100'>
                <div className='w-[60%]   p-2   rounded-md'>

                    {/* <textarea
                        className='w-full p-1 min-h-[400px] outline-none max-h-[400px]  bg-white     rounded-md'

                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    /> */}

                    <MonacoEditor
                        width="100%"
                        height="400"
                        language="javascript" // or the language of your choice
                        theme="vs-dark" // or another theme
                        value={code}
                        onChange={(newCode) => setCode(newCode)}
                    />


                    {/* <AceEditor
                            mode={language}
                            theme='github'
                            onChange={(value) => setCode(value)} // Use this onChange for AceEditor
                          
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                            }}
                            value={code}
                            className='w-full p-1 min-h-[400px] outline-none max-h-[400px] bg-white rounded-md'
                        /> */}

                    {/* <CodeMirror
                        className='w-full p-1 min-h-[400px] outline-none max-h-[400px] bg-white rounded-md'
                        value={code}
                        onBeforeChange={(editor, data, value) => setCode(value)}
                        options={{
                            lineNumbers: true,
                            mode: language,
                            theme: 'material',
                        }}
                    /> */}
                </div>
                <div className='w-[40%]     rounded-md p-2'>
                    <div className='w-full p-1 min-h-[400px] max-h-[400px]  bg-white     rounded-md'>
                        <h3>Result:</h3>
                        <pre>{result}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compiler;


