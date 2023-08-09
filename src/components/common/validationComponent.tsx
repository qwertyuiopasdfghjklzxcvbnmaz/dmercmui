import React, { Component } from 'react';

class Validation extends Component {
    constructor(props: any) {
        super(props);
    }
    fieldValidation = (dataFields: any, requiredFields: any) => {
        let response = 1;
        requiredFields.map((val: any, index: number) => {
            switch (val?.fieldType) {
                case 'default':
                    if (dataFields[val.fieldName] === '' || dataFields[val.fieldName] === null || (!!dataFields[val.fieldName] && dataFields[val.fieldName].length === 0) || (!!val.minLength && dataFields[val.fieldName].length < val.minLength))
                        response = 0;
                    break;
                case 'regExp':
                    {
                        const specialCharExp = val.regExp;
                        const returnStrSpecialCharExp = specialCharExp.test(dataFields[val.fieldName]);
                        if (dataFields[val.fieldName] === '' || dataFields[val.fieldName] === null || returnStrSpecialCharExp === false || (!!dataFields[val.fieldName] && dataFields[val.fieldName].length === 0) || (!!val.minLength && dataFields[val.fieldName].length < val.minLength))
                            response = 0;
                    }
                    break;
                case 'regExpNotRequired':
                    if (!!dataFields[val.fieldName] && !!val.regExp && val.regExp.test(dataFields[val.fieldName]) === false)
                        response = 0
                    break;
                case 'email':
                    {
                        const emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        const isEmail = emailExp.test(dataFields[val.fieldName]);
                        if (dataFields[val.fieldName] === '' || dataFields[val.fieldName] === null || isEmail === false || (!!dataFields[val.fieldName] && dataFields[val.fieldName].length === 0))
                            response = 0;
                        break;
                    }
                case 'emailNotRequired':
                    {
                        const emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        const isEmail = emailExp.test(dataFields[val.fieldName]);
                        if (!!dataFields[val.fieldName] && isEmail === false)
                            response = 0;
                        break;
                    }

                case 'url':
                    {
                        const urlPattern = new RegExp('^(https?:\\/\\/)?' +
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                            '((\\d{1,3}\\.){3}\\d{1,3}))' +
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                            '(\\?[;&a-z\\d%_.~+=-]*)?' +
                            '(\\#[-a-z\\d_]*)?$', 'i');
                        const isUrl = urlPattern.test(dataFields[val.fieldName]);
                        if (dataFields[val.fieldName] === '' || dataFields[val.fieldName] === null || isUrl === false || (!!dataFields[val.fieldName] && dataFields[val.fieldName].length === 0))
                            response = 0;
                    }

                    break;
                case 'urlNotRequired':
                    {
                        const urlPattern = new RegExp('^(https?:\\/\\/)?' +
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                            '((\\d{1,3}\\.){3}\\d{1,3}))' +
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                            '(\\?[;&a-z\\d%_.~+=-]*)?' +
                            '(\\#[-a-z\\d_]*)?$', 'i');
                        const isUrl = urlPattern.test(dataFields[val.fieldName]);
                        if (!!dataFields[val.fieldName] && isUrl === false)
                            response = 0;
                    }
                    break;
                case 'checkbox':
                    if (dataFields[val.fieldName] === false)
                        response = 0;
                    break;
                case 'date':
                    if (dataFields[val.fieldName] === '' || dataFields[val.fieldName] === null)
                        response = 0;
                    break;
                default:
                    response;
            }
        })
        return response;
    }
    getValidation() {
        // @ts-ignore
        const { validationType, field, isError, value, minLength, regExp } = this.props.data;
        switch (validationType) {
            case 'field':
            case 'selectfield':
                if (isError === 1) {
                    return <>
                        {value === '' || value === null || value === undefined || value.length === 0 ?
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Please {validationType === 'selectfield' ? 'Select' : 'Enter'} {field}.
                            </div>
                            :
                            !!minLength && value.length < minLength ?
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Please Enter Minimum {minLength} Characters.
                                </div>
                                :
                                value.length > 256 &&
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid {field} should not be more than 256 characters
                                </div>
                        }
                    </>
                }
                break;
            case 'regExp':
                if (isError === 1) {
                    const returnStrRegExp = regExp.test(value);
                    return <>
                        {value === '' || value === null || value === undefined || value.length === 0 ?
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Please Select {validationType === 'selectfield' ? 'Select' : 'Enter'} {field}.
                            </div>
                            :
                            !!minLength && value.length < minLength ?
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Please Enter Minimum {minLength} Characters.
                                </div>
                                :
                                returnStrRegExp === false &&
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid {field}.
                                </div>
                        }
                    </>
                }
                break;
            case 'regExpNotRequired':
                if (isError === 1) {
                    const returnStrRegExp = regExp.test(value);
                    return <>
                        {value !== '' && value.length !== 0 && returnStrRegExp === false &&
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid {field}.
                            </div>
                        }
                    </>
                }
                break;
            case 'email':
                if (isError === 1) {
                    const emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    const isEmail = emailExp.test(value);
                    return <>
                        {value === '' || value === null ?
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Please Enter {field}.
                            </div>
                            :
                            isEmail === false &&
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid Email.
                            </div>
                        }
                    </>
                }
                break;
            case 'emailNotRequired':
                if (isError === 1) {
                    const emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    const isEmail = emailExp.test(value);
                    return <>
                        {value !== '' && isEmail === false &&
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid Email.
                            </div>
                        }
                    </>
                }
                break;
            case 'urlField':
                if (isError === 1) {
                    var urlPattern = new RegExp('^(https?:\\/\\/)?' +
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                        '((\\d{1,3}\\.){3}\\d{1,3}))' +
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                        '(\\?[;&a-z\\d%_.~+=-]*)?' +
                        '(\\#[-a-z\\d_]*)?$', 'i');
                    const isUrl = urlPattern.test(value);
                    return <>
                        {value === '' || value === null ?
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Please Enter {field}.
                            </div>
                            :
                            isUrl === false &&
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid Url.
                            </div>
                        }
                    </>
                }
                break;
            case 'urlFieldNotRequired':
                if (isError === 1) {
                    var urlPattern = new RegExp('^(https?:\\/\\/)?' +
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                        '((\\d{1,3}\\.){3}\\d{1,3}))' +
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                        '(\\?[;&a-z\\d%_.~+=-]*)?' +
                        '(\\#[-a-z\\d_]*)?$', 'i');
                    const isUrl = urlPattern.test(value);
                    return <>
                        {value !== '' && isUrl === false &&
                            <div className="text-danger" >
                                <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid Url.
                            </div>
                        }
                    </>
                }
                break;
                case 'checkbox':
                    if (isError === 1) {
                        return <>
                            {value === false &&
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Please Check {field}.
                                </div>
                            }
                        </>
                    }
                    break;
                case 'date':
                    if (isError === 1) {
                        return <>
                            {(value === '' ||  value === null) ?
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Please Enter {field}.
                                </div>
                                :
                                // @ts-ignore
                                this.props.data.startDate > this.props.data.endDate &&
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid {field}.
                                </div>
                            }
                        </>
                    }else if(isError === 0){
                        return <>
                            {
                                // @ts-ignore
                                (this.props.data.endDate !== '' && this.props.data.startDate > this.props.data.endDate) &&
                                <div className="text-danger" >
                                    <i className="bi bi-exclamation-triangle-fill"></i> Enter Valid {field}.
                                </div> 
                            }
                        </>
                    }
                    break;
            default:
                console.log(`Default case`);
        }
    }
    render() {
        return <>{this.getValidation()}</>
    }
}



export default Validation;
