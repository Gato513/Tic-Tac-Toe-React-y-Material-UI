import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { TicTacToeGame } from "./TicTacToeGame";
import { useState, useEffect } from "react";
import { validateGame } from "../util/reglaOfGame";

const AlertDialog = () => {
	const [open, setOpen] = useState(false);
	const [dataGame, setDataGame] = useState([]);
	const [gameTurn, setGameTurn] = useState("");

	const restartedGame = () => { 
		const initialData = Array.from({ length: 3 }, () => Array(3).fill(""));
		setDataGame(initialData);

		const shift = Math.random() < 0.5;
		setGameTurn(shift ? "X" : "O");
	}
	
	useEffect(() => {
		restartedGame();
	}, []);

	useEffect(() => {
		const finishGame = validateGame(dataGame)
        if (finishGame) {
            handleClickOpen();
        }
		else {
			setGameTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
		}
	
	}, [dataGame]);

	const updateDataGame = ({ rowIndex, colIndex }) => {
		if (!dataGame[rowIndex][colIndex]) {
			setDataGame((prevDataGame) => {
				const newDataGame = [...prevDataGame];
				newDataGame[rowIndex][colIndex] = gameTurn;
				return newDataGame;
			});
		}
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		restartedGame();
		setOpen(false);
	};

	return (
		<>
			<TicTacToeGame dataGame={dataGame} handleCellClick={updateDataGame}/>

			<Dialog
				open={open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle
					id="alert-dialog-title"
					sx={{ textAlign: "center" }}
				>
					Finish Game
				</DialogTitle>

				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Juego Terminado: El Ganador es: {gameTurn}
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Reinicira Juego
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export { AlertDialog };
