import React, { useState, useEffect, useRef } from 'react';

const TicTacToe = () => {
    const [boardSize, setBoardSize] = useState({ width: 10, height: 10 });
    const [board, setBoard] = useState(Array(boardSize.height).fill().map(() => Array(boardSize.width).fill(null)));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [scores, setScores] = useState({ X: 0, O: 0 });
    const [showCelebration, setShowCelebration] = useState(false);
    const [playerX, setPlayerX] = useState('');
    const [playerO, setPlayerO] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [history, setHistory] = useState([]);
    const [canGoBack, setCanGoBack] = useState(false);
    const [lastMove, setLastMove] = useState(null);
    const celebrationRef = useRef(null);
    useEffect(() => {
        if (winner) {
            setShowCelebration(true);
            setScores(prevScores => ({
                ...prevScores,
                [winner]: prevScores[winner] + 1
            }));
            playVictorySound();
            setTimeout(() => {
                if (celebrationRef.current) {
                    celebrationRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 10);
        }
    }, [winner]);

    useEffect(() => {
        setBoard(Array(boardSize.height).fill().map(() => Array(boardSize.width).fill(null)));
    }, [boardSize]);

    const handleClick = (row, col) => {
        if (winner || board[row][col]) return;

        const newBoard = board.map(row => [...row]);
        newBoard[row][col] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        setHistory([...history, { board: board, xIsNext: xIsNext, lastMove: { row, col } }]);
        setCanGoBack(true);
        setLastMove({ row, col });

        const newWinner = calculateWinner(newBoard, row, col);
        if (newWinner) {
            setWinner(newWinner);
        }
    };

    const calculateWinner = (board, row, col) => {
        const directions = [
            [0, 1], [1, 0], [1, 1], [1, -1]
        ];

        for (let [dx, dy] of directions) {
            let count = 1;
            let r = row, c = col;

            for (let i = 0; i < 2; i++) {
                while (true) {
                    r += dx;
                    c += dy;
                    if (r < 0 || r >= boardSize.height || c < 0 || c >= boardSize.width || board[r][c] !== board[row][col]) break;
                    count++;
                }
                dx = -dx;
                dy = -dy;
                r = row;
                c = col;
            }

            if (count >= 5) return board[row][col];
        }

        return null;
    };

    const renderSquare = (row, col) => {
        const isLastMove = lastMove && lastMove.row === row && lastMove.col === col;
        return (
            <button
                className={`w-3 h-3 min-[310px]:h-4 min-[310px]:w-4 min-[394px]:h-5 min-[394px]:w-5 min-[420px]:h-6 min-[420px]:w-6 min-[500px]:h-7 min-[500px]:w-7 sm:w-8 sm:h-8 md:w-10 md:h-10 border border-gray-400 flex items-center justify-center text-sm sm:text-base md:text-xl font-bold rounded-md transition-colors duration-200 ${isLastMove ? 'bg-yellow-200' : 'hover:bg-gray-100'
                    } relative`}
                onClick={() => handleClick(row, col)}
            >
                {board[row][col] === 'X' && <span className="text-blue-500">X</span>}
                {board[row][col] === 'O' && <span className="text-red-500">O</span>}
                {!board[row][col] && (
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-200">
                        {xIsNext ? 'X' : 'O'}
                    </span>
                )}
            </button>
        );
    };

    const renderBoard = () => (
        <div
            className="grid gap-1 bg-white bg-opacity-80 p-2 rounded-lg shadow-lg"
            style={{ gridTemplateColumns: `repeat(${boardSize.width}, minmax(0, 1fr))` }}
        >
            {board.map((row, i) =>
                row.map((_, j) => (
                    <div key={`${i}-${j}`}>{renderSquare(i, j)}</div>
                ))
            )}
        </div>
    );

    const playVictorySound = () => {
        // const audio = new Audio('path/to/victory-sound.mp3');
        // audio.play();
    };

    const goBack = () => {
        if (history.length > 0 && canGoBack) {
            const lastState = history[history.length - 1];
            setBoard(lastState.board);
            setXIsNext(lastState.xIsNext);
            setHistory(history.slice(0, -1));
            setCanGoBack(false);
            setWinner(null);
            setShowCelebration(false);
            setLastMove(lastState.lastMove);
        }
    };

    const resetGame = () => {
        setBoard(Array(boardSize.height).fill().map(() => Array(boardSize.width).fill(null)));
        setXIsNext(Math.random() < 0.5);
        setWinner(null);
        setShowCelebration(false);
        setHistory([]);
        setCanGoBack(false);
        setLastMove(null);
    };

    const startGame = () => {
        if (playerX && playerO) {
            setGameStarted(true);
            resetGame();
        }
    };

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    };

    if (!gameStarted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4" style={backgroundStyle}>
                <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Tic Tac Toe</h1>
                    <input
                        type="text"
                        placeholder="Tên người chơi X"
                        value={playerX}
                        onChange={(e) => setPlayerX(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Tên người chơi O"
                        value={playerO}
                        onChange={(e) => setPlayerO(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <div className="flex justify-between mb-4">
                        <select
                            value={boardSize.width}
                            onChange={(e) => setBoardSize({ ...boardSize, width: parseInt(e.target.value) })}
                            className="w-1/2 p-2 mr-2 border border-gray-300 rounded"
                        >
                            {[10, 11, 12, 13, 14, 15].map(size => (
                                <option key={size} value={size}>Chiều rộng: {size}</option>
                            ))}
                        </select>
                        <select
                            value={boardSize.height}
                            onChange={(e) => setBoardSize({ ...boardSize, height: parseInt(e.target.value) })}
                            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
                        >
                            {[10, 11, 12, 13, 14, 15].map(size => (
                                <option key={size} value={size}>Chiều cao: {size}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={startGame}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                    >
                        Bắt đầu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4" style={backgroundStyle}>
            <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-auto ">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Tic Tac Toe</h1>
                {renderBoard()}
                <div className="mt-4 text-lg sm:text-xl text-center font-semibold text-gray-700">
                    {winner ? `Người thắng: ${winner === 'X' ? playerX : playerO}` : `Lượt chơi: ${xIsNext ? playerX : playerO} (${xIsNext ? 'X' : 'O'})`}
                </div>
                <div className="mt-2 text-base sm:text-lg text-center text-gray-600">
                    Tỉ số: {playerX}: {scores.X} - {playerO}: {scores.O}
                </div>
                    {showCelebration && (
                    <div className="mt-4 flex justify-center" ref={celebrationRef} >
                        <img src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg" alt="Celebration" className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64" />
                        </div>
                    )}
                <div className="mt-4 flex justify-between">
                    <button
                        className={`px-4 py-2 ${canGoBack ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-300 cursor-not-allowed'} text-white rounded transition-colors duration-200`}
                        onClick={goBack}
                        disabled={!canGoBack}
                    >
                        Quay lại
                    </button>
                    {winner && (
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
                            onClick={resetGame}
                        >
                            Chơi lại
                        </button>
                    )}
                </div>
             
            </div>
        </div>
    );
};

export default TicTacToe;