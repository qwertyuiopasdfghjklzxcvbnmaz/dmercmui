"use client"
import React, {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counterSlice';
import {useAppSelector, useAppDispatch} from '../../../hooks';

import CustomDatepicker from '../../../components/common/datepickerComponent';

import { toast } from 'react-toastify';

import {showNotify} from './showNotify';



// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function Page() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch()

    const [startDate, setStartDate] = useState(new Date().toISOString());

    const _handleChange = (event: any) =>{
        setStartDate(event.target.value)
    }



    // const notify = () => toast.success("Wow so easy! dsfdsf");
    const notify = () => showNotify('Nabarun manager', 'warn');

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Redux Toolkit</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(increment())}
                                        >
                                            Increment
                                        </button>
                                        <span> {count} </span>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrement())}
                                        >
                                            Decrement
                                        </button>
                                    </div>
                                    <div className='col-md-4'>
                                        {/* <CustomDatepicker 
                                            title="Star date"
                                        /> */}
                                        <CustomDatepicker
                                            title="Start Date"
                                            name="startDate"
                                            value={startDate}
                                            onChange={_handleChange}
                                            isError={true}
                                            isRequired={true}
                                            startDate={startDate}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <button onClick={notify}>Notify!</button>
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

export default Page