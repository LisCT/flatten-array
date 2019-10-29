import React from 'react';
    
const Result =({value, solution}) => {
    return(
        <div className="container">
            <h2>Solution</h2>

            <div className="result">
                <pre><code> {value} </code></pre>
            </div>

            <div className="container__solution">
                <pre><code className="code">{ solution }</code></pre>
            </div>
            
            <p className="path-line">See this code in the following path: src/App.js > line 29</p>

        </div>
    )
}

export default Result;