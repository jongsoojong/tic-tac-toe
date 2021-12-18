import React from 'react';
import { Cell } from './cell';

export const Row = ({ row, rowIndex, handleClick }) => {

    return (
        <div className="row">
            {
                row.map((cell, cellIndex) => {
                    return (
                        <Cell 
                        cellValue={cell}
                        rowId={rowIndex}
                        cellIndex={cellIndex}
                        handleClick={handleClick}
                        key={`${rowIndex}-${cellIndex}`}
                        />
                    )
                })
            }
        </div>
    )
}