import AutocompleteComponent from '@/components/common/autocompleteComponent';
import React, { useEffect, useState } from 'react';
import npi from "../../../common/api/npi";
import './custom.css';

const optionLabelArr = {
    procedureCode: "Code",
    itemProcedureCodeDesc: "Description"
}

function Home() {
    const [option, setOption] = useState([]);
    // const [field, setField] = useState('');
    // const [flag, setFlag] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        npi.GET_ALL_NPI()
            .then(response => setOption(response.data.data))
            .catch(error => console.log(error));
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(event.target);
    }

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
                                        {
                                            option.length > 0 ? <AutocompleteComponent
                                                optArray={option}
                                                name="npi"
                                                label="NPM"
                                                optionLabelValue="procedureCodeId"
                                                optionLabelTitle="itemProcedureCodeDesc"
                                            optionLabelArr={optionLabelArr}
                                            // handleChange={handleChange}
                                            />
                                                :
                                                null
                                        }

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