
import React, { useEffect } from 'react';
/* @ts-ignore */
import $ from "jquery";
// import SaveModal from './saveModalComponents';
import dataTable from "../../common/dataTableComponent";
/* @ts-ignore */
const dataTableObj = new dataTable();

const dataTablefield = [
  {name: 'ern', fieldName: '', type: 'link' },
  {name: 'eob', fieldName: '', type: 'link' },
  {name: 'erndate', fieldName: 'ERN Date', type: 'default' },
  {name: 'insurance', fieldName: 'Insurance', type: 'default' },
  {name: 'traceNumber', fieldName: 'Trace Number', type: 'default' },
  {name: 'deposit', fieldName: 'Deposit', type: 'default' },
  {name: 'postDate', fieldName: 'Post Date', type: 'default' },
  {name: 'depositAmount', fieldName: 'Deposit Amount', type: 'default' },
  {name: 'balance', fieldName: 'Balance', type: 'default' },
  {name: 'medicare', fieldName: 'Medicare',  type: 'checkbox' },
  {name: 'action', fieldName: 'Action(s)', type: 'button', property: [
    {functionName: 'handleChangeEdit', icon: 'edit', params:'id'},
    {functionName: 'handleChangeDel', icon: 'del', params:'id'}
  ] },
]

const data = [
  {
    id: 1,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  },
  {
    id: 2,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  },
  {
    id: 3,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  },
  {
    id: 4,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  },
  {
    id: 5,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  },
  {
    id: 6,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  },
  {
    id: 7,
    ern: "ERN",
    eob: "EOB",
    erndate: "07/17/2023",
    insurance: "Aetna",
    traceNumber: "88230100101270",
    deposit: "227850",
    postDate: "--",
    depositAmount: "$37.68",
    balance: "$0.00",
    medicare: "medicare"
  }
 
  
]

const Search = () =>{
  useEffect(()=>{
    dataTableObj.returnResetTable(null, true, 1, 'desc', [], 'my-search');
  },[]);
  const handleModal = () =>{
    $("#myModal").draggable({
      handle: ".modal-header"
  });

   
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
        <div className='row'>
          <div className='col-md-6'><h1>Search <span><i className="bi bi-play-fill text-dark"></i> ERNs</span></h1></div>
          <div className='col-md-6'></div>      
        </div>
        </div>
        <section>
          <div className='col-12'>
            <div className='card pb-0 bg-grey-light'>
              <div className='card-body pb-0'>
                <h5 className='card-title'>Search Criteria</h5>
                <form className="row g-1">
                    <div className="col-md-2">
                      <label htmlFor="depositID" className="form-label">Deposit ID</label>
                      <input type="text" className="form-control form-control-sm" id="depositID"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputName5" className="form-label">Deposit Status</label>
                      <select id="inputState" className="form-select form-select-sm">
                      <option selected>Choose Status...</option>
                      <option>All</option>
                    </select>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="insurance" className="form-label">Insurance</label>
                      <input type="text" className="form-control form-control-sm" id="insurance"/>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Trace Number</label>
                      <input type="text" className="form-control form-control-sm" id="traceno"/>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="fundsconfirmed" className="form-label">Funds Confirmed</label>
                      <select id="inputState" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>Both</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="payersource" className="form-label">Payer Source</label>
                      <select id="payersource" className="form-select form-select-sm">
                      <option selected>Choose...</option>
                      <option>Both</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="traceno" className="form-label">ERN Date</label>
                      <div className="input-group mb-3">
                      <input type="date" className="form-control form-control-sm" placeholder="Date" aria-label=""/>
                      <span className="input-group-text">to</span>
                      <input type="date" className="form-control form-control-sm" placeholder="Date" aria-label=""/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="traceno" className="form-label">Post Date</label>
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
              <div className='col-md-12'>
                 <div className='text-right padding-5'> 
                    <button className='btn btn-sm btn-success pull-right' onClick={handleSave}><i className='bi bi-person-plus-fill'></i> New Patient </button>
                 </div>
              </div>
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

export default Search;
