import React from 'react';
    
const Result =({value, solution, explain}) => {
    return(
        <div className="container">
            <h2>Solution</h2>

            <div className="result">
                <pre><code> {value} </code></pre>
            </div>

            <div className="container__solution">
                <pre><code className="code">{ solution }</code></pre>
                <div className="container__explain">
                    <p><strong>Flat</strong> method creates a new array of flat elements. This method accepts a specific depth value,  by default 1.</p>
                    <p><strong>For the depth level</strong> the value is <strong>Infinity,</strong> specifying that all nested arrays should be flattened.</p>
                </div>
            </div>
            
            <p className="path-line">See this code in the following path: src/App.js > <a href="https://github.com/LisCT/flatten-array/blob/master/src/App.js" target="_blank" rel="noopener noreferrer">line 23</a></p>

        </div>
    )
}

export default Result;