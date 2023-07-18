import React, {createElement } from 'react';
import Validation from '@/components/common/validationComponent';

const TYPE_NUMBER = 'number';

function CustomInput(props: any) {
const {fileldName, label, handleChange, title, fileldValue, isRequired, disabled, readonly, type, placeholder, isError = true, validationType = "field", regExp, min, max} = props;

  let VALIDATION = {field: label, value: fileldValue || '', isError, validationType}
  // @ts-ignore
  VALIDATION = !!regExp === true ? {...VALIDATION, regExp} : VALIDATION;

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
      <label className="form-label">{!!label && label}</label>
      {INPUT()}
      {/* @ts-ignore */}
      {!!isRequired && <Validation data={{...VALIDATION}} />}
    </>
  )
}

export default CustomInput;