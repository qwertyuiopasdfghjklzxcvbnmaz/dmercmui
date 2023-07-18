import React, {useState} from 'react'
import Link from 'next/link';
import { initalFields, integerFields, floatFields } from './configPatientAssessment';
import CustomInput from '@/components/common/customInputComponent';

function PatientAssessment() {
    const [fields, setFields] = useState({ ...initalFields });

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
                        <h1>Standard Patient Assessment V1</h1>
                    </div>
                </div>
            </div>
            <section>

                <div className='row pb-0'>

                    <div className='col-lg-12'>
                        <div className='card p-2'>
                            <div className='card-body pdf-form p-2'>
                                <h1 className='mb-3 border-bottom border-secondary text- fw-bold'>{fields?.companyName}</h1>
                                <h2 className='mb-3'>{fields?.streetAddress} <br />
                                    <span className='text-14'>{fields?.cityStateZip}</span><br />
                                    <span className='text-14'>Ph: {fields?.phoneNo}</span><br />
                                    <span className='text-14'>Fx: {fields?.fax}</span>
                                </h2>



                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Patient\Caregiver Assessment</div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-6">
                                    <CustomInput 
                                        label="Patient"
                                        fileldName="patientName"
                                        fileldValue={fields?.patientName}
                                        handleChange={handleChange}
                                    />
                                        {/* <label htmlFor="name" className="form-label">Patient</label>
                                        <input type="text" className="form-control form-control-sm" id="patient" /> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <label htmlFor="patientid" className="form-label">Patient ID</label>
                                        <input type="text" className="form-control form-control-sm" id="patientid" /> */}
                                        <CustomInput 
                                            label="Patient ID"
                                            fileldName="address"
                                            fileldValue={fields?.address}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        {/* <label htmlFor="address1" className="form-label">Address</label>
                                        <input type="text" className="form-control form-control-sm mb-1" id="address1" />
                                        <input type="text" className="form-control form-control-sm" id="address1" /> */}
                                        <CustomInput 
                                            label="Address"
                                            fileldName="address"
                                            fileldValue={fields?.address}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        {/* <label htmlFor="tphone" className="form-label">Account #</label>
                                        <input type="text" className="form-control form-control-sm" id="tphone" /> */}
                                        <CustomInput 
                                            label="Account #"
                                            fileldName="account"
                                            fileldValue={fields?.account}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        {/* <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" className="form-control form-control-sm" id="phone" /> */}
                                        <CustomInput 
                                            label="Phone"
                                            fileldName="phone"
                                            fileldValue={fields?.phone}
                                            handleChange={handleChange}
                                        />
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Alternate Contact(s)</div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-4">
                                        <CustomInput 
                                            label="Name"
                                            fileldName="name1"
                                            fileldValue={fields?.alternateContacts?.name1}
                                            handleChange={handleChange}
                                        />
                                        {/* <label htmlFor="providername" className="form-label">Name</label>
                                        <input type="text" className="form-control form-control-sm" id="providername" /> */}
                                    </div>
                                    <div className="col-md-4">
                                        {/* <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" className="form-control form-control-sm" id="pan" /> */}
                                        <CustomInput 
                                            label="Phone"
                                            fileldName="phone1"
                                            fileldValue={fields?.alternateContacts?.phone1}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        {/* <label htmlFor="npiapi" className="form-label">Relationship</label>
                                        <input type="text" className="form-control form-control-sm" id="npiapi" /> */}
                                        <CustomInput 
                                            label="Relationship"
                                            fileldName="relationship1"
                                            fileldValue={fields?.alternateContacts?.relationship1}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <CustomInput 
                                            label="Name"
                                            fileldName="name2"
                                            fileldValue={fields?.alternateContacts?.name2}
                                            handleChange={handleChange}
                                        />
                                        {/* <label htmlFor="providername" className="form-label">Name</label>
                                        <input type="text" className="form-control form-control-sm" id="providername" /> */}
                                    </div>
                                    <div className="col-md-4">
                                        {/* <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" className="form-control form-control-sm" id="pan" /> */}
                                        <CustomInput 
                                            label="Phone"
                                            fileldName="phone2"
                                            fileldValue={fields?.alternateContacts?.phone2}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        {/* <label htmlFor="npiapi" className="form-label">Relationship</label>
                                        <input type="text" className="form-control form-control-sm" id="npiapi" /> */}
                                        <CustomInput 
                                            label="Relationship"
                                            fileldName="relationship2"
                                            fileldValue={fields?.alternateContacts?.relationship2}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Patient Assessment</div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-8">
                                        <div className='row g-1 mb-1'>
                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientVision} className="form-check-input" type="radio" name="patientVision" id="patientVisionYes" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.patientVision} className="form-check-input" type="radio" name="patientVision" id="patientVision1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Na</label>< br />
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientVision} className="form-check-input" type="radio" name="patientVision" id="patientVision1" value="Na" />
                                                </div>

                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <label>Functional Limits</label>< br />
                                                    <span className='fw-normal'>Patient has vision impairment</span>
                                                </div>

                                            </div>

                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientHearing} className="form-check-input" type="radio" name="patientHearing" id="patientHearing1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.patientHearing} className="form-check-input" type="radio" name="patientHearing" id="patientHearing1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientHearing} className="form-check-input" type="radio" name="patientHearing" id="patientHearing1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Patient has hearing impairment</span>
                                                </div>

                                            </div>

                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientSpeech} className="form-check-input" type="radio" name="patientSpeech" id="patientSpeech1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.patientSpeech} className="form-check-input" type="radio" name="patientSpeech" id="patientSpeech1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientSpeech} className="form-check-input" type="radio" name="patientSpeech" id="patientSpeech1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span  className='fw-normal'>Patient has speech impairment</span>
                                                </div>
                                            </div>


                                            <div className='row g-1 mb-2'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientAmbulatory} className="form-check-input" type="radio" name="patientAmbulatory" id="patientAmbulatory1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.patientAmbulatory} className="form-check-input" type="radio" name="patientAmbulatory" id="patientAmbulatory1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientAmbulatory} className="form-check-input" type="radio" name="patientAmbulatory" id="patientAmbulatory1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Patient has ambulatory impairment</span>
                                                </div>
                                            </div>

                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.alertUnderstand} className="form-check-input" type="radio" name="alertUnderstand" id="alertUnderstand1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.alertUnderstand} className="form-check-input" type="radio" name="alertUnderstand" id="alertUnderstand1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Na</label>< br />
                                                    <input onChange={handleChange} checked={'Na' === fields?.alertUnderstand} className="form-check-input" type="radio" name="alertUnderstand" id="alertUnderstand1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <label>Patient Mental State</label><br />
                                                    <span className='fw-normal'>Alert and understands situation</span>
                                                </div>
                                            </div>

                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.confused} className="form-check-input" type="radio" name="confused" id="confused1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.confused} className="form-check-input" type="radio" name="confused" id="confused1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.confused} className="form-check-input" type="radio" name="confused" id="confused1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Confused\Incoherent</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-2'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.dementia} className="form-check-input" type="radio" name="dementia" id="dementia1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.dementia} className="form-check-input" type="radio" name="dementia" id="dementia1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.dementia} className="form-check-input" type="radio" name="dementia" id="dementia1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Dementia</span>
                                                </div>
                                            </div>


                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientMobile} className="form-check-input" type="radio" name="patientMobile" id="patientMobile1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.patientMobile} className="form-check-input" type="radio" name="patientMobile" id="patientMobile1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Na</label>< br />
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientMobile} className="form-check-input" type="radio" name="patientMobile" id="patientMobile1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <label>Activity Level</label><br />
                                                    <span className='fw-normal'>Patient is mobile\active</span>
                                                </div>
                                            </div>

                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patintBedRidden} className="form-check-input" type="radio" name="patintBedRidden" id="patintBedRidden1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.patintBedRidden} className="form-check-input" type="radio" name="patintBedRidden" id="patintBedRidden1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.patintBedRidden} className="form-check-input" type="radio" name="patintBedRidden" id="patintBedRidden1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Patient is bed-ridden</span>
                                                </div>
                                            </div>

                                            <div className='row g-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientFallRisk} className="form-check-input" type="radio" name="patientFallRisk" id="patientFallRisk1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.patientFallRisk} className="form-check-input" type="radio" name="patientFallRisk" id="patientFallRisk1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientFallRisk} className="form-check-input" type="radio" name="patientFallRisk" id="patientFallRisk1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Patient is a fall risk</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-2'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.patientNutritional} className="form-check-input" type="radio" name="patientNutritional" id="patientNutritional1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.patientNutritional} className="form-check-input" type="radio" name="patientNutritional" id="patientNutritional1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.patientNutritional} className="form-check-input" type="radio" name="patientNutritional" id="patientNutritional1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Patient is nutritional high-risk</span>
                                                </div>
                                            </div>

                                            <div className='row g-1'>
                                                <h3 className='text-13 fw-bold p-0 m-0'>Caregiver Assessment</h3>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.caregiverWilling} className="form-check-input" type="radio" name="caregiverWilling" id="caregiverWilling1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.caregiverWilling} className="form-check-input" type="radio" name="caregiverWilling" id="caregiverWilling1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Na</label>< br />
                                                    <input onChange={handleChange} checked={'Na' === fields?.caregiverWilling} className="form-check-input" type="radio" name="caregiverWilling" id="caregiverWilling1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <label>Assessment</label><br />
                                                    <span className='fw-normal'>Caregiver willing to provide care</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-2'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.caregiverAble} className="form-check-input" type="radio" name="caregiverAble" id="caregiverAble1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.caregiverAble} className="form-check-input" type="radio" name="caregiverAble" id="caregiverAble1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.caregiverAble} className="form-check-input" type="radio" name="caregiverAble" id="caregiverAble1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Caregiver able to provide care </span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-2'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input  onChange={handleChange} checked={'Yes' === fields?.caregiverUnderstands} className="form-check-input" type="radio" name="caregiverUnderstands" id="caregiverUnderstands1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input  onChange={handleChange} checked={'No' === fields?.caregiverUnderstands} className="form-check-input" type="radio" name="caregiverUnderstands" id="caregiverUnderstands1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input  onChange={handleChange} checked={'Na' === fields?.caregiverUnderstands} className="form-check-input" type="radio" name="caregiverUnderstands" id="caregiverUnderstands1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Caregiver understands instructions and equipment operation</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-2'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.caregiverMaintain} className="form-check-input" type="radio" name="caregiverMaintain" id="caregiverMaintain1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.caregiverMaintain} className="form-check-input" type="radio" name="caregiverMaintain" id="caregiverMaintain1" value="No" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.caregiverMaintain} className="form-check-input" type="radio" name="caregiverMaintain" id="caregiverMaintain1" value="Na" />
                                                </div>
                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Caregiver able to maintain and operate equipment safely</span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-md-12'>
                                        <label htmlFor="Comments" className="form-label">Comments</label>
                                        <textarea onChange={handleChange} value={fields?.comments} name='comments' cols={3} rows={4} className="form-control form-control-sm" id="comments" />

                                    </div>



                                </form>
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

export default PatientAssessment;