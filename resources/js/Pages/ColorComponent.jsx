import React, { useState } from "react";

export default function ColorComponent() {
    const [color, setColor] = useState("黄色");

    return (
        <>
            <h1>私の好きな色は{color}です</h1>
            <button type="button" onClick={() => setColor("青")}>色を変える</button>
        </>
    )
}


