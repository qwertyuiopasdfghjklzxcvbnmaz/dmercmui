"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import dataTable from "../../common/dataTableComponent"
import SaveComponent from './saveComponent';
/* @ts-ignore */
const dataTableObj = new dataTable();
const dataTablefield = [
    { name: 'title', fieldName: 'Title', type: 'link', linkUrl: 'tododetails', data: ['id']},
    { name: 'price', fieldName: 'Price', type: 'default' },
    { name: 'discountPercentage', fieldName: 'Discount Percentage', type: 'default' },
    { name: 'rating', fieldName: 'Rating', type: 'default' },
    { name: 'stock', fieldName: 'Stock', type: 'default' },
    { name: 'brand', fieldName: 'Brand', type: 'default' },
    { name: 'category', fieldName: 'category', type: 'default' },
]

function Todo({ todos }: any) {
    // const [state, setState] = useState(todos?.products.filter((item: any) => item?.category === 'groceries'));
    const [state, setState] = useState(todos?.products);

    useEffect(() => {
        dataTableObj.returnResetTable(null, true, 1, 'desc', [], 'my-search');
    }, []);

    const handleSave = () =>{
        console.log('dfdfdfj')
        /* @ts-ignore */
        window.$('#exampleModal').modal('show');
      }

    return (
        <>
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Todos</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='col-md-12'>
                                    <div className='text-right padding-5'>
                                        <button className='btn btn-sm btn-success pull-right' onClick={handleSave}><i className='bi bi-person-plus-fill'></i> New Patient </button>
                                    </div>
                                </div>
                                <div className="col-md-12 table-responsive">
                                    {dataTableObj.returnTable(dataTablefield, state, {}, 'my-search')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <SaveComponent />
        </>
    )
}

export default Todo