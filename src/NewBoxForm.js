import React, { useState } from "react";

const newBoxForm = ({ addBox }) => {
    const initialState = {
        color: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add a new box</button>
        </form>
    )
}

export default newBoxForm;