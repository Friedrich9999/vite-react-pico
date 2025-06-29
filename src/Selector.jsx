import React, { useState } from 'react';

function Selector(props) {
    // State to keep track of checked options
    const [checkedOptions, setCheckedOptions] = useState([]);

    // Function to handle checkbox change
    const handleCheckboxChange = (option) => {
        setCheckedOptions((prev) => {
            if (prev.includes(option)) {
                // If the option is already checked, remove it from the array
                return prev.filter((item) => item !== option);
            } else {
                // If the option is not checked, add it to the array
                return [...prev, option];
            }
        });
    };

    return (
        <>
            <fieldset>
                <legend>{props.region ? props.region : "#Region"}</legend>
                {props.opt.map((option, index) => {
                    return (
                        <label key={index}>
                            <input
                                type="checkbox"
                                name={index}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                        </label>
                    );
                })}
            </fieldset>
            <div>
                <h3>Selected Options:</h3>
                <pre>{JSON.stringify(checkedOptions, null, 2)}</pre>
            </div>
        </>
    );
}

export default Selector;