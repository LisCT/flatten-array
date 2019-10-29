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
                    <p><strong>The input value</strong> is converted into an array,
                    then into a string which eliminate all the brackets.</p>
                    <p><strong>Split</strong> separate them by a comma which is the main separator, It's going to return an array of strings.</p>
                    <p><strong>Map</strong> is going to convert each string into a number and will return an array.</p>
                </div>
            </div>
            
            
            <p className="path-line">See this code in the following path: src/App.js > line 32</p>

        </div>
    )
}

export default Result;