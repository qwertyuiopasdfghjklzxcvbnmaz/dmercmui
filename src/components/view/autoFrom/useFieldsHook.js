import { useState } from 'react';

function useFieldsHook(initialFields,integerFields, floatFields) {
    const [fields, setFields] = useState({ ...initialFields });
    function handleChange(event) {
        const fieldName = event.target.name;
        const input = event.target.value;
        const type = event.target.type;
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
            fieldValue = !fields[fieldName];
        } else {
            fieldValue = input;
        }
        setFields({ ...fields, [fieldName]: fieldValue });
    }

    return [fields, handleChange];

}

export default useFieldsHook;
