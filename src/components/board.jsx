import React, {useState, useEffect} from 'react';
import { Row } from './row';

export const Board = () => {

    const initialState = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    const [gameBoard, setGameBoard] = useState( initialState )

    const handleClick = (rowId, cellId) => {
        console.log('click')
        const updatedGameboard = gameBoard;

        console.log('click update', updatedGameboard)


        updatedGameboard[rowId][cellId] = updatedGameboard[rowId][cellId] * 2 

        console.log('click update 23', updatedGameboard)

        setGameBoard(null);
        setGameBoard(updatedGameboard)
    }

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