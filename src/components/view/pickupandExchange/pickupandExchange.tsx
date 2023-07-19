"use client"
import React, { useEffect, useState } from 'react';
/* @ts-ignore */
import $ from "jquery";
// import SaveModal from './saveModalComponents';
import dataTable from "../../common/dataTableComponent";
/* @ts-ignore */
const dataTableObj = new dataTable();


const dataTablefield = [
  {name: 'PickupExchangeid', fieldName: 'Id', type: 'link' },
  {name: 'type', fieldName: 'Type', type: 'default' },
  {name: 'soid', fieldName: 'Sales Order Id', type: 'default' },
  {name: 'patientid', fieldName: 'Patient Id', type: 'default' },
  {name: 'scheduleDate', fieldName: 'Schedule Date', type: 'default' },
  {name: 'status', fieldName: 'Status', type: 'default' },
  {name: 'agentId', fieldName: 'Agent Id', type: 'default' },
  {name: 'action', fieldName: 'Action(s)', type: 'button', property: [
    {functionName: 'handleChangeEdit', icon: 'edit', params:'id'},
    {functionName: 'handleChangeDel', icon: 'del', params:'id'}
  ] },
]

const data = [
  {
    id: 1,
    PickupExchangeid: "POE100000039",
    type: "Exchange",
    soid: "1252",
    patientid: "PAT0000011",
    scheduleDate: "07/17/2023",
    status: "Initiated",
    agentId: "AG100004"
  },
  {
    id: 2,
    PickupExchangeid: "POE100000002",
    type: "Pickup",
    soid: "1246",
    patientid: "PAT0000016",
    scheduleDate: "05/30/2023",
    status: "Scheduled",
    agentId: "AG100002"
  }
 
  
]

const HomeComponents = () =>{
  
  useEffect(()=>{
    dataTableObj.returnResetTable(null, true, 1, 'desc', [], 'my-search');
  },[]);
  const handleModal = () =>{
    $("#myModal").draggable({
      handle: ".modal-header"
  });

  const[jsondata,setData]=useState([])
  useEffect(()=>{
      fetch("http://localhost:8080/services/delivery/api/pickupExchange/getAllPickupExchangeData").then((result)=>{
          result.json().then((data)=>{
              setData(data)
          })
      })
  },[])
  console.warn(jsondata)
   
  }
  const handleChangeEdit = (id: string) => {
    /* @ts-ignore */
    window.$('#myModal').modal('show');
  }
  const handleChangeDel = (id : string) =>{
    console.log('handleChangeDel', id)
  }

  const handleSave = () =>{
    /* @ts-ignore */
    window.$('#myModal').modal('show');
    /* @ts-ignore */
    window.$("#myModal").draggable({
      handle: ".modal-header"
  });
  }

  return (
    <React.Fragment>
    <main id="main" className="main">
        <div className="pagetitle">
        <div className="pagetitle">
            <h1>Pickup And Exchange</h1>
        </div>
        </div>
        <section>
          <div className='col-12'>
            <div className='card pb-0 bg-grey-light'>
              <div className='card-body pb-0'>
                <h5 className='card-title'>Search Criteria</h5>
                <form className="row g-1">
                    <div className="col-md-2">
                      <label htmlFor="UUID" className="form-label">UUID</label>
                      <input type="text" className="form-control form-control-sm" id="id_UUID"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="PickupExchangeNo" className="form-label">Pickup Exchange No</label>
                      <input type="text" className="form-control form-control-sm" id="id_peckupExchangeNo"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="sono" className="form-label">Sales Order Number</label>
                      <input type="text" className="form-control form-control-sm" id="id_salesOrderNo"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="patientIdNo" className="form-label">Patient Id Number</label>
                      <input type="text" className="form-control form-control-sm" id="id_patientIdNo"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="agentIdNo" className="form-label">Agent Id Number</label>
                      <input type="text" className="form-control form-control-sm" id="id_agentIdNo"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="payersource" className="form-label">Pickup Exchange Status</label>
                      <select id="id_pickupExchangeStatus" className="form-select form-select-sm">
                      <option selected>Select</option>
                      <option>Scheduled</option>
                      <option>Initiated</option>
                      <option>Completed</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="traceno" className="form-label">Schedule Date</label>
                      <div className="input-group mb-3">
                      <input type="date" className="form-control form-control-sm" placeholder="Date" aria-label=""/>
                      <span className="input-group-text">to</span>
                      <input type="date" className="form-control form-control-sm" placeholder="Date" aria-label=""/>
                      </div>
                    </div>
                </form>

              </div>
              <div className="card-footer text-center">
                  <button className='btn btn-sm btn-info'><i className="bi bi-search"></i> Search</button>
                  <button className='btn btn-sm btn-secondary'><i className="bi bi-reply"></i> Reset</button>
              </div>

            </div>
          
          </div>

          <div className='col-12'>
          <div className='card'>
            <div className='card-body pb-0'>
              {/* <SaveModal/> */}
              <div className="col-md-12 table-responsive">
                 {dataTableObj.returnTable(dataTablefield, data, {handleChangeEdit, handleChangeDel}, 'my-search')}
              </div>
            </div>
          </div>
              
          </div>
        </section>
        
      </main>
</React.Fragment>
      
  )

}

export default HomeComponents;
