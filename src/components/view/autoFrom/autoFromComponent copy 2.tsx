import React, { useState } from 'react';
import { fromFields, initialFields, integerFields, floatFields } from './config';
import api from '@/utils/interceptor';
import CustomInput from '@/components/common/customInputComponent';
import CustomSelect from '@/components/common/customSelect';
import { compose } from '@reduxjs/toolkit';

function AutoFromComponent(props: any) {
    const { fromInput, dropDown } = props;
    const [fields, setFields] = useState({ ...initialFields })


    const handleChange = (event: any) => {
        const fieldName: any = event.target.name;
        const input: any = event.target.value;
        const type: any = event.target.type;
        /* @ts-ignore */
        let fieldValue = fields[fieldName];
        if (integerFields.indexOf(event.target.name) !== -1) {
            if (isNaN(parseFloat(input))) {
                fieldValue = null;
            } else {
                fieldValue = parseInt(input, 10);
            }
        } else if (floatFields.indexOf(event.target.name) !== -1) {
            if (input.length === 0) {
                // if (input.length === 0 || input.match(commonConfig.FLOAT_VAL)) {
                fieldValue = input;
            }
        } else if (type === 'checkbox') {
            /* @ts-ignore */
            fieldValue = !fields[fieldName];
        } else {
            fieldValue = input;
        }
        setFields({ ...fields, [fieldName]: fieldValue });
    }

    const _handleSubmit = (event: any) => {
        event.preventDefault();
        const dataFields = { ...fields };
        console.log(dataFields);
    }

    const radioType = (item: any) => {
        return (
            <>
                <label className="form-label">{item?.label}</label>
                {
                    /* @ts-ignore */
                    (Array.isArray(item?.option)) && item?.option.map((obj, key) => (
                        <div key={key} className="form-check">
                            {/* @ts-ignore */}
                            <input onChange={handleChange} checked={fields[item.fileldName] === obj?.value} className="form-check-input" type="radio" name={item?.fileldName} id={obj?.value} value={obj?.value} />
                            <label className="form-check-label" htmlFor={obj?.value}>
                                {obj?.label}
                            </label>
                        </div>))
                }
            </>
        )
    }

    const checkType = (item: any) => {
        return (
            <>
                {item?.label && item?.label !== "" && <label className="form-label">{item?.label}</label>}
                {
                    /* @ts-ignore */
                    (Array.isArray(item?.option)) && item?.option.map((obj, key) => (
                        <div key={key} className="form-check">
                            {/* @ts-ignore */}
                            <input onChange={handleChange} checked={fields[item.fileldName]} name={item?.fileldName} className="form-check-input" type="checkbox" id={obj?.value} />
                            <label className="form-check-label" htmlFor={obj?.value}>
                                {obj?.label}
                            </label>
                        </div>))
                }
            </>
        )
    }

    const _inputType = (item: any) => {
        let JSX;
        switch (item.type) {
            case 'text':
            case 'number':
            case 'password':
                JSX = <CustomInput
                    /* @ts-ignore */
                    label={!!item && item?.label}
                    /* @ts-ignore */
                    fileldName={!!item && item?.fileldName}
                    /* @ts-ignore */
                    type={!!item && item?.type}
                    /* @ts-ignore */
                    fileldValue={fields[item.fileldName]}
                    handleChange={handleChange}
                />
                break;
            case 'radio':
                /* @ts-ignore */
                JSX = radioType(item)
                break;
            case 'check':
                /* @ts-ignore */
                JSX = checkType(item)
                break;
            case 'dropdown':
                JSX = <CustomSelect
                    name={item.fileldName}
                    label={item.label}
                    isRequired={true}
                    optArray={dropDown[item.fileldName]}
                    handleChange={handleChange}
                />
                break;
            default:
                JSX = "Looking forward to the Weekend";
        }
        return JSX
    }


    return (
        <>
        <div className='row pb-0'>
            <div className='col-lg-6'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Vertical Form</h5>
                        <div className="row g-3">
                            {
                                (Array.isArray(fromInput) && fromInput.length > 0) && fromInput.map((item, key) => (
                                    <div className="col-6" key={key}>
                                        {_inputType(item)}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-6'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Vertical Form</h5>
                        <div className="row g-3">
                           sdfdf
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="text-center">
                <button onClick={_handleSubmit} type="button" className="btn btn-primary btn-sm">Submit</button>
                <button type="reset" className="btn btn-secondary btn-sm">Reset</button>
            </div>
        </>
    )
}

export default AutoFromComponent;