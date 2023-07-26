import React from "react";


function Box({ id, color, width, height, removeBox}) {
    let boxClass = {
        backgroundColor: color,
        width: width,
        height: height,
    };
    const handleRemove = () => removeBox(id);
    return (
        <div>
            <div style={boxClass}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Box;