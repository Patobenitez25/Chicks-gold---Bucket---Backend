import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function waterJugSolver(X, Y, Z) {
    if (Z > X + Y || Z % gcd(X, Y) !== 0) {
        return ["No Solution"];
}

    let values = [{ x: 0, y: 0, steps: [] }];
    let visited = new Set();

    while (values.length > 0) {
    let { x, y, steps } = values.shift();
    if (x === Z || y === Z) return steps;
    let state = `${x},${y}`;
    if (visited.has(state)) continue;
    visited.add(state);

    let nextStates = [
        { x: X, y: y, action: `Fill Jug X` },
        { x: x, y: Y, action: `Fill Jug Y` },
        { x: 0, y: y, action: `Empty Jug X` },
        { x: x, y: 0, action: `Empty Jug Y` },
        { x: x - Math.min(x, Y - y), y: y + Math.min(x, Y - y), action: `Pour X -> Y` },
        { x: x + Math.min(y, X - x), y: y - Math.min(y, X - x), action: `Pour Y -> X` }
    ];

    for (let next of nextStates) {
        let nextStateKey = `${next.x},${next.y}`;
        if (!visited.has(nextStateKey)) {
        values.push({ x: next.x, y: next.y, steps: [...steps, next.action] });
        }
    }
}
    return ["No Solution"];
}

app.post("/solve", (req, res) => {
    const { X, Y, Z } = req.body;
    if (!X || !Y || !Z) return res.status(400).json({ error: "All values are required" });
    try {
        const solution = waterJugSolver(X, Y, Z);
        console.log(solution);
        res.json({ solution });
        
    } catch (error) {
        console.log(error);
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
