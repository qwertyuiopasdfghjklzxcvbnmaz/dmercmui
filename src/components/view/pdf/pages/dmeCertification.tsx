'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { dmeCertificate, integerFields, floatFields } from './config';
import CustomDatepicker from '../../../common/datepickerComponent';
import CustomInputText from '@/components/common/customInputComponent';

function DmeCertification() {
    const [fields, setFields] = useState({ ...dmeCertificate });
    const [spanish, setSpanish] = useState(false);

    const handleChange = (event: any) => {
        const fieldName: any = event.target.name;
        const input: any = event.target.value;
        /* @ts-ignore */
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
        } else {
            fieldValue = input;
        }
        setFields({ ...fields, [fieldName]: fieldValue });
    }



    const handleChangeRow = (event: any, index: number) => {
        const { name, value } = event.target;
        const _fields = { ...fields };
        /* @ts-ignore */
        _fields.deliveryItemDetailsList[index][name] = value;
        setFields(_fields);
    }

    const _handleSubmit = (event: any) => {
        event.preventDefault();
        const dataFields = { ...fields };
        console.log(dataFields);
    }

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <div className='row pb-0 m-0 p-0'>
                    <div className='col-md-6 p-0'>
                        <h1>Standard DME Certification</h1>
                    </div>
                </div>
            </div>
            <section>

                <div className='row pb-0'>

                    <div className='col-lg-12'>
                        <div className='card p-2'>
                            <div className='card-body pdf-form p-2'>
                                <h1 className='mb-3 border-bottom border-secondary text- fw-bold'>{fields?.companyName}</h1>
                                <h2 className='mb-3'>DME Certification and Receipt Form <br />
                                    <span className='text-12'>Certificacion y Recibo de Equipo Medico Duradero (DME)</span>
                                </h2>
                                <p className='text-14'>This certification is required by section 32.024 of the Human Resources Code and must be completed before the DME provider can be paid for durable
                                    medical equipment provided to a Medicaid client.
                                </p>
                                <p className='text-14'>
                                    This certification is required by section 32.024 of the Human Resources Code and must be completed before the DME provider can be paid for durable
                                    medical equipment provided to a Medicaid client.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Section A: Client Information</div>
                            <div className='card-body pb-0 mb-4 '>

                                <div className="row g-1">
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control form-control-sm" name="name" placeholder="Name" value={fields.name} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="patientid" className="form-label">Patient ID</label>
                                        <input type="text" className="form-control form-control-sm" placeholder="Patient ID" name="patientId" value={fields.patientId} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="address1" className="form-label">Street Address</label>
                                        <input type="text" className="form-control form-control-sm" id="address1" placeholder="Street Address" name="streetAddress" value={fields.streetAddress} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control form-control-sm" id="city" placeholder="City" name="city" value={fields.city} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="tphone" className="form-label">Telephone Number</label>
                                        <input type="text" className="form-control form-control-sm" id="tphone" placeholder="Telephone Number" name="telephoneNo" value={fields.telephoneNo} onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Section B: Provider Information</div>
                            <div className='card-body pb-0 mb-4 '>

                                <div className="row g-1">
                                    <div className="col-md-12">
                                        <label htmlFor="providername" className="form-label">Provider Name</label>
                                        <input type="text" className="form-control form-control-sm" id="providername" placeholder="Provider Name" name="providerName" value={fields.providerName} onChange={handleChange} />
                                        {/* <CustomInputText 
                                            label="Provider Name"
                                            fileldName="providerName"
                                            fileldValue={fields.providerName}
                                            handleChange={handleChange}
                                        /> */}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="pan" className="form-label">PAN</label>
                                        <input type="text" className="form-control form-control-sm" id="pan" placeholder="PAN" name="pan" value={fields.pan} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="npiapi" className="form-label">NPI/API</label>
                                        <input type="text" className="form-control form-control-sm" id="npiapi" placeholder="NPI/API" name="npiapi" value={fields.npiapi} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="tpi" className="form-label">TPI</label>
                                        <input type="text" className="form-control form-control-sm" id="tpi" placeholder="TPI" name="tpi" value={fields.tpi} onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Section C: Product Information </div>
                            <div className='card-body pb-0 mb-4 '>
                                <div className="row g-1">
                                    <div className="col-md-12">
                                        <label htmlFor="billingcontact" className="form-label">Date of Servic</label>
                                        <div className='row g-1 mb-1'>
                                            <div className='col-md-3'>
                                                <label className="form-label"> Proc Code</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <label className="form-label"> Description</label>
                                            </div>
                                            <div className='col-md-3'>
                                                <label className="form-label"> Serial #</label>
                                            </div>
                                        </div>

                                        {
                                            fields?.deliveryItemDetailsList.map((item, index) => <div key={index} className='row g-1 mb-1'>
                                                <div className='col-md-3'>
                                                    <input type="text" className="form-control form-control-sm" name="proccode" value={item?.proccode} onChange={(e) => handleChangeRow(e, index)} /></div>
                                                <div className='col-md-6'>
                                                    <input type="text" className="form-control form-control-sm" name="description" value={item?.description} onChange={(e) => handleChangeRow(e, index)} /></div>
                                                <div className='col-md-3'>
                                                    <input type="text" className="form-control form-control-sm" name="serial" value={item?.serial} onChange={(e) => handleChangeRow(e, index)} /></div>
                                            </div>)
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Section D: Certification
                                <div className='float-end'>
                                    <div className='form-check'>
                                        <input className="form-check-input" type="checkbox" id="spanish" onChange={() => setSpanish(spanish => !spanish)} />
                                        <label className="form-check-label" htmlFor="spanish"> Spanish</label>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body pt-2 mb-4 '>
                                {!!spanish === false ?
                                    <div className="row g-1">
                                        <div className='col-md-4'>
                                            <label> This is to certify that on (month/day/year):</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <CustomDatepicker
                                                // title="Start Date"
                                                name="date"
                                                value={fields?.date}
                                                onChange={handleChange}
                                                // isError={true}
                                                // isRequired={true}
                                                // startDate={}
                                                divClassName=""
                                            />
                                        </div>
                                        <p>the client received the <input type="text" className="pdfinput ms-1 me-1 form-control-sm" id="" name="tpi" value={fields.tpi} onChange={handleChange} />
                                            (equipment) as prescribed by the physician. The equipment has been properly fitted to the client and/or meets the client's needs.
                                        </p>

                                        <p>
                                            The client, parent, or the guardian of the client, and/or the caregiver of the client has received training and instruction regarding the equipment's proper use
                                            and maintenance.
                                        </p>
                                    </div>
                                    : <div className="row g-1">
                                    <div className='col-md-4'>
                                        <label> Esto certifica que el (mes/día/año):</label>
                                    </div>
                                    <div className='col-md-3'>
                                        <CustomDatepicker
                                            // title="Start Date"
                                            name="date"
                                            value={fields?.date}
                                            onChange={handleChange}
                                            // isError={true}
                                            // isRequired={true}
                                            // startDate={}
                                            divClassName=""
                                        />
                                    </div>
                                    <p> el cliente recibió el <input type="text" className="pdfinput ms-1 me-1 form-control-sm" id="" name="tpi" value={fields.tpi} onChange={handleChange} />
                                    (equipo) que el doctor recetó. El equipo ha side adaptado correctamente para el cliente o satisface las necesidades del cliente.
                                    </p>
                                    <p>
                                        El cliente, padre, o tutor, o el cuidador principal del cliente ha recibido entrenamiento e instrucción con respecto al uso y mantenimiento apropiado del
                                        equipo.
                                    </p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link onClick={_handleSubmit} href="#" className='btn btn-success'><i className='bi bi-save'></i> Save</Link>&nbsp;
                        <button className='btn btn-secondary'><i className='bi bi-reply'></i> Reset</button>
                    </div>


                </div>
            </section>

        </main>
    )
}

export default DmeCertification;