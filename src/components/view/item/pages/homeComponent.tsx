import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { callItemListApi, callItemGetByApi, itemStoreStateReset } from '../features/itemService';
import { useDispatch, useSelector } from 'react-redux'
import { CommonItemConfig } from '../commonItemConfig';
import executeArgs from '@/common/executeArgs';
// import {storeStateReset} from '../features/itemSlice'

import dataTable from "../../../common/dataTableComponent";
/* @ts-ignore */
const dataTableObj = new dataTable();

interface ItemState {
    itemId: number,
    itemNumber: string,
    manufacturerName: string,
    weight: string,
}

const dataTablefield = [
    {name: 'itemNumber', fieldName: 'Item Number' },
    {name: 'manufacturerName', fieldName: 'Manufacturer Name' },
    {name: 'weight', fieldName: 'Weight' }
  ]

function Home() {
    const dispatch = useAppDispatch()
    const itemsList = useAppSelector((state) => state.item.itemsList);
    const getItem = useAppSelector((state) => state.item.getItem);
    useEffect(() => {
        /* @ts-ignore */
        dispatch(callItemListApi({input: executeArgs(CommonItemConfig.COMPONENT_ITEM, CommonItemConfig.GET_ALL_ITEMS, CommonItemConfig.METHOD_TYPE_GET),
            title: 'items'
        }))
        /* @ts-ignore */
        dispatch(callItemGetByApi({input: executeArgs(CommonItemConfig.COMPONENT_ITEM, `${CommonItemConfig.GET_ITEM_BY_ID}?itemId=6`, CommonItemConfig.METHOD_TYPE_GET),
            title: 'item'
        }))
    }, [])

    useEffect(()=>{
        dataTableObj.returnResetTable(null, true, 1, 'desc', [], 'my-item');
      },[itemsList]);

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
                                    <div className='col-md-12'>
                                        {
                                            !!itemsList && itemsList.length > 0 ?
                                                // <table className="table table-striped">
                                                //     <thead>
                                                //         <tr>
                                                //             <th scope="col">Item Number</th>
                                                //             <th scope="col">Manufacturer Name</th>
                                                //             <th scope="col">weight</th>
                                                //         </tr>
                                                //     </thead>
                                                //     <tbody>
                                                //         {
                                                //             itemsList?.map((item: ItemState) => <tr key={item.itemId}>
                                                //                 <td>{item.itemNumber}</td>
                                                //                 <td>{item.manufacturerName}</td>
                                                //                 <td>{item.weight}</td>
                                                //             </tr>)
                                                //         }
                                                //     </tbody>
                                                // </table>
                                                dataTableObj.returnTable(dataTablefield, itemsList, {}, 'my-item')
                                                :
                                                null
                                        }
                                    </div>
                                    <div className='col-md-4'><button onClick={() => dispatch(itemStoreStateReset({ name: 'getItem', data: {} }))}>reset</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;