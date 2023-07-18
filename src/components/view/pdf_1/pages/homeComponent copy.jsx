"use client"
import React, { useState } from 'react'
import { initialFields, readonlyFields } from './config'


function Home() {
    const [fields, setFields] = useState({ ...initialFields })

    const _handleChange = (event) => {
        const {name, value} = event.target;
        const _fields = {...fields};
        _fields[name] = value;
        setFields(_fields);
    }

    const _handleChangeDeliveryItem = (event, index) => {
        const {name, value} = event.target;
        const _fields = {...fields};
        _fields.deliveryItemDetailsList[index][name] = value;
        setFields(_fields);
    }

    const _handleSubmit = () =>{
        console.log(fields)
    }

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>PDF</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='row'>
                                    <div className='custom-pdf'>
                                        <h3>Company Name</h3>

                                        <p></p>

                                        <h4>DME Certification and Receipt Form</h4>
                                        <h5>Certificaci&#243;n y Recibo de Equipo Medico Duradero (DME)</h5>

                                        <p></p>
                                        <p>
                                            This certification is required by section 32.024 of the <i>Human Resources Code</i> and must be completed before the DME provider can be paid for durable medical equipment provided to a Medicaid client.
                                        </p>
                                        <p>
                                            Esta certificaci&#243;n es necesaria bajo la Secci&#243;n 32.024 del C&#243;digo de Recursos Humanos y se debe Ilenar antes de poder rembolsar al proveedoe del equipo m&#233;dico duradero por cualquier equipo m&#233;dico proporcionado al cliente de Medicaid.
                                        </p>

                                        <p></p>

                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th colspan="4" >Section A: Client Information</th>
                                                </tr>
                                                <tr>
                                                    <td id="td03">Name: </td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('name')} value={fields?.name} onChange={_handleChange} name="name" type="text" /></td>
                                                </tr>
                                                <tr>
                                                    <td id="td03">Patient ID: </td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('patientId')} value={fields?.patientId} onChange={_handleChange} name="patientId" type="text" /></td>
                                                </tr>
                                                <tr>
                                                    <td id="td03">Street Address: </td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('streetAddress')} value={fields?.streetAddress} onChange={_handleChange} name="streetAddress" type="text" /></td>
                                                </tr>
                                                <tr>
                                                    <td id="td03"> City: </td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('city')} value={fields?.city} onChange={_handleChange} name="city" type="text" />
                                                        <br /></td>
                                                </tr>
                                                <tr>
                                                    <td id="td03">Telephone Number: </td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('telephoneNo')} name="telephoneNo" value={fields?.telephoneNo} onChange={_handleChange} type="text" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th colspan="4">Section B: Provider Information</th>
                                                </tr>
                                                <tr>
                                                    <td id="td03">Provider Name:</td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('telephoneNo')} name="providerName" value={fields?.providerName} onChange={_handleChange} maxlength="30" size="32" type="text" />&nbsp;&nbsp;</td>
                                                    <td id="td03">PAN:</td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('pan')} name="pan" value={fields?.pan} onChange={_handleChange} maxlength="30" size="32" type="text" /></td>
                                                </tr>
                                                <tr>
                                                    <td id="td03">NPI/API:</td>
                                                    <td id="td04"><input readOnly={readonlyFields?.includes('npiapi')} name="npiapi" value={fields?.npiapi} onChange={_handleChange} maxlength="30" size="32" type="text" />&nbsp;&nbsp;</td>
                                                    <td id="td03">TPI:</td>
                                                    <td id="td04"><input name="tpi" value={fields?.tpi} onChange={_handleChange} maxlength="30" size="32" type="text" /></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p></p>

                                        <table>
                                            <tbody id="tableBody">
                                                <tr>
                                                    <th colspan="11">Section C: Product Information</th>
                                                </tr>
                                                <tr>
                                                    <td colspan="11">Date of Service:
                                                        <input readOnly={readonlyFields?.includes('currentdate')} name="currentdate" value={fields?.currentdate} onChange={_handleChange} maxlength="30" size="32" type="text" /></td>
                                                </tr>
                                                <tr>
                                                    <th>Proc Code</th>
                                                    <th>Description</th>
                                                    <th>Serial &#35;</th>
                                                </tr>
                                               {
                                                fields?.deliveryItemDetailsList?.map((item, index) => <tr key={index}>
                                                    <td id="td03"><input readOnly={readonlyFields?.includes('proccode')} name="proccode" value={item?.proccode} onChange={(e) => _handleChangeDeliveryItem(e, index)} type="text" /></td>
                                                    <td id="td02"><input readOnly={readonlyFields?.includes('description')} name="description" value={item?.description} onChange={(e) => _handleChangeDeliveryItem(e, index)} type="text" /></td>
                                                    <td id="td04"><input  name="serial" value={item?.serial} onChange={(e) => _handleChangeDeliveryItem(e, index)} type="text" /></td>
                                                </tr>)
                                               }
                                                
                                            </tbody>
                                        </table>

                                        <p></p>

                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th colspan="4">Section D: Certification</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        This is to certify that on (month/day/year): <input name="textboxEquip" type="text" /> the client received the <input name="textboxEquip"  maxlength="30" size="32" type="text" /> (equipment) as prescribed by the physician. The equipment has been properly fitted to the client and/or meets the client's needs.<br /><br />
                                                        The client, parent, or the guardian of the client, and/or the caregiver of the client has received training and instruction regarding the equipment's proper use and maintenance.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p></p>

                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th colspan="4">Section D (Optional): Certification (Spanish)</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Esto certifica que el (mes/d&#237;a/a&#241;o): <input name="textboxEquip" type="text" /> el cliente recibi&#243; el <input name="textboxEquip"  maxlength="30" size="32" type="text" /> (equipo) que el doctor recet&#243;. El equipo ha side adaptado correctamente para el cliente o satisface las necesidades del cliente.<br /><br />
                                                        El cliente, padre, o tutor, o el cuidador principal del cliente ha recibido entrenamiento e instrucci&#243;n con respecto al uso y mantenimiento apropiado del equipo.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p></p>
                                        <h4>Patient/Caregiver</h4>
                                        <p>&nbsp;&nbsp; Signature of Patient or Patient's Representative:<span id="customer_signature"></span>
                                            <input name="textboxEquip2" type="text" />
                                        </p>
                                        <p> &nbsp;&nbsp; Printed Name of Patient Representative: <span id="printed_name_authorized_representative"></span>
                                            <input name="textboxEquip3"  type="text" />
                                        </p>
                                        <p>&nbsp;&nbsp; Relationship to Patient: <span id="relationship_to_patient"></span>
                                            <input name="textboxEquip4"  type="text" />
                                        </p>
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If not "Self," reason patient could not sign: <span id="reason_patient_could_not_sign"></span>
                                            <input name="textboxEquip5"  type="text" />
                                        </p>
                                        <p>&nbsp;&nbsp; Date:
                                            <input name="textboxEquip6"  type="text" />
                                        </p>
                                        <h4>Company Representative</h4>
                                        <p>&nbsp;&nbsp; Signature:<span id="tech_signature"></span><img moz-do-not-send="false" src="file:///C:/image.gif" width="60" height="60" alt="Signature" /></p>
                                        <p>&nbsp;&nbsp; Name:
                                            <input name="textboxEquip8"  type="text" />
                                        </p>

                                        <div class="divsubmit"><button onClick={_handleSubmit} className=''> Submit</button></div>
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

export default Home