import React, { useState, useCallback } from 'react';
import Validation from './validationComponent';
import npi from "@/common/api/npi";
import api from '@/utils/interceptor';

function AutocompleteOnKeyComponent(props: any) {
    const { name, label, endPoint, optionLabelValue, optionLabelTitle, optionLabelArr, isRequired, divClassName, disabled, handleChange } = props;
    const [suggestions, setSuggestions] = useState("");
    const [flag, setFlag] = useState(false);
    const [field, setField] = useState('');

    const debounce = (func: any) => {
        let timer: any;
        return function (...args: any) {
            /* @ts-ignore */
            const context: any = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 1000);
        };
    };

    const getData = async (value: any) => {
        const res = await api.get(`items/api/getProcedureCodeByName?procedureName=${value}`)
         .then(response => setSuggestions(response.data.data))
         .catch(error => console.log(error));
      }

    const optimizedFn = useCallback(debounce(getData), []);

      const _handleInput = (event: any) => {
        const {value} = event.target;
        setField(value);
        optimizedFn(value)
      }


    const _handleOption = (id: number) => {
        /* @ts-ignore */
        const obj = suggestions.find(item => item[optionLabelValue] === id);
         /* @ts-ignore */
        if (Object.entries(obj).length > 0) {
             /* @ts-ignore */
            setField(obj[optionLabelTitle]);
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
            <td>{item[optionLabelTitle]}</td>
    }

    return (
        <>
            <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter something here..."
                onChange={_handleInput}
                value={field}
            />
            {suggestions.length > 0 && <table className="table autocomplete-table">
                    {_getHader()}
                    <tbody>
                        {/* @ts-ignore */
                        !!suggestions && suggestions.map((item: any) => <tr onClick={() => _handleOption(item[optionLabelValue])} key={item[optionLabelValue]}>
                            {_getValue(item)}
                        </tr>)}
                    </tbody>
                </table>
            }
        </>
    )
}

export default AutocompleteOnKeyComponent;