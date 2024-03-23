// RenderData.js
import React from "react";
import Grid from "@mui/material/Grid";

const RenderData = ({ dataGame, handleCellClick }) => {
    return (
        <>
            {dataGame.map((row, rowIndex) => (
                <Grid container item xs={12} spacing={1} key={rowIndex}>
                    {row.map((item, colIndex) => (
                        <Grid item xs={4} key={`${rowIndex}-${colIndex}`}>
                            <div
                                onClick={() => handleCellClick({ rowIndex, colIndex })}
                                style={{
                                    ...cellStyles,
                                    backgroundColor: item === "X" ? "#5472d3" : item === "O" ? "#8b5cf6" : "#4a5568",
                                    color: item === "X" || item === "O" ? "#f8f9fa" : "#2d3748",
                                }}
                                className="cell"
                            >
                                {item}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </>
    );
};

const cellStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20vw",
    maxHeight: "13rem",
    backgroundColor: "#4a5568",
    cursor: "pointer",
    fontSize: "3rem",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
};

export { RenderData };