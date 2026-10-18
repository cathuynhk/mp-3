import { useCallback, useState } from "react";
import type { Operator } from "../interfaces/Calculator";

export default function useCalculator() {
    const [first, setFirst] = useState<string>("");
    const [second, setSecond] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    const calculate = useCallback(
        (op: Operator) => {
            const a = Number(first);
            const b = Number(second);
            let res = 0;

            switch (op) {
                case "+":
                    res = a + b;
                    break;
                case "-":
                    res = a - b;
                    break;
                case "*":
                    res = a * b;
                    break;
                case "/":
                    res = a / b;
                    break;
                case "**": {
                    // Power via for() loop — no Math.pow, no **
                    let powered = 1;
                    const steps = Math.abs(b);
                    for (let i = 0; i < steps; i++) {
                        powered = powered * a;
                    }
                    if (b < 0) powered = 1 / powered;
                    res = powered;
                    break;
                }
            }

            setResult(res);
        },
        [first, second]
    );

    const clear = useCallback(() => {
        setFirst("");
        setSecond("");
        setResult(null);
    }, []);

    return { first, setFirst, second, setSecond, result, calculate, clear };
}