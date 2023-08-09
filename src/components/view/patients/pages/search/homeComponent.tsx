import React from "react";
import Link from "next/link";
// import {windowPopUp} from "../../../../common/windowPopUp";
import CustomDatepicker from "@/components/common/datepickerComponent";

const Patientserach = () => {
  const newPatient = () => {
    // windowPopUp('newpatient', "L");
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <div className="row pb-0 m-0 p-0">
          <div className="col-md-6 p-0">
            <h1>Patient Search</h1>
          </div>

          <div className="col-md-6  fw-bold">
            <button
              onClick={newPatient}
              className="btn btn-orange p-1 btn-flat pull-right"
            >
              <i className="bi bi-person-plus"></i> New Patient
            </button>
            <Link
              href="/patientlist"
              className="btn p-1 btn-navyblue btn-flat me-1 pull-right"
            >
              <i className="bi bi-search me-1"></i> Search
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className="row pb-0">
          <div className="col-lg-6">
            <div className="card pb-0 ">
              <div className="card-header bg-grey-light text-13"> Branch</div>
              <form className="g-1">
                <div className="card-body pb-2 bg-secondary">
                  <div className="row g-1">
                    <div className="col-md-12 pt-2">
                      <select
                        id="payersource"
                        className="form-select form-select-sm text-13"
                      >
                        <option selected>Choose...</option>
                        <option>--</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="card-header bg-grey-light text-13">
                  {" "}
                  Demographic
                </div>
                <div className="card-body pb-0 mb-4">
                  <div className="row g-1">
                    <div className="col-md-12">
                      <label htmlFor="patientID" className="form-label">
                        Patient ID
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="depositID"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="insurance" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="fname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="insurance" className="form-label">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="fname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputName5" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="lname"
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomDatepicker
                        title="Start Date"
                        name="startDate"
                        // value={startDate}
                        // onChange={_handleChange}
                        isError={true}
                        isRequired={true}
                        // startDate={startDate}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ssn" className="form-label">
                        SSN no.
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="ssn"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card pb-0 ">
              <div className="card-header bg-grey-light text-13"> Address</div>
              <div className="card-body pb-0 mb-4">
                <form className="row g-1">
                  <div className="col-md-12">
                    <label htmlFor="deliveryaddress" className="form-label">
                      Address 1
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="deliveryaddress"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="deliveryaddress" className="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="deliveryaddress2"
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="postalcode" className="form-label">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="postalcode"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <select
                      id="state"
                      className="form-select form-select-sm text-13"
                    >
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select
                      id="state"
                      className="form-select form-select-sm text-13"
                    >
                      <option selected>Choose...</option>
                      <option>--</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="phone"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/patientlist" className="btn btn-info">
              <i className="bi bi-search"></i> Search
            </Link>
            &nbsp;
            <button className="btn btn-secondary">
              <i className="bi bi-reply"></i> Reset
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Patientserach;
