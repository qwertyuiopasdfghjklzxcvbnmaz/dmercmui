import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import SignatureModal from './signatureModal';
import { initalFields, homeStateObject, initalRelationship } from './configSignature';
// import $ from 'jquery';
let isPatient = true;

function Signature() {
    const [stateObject, setStateObject] = useState(homeStateObject)
    const [patientSignature, setPatientSignature] = useState('');
    const [deliveryAgentSignature, setDeliveryAgentSignature] = useState('');
    const [fields, setFields] = useState({...initalFields});

    useEffect(()=>{
       
    },[])

    const handleChange = (event: any) => {
        const fieldName = event.target.name;
        /* @ts-ignore */
        let fieldValue = event.target.value;
        if (event.target.type === "checkbox") {
            fieldValue = event.target.checked;
            setFields({ ...fields, ...initalRelationship, [fieldName]: fieldValue,  });
        } else { 
            setFields({ ...fields, [fieldName]: fieldValue });
        }
        
    }

    const modalOpen = (event: any, type: any) =>{
        event.preventDefault();
        isPatient = type
        // if(typeof window !== "undefined"){
        /* @ts-ignore */
        window.$('#exampleModal').modal('show');
        // }
      }

    const handleChangeSign = (signUrl: string) =>{
        if(isPatient === true)
            setPatientSignature(signUrl);
        else
            setDeliveryAgentSignature(signUrl);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({...fields, patientSignature:patientSignature, deliveryAgentSignature:deliveryAgentSignature })
    }
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <div className='row pb-0 m-0 p-0'>
                    <div className='col-md-6 p-0'>
                        <h1>Signature File</h1>
                    </div>
                </div>
            </div>
            <section>
                <div className='row pb-0'>
                    <div className='col-lg-12'>
                        <div className='row g-1'>
                            <div className='col-lg-6'>
                                <div className='card pb-0 '>
                                    <div className='card-header bg-blue2 text-white'> Signature of Patient or Patient's Representative</div>
                                    <div className='card-body pb-0 mb-4'>
                                        <div className="row g-1">
                                            <div className="col-md-10 text-orange fw-bold text-13">
                                                <label>By Signing you are giving consent to all documents being included in the delivery</label>
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="patientName" className="form-label">Patient Name</label>
                                                <input onChange={handleChange} value={fields?.patientName} name='patientName' type="text" className="form-control form-control-sm" id="patientName" />
                                            </div>

                                            <div className="col-md-6">
                                                <div className='form-check '>
                                                    {/* @ts-ignore */}
                                                    <input onChange={handleChange} name='relationFlag' checked={fields?.relationFlag} className="form-check-input" type="checkbox" id="relationFlag" />
                                                    <label className="form-check-label text-13" htmlFor=""> Patient can not sign due to</label>
                                                </div>
                                            </div>
                                            {!!fields.relationFlag === true ? <div className='row g-1' id="dvPassport">
                                                <div className="col-md-12">
                                                    <label htmlFor="reason" className="form-label">Reason</label>
                                                    <input onChange={handleChange} value={fields?.reason} name='reason' type="text" className="form-control form-control-sm" id="reason" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="signatureBy" className="form-label">Signatory on behalf of {fields?.patientName} </label>
                                                    <input onChange={handleChange} value={fields?.signatureBy} name='signatureBy' type="text" className="form-control form-control-sm" id="signatureBy" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="relationship" className="form-label">Relation</label>
                                                    <input onChange={handleChange} value={fields?.relationship} name='relationship' type="text" className="form-control form-control-sm" id="relationship" />
                                                </div>

                                                
                                            </div>
                                            :
                                            null
                                            }
                                            <div className="col-md-12">
                                                <label htmlFor="patientname" className="form-label">Signature</label>{" "}
                                                <button onClick={(e) => modalOpen(e, true)} className='btn btn-sm btn-primary'><i className='bi bi-plus'></i> Add </button>
                                            </div>
                                            <div className="col-md-12">
                                           {!!patientSignature === true ? <Image
                                                src={patientSignature}
                                                width={200}
                                                height={200}
                                                alt="Picture of the author"
                                            />
                                            :
                                            null}
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className='col-lg-6'>
                                <div className='card pb-0 '>
                                    <div className='card-header bg-blue2 text-white'> Agent Signature</div>
                                    <div className='card-body pb-0 mb-4 '>

                                        <div className="row g-1">
                                            <div className="col-md-12">
                                                <label className="form-label">Signature</label>{" "}
                                                <button onClick={(e) => modalOpen(e, false)} className='btn btn-sm btn-primary'><i className='bi bi-plus'></i>  Add </button>
                                            </div>
                                            <div className="col-md-12">
                                               {!!deliveryAgentSignature ? <Image
                                                    src={deliveryAgentSignature}
                                                    width={200}
                                                    height={200}
                                                    alt="Picture of the author"
                                                />
                                                :
                                                null
                                               }
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="deliveryAgentName" className="form-label">Name</label>
                                                <input onChange={handleChange} value={fields?.deliveryAgentName} name='deliveryAgentName' type="text" className="form-control form-control-sm" id="deliveryAgentName" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link onClick={handleSubmit} href="#" className='btn btn-success'><i className='bi bi-save'></i> Save</Link>&nbsp;
                        <button className='btn btn-secondary'><i className='bi bi-reply'></i> Reset</button>
                    </div>
                </div>
            </section>
            {/* @ts-ignore */}
            <SignatureModal getSignUrl={handleChangeSign} />
        </main>
    )
}

export default Signature;