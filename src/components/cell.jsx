import React from 'react';


export const Cell = ({ cellValue, rowId, cellIndex, handleClick }) => {

    return (
        <div className="cell" 
        onClick={() => handleClick(rowId, cellIndex)}
        >
            {cellValue}
        </div>
    )
}