import React, { useEffect, useState } from 'react';
import { fromFields, initialFields, integerFields, floatFields } from './config';
import api from '@/utils/interceptor';
import CustomInput from '@/components/common/customInputComponent';
import CustomSelect from '@/components/common/customSelect';
import { compose } from '@reduxjs/toolkit';

function AutoFromComponent() {
    const [from, setFrom] = useState([]);
    const [country, setCountry] = useState([]);
    const [suggestions, setSuggestions] = useState("");
    const [fields, setFields] = useState({ ...initialFields })

    useEffect(() => {
        getData();
        getCountry();
    }, [])

    const getData = async () => {
        const res = await api.get(`items/api/getCustomJson`)
            .then(response => setFrom(response.data))
            .catch(error => console.log(error));
    }

    const getCountry = async () => {
        const res = await api.get(`items/api/getCountry`)
            /* @ts-ignore */
            .then(response => setCountry(response.data))
            .catch(error => console.log(error));
    }

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
        } else if(type === 'checkbox'){
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

    const radioType = (item: any) =>{
        return (
            <>
                <label className="form-label">{item?.label}</label>
                {
                     /* @ts-ignore */
                     (Array.isArray(item?.option)) && item?.option.map((obj, key)=> (
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

    const checkType = (item: any) =>{
        return (
            <>
                { item?.label && item?.label !== "" && <label className="form-label">{item?.label}</label>}
                {
                     /* @ts-ignore */
                     (Array.isArray(item?.option)) && item?.option.map((obj, key)=> (
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

    const _inputType = (item: any) =>{
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
                    name='country'
                    label='Country Name'
                    isRequired= {true}
                    optArray={country}
                    handleChange={handleChange}
                />
                break;
            default:
                JSX = "Looking forward to the Weekend";
        }
        return JSX
    }


    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Auto From</h1>
            </div>
            <section>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Vertical Form</h5>
                        <div className="row g-3">
                            {
                                (Array.isArray(from) && from.length > 0) && from.map((item, key) => (
                                    <div className="col-6" key={key}>
                                        {_inputType(item)}
                                    </div>
                                ))
                            }
                           
                            <div className="text-center">
                                <button onClick={_handleSubmit} type="button" className="btn btn-primary btn-sm">Submit</button>
                                <button type="reset" className="btn btn-secondary btn-sm">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AutoFromComponent;