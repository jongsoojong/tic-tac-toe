import React from 'react';


export const Cell = ({ cellValue, rowId, cellIndex, handleClick }) => {
    const clickFunction = () => {
        console.log('THIS IS MY NUMBER', cellValue );
        console.log('THIS IS MY ROW', rowId );
        console.log('THIS IS MY CELL INDEX', cellIndex)


    }


    return (
        <div className="cell" 
        onClick={() => handleClick(rowId, cellIndex)}
        >
            {cellValue}
        </div>
    )
}