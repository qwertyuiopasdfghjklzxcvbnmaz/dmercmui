import React from "react";
// import Validation from './validationComponent';
import DatePicker from "react-datepicker";
import sessionStore from '@/common/sessionStoreComponent';
import "react-datepicker/dist/react-datepicker.css";
let moment = require('moment');
function CustomDatepicker(props: any) {
    const {
        divClassName, onlyField, title, isRequired, isError, name, value, dateFormat, placeholder, onChange, startDate, endDate,
        isRemoveIcon, disabled, readOnly, validationType, validationStart, validationEnd, validationAssociatedField, onlyMonthYearPicker, customValidationMessage
    } = props;
    const format = !!dateFormat ? dateFormat : new sessionStore().returnDateFormat();
    let attribute = !!props.attribute && Object.keys(props.attribute).length !== 0 ? { ...props.attribute } : {}
    
    attribute = { ...attribute, popperClassName: "reactDatepicker-container" }
    attribute = { ...attribute, className: "form-control form-control-sm reactDatepicker" }
    attribute = { ...attribute, showMonthDropdown: true, showYearDropdown: true, dropdownMode: "select" }
    attribute = { ...attribute, placeholderText: !!placeholder ? placeholder : "Select Date" }
    if (!!value && !!new Date(value))
        attribute = { ...attribute, selected: moment(value.slice(0, 10))._d };
    if (!!format)
        attribute = { ...attribute, dateFormat: format.replaceAll('D', 'd').replaceAll('Y', 'y') }
   
    if (!!onChange)
        attribute = { ...attribute, onChange: (selectedValue: any) => !!selectedValue ? onChange({ target: { value: moment(selectedValue).format("YYYY-MM-DD"), name, type: 'date' } }) : null }
    const fieldResult = !!isRemoveIcon ?
        <div className="input-group">
            <div className="react-datepicker-group">
                <DatePicker {...attribute} />
            </div>
        </div>
        :
        <>
            <div className="input-group">
                <div className="react-datepicker-group">
                    {/* <div className="input-group-prepend">
                        <span className="input-group-text"><i className="icon-calendar22"></i></span>
                    </div> */}
                    <DatePicker {...attribute} popperProps={{ positionFixed: true }} />
                </div>
            </div>
        </>
    return !!onlyField ?
        fieldResult :
        <div className={!!divClassName ? divClassName : "form-group"}>
            {!!title &&<label className="col-form-label">{title}{!!isRequired && <span> *</span>}</label>}
            {fieldResult}
        </div>
}
export default CustomDatepicker;