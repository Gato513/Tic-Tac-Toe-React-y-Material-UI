const compareLines = (gameData, lines) => {
    const flatGameData = gameData.flat();

    for (let i = 0; i < lines.length; i++) {
        const { a, b, c } = lines[i];
        if (
            flatGameData[a] === flatGameData[b] &&
            flatGameData[b] === flatGameData[c]
        ) {
            return flatGameData[a];
        }
    }

    return false;
};

const validateGame = (gameData) => {
    // Reglas de validación
    const horizontalRules = [
        { a: 0, b: 1, c: 2 },
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 7, c: 8 },
    ];
    let gameWon = compareLines(gameData, horizontalRules);
    if (gameWon) {
        return gameWon;
    }

    const verticalRules = [
        { a: 0, b: 3, c: 6 },
        { a: 1, b: 4, c: 7 },
        { a: 2, b: 5, c: 8 },
    ];
    gameWon = compareLines(gameData, verticalRules);
    if (gameWon) {
        return gameWon;
    }

    const diagonalRules = [
        { a: 0, b: 4, c: 8 },
        { a: 6, b: 4, c: 2 },
    ];
    gameWon = compareLines(gameData, diagonalRules);
    if (gameWon) {
        return gameWon;
    }

    return false;
};

export { validateGame };