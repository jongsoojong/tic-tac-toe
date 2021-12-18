import React, {useState, useEffect} from 'react';
import { Row } from './row';

export const Board = () => {

    const initialState = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    const [gameBoard, setGameBoard] = useState( initialState )

    const handleClick = (rowId, cellId) => {
        // DEEP COPY REQUIRED DUE TO MATRIX
        const updatedGameboard = JSON.parse(JSON.stringify(gameBoard));
;

        updatedGameboard[rowId][cellId] = (gameBoard[rowId][cellId] * 2);

        setGameBoard(updatedGameboard);
    }

    useEffect(() => {
        console.log('board changed');
    }, [gameBoard]);

    return (
        
        <div className="board">
            {
                gameBoard.map((row, rowIndex) => {
                    return (
                        <Row 
                        row={row}
                        rowIndex={rowIndex}
                        handleClick={handleClick}
                        key={rowIndex}
                        />
                    );
                })
            }
           
        </div>
    )
}