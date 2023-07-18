
import React, { useEffect, useState } from 'react';
import Link from "next/link";
// import { windowPopUp } from "../../components/windowPopUp"
function HomeComponents() {
  const _newPatient = () => {
    // windowPopUp('newpatient', "L");
  }
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <div className='row pb-0 m-0 p-0'>
          <div className='col-md-6 p-0'>
            <h1>Patient Search</h1>
          </div>
          <div className='col-md-6  fw-bold'>
            <button onClick={_newPatient} className='btn btn-orange p-1 btn-flat pull-right'><i className='bi bi-person-plus'></i> New Patient</button>
            <Link href="/patientlist" className='btn p-1 btn-navyblue btn-flat me-1 pull-right'><i className='bi bi-search me-1'></i> Search</Link>
          </div>
        </div>
      </div>
      <section>
        <div className='row pb-0'>
          <div className='col-lg-4'>
            <div className='card pb-0 '>
              <div className='card-header'> Name</div>
              <div className='card-body pb-0 mb-4'>
                <form className="row g-1">
                  <div className="col-md-12">
                    <label htmlFor="patientID" className="form-label">Patient ID</label>
                    <input type="text" className="form-control form-control-sm" id="depositID" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputName5" className="form-label">Last Name</label>
                    <input type="text" className="form-control form-control-sm" id="lname" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="insurance" className="form-label">First Name</label>
                    <input type="text" className="form-control form-control-sm" id="fname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="bdate" className="form-label">Birth Date</label>
                    <input type="date" className="form-control form-control-sm" id="bdate" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="ssn" className="form-label">Last 4 of SSN</label>
                    <input type="text" className="form-control form-control-sm" id="ssn" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="customertype" className="form-label">Customer Type</label>
                    <select id="payersource" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Psystemkey" className="form-label">Prior System Key</label>
                    <input type="text" className="form-control form-control-sm" id="Psystemkey" />

                  </div>
                  <div className="col-md-6">
                    <label htmlFor="facility" className="form-label">Facility</label>
                    <input type="text" className="form-control form-control-sm" id="facility" />

                  </div>
                  <div className="col-md-6">
                    <button className='btn btn-sm btn-outline-dark mt-4'><i className="bi bi-search"></i></button>&nbsp;
                    <button className='btn btn-sm btn-outline-danger mt-4'><i className="bi bi-trash-fill"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card pb-0 '>
              <div className='card-header'> Address</div>
              <div className='card-body pb-0 mb-4'>
                <form className="row g-1">
                  <div className="col-md-12">
                    <label htmlFor="deliveryaddress" className="form-label">Delivery Address</label>
                    <input type="text" className="form-control form-control-sm" id="deliveryaddress" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control form-control-sm" id="deliveryaddress2" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control form-control-sm" id="city" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="state" className="form-label">State</label>
                    <select id="state" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="county" className="form-label">County</label>
                    <select id="county" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="postalcode" className="form-label">Postal Code</label>
                    <input type="text" className="form-control form-control-sm" id="postalcode" />

                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control form-control-sm" id="phone" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card pb-0 '>
              <div className='card-header'> Misc Information</div>
              <div className='card-body pb-0 mb-4'>
                <form className="row g-1">
                  <div className="col-md-12">
                    <label htmlFor="branch" className="form-label">Branch</label>
                    <select id="branch" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="accountnumber" className="form-label">Account Number</label>
                    <input type="text" className="form-control form-control-sm" id="accountnumber" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="accountgroup" className="form-label">Account Group</label>
                    <select id="accountgroup" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="sgroup" className="form-label">PT Security Group</label>
                    <select id="sgroup" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user1" className="form-label">User 1</label>
                    <input type="text" className="form-control form-control-sm" id="postalcode" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user2" className="form-label">User 2</label>
                    <input type="text" className="form-control form-control-sm" id="postalcode" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user3" className="form-label">User 3</label>
                    <input type="text" className="form-control form-control-sm" id="postalcode" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user4" className="form-label">User 4</label>
                    <input type="text" className="form-control form-control-sm" id="postalcode" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card pb-0 '>
              <div className='card-header'> Billing</div>
              <div className='card-body pb-0 mb-4'>

                <form className="row g-1">
                  <div className="col-md-6">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control form-control-sm" id="mobile" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fax" className="form-label">Fax</label>
                    <input type="text" className="form-control form-control-sm" id="fax" />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="text" className="form-control form-control-sm" id="email" />
                  </div>

                </form>

              </div>


            </div>

          </div>
          <div className='col-lg-4'>
            <div className='card pb-0 '>
              <div className='card-header'> CMN</div>
              <div className='card-body pb-0 mb-4'>

                <form className="row g-1">
                  <div className="col-md-12">
                    <label htmlFor="cmn" className="form-label">CMN Auto Renewal</label>
                    <select id="cmn" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                </form>

              </div>


            </div>

          </div>

          <div className='text-center'>
            <Link href="/patientlist" className='btn btn-info'><i className='bi bi-search'></i> Search</Link>&nbsp;
            <button className='btn btn-secondary'><i className='bi bi-reply'></i> Reset</button>
          </div>


        </div>
      </section>

    </main>
  )
}

export default HomeComponents