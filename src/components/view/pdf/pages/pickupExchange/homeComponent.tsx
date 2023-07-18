"use client"
import React, { useEffect, useState } from 'react';
import { initalFields, homeStateObject, initalRelationship } from './config';
import Link from 'next/link';
import Signature from '../signature/signature';
function Home() {
    const [fields, setFields] = useState({ ...initalFields });

    useEffect(() => {

    }, [])

    const handleChange = (event: any) => {
        const fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (event.target.type === "checkbox") {
            fieldValue = event.target.checked;
            setFields({ ...fields, ...initalRelationship, [fieldName]: fieldValue, });
        } else {
            setFields({ ...fields, [fieldName]: fieldValue });
        }
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(fields)
    }

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <div className='row pb-0 m-0 p-0'>
                    <div className='col-md-6 p-0'>
                        <h1>Pickup Exchange</h1>
                    </div>
                </div>
            </div>
            <section>
                <div className='row pb-0'>
                    <div className='col-lg-12'>
                        <div className='row g-1'>
                            <div className='col-lg-12'>
                                <div className='card pb-0 '>
                                    <div className='card-header bg-blue2 text-white'> Serial Number </div>
                                    <div className='card-body pb-0 mb-4 '>
                                        <div className="row g-1">
                                            <div className="col-md-12">
                                                <label htmlFor="deliveryAgentName" className="form-label">Serial No.</label>
                                                <input onChange={handleChange} value={fields?.serialNo} name='serialNo' type="text" className="form-control form-control-sm" id="deliveryAgentName" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Signature
                        fields={fields}
                        handleChange={handleChange}
                    />

                    <div className='text-center'>
                        <Link onClick={handleSubmit} href="#" className='btn btn-success'><i className='bi bi-save'></i> Save</Link>&nbsp;
                        <button className='btn btn-secondary'><i className='bi bi-reply'></i> Reset</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;