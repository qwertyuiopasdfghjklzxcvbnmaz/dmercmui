import React, { useEffect, useState } from 'react';
import Validation from '@/components/common/validationComponent';
import Select from 'react-select';

let flag = false;

function CustomSelect(props: any) {
    const { name, label = 'Select', optArray, optionLabelValue, optionLabelTitle, handleChange, title, removeFirstOption, onlySelect, isRequired, divClassName, disabled, isError, value, multi } = props;
    // const [optionArray] = useState(!!optArray && Array.isArray(optArray) && optArray.length !== 0 ? optArray.map((item: any) => ({
    //     value: item[props.hasOwnProperty('optionLabelValue') ? optionLabelValue : 'id'],
    //     label: item[props.hasOwnProperty('optionLabelTitle') ? optionLabelTitle : 'title']
    // })) : [])

   

    const optionArray = !!optArray && Array.isArray(optArray) && optArray.length !== 0 ? optArray.map((item: any) => ({
        value: item[props.hasOwnProperty('optionLabelValue') ? optionLabelValue : 'id'],
        label: item[props.hasOwnProperty('optionLabelTitle') ? optionLabelTitle : 'title']
    })) : []

    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(()=>{
        if(!!selectedOption)
         flag = true;
    }, [selectedOption])

    const handleChangeMultiDropDown = (selectedOption: any, event: any) => {
        let selectedValue = !!selectedOption && selectedOption.length !== 0 ?
            selectedOption.map((data: any) => {
                return (data.value)
            }) : []
        let selectedTitle = !!selectedOption && selectedOption.length !== 0 ?
            selectedOption.map((data:any) => {
                return (data.label)
            }) : []
            setSelectedOption(selectedOption);
            if(flag){
                const target: any = {
                    ...event,
                    type: 'multiSelect',
                    value: selectedValue.toString(),
                    valueTitle: selectedTitle.toString(),
                    valueArray: selectedValue
                }
                props.handleChange({ target }, props.title)
            }
    };

    let selectAttr = {
        name: name,
        // onChange: (e: any) => handleChange(e, title)
        onChange: props.hasOwnProperty('multi') && !!multi ? handleChangeMultiDropDown : (e: any) => handleChange(e, title)
    }
    if (props.hasOwnProperty('disabled') && !!disabled)
        /* @ts-ignore */
        selectAttr = { ...selectAttr, disabled }
    if (!!value === true)
        /* @ts-ignore */
        selectAttr = { ...selectAttr, value: (!!value && value !== NaN && value !== 0) ? value : "" }
    if (props.hasOwnProperty('multi') && !!multi) {
        // @ts-ignore
        selectAttr = { ...selectAttr, isMulti: true, options: optionArray, value: selectedOption }
    }

    if (props.hasOwnProperty('multi') && !!multi) {
        // @ts-ignore
        selectAttr = { ...selectAttr, isMulti: true, isDisabled: props.hasOwnProperty('disabled') && !!disabled?true:false, options: optionArray, value: selectedOption }
    }

    const firstOptionTitle = props.hasOwnProperty('firstOptionTitle') ? props.firstOptionTitle : 'Select';
    const firstOptionValue = props.hasOwnProperty('firstOptionValue') ? props.firstOptionValue : '';

     /* @ts-ignore */
    let VALIDATION_DATA = {field: label, errorClass: name + '_error', value: !!selectAttr.value && value !== NaN && value !== 0 ? selectAttr.value : null, isError, validationType: "selectfield"}

    const selectResult = <>
        {props.hasOwnProperty('multi') && !!multi ? 
            <Select {...selectAttr} />
        :
        // @ts-ignore 
        <select {...selectAttr} className="form-select form-select-sm">
            {!!removeFirstOption ? null : <option value={firstOptionValue}>{firstOptionTitle}</option>}
            { optionArray.length !== 0 && optionArray.map((item: any, index: any) => <option key={index} value={item.value} >{item.label}</option>)}
        </select>
        }
        {/* @ts-ignore */}
        {!!isRequired && <Validation data={{...VALIDATION_DATA}} />}
    </>

    return (
        !!onlySelect ?
            selectResult :
            <div className={props.hasOwnProperty('divClassName') ? divClassName : "form-group"}>
                <label className="form-label">{!props.hasOwnProperty('showLabel') && label}{(props.hasOwnProperty('value') && isRequired && !props.hasOwnProperty('showAstric')) && <span>*</span>}</label>
                {selectResult}
            </div>
    )
}

export default CustomSelect;