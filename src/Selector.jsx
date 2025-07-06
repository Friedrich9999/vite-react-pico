import React, { useState } from 'react';

function Selector(props) {
    // Function to handle checkbox change

    return (
        <>
            <fieldset>
                <legend>{props.type ? props.type : "#Typ"}</legend>
                {props.opt.map((option, index) => {
                    return (
                        <label key={index}>
                            <input
                                type={props.menuType}
                                name={option}
                                onChange={props.handleChange}
                                checked={props.val.includes(option)}
                            />
                            {option}
                        </label>
                    );
                })}
            </fieldset>
        </>
    );
}

export default Selector;