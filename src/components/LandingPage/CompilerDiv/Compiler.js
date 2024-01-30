import { faC, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='bg-slate-50 p-6'>
            <h2 className='pt-6 text-center font-bold text-4xl'>CSEHacks Online IDE</h2>



            <div className='w-full flex'>
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
            <div className='flex'>
            <div className='w-[60%] shadow mt-2 p-2 border border-gray-300 rounded-md'>
                <label className='w-full'>
                    <textarea
                        className='w-full min-h-[400px] max-h-[400px] p-2 bg-gray-100 border border-gray-300 rounded-md'
                        
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>
            </div>
            <div className='w-[40%]'>

                <div className=''>
                    <div className='w-[100%] bg-slate-400 min-h-[400px]  max-h-[400px]'>
                        <h3>Result:</h3>
                        <pre>{result}</pre>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Compiler;


