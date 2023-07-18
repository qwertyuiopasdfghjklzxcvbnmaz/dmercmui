import React, { useState } from 'react';

function AutocompleteComponent(props: any) {
    const { name, label, optArray, optionLabelValue, optionLabelTitle, handleChange, title, removeFirstOption, onlySelect, isRequired, divClassName, disabled } = props;
    const [option, setOption] = useState(optArray);
    
    const [field, setField] = useState('');
    const [flag, setFlag] = useState(false);
    const _handleChange = (event: any) => {
        const { name, value } = event.target;
        if (value.length > 0) {
            const _option = optArray.filter((item: any) => item.name.toLocaleUpperCase().startsWith(value.toLocaleUpperCase()));
            setOption(_option);
            _option.length > 0 ? setFlag(true) : setFlag(false);
        } else
            setFlag(false)
        setField(value);
    }

    const _handleOption = (id: number) => {
        /* @ts-ignore */
        setField(option.find(item => item.procedureCodeId === id).itemProcedureCodeDesc);
        setFlag(false);
    }
    return (
        <>
            <>
                <label className="form-label">{label}</label>
                <input name={name} onChange={_handleChange} type="text" className="form-control form-control-sm" value={field} />
            </>
            {
                !!flag && <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" >Code</th>
                            <th scope="col">Descriptin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!option && option.map((item: any) => <tr onClick={() => _handleOption(item.procedureCodeId)} key={item.procedureCodeId}>
                            <td>{item.procedureCode}</td>
                            <td>{item.itemProcedureCodeDesc}</td>
                        </tr>)}
                    </tbody>
                </table>
            }
        </>
    )
}

export default AutocompleteComponent;