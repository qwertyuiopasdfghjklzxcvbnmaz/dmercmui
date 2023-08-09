import React, {createElement } from 'react';
import Validation from '@/components/common/validationComponent';

const TYPE_NUMBER = 'number';

function CustomInput(props: any) {
const {fileldName, label, handleChange, title, fileldValue, isRequired, disabled, readonly, type, placeholder, isError = true, min, max, validation, divClassName} = props;
let VALIDATION_DATA = {};
if(!!validation){
  const {validationType = "field", regExp, minLength} = validation;
  VALIDATION_DATA = {...VALIDATION_DATA, field: label, value: fileldValue || '', isError, validationType, errorClass: fileldName + '_error',}
  // @ts-ignore
  VALIDATION_DATA = !!regExp === true ? {...VALIDATION_DATA, regExp} : VALIDATION_DATA;
};
  let DEFAULT_PROPS = {type: 'text', className: 'form-control form-control-sm'};
  // @ts-ignore
  DEFAULT_PROPS = !!type === true ? {...DEFAULT_PROPS, type} : DEFAULT_PROPS; 
  // @ts-ignore
  DEFAULT_PROPS = !!handleChange === true ? {...DEFAULT_PROPS, onChange: handleChange} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = !!fileldName === true ? {...DEFAULT_PROPS, name: fileldName} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = !!fileldValue === true ? {...DEFAULT_PROPS, value: fileldValue} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = !!label === true ? {...DEFAULT_PROPS, placeholder: label} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = !!placeholder === true ? {...DEFAULT_PROPS, placeholder: placeholder} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = (!!disabled === true && disabled === true) ? {...DEFAULT_PROPS, disabled: disabled} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = (!!readonly === true && readonly === true) ? {...DEFAULT_PROPS, readonly} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = (!!type === true && type === TYPE_NUMBER && !!min === true ) ? {...DEFAULT_PROPS, min} : DEFAULT_PROPS;
  // @ts-ignore
  DEFAULT_PROPS = (!!type === true && type === TYPE_NUMBER && !!max === true ) ? {...DEFAULT_PROPS, max} : DEFAULT_PROPS;

  const INPUT = () => createElement('input', { ...DEFAULT_PROPS });
  
  return (
    <>
      {!!label && <label className={!!divClassName ? divClassName : "form-label"} >{label}{!!isRequired && <span>*</span>}</label>}
      {INPUT()}
      {/* @ts-ignore */}
      {!!validation && <Validation data={{...VALIDATION_DATA}} />}
    </>
  )
}

export default CustomInput;