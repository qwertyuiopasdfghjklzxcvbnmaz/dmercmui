import React from 'react';

function CustomRadio(props: any) {
    const { label, optArray, name, fileldValue, handleChange, isRequired, isVerticalAlign= true } = props;
  return (
    <>
        {(!!label && label !== "") ?<label className="form-label">{label}</label> : null}
                <div className='row g-1'>
                {
                    /* @ts-ignore */
                    !!optArray && (Array.isArray(optArray)) && optArray.map((obj, key) => (
                        <div key={key} className="col-sm-3 text-12 fw-bold form-check">
                            {/* @ts-ignore */}
                            <input onChange={handleChange} checked={fileldValue === obj?.value} className="form-check-input" type="radio" name={name} id={obj?.value} value={obj?.value} />
                            <label className="form-check-label" htmlFor={obj?.value}>
                                {obj?.label}
                            </label>
                        </div>))
                }
            </div>
    </>
  )
}

export default CustomRadio;