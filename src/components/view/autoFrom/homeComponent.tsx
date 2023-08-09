import React, { useState, useEffect } from 'react';
import AutoFromComponent from './autoFromComponent';
import { initialFields, integerFields, floatFields, saveStateObject, requiredFields } from './config';
import Validation from '@/components/common/validationComponent';
import CustomInput from '@/components/common/customInputComponent';
import CustomDatepicker from '@/components/common/datepickerComponent';
import api from '@/utils/interceptor';
import useFieldsHook from "./useFieldsHook";

const letters = /^[A-Za-z]+$/;
const alphanumeric = /^[a-zA-Z0-9]+$/;
const NUMBER = /^\d+$/;

const dateCheck = {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString()
}

const options = {
    a: [1, 2, 3, 4, 5],
    b: [6, 7, 8, 9, 10],
    c: [11, 12, 13, 14, 15],
    d: [16, 17, 18, 19, 20]
}

function home() {
    const [from, setFrom] = useState(null);
    const [country, setCountry] = useState([]);
    const [itemFields, setItemFields] = useState({ ...initialFields })
    const [stateObject, setStateObject] = useState(saveStateObject);
    const [fields, handleChange] = useFieldsHook(initialFields, integerFields, floatFields);

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

    // const handleChange = (event: any) => {
    //     const fieldName: any = event.target.name;
    //     const input: any = event.target.value;
    //     const type: any = event.target.type;
    //     /* @ts-ignore */
    //     let fieldValue = fields[fieldName];
    //     if (integerFields.indexOf(event.target.name) !== -1) {
    //         if (isNaN(parseFloat(input))) {
    //             fieldValue = null;
    //         } else {
    //             fieldValue = parseInt(input, 10);
    //         }
    //     } else if (floatFields.indexOf(event.target.name) !== -1) {
    //         if (input.length === 0) {
    //             // if (input.length === 0 || input.match(commonConfig.FLOAT_VAL)) {
    //             fieldValue = input;
    //         }
    //     } else if (type === 'checkbox') {
    //         /* @ts-ignore */
    //         fieldValue = !fields[fieldName];
    //     } else {
    //         fieldValue = input;
    //     }
    //     setFields({ ...fields, [fieldName]: fieldValue });
    // }

    const _handleSubmit_b = (event: any) => {
        event.preventDefault();
        const dataFields = { ...fields };
        console.log(dataFields);
    }

    const _handleSubmit = () => {
        /* @ts-ignore */
        const validationObj = new Validation();
        let submitStatus = validationObj.fieldValidation(fields, requiredFields);
        if (submitStatus === 0)
            setStateObject({ ...stateObject, isError: 1 })
        else
            setStateObject({ ...stateObject, isError: 0 })
        console.log({ submitStatus });
        console.log({ fields });
        console.log({ requiredFields });
    }

    // const [val, setVal] = useState([])
    // const _handleOption = (event: any) => {
    //     const input: any = event.target.value;
    //     /* @ts-ignore */
    //     setVal(options[input]);
    // }

    const [dateState, setDateState] = useState({ ...dateCheck })
    const _handleChangeDate = (event: any) => {
        console.log(event.target)
        const name: any = event.target.name;
        const value: any = event.target.value;
        /* @ts-ignore */
        setDateState({ ...dateState, [name]: value })
    }

    const handleChangeItem = (event: any, index: any) =>{
        const {name, value} = event.target;
        const _itemFields = {...itemFields};
        /* @ts-ignore */
        _itemFields.items[index][name] = value;
        setItemFields(_itemFields);
    }

    const _addItem = () =>{
        const _itemFields = {...itemFields};
        _itemFields.items.push({name: '', amount: ''})
        setItemFields(_itemFields);
    }

    const _removeItem = (index: any) =>{
        const _itemFields = {...itemFields};
        _itemFields.items.splice(index,1);
        setItemFields(_itemFields);
    }

    const customFunction = (item: any) => (
        <>
            <label className="form-label">{item?.label}</label>
            {/* @ts-ignore */}
            <input className="form-control form-control-sm" name={item.fileldName} value={fields[item.fileldName]} type="color" onChange={handleChange} />
        </>
    )

    const rangeFunction = (item: any) => (
        <>
            <label className="form-label">Range</label>
            {/* @ts-ignore */}
            <input className="form-control form-control-sm" name={item.fileldName} value={fields[item.fileldName]} type="range" onChange={handleChange} />
            {/* @ts-ignore */}
            <Validation data={{ field: "Range", value: fields[item.fileldName] || '', isError: stateObject.isError, validationType: 'field' }} />
        </>
    )

    const itemFunction = () => (
        <>
            <div className='col-5'>
                <label className="form-label">Item</label>
            </div>
            <div className='col-5'>
                <label className="form-label">Amount</label>
            </div>
            <div className='col-2'>
                <label className="form-label">Action(s)</label>
                
            </div>
            {
                itemFields.items.map((item, index)=> <div className='row g-2' key={index}>
                    <div className='col-5'>
                        <input className="form-control form-control-sm" name='name' value={item.name} type="text" onChange={(e) =>handleChangeItem(e, index)} />
                    </div>
                    <div className='col-5'>
                        <input className="form-control form-control-sm" name='amount' value={item.amount} type="text" onChange={(e) =>handleChangeItem(e, index)} />
                    </div>
                    <div className='col-2'>
                        <div>
                            <button onClick={_addItem} type="button" className="btn btn-primary btn-sm">Add</button>{" "}
                            {itemFields.items.length > 1 && <button onClick={() => _removeItem(index)} type="button" className="btn btn-primary btn-sm">Remove</button>}
                        </div>
                    </div>
                </div>
            )
            }
            
        </>
    )

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Auto Form</h1>
            </div>
            <section>
                <AutoFromComponent
                    fromInput={from}
                    dropDown={{ country: country }}
                    handleChange={handleChange}
                    fields={fields}
                    handleSubmit={_handleSubmit}
                    isVerticalAlign={false}
                    isError={stateObject.isError}
                    regExpArray={{ letters, number: NUMBER }}
                    // customFields={{customFunction, rangeFunction}}
                    customFields={{ itemFunction, customFunction }}
                />
                {/* <CustomInput
                    label= 'email'
                    fileldName='email'
                    type='text'
                    fileldValue={fields.email}
                    handleChange={handleChange}
                    isRequired={true}
                    isError={stateObject.isError}
                    validationType="email"
                    // regExp={NUMBER} 
                    // validation={{validationType: "regExpNotRequired", regExp: NUMBER}}
                />
                <button onClick={_handleSubmit} type='button'>Submit</button> */}
                {/* <div>
                    <label>Option 1</label>
                    <select onChange={_handleOption}>
                        {
                            Object.keys(options).map((item, i) =><option key={i} value={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>Option 2</label>
                    <select >
                        {
                            val.map((item, i) =><option key={i} value={item}>{item}</option>)
                        }
                    </select>
                </div> */}

                {/* <div className='row'>
                    <div className='col-3'>
                        <CustomDatepicker 
                            title="Start date"
                            name="startDate"
                            value={dateState.startDate}
                            onChange={_handleChangeDate}
                        />
                    </div>
                    <div className='col-3'>
                        <CustomDatepicker 
                            title="End date"
                            name="endDate"
                            value={dateState.endDate}
                            onChange={_handleChangeDate}
                            startDate={dateState.startDate}
                        />
                    </div>
                </div> */}

            </section>
        </main >
    )
}

export default home;