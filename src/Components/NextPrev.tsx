import { useState } from "react";

function Next () {
    const [table, setTable] = useState(0);

    return (
        <div>
            <button onClick={() => setTable(table + 1)}>Next</button>
        </div>
    )
}

function Prev () {
    const [table, setTable] = useState(1);

    return (
        <div>
            <button onClick={() => setTable(table - 1)}>Prev</button>
        </div>
    )
}
