import React, {useState} from 'react';
import Link from 'next/link';
import { initalFields, integerFields, floatFields } from './configPatientHomeAssessment';
import CustomInput from '@/components/common/customInputComponent';
import CustomDatepicker from '../../../common/datepickerComponent';

function PatientHomeAssessment() {
    const [fields, setFields] = useState({ ...initalFields });

    const handleChange = (event: any) => {
        const fieldName: any = event.target.name;
        const input: any = event.target.value;
        const type: any = event.target.type;
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
        } else if(type === 'checkbox'){
            /* @ts-ignore */
            fieldValue = !fields[fieldName];
        } else {
            fieldValue = input;
        }
        setFields({ ...fields, [fieldName]: fieldValue });
    }

    // const handleChangeMulti = (event: any, name: any) =>{
    //     const fieldName: any = event.target.name;
    //     const input: any = event.target.value;
    //     const type: any = event.target.type;
    //     /* @ts-ignore */
    //     setFields({ ...fields, [name]: {...fields[name], [fieldName]: !fields[name][fieldName]} });
    // }

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
                        <h1>Standard Patient Home Assessment</h1>
                    </div>

                </div>
            </div>
            <section>

                <div className='row pb-0'>

                    <div className='col-lg-12'>
                        <div className='card p-2'>
                            <div className='card-body pdf-form p-2'>
                                <h1 className='mb-3 border-bottom border-secondary text- fw-bold'>{fields?.companyName} </h1>
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
                            <div className='card-header bg-blue2 text-white'> Patient Home Assessment for Mobility Assistive Equipment
                            </div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-6">
                                        {/* <label htmlFor="name" className="form-label">Patient</label>
                                        <input type="text" className="form-control form-control-sm" id="patient" /> */}
                                        <CustomInput 
                                            label="Patient"
                                            fileldName="patientName"
                                            fileldValue={fields?.patientName}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        {/* <label htmlFor="patientid" className="form-label">Patient ID</label>
                                        <input type="text" className="form-control form-control-sm" id="patientid" /> */}
                                        <CustomInput 
                                            label="Patient ID"
                                            fileldName="patientId"
                                            fileldValue={fields?.patientId}
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

                            <div className='card-body pb-0 mb-4 '>
                                <div className='col-md-12'>
                                    <h3 className='pdfhader pb-1 text-grey text-14 fw-bold mb-2 mt-2 border-bottom'>Type of Mobility Assistive Equipment</h3>
                                </div>

                                <form className="row g-1">
                                    <div className="col-md-1">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityCane} name='typeOfMobilityCane' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-12 fw-bold" htmlFor="">
                                                Cane
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityCrutches} name='typeOfMobilityCrutches' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                Crutches
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityWalker} name='typeOfMobilityWalker' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                Walker
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityManualwheelchair} name='typeOfMobilityManualwheelchair' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                Manual Wheelchair
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-md-7'></div>

                                    <div className="col-md-1 me-2">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityPovscooter} name='typeOfMobilityPovscooter' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                POV/Scooter
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityPowerwheelchair} name='typeOfMobilityPowerwheelchair' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                Power Wheelchair
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.typeOfMobilityOtherchk} name='typeOfMobilityOtherchk' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                Other
                                            </label>

                                        </div>
                                    </div>


                                    <div className='col-md-2'>
                                        <input onChange={handleChange} value={fields?.typeOfMobilityOther} name='typeOfMobilityOther' type="text" className="pdfinput ms-1 me-1" id="" />
                                    </div>

                                    <div className='col-md-4'></div>

                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <input onChange={handleChange} checked={fields?.othermedicalequipment} name='othermedicalequipment' className="form-check-input" type="checkbox" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                Other Medical Equipment in the Home?
                                            </label>
                                            <input onChange={handleChange} value={fields?.othermedicalequipmentValue} name='othermedicalequipmentValue' type="text" className="pdfinput ms-1 me-1" id="" />
                                            <label className="form-check-label text-11 fw-bold" htmlFor="">Provided by:</label>
                                            <input onChange={handleChange} value={fields?.providerby} name='providerby' type="text" className="pdfinput ms-1 me-1" id="" />
                                        </div>
                                    </div>



                                    <div className='col-md-12'>
                                        <h3 className='pdfhader pb-1 text-grey text-14 fw-bold mb-2 mt-2 border-bottom'>Type of Home</h3>
                                    </div>
                                    <div className='row g-1'>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'singlestoryhouse' === fields?.typeOfHome} className="form-check-input me-1" type="radio" name="typeOfHome" id="" value="singlestoryhouse" />
                                            <label> Single Story House</label>
                                        </div>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'multystoryhouse' === fields?.typeOfHome} className="form-check-input me-1" type="radio" name="typeOfHome" id="" value="multystoryhouse" />
                                            <label> Multi-Story House</label>
                                        </div>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'aptCondo' === fields?.typeOfHome} className="form-check-input me-1" type="radio" name="typeOfHome" id="" value="aptCondo" />
                                            <label> Apt/Condo</label>
                                        </div>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'mobileHome' === fields?.typeOfHome} className="form-check-input me-1" type="radio" name="typeOfHome" id="" value="mobileHome" />
                                            <label> Mobile Home</label>
                                        </div>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'handicapHousing' === fields?.typeOfHome} className="form-check-input me-1" type="radio" name="typeOfHome" id="" value="handicapHousing" />
                                            <label> Handicap Housing</label>
                                        </div>
                                        <div className='col-md-12'></div>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.handicapAccessible} name='handicapAccessible' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                    Handicap Accessible?
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-1 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'Yes' === fields?.handicapAccessibleValue} className="form-check-input me-1" type="radio" name="handicapAccessibleValue" id="" value="Yes" />
                                            <label> yes</label>
                                        </div>
                                        <div className="col-sm-1 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'No' === fields?.handicapAccessibleValue} className="form-check-input me-1" type="radio" name="handicapAccessibleValue" id="" value="No" />
                                            <label> No</label>
                                        </div>

                                        <div className='col-md-12'></div>
                                        <div className="col-sm-2 text-12 fw-bold">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.rampsElevators} name='rampsElevators' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                    (Ramps, Elevators)
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-1 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'Yes' === fields?.rampsElevatorsValue} className="form-check-input me-1" type="radio" name="rampsElevatorsValue" id="" value="Yes" />
                                            <label> yes</label>
                                        </div>
                                        <div className="col-sm-1 text-12 fw-bold">
                                            <input onChange={handleChange} checked={'No' === fields?.rampsElevatorsValue} className="form-check-input me-1" type="radio" name="rampsElevatorsValue" id="" value="No" />
                                            <label> No</label>
                                        </div>

                                        <div className='col-md-12'></div>
                                        <div className="col-sm-1 text-12 fw-bold">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.others2} name='others2' className="form-check-input me-1" type="checkbox" id="" />
                                                <label className="form-check-label text-11 fw-bold" htmlFor="">
                                                    Others
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 text-12 fw-bold">
                                            <input onChange={handleChange} name='other2value' value={fields?.other2value} type="text" className="pdfinput ms-1 me-1" id="" />
                                        </div>

                                        <div className='col-md-12'></div>

                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label">Equipment Trials:</label>
                                            <textarea onChange={handleChange} name='equipmentTrials' value={fields?.equipmentTrials} cols={3} rows={4} className="form-control form-control-sm" id="comments" />
                                        </div>

                                        <div className='col-md-12 mt-3'>
                                            <label htmlFor="name" className="form-label fw-bold">Section 1</label>
                                            <p className='text-12'>Are there any factors such as temperature, physical layout, surfaces, or obstacles that will render the MAE unusable in the patient's home? Reminder: The
                                                physical layout of the home is required to be documented if least costly alternative is ruled out.</p>
                                        </div>

                                        <div className="col-md-6">
                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.carpetThrowRugs} className="form-check-input" type="radio" name="carpetThrowRugs" id="carpetThrowRugs1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.carpetThrowRugs} className="form-check-input" type="radio" name="carpetThrowRugs" id="carpetThrowRugs1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>N/A</label>< br />
                                                    <input onChange={handleChange} checked={'Na' === fields?.carpetThrowRugs} className="form-check-input" type="radio" name="carpetThrowRugs" id="carpetThrowRugs1" value="Na" />
                                                </div>

                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <label> </label>< br />
                                                    <span className='fw-normal'>Carpet or Throw Rugs</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.looseUnevenFloors} className="form-check-input" type="radio" name="looseUnevenFloors" id="looseUnevenFloors1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.looseUnevenFloors} className="form-check-input" type="radio" name="looseUnevenFloors" id="looseUnevenFloors1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.looseUnevenFloors} className="form-check-input" type="radio" name="looseUnevenFloors" id="looseUnevenFloors1" value="Na" />
                                                </div>

                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Loose/Uneven floors</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.stairsSteps} className="form-check-input" type="radio" name="stairsSteps" id="stairsSteps1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.stairsSteps} className="form-check-input" type="radio" name="stairsSteps" id="stairsSteps1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.stairsSteps} className="form-check-input" type="radio" name="stairsSteps" id="stairsSteps1" value="Na" />
                                                </div>

                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>Stairs or Steps</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.wcRampsInsideOrOutsideTheHome} className="form-check-input" type="radio" name="wcRampsInsideOrOutsideTheHome" id="wcRampsInsideOrOutsideTheHome1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.wcRampsInsideOrOutsideTheHome} className="form-check-input" type="radio" name="wcRampsInsideOrOutsideTheHome" id="wcRampsInsideOrOutsideTheHome1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.wcRampsInsideOrOutsideTheHome} className="form-check-input" type="radio" name="wcRampsInsideOrOutsideTheHome" id="wcRampsInsideOrOutsideTheHome1" value="Na" />
                                                </div>

                                                <div className="col-sm-6 text-12 fw-bold">
                                                    <span className='fw-normal'>W/C ramps inside or outside the home</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.explainAccessOptions} className="form-check-input" type="radio" name="explainAccessOptions" id="explainAccessOptions1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.explainAccessOptions} className="form-check-input" type="radio" name="explainAccessOptions" id="explainAccessOptions1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.explainAccessOptions} className="form-check-input" type="radio" name="explainAccessOptions" id="explainAccessOptions1" value="Na" />
                                                </div>

                                                <div className="col-sm-4 text-12 fw-bold">
                                                    <span className='fw-normal'>Explain Access Options</span>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} name='explainAccessOptionsValue' value={fields?.explainAccessOptionsValue} type="text" className="pdfinput ms-1 me-1" id="" />
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.othersSection} className="form-check-input" type="radio" name="othersSection" id="othersSection1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.othersSection} className="form-check-input" type="radio" name="othersSection" id="othersSection1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.othersSection} className="form-check-input" type="radio" name="othersSection" id="othersSection1" value="Na" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <span className='fw-normal'>Others</span>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} name='othersSectionValue' value={fields?.othersSectionValue} type="text" className="pdfinput ms-1 me-1" id="" />
                                                </div>
                                            </div>


                                        </div>


                                        <div className='col-md-12 mt-3'>
                                            <label htmlFor="name" className="form-label fw-bold">Section 2</label>
                                            <p className='text-12'><span className='fw-bold'>Home Environment:</span> Does the patient's home provide adequate access between rooms, adequate maneuvering space, surfaces for the placement of MAE?</p>
                                        </div>

                                        <div className="col-md-10">
                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.caneCrutchesWalkerManualWheelchair} className="form-check-input" type="radio" name="caneCrutchesWalkerManualWheelchair" id="caneCrutchesWalkerManualWheelchair1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.caneCrutchesWalkerManualWheelchair} className="form-check-input" type="radio" name="caneCrutchesWalkerManualWheelchair" id="caneCrutchesWalkerManualWheelchair1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>N/A</label>< br />
                                                    <input onChange={handleChange} checked={'Na' === fields?.caneCrutchesWalkerManualWheelchair} className="form-check-input" type="radio" name="caneCrutchesWalkerManualWheelchair" id="caneCrutchesWalkerManualWheelchair1" value="Na" />
                                                </div>

                                                <div className="col-sm-9 text-12 fw-bold">
                                                    <label> </label>< br />
                                                    <span className='fw-normal'>Adequate access & maneuvering space for a cane, crutches, walker, Manual Wheelchair</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.povScooter} className="form-check-input" type="radio" name="povScooter" id="povScooter1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.povScooter} className="form-check-input" type="radio" name="povScooter" id="povScooter1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.povScooter} className="form-check-input" type="radio" name="povScooter" id="povScooter1" value="Na" />
                                                </div>

                                                <div className="col-sm-8 text-12 fw-bold">
                                                    <span className='fw-normal'>Adequate access & maneuvering space for POV/Scooter?</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.powerWheelchair} className="form-check-input" type="radio" name="powerWheelchair" id="powerWheelchair1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.powerWheelchair} className="form-check-input" type="radio" name="powerWheelchair" id="powerWheelchair1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.powerWheelchair} className="form-check-input" type="radio" name="powerWheelchair" id="powerWheelchair1" value="Na" />
                                                </div>

                                                <div className="col-sm-8 text-12 fw-bold">
                                                    <span className='fw-normal'>Adequate access & maneuvering space for Power Wheelchair?                                            </span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.bathroomFacilities} className="form-check-input" type="radio" name="bathroomFacilities" id="bathroomFacilities1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.bathroomFacilities} className="form-check-input" type="radio" name="bathroomFacilities" id="bathroomFacilities1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.bathroomFacilities} className="form-check-input" type="radio" name="bathroomFacilities" id="bathroomFacilities1" value="Na" />
                                                </div>

                                                <div className="col-sm-9 text-12 fw-bold">
                                                    <span className='fw-normal'>Limited access to bathroom facilities; (i.e. cannot get into bathroom, but there a bedside commode in bedroom)</span>
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.roomAccess} className="form-check-input" type="radio" name="roomAccess" id="roomAccess1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.roomAccess} className="form-check-input" type="radio" name="roomAccess" id="roomAccess1" value="No" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Na' === fields?.roomAccess} className="form-check-input" type="radio" name="roomAccess" id="roomAccess1" value="Na" />
                                                </div>

                                                <div className="col-sm-4 text-12 fw-bold">
                                                    <span className='fw-normal'>Explain in detail room access issue/options:</span>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} name='roomAccessValue' value={fields?.roomAccessValue} type="text" className="pdfinput ms-1 me-1" id="" />
                                                </div>
                                            </div>




                                        </div>

                                        <div className='col-md-12 mt-3'>
                                            <label htmlFor="name" className="form-label fw-bold">Measurements: (Required for Power Mobility Devices)</label>
                                        </div>

                                        <div className="col-md-8">
                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>Yes</label>< br />
                                                    <input onChange={handleChange} checked={'Yes' === fields?.entryDoors} className="form-check-input" type="radio" name="entryDoors" id="entryDoors1" value="Yes" />
                                                </div>

                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <label>No</label>< br />
                                                    <input onChange={handleChange} checked={'No' === fields?.entryDoors} className="form-check-input" type="radio" name="entryDoors" id="entryDoors1" value="No" />
                                                </div>

                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <label></label>< br />
                                                    <input onChange={handleChange} value={fields?.entryDoorsSl} name='entryDoorsSl' type="text" className="pdfinput col-sm-10 me-1" id="" />
                                                </div>

                                                <div className="col-sm-2 text-12">
                                                    <br />
                                                    <label> Entry Doors: </label>
                                                </div>

                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <br />
                                                    <input onChange={handleChange} value={fields?.entryDoorsValue} name='entryDoorsValue' type="text" className="pdfinput me-1" id="" />
                                                </div>

                                            </div>


                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.bedRoom} className="form-check-input" type="radio" name="bedRoom" id="bedRoom1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.bedRoom} className="form-check-input" type="radio" name="bedRoom" id="bedRoom1" value="No" />
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <label></label>
                                                    <input onChange={handleChange} value={fields?.bedRoomSl} name='bedRoomSl' type="text" className="pdfinput col-sm-10 me-1" id="" />
                                                </div>
                                                <div className="col-sm-2 text-12">
                                                    <label> Bed Room: </label>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} value={fields?.bedRoomValue} name='bedRoomValue' type="text" className="pdfinput me-1" id="" />
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.kitchen} className="form-check-input" type="radio" name="kitchen" id="kitchen1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.kitchen} className="form-check-input" type="radio" name="kitchen" id="kitchen1" value="No" />
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <label></label>
                                                    <input onChange={handleChange} name='kitchenSl' value={fields?.kitchenSl} type="text" className="pdfinput col-sm-10 me-1" id="" />
                                                </div>
                                                <div className="col-sm-2 text-12">
                                                    <label> Kitchen: </label>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} value={fields?.kitchenValue} name='kitchenValue' type="text" className="pdfinput me-1" id="" />
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.bathroom} className="form-check-input" type="radio" name="bathroom" id="bathroom1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.bathroom} className="form-check-input" type="radio" name="bathroom" id="bathroom1" value="No" />
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <label></label>
                                                    <input onChange={handleChange} value={fields?.bathroomSl} name='bathroomSl' type="text" className="pdfinput col-sm-10 me-1" id="" />
                                                </div>
                                                <div className="col-sm-2 text-12">
                                                    <label> Bathroom: </label>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} value={fields?.bathroomValue} name='bathroomValue' type="text" className="pdfinput me-1" id="" />
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.hallways} className="form-check-input" type="radio" name="hallways" id="hallways1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.hallways} className="form-check-input" type="radio" name="hallways" id="hallways1" value="No" />
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <label></label>
                                                    <input onChange={handleChange} value={fields?.hallwaysSl} name='hallwaysSl' type="text" className="pdfinput col-sm-10 me-1" id="" />
                                                </div>
                                                <div className="col-sm-2 text-12">
                                                    <label> Hallways: </label>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} value={fields?.hallwaysValue} name='hallwaysValue' type="text" className="pdfinput me-1" id="" />
                                                </div>
                                            </div>

                                            <div className='row g-1 mb-1'>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'Yes' === fields?.otherRooms} className="form-check-input" type="radio" name="otherRooms" id="otherRooms1" value="Yes" />
                                                </div>
                                                <div className="col-sm-1 text-12 fw-bold">
                                                    <input onChange={handleChange} checked={'No' === fields?.otherRooms} className="form-check-input" type="radio" name="otherRooms" id="otherRooms1" value="No" />
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <label></label>
                                                    <input onChange={handleChange} value={fields?.otherRoomsSl} name='otherRoomsSl' type="text" className="pdfinput col-sm-10 me-1" id="" />
                                                </div>
                                                <div className="col-sm-2 text-12">
                                                    <label> Other Rooms: </label>
                                                </div>
                                                <div className="col-sm-2 text-12 fw-bold">
                                                    <input onChange={handleChange} value={fields?.otherRoomsValue} name='otherRoomsValue' type="text" className="pdfinput me-1" id="" />
                                                </div>
                                            </div>



                                        </div>

                                        <div className='col-md-12 mt-3'>
                                            <label htmlFor="name" className="form-label fw-bold">Supplier Attestation:</label>
                                        </div>


                                    </div>

                                    <div className="row g-1">
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.assessmentPerformedVerballyCheck} name='assessmentPerformedVerballyCheck' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    The home assessment was performed verbally with the patient/caregiver and based upon this information the patient's home will accommodate the
                                                    following MAE(s):(Check all that apply)
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.completedPreliminaryAssessmentCheck} name='completedPreliminaryAssessmentCheck' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    I have completed a preliminary assessment of the patient's home and conclude based upon this information the patient's home will accommodate the
                                                    following MAE(s): (Check all that apply)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-1">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.applyCane} name='applyCane' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    Cane
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-1">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.applyCrutches} name='applyCrutches' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    Crutches
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-1">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.applyWalker} name='applyWalker' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    Walker
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.applyManualWheelchair} name='applyManualWheelchair' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    Manual Wheelchair
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.applyPovScooter} name='applyPovScooter' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    POV/Scooter
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <div className="form-check">
                                                <input onChange={handleChange} checked={fields?.applyPowerWheelchair} name='applyPowerWheelchair' className="form-check-input" type="checkbox" id="" />
                                                <label className="form-check-label text-12" htmlFor="">
                                                    Power Wheelchair
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <CustomDatepicker
                                                title="Date of Home Assessment"
                                                name="dateOfHomeAssessment"
                                                value={fields?.dateOfHomeAssessment}
                                                onChange={handleChange}
                                                divClassName="form-check-label text-12"
                                            />
                                        </div>
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

export default PatientHomeAssessment;