import React, { useState } from "react";


function Box({ color, width, height, removeBox}) {
    let boxClass = {
        backgroundColor: color,
        width: width,
        height: height,
    };

    return (
        <div>
            <div style={boxClass}></div>
            <button onClick={removeBox}>X</button>
        </div>
    );
}

export default Box;