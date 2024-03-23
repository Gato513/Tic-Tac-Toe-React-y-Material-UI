import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { RenderData } from "./RenderData";

const TicTacToeGame = ({ dataGame, handleCellClick }) => {
	return (
		<Container fixed sx={containerStyles}>
			<Grid container spacing={1} sx={gridContainerStyles}>
				<RenderData
					dataGame={dataGame}
					handleCellClick={handleCellClick}
				/>
			</Grid>
		</Container>
	);
};

const containerStyles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh",
};

const gridContainerStyles = {
	paddingLeft: { xs: "1rem", sm: "8rem" },
	paddingRight: { xs: "1rem", sm: "8rem" },
};

export { TicTacToeGame };
