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

const hexagonPoints = (cx, cy, radius) => {
    const angles = [0, Math.PI / 3, 2 * Math.PI / 3, 3 * Math.PI / 3, 4 * Math.PI / 3, 5 * Math.PI / 3].map(angle => angle + Math.PI / 6);
    return angles.map(angle => {
        const x = cx - radius * Math.sin(angle);
        const y = cy - radius * Math.cos(angle);

        return `${x},${y}`;
    }).join(' ');
};

function Logo({ className }) {
    const gridSize = 7;
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
        <svg fill="none" className={className} stroke="currentColor" viewBox={`0 0 ${gridSize - 3} ${gridSize - 3}`} xmlns="http://www.w3.org/2000/svg" >
            {grid.map((row, i) => (<React.Fragment key={i}>
                {row.map((cell, j) => (
                    <polygon
                        key={j}
                        points={hexagonPoints(i * 0.750 + 0.1, (j + (i % 2 === 0 ? 0.5 : 0)) * 0.865 - 0.3, 0.5)}
                        shapeRendering="geometricPrecision"
                        strokeWidth={0}
                        fill={cell} />
                ))}

            </React.Fragment>))}
        </svg>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
}

export default Logo;