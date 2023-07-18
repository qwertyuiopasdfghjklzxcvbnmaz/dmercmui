import AutocompleteOnKeyComponent from '@/components/common/autocompleteOnKeyComponent';
import React from 'react';
import npi from "../../../common/api/npi";
import './custom.css';

const optionLabelArr = {
    procedureCode: "Code",
    itemProcedureCodeDesc: "Description"
}

function Home() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Items</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <AutocompleteOnKeyComponent 
                                            endPoint={npi.GET_NPI_BY_NAME}
                                            name="npi"
                                            label="NPM"
                                            optionLabelValue="procedureCodeId"
                                            optionLabelTitle="itemProcedureCodeDesc"
                                            optionLabelArr={optionLabelArr}
                                        // handleChange={handleChange}
                                        />
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