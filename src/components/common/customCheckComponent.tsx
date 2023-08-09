import React from 'react';

function CustomCheck(props: any) {
    const { label, optArray, name, fileldValue, handleChange, isRequired } = props;
    return (
        <>
            {label && label !== "" && <label className="form-label">{label}</label>}
            {
                /* @ts-ignore */
                (!!optArray && Array.isArray(optArray)) && optArray.map((obj, key) => (
                    <div key={key} className="form-check">
                        {/* @ts-ignore */}
                        <input onChange={handleChange} checked={fileldValue} name={name} className="form-check-input" type="checkbox" id={obj?.value} />
                        <label className="form-check-label" htmlFor={obj?.value}>
                            {obj?.label}
                        </label>
                    </div>))
            }
        </>
    )
}

export default CustomCheck;