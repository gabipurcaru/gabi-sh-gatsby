import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

var randomColor = function () {
    return (
        "hsla(" +
        parseInt(Math.random() * 256) +
        ", " +
        parseInt(Math.random() * 90 + 10) +
        "%, " +
        // parseInt(Math.random() * 80 + 20) +
        "60%, 1)"
    );
};

function Logo({ className }) {
    const gridSize = 4;
    let initialGrid = [];
    for (let i = 0; i < gridSize; i++) {
        let row = [];
        for (let j = 0; j < gridSize; j++) {
            row.push(randomColor());
        }
        initialGrid.push(row);
    }

    let [grid, setGrid] = useState(initialGrid);

    useEffect(() => {
        const interval = setInterval(() => {
            var i = parseInt(Math.random() * gridSize);
            var j = parseInt(Math.random() * gridSize);
            let newGrid = [];
            for (let ii = 0; ii < gridSize; ii++) {
                let row = [];
                for (let jj = 0; jj < gridSize; jj++) {
                    if (i != ii || j != jj) {
                        row.push(grid[ii][jj]);
                    } else {
                        row.push(randomColor());
                    }
                }
                newGrid.push(row);
            }
            setGrid(newGrid);
        }, 300);
        return () => clearInterval(interval);
    });

    return (
        <svg fill="none" className={className} stroke="currentColor" viewBox={`0 0 ${gridSize} ${gridSize}`} xmlns="http://www.w3.org/2000/svg" >
            {
                grid.map((row, i) => (<React.Fragment key={i}>
                    {row.map((cell, j) => (
                        <rect key={j} x={j} y={i} width={1} height={1} fill={cell} strokeWidth={0}></rect>
                    ))}
                </React.Fragment>))
            }
        </svg>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
}

export default Logo;