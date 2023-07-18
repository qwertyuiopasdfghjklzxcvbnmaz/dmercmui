import React, { useState } from 'react';

function CustomSelect(props: any) {
    const { name, label = 'Select', optArray, optionLabelValue, optionLabelTitle, handleChange, title, removeFirstOption, onlySelect, isRequired, divClassName, disabled } = props;
    const [optionArray] = useState(!!optArray && Array.isArray(optArray) && optArray.length !== 0 ? optArray.map((item: any) => ({
        value: item[props.hasOwnProperty('optionLabelValue') ? optionLabelValue : 'id'],
        label: item[props.hasOwnProperty('optionLabelTitle') ? optionLabelTitle : 'title']
    })) : [])

    let selectAttr = {
        name: name,
        onChange: (e: any) => handleChange(e, title)
    }
    if (props.hasOwnProperty('disabled') && !!disabled)
        /* @ts-ignore */
        selectAttr = { ...selectAttr, disabled }

    const firstOptionTitle = props.hasOwnProperty('firstOptionTitle') ? props.firstOptionTitle : 'Select';
    const firstOptionValue = props.hasOwnProperty('firstOptionValue') ? props.firstOptionValue : '';

    const selectResult = <>
        <select {...selectAttr} className="form-select form-select-sm">
            {!!removeFirstOption ? null : <option value={firstOptionValue}>{firstOptionTitle}</option>}
            {
                optionArray.length !== 0 && optionArray.map((item: any, index: any) => <option key={index} value={item.value} >{item.label}</option>)
            }
        </select>
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