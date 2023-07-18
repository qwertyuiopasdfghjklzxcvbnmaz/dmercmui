import React, { useState } from 'react';
import Validation from './validationComponent';

function AutocompleteComponent(props: any) {
    const { name, label, optArray, optionLabelValue, optionLabelTitle, handleChange, optionLabelArr, isRequired, divClassName, disabled } = props;
    const [optionArray] = useState(!!optArray && Array.isArray(optArray) && optArray.length !== 0 ? optArray.map((item: any) => ({
        value: item[!!optionLabelValue ? optionLabelValue : 'id'],
        label: item[!!optionLabelTitle ? optionLabelTitle : 'title'],
        ...item
    })) : [])
    const [option, setOption] = useState([]);
    const [field, setField] = useState('');
    const [flag, setFlag] = useState(false);
    const _handleChange = (event: any) => {
        const { name, value } = event.target;
        if (value.length > 0) {
            const _option = optionArray.filter((item: any) => item?.label?.toLocaleUpperCase().startsWith(value.toLocaleUpperCase()));
            /* @ts-ignore */
            setOption(_option);
            _option.length > 0 ? setFlag(true) : setFlag(false);
        } else
            setFlag(false)
        setField(value);
    }

    const _handleOption = (id: number) => {
        /* @ts-ignore */
        const obj = option.find(item => item.value === id);
         /* @ts-ignore */
        if (Object.entries(obj).length > 0) {
             /* @ts-ignore */
            setField(obj.label);
            setFlag(false);
            const event = {
                target: {
                    name,
                    value: id
                }
            }
            !!handleChange && handleChange(event);
        }
    }

    const _getHader = () => {
        return !!optionLabelArr && typeof optionLabelArr === 'object' && Object.entries(optionLabelArr).length > 0 &&
            <thead>
                <tr>
                    {
                        /* @ts-ignore */
                        Object.values(optionLabelArr).map((item, index) => <th key={index} scope="col" >{item}</th>)
                    }
                </tr>
            </thead>
    }

    const _getValue = (item: any) => {
        return !!optionLabelArr && typeof optionLabelArr === 'object' && Object.entries(optionLabelArr).length > 0 ?
            /* @ts-ignore */
            Object.keys(optionLabelArr).map((val, index) => <td key={index} scope="col" >{item[val]}</td>)
            :
            <td>{item.label}</td>
    }
    
    return (
        <>
            <>
                <label className="form-label">{label} {!!isRequired && <span>*</span>}</label>
                <input name={name} onChange={_handleChange} type="text" className="form-control form-control-sm" value={field} />
            </>
            {
                !!flag && <table className="table autocomplete-table">
                    {_getHader()}
                    <tbody>
                        {!!option && option.map((item: any) => <tr onClick={() => _handleOption(item.value)} key={item.value}>
                            {_getValue(item)}
                        </tr>)}
                    </tbody>
                </table>
            }
        </>
    )
}

export default AutocompleteComponent;