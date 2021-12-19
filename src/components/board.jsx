import React, {useState, useEffect} from 'react';
import { Row } from './row';

export const Board = () => {

    const initialState = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    const initialTurn = 1;
    const initialPlayer = 'X'
    const initialWin = null;

    const[winState, setWinState] = useState(null);

    const[turnState, setTurnState] = useState(1);

    const [gameBoard, setGameBoard] = useState( initialState )

    const [playerState, setPlayerState] = useState('X');

    const handleClick = (rowId, cellId) => {
        // DEEP COPY REQUIRED DUE TO MATRIX
        const updatedGameboard = JSON.parse(JSON.stringify(gameBoard));
        let updatedTurnState = turnState;

        //Set the player State
        if(updatedGameboard[rowId][cellId] === 'X' || updatedGameboard[rowId][cellId] === 'O' || winState) {
            //do nothing
        } else {
            updatedGameboard[rowId][cellId] = playerState
            setGameBoard(updatedGameboard);
            setPlayerState(playerState === 'X' ? 'O' : 'X');
            updatedTurnState++
            setTurnState(updatedTurnState);
        }

    }

    const handleReset = () => {
        setGameBoard(initialState);
        setTurnState(initialTurn);
        setPlayerState(initialPlayer);
        setWinState(initialWin);
    }

    useEffect(() => {
        //Horizontal
        if(gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2] && gameBoard[0][1])  {
            setWinState(gameBoard[0][0])
        }
        if(gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2] && gameBoard[1][1])  {
            setWinState(gameBoard[1][0])
        }
        if(gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2]  && gameBoard[2][1])  {
            setWinState(gameBoard[2][0])
        }
        //Vertical
        if(gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0] && gameBoard[1][0])  {
            setWinState(gameBoard[0][0])
        }
        if(gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1] && gameBoard[1][1])  {
            setWinState(gameBoard[0][1])
        }
        if(gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2] && gameBoard[1][2])  {
            setWinState(gameBoard[0][2])
        }

        //Diagonal
        if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[1][1])  {
            setWinState(gameBoard[1][1])

        }
        if(gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[1][1])  {
            setWinState(gameBoard[1][1])
        }


    }, [gameBoard]);

    return (
        
        <div className="board">
            <div className="player">
                {
                    winState && `${winState} Wins!` 
                }
            </div>
            <div className="turnCount">
                {
                    (turnState === 10 && !winState) ? 'TIE' : `Turn: ${turnState}`
                }
            </div>
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

            <div>
                <button className="resetButton" onClick={ handleReset}>Reset</button>
            </div>
           
        </div>
    )
}