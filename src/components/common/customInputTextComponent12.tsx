import React from 'react';
import Validation from '@/components/common/validationComponent';

function CustomInputText(props: any) {
const {fileldName, label, handleChange, title, fileldValue, isRequired, disabled, type="text", placeholder, isError = true, validationType = "field", regExp} = props;
  let VALIDATION = {field: label, value: fileldValue || '', isError, validationType}
  // @ts-ignore
  VALIDATION = !!regExp === true ? {...VALIDATION, regExp} : VALIDATION;
  
  return (
    <>
      <label className="form-label">{label}</label>
      <input disabled={!!disabled} type={type} className="form-control form-control-sm" placeholder={!!placeholder ? placeholder: label} name={fileldName} value={fileldValue} onChange={handleChange} />
      {/* @ts-ignore */}
      {!!isRequired && <Validation data={{...VALIDATION}} />}
    </>
  )
}

export default CustomInputText;