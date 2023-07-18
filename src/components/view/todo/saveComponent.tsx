import React, {useState} from 'react';
import CustomSelect from '@/components/common/customSelect';
import Validation from '@/components/common/validationComponent';

const alphanumeric = /^[a-zA-Z0-9]+$/;

const saveStateObject = {
    // isSave: false,
    // isOpenModal: false,
    // isEdit: false,
    isError: 0
}

const data = [
    {id: 1, title: 'India'},
    {id: 2, title: 'UK'},
    {id: 3, title: 'USA'},
]

const initialFields = {
    title: '',
    price: '',
    email: '',
    url: '',
    vehicle: true
}

const requiredFields = [
    { fieldName: 'title', fieldType: 'default' },
    { fieldName: 'price', fieldType: 'regExpNotRequired', regExp: alphanumeric },
    { fieldName: 'email', fieldType: 'email' },
    { fieldName: 'url', fieldType: 'url' },
    { fieldName: 'vehicle', fieldType: 'checkbox' },
]


function SaveComponent() {
    const [fields, setFields] = useState({...initialFields});
    const [stateObject, setStateObject] = useState(saveStateObject);
    const handleRedirect = () => {
        /* @ts-ignore */
        window.$('#exampleModal').modal('hide');
    }

    const _handleChange = (event: any) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        const {name, value} = event.target;
        const _fields = {...fields};
        /* @ts-ignore */
        _fields[name] = value;
        setFields(_fields);
    }

    const _handleSumit = () =>{
        /* @ts-ignore */
        const validationObj = new Validation();
        let submitStatus = validationObj.fieldValidation(fields, requiredFields);
        if(submitStatus === 0)
            setStateObject({...stateObject, isError: 1})
        else
            setStateObject({...stateObject, isError: 0})
        console.log({submitStatus});
    }

    return (
        <div className="modal fade" id="exampleModal" >

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='col-lg-12'>
                            <div className='card pb-0 bg-offwhite'>
                                <div className='card-header bg-blue text-white'> Add Item</div>
                                <div className='card-body pb-0 mb-2'>
                                        <div className="col-md-12">
                                            <label htmlFor="primary" className="form-label">Title </label>
                                            <input onChange={_handleChange} type="text" name='title' className="form-control form-control-sm" id="primary" />
                                            {/* @ts-ignore */}
                                            <Validation data={{field: "Title", value: fields.title || '', isError: stateObject.isError, validationType: 'field'}} />
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label htmlFor="ordering" className="form-label">Price</label>
                                            <input onChange={_handleChange} name='price' type="text" className="form-control form-control-sm" id="ordering" />
                                            {/* @ts-ignore */}
                                            <Validation data={{field: "Price", value: fields.price || '', isError: stateObject.isError, validationType: 'regExpNotRequired', regExp: alphanumeric}} />
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="primary" className="form-label">E-mail </label>
                                            <input onChange={_handleChange} type="text" name='email' className="form-control form-control-sm" id="primary" />
                                            {/* @ts-ignore */}
                                            <Validation data={{field: "E-mail", value: fields.email || '', isError: stateObject.isError, validationType: 'email'}} />
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="primary" className="form-label">Url </label>
                                            <input onChange={_handleChange} type="text" name='url' className="form-control form-control-sm" id="primary" />
                                            {/* @ts-ignore */}
                                            <Validation data={{field: "Url", value: fields.url || '', isError: stateObject.isError, validationType: 'urlField'}} />
                                        </div>

                                        <div className="col-md-12">
                                            {/* @ts-ignore */}
                                            <input type="checkbox" id="vehicle" name="vehicle" value={fields.vehicle} />
                                            <label htmlFor="vehicle"> I have a bike</label>
                                            {/* @ts-ignore */}
                                            <Validation data={{field: "Bike", value: fields.vehicle || '', isError: stateObject.isError, validationType: 'checkbox'}} />
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label htmlFor="" className="form-label">Discount in Percentage</label>
                                            <input name='discountPercentage' type="text" className="form-control form-control-sm" id="" />
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <CustomSelect
                                                name='country'
                                                label='Country Name'
                                                isRequired= {true}
                                                optArray={data}
                                                handleChange={_handleChange}
                                            />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={_handleSumit}  type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SaveComponent