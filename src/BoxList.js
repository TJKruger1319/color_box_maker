import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./box";
import { v4 as uuid } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const removeBox = id => {
        setBoxes(boxes.filter(box => box.id !== id));
    }

    const addBox = boxObj => {
        let newBox = { ...boxObj, id: uuid() }
        setBoxes(boxes => [...boxes, newBox]);
    };

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({ id, color, width, height }) => 
                <Box 
                key={id} 
                id={id} 
                color={color}  
                width={width} 
                height={height} 
                removeBox={removeBox}
                />)}
            </div>
        </div>
    )
}

export default BoxList;