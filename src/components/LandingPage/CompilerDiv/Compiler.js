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
        <div>
            <h2>JDoodle Example</h2>
            <div>
                <label>
                    Language:
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
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
            <div>
                <label>
                    Code:
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} rows={10} />
                </label>
            </div>
            <div>
                <button onClick={executeCode}>Execute Code</button>
            </div>
            {result && (
                <div>
                    <h3>Result:</h3>
                    <pre>{result}</pre>
                </div>
            )}
        </div>
    );
};

export default Compiler;
