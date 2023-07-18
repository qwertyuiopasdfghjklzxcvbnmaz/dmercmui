"use client"
import React, { useState } from 'react';
import {initialFields} from './config'

function Page() {
    const [fields, setFields] = useState({...initialFields});
    const _handleChange = (event: any) => {
        const {name, value} = event.target;
        const _fields = {...fields};
        /* @ts-ignore */
        _fields[name] = value;
        setFields(_fields);
    }

    const _handleSubmit = () =>{
        /* @ts-ignore */
        const editFilds = Object.keys(fields).reduce((accumulator: [], currentValue: any) => {
                let _current = [...accumulator];
                /* @ts-ignore */
                if(fields[currentValue].trim() !== initialFields[currentValue])
                /* @ts-ignore */
                    _current.push(currentValue)
                /* @ts-ignore */
                return _current;
            },[]);
       
        console.log({editFilds});
        if(editFilds.length > 0){
            console.log('==================Edit Field==================')
        }else{
            console.log('==================No Edit Filed==================')
        }
    }

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Edit Field</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Vertical Form</h5>
                                                <div className="col-6">
                                                    <label className="form-label">Your Name</label>
                                                    <input type="text" className="form-control" name="name" value={fields?.name} onChange={_handleChange} />
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">Email</label>
                                                    <input type="text" className="form-control" name="email" value={fields?.email} onChange={_handleChange} />
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">City</label>
                                                    <input type="text" className="form-control" name="city" value={fields?.city} onChange={_handleChange} />
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">Address</label>
                                                    <input type="text" className="form-control" name="addres" value={fields?.addres} onChange={_handleChange} />
                                                </div>
                                                <div className="text-center">
                                                    <button onClick={_handleSubmit} type="button" className="btn btn-primary btn-sm">save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page