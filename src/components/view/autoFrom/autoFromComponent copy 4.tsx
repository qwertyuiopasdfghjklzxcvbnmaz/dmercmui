import React from 'react';
import CustomInput from '@/components/common/customInputComponent';
import CustomSelect from '@/components/common/customSelect';
import CustomRadio from '@/components/common/customRadioComponent';
import CustomCheck from '@/components/common/customCheckComponent';
import CustomDatepicker from '@/components/common/datepickerComponent';
import { cardTitle } from './config'

function AutoFromComponent(props: any) {
    const { fromInput, dropDown, handleChange, fields, handleSubmit, isError, isVerticalAlign= true, regExp } = props;

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
                    isRequired={!!item && item?.isRequired}
                    isError={isError}
                    validation={!!item && {...item?.validation, regExp: !!regExp && regExp[item?.validation?.regExp]}}
                />
                break;
            case 'radio':
                JSX = <CustomRadio
                    name={item.fileldName}
                    label={item.label}
                    isRequired={true}
                     /* @ts-ignore */
                    fileldValue={fields[item.fileldName]}
                    optArray={item?.option}
                    handleChange={handleChange}
                />
                break;
            case 'check':
                /* @ts-ignore */
                JSX = <CustomCheck 
                    name={item.fileldName}
                    label={item.label}
                    isRequired={true}
                    /* @ts-ignore */
                    fileldValue={fields[item.fileldName]}
                    optArray={item?.option}
                    handleChange={handleChange}
                />
                break;
            case 'dropdown':
                JSX = <CustomSelect
                    name={item.fileldName}
                    label={item.label}
                    isRequired={true}
                    optArray={dropDown[item.fileldName]}
                    value={fields[item.fileldName]}
                    handleChange={handleChange}
                    /* @ts-ignore */
                    isRequired={!!item && item?.isRequired}
                    isError={isError}
                />
                break;
            case 'date':
                JSX = <CustomDatepicker
                    title={item.label}
                    name={item.fileldName}
                    value={fields[item.fileldName]}
                    onChange={handleChange}
                    divClassName="form-group"
                    isRequired={!!item && item?.isRequired}
                    isError={isError}
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
            {
                !!fromInput && Object.entries(fromInput).length > 0 && Object.keys(fromInput).map((title, index) => (
                    <div key={index} className={isVerticalAlign === true ? 'col-lg-6' : 'col-lg-12'}>
                        <div className="card">
                            <div className="card-body">
                                {/* @ts-ignore */}
                                <h5 className="card-title">{cardTitle[title]}</h5>
                                <div className="row g-3">
                                {
                                    (Array.isArray(fromInput[title]) && fromInput[title].length > 0) && fromInput[title].map((item: any, key: any) => (
                                        <div className={isVerticalAlign === true ? "col-6": "col-3" } key={key}>
                                            {_inputType(item)}
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="text-center">
                <button onClick={handleSubmit} type="button" className="btn btn-primary btn-sm">Submit</button>
                {/* <button type="reset" className="btn btn-secondary btn-sm">Reset</button> */}
            </div>
        </>
    )
}

export default AutoFromComponent;