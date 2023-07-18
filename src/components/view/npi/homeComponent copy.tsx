import AutocompleteComponent from '@/components/common/autocompleteComponent';
import React, { useEffect, useState } from 'react';
import api from '../../../utils/interceptor';
import npi from "../../../common/api/npi";
import './custom.css';

const data = [
    {
        "procedureCodeId": 3,
        "itemProcedureCodeDesc": "Sudip ",
        "status": "active",
        "createdById": 3,
        "createdDate": null,
        "updatedDate": null,
        "procedureCode": "E0110",
        "createdByName": null,
        "updatedByName": null,
        "updatedById": null,
        "itemProcedureCodeUuid": "29fb77a1-58cc-4582-ae1b-a736c5129d0b",
        "name": "sudip"
    },
    {
        "procedureCodeId": 5,
        "itemProcedureCodeDesc": "Abhijit how are you",
        "status": "active",
        "createdById": 3,
        "createdDate": null,
        "updatedDate": null,
        "procedureCode": "E0112",
        "createdByName": null,
        "updatedByName": null,
        "updatedById": null,
        "itemProcedureCodeUuid": "83709950-e0c3-4868-a5a6-bf56f60fad62",
        "name": "abhijit"
    },
    {
        "procedureCodeId": 7,
        "itemProcedureCodeDesc": "Abhay how are you dfgdsfdf ?",
        "status": "active",
        "createdById": 3,
        "createdDate": null,
        "updatedDate": null,
        "procedureCode": "E0114",
        "createdByName": null,
        "updatedByName": null,
        "updatedById": null,
        "itemProcedureCodeUuid": "4e789d22-d82d-4fa6-b336-078392328f01",
        "name": "abhay"
    }
]

const data12 = [
    {id: 1, title: 'India'},
    {id: 2, title: 'UK'},
    {id: 3, title: 'USA'},
]

const optionLabelArr = {
    procedureCode: "Code",
    itemProcedureCodeDesc: "Description"
}

function Home() {
    const [option, setOption] = useState([]);
    // const [field, setField] = useState('');
    // const [flag, setFlag] = useState(false);
    const [test, setTest] = useState([]);

    // useEffect(() => {
        // const token = ''
        // const headers = { 
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${token}` 
        //  }
        // fetch('https://dummyjson.com/products', { headers })
        // .then(response => response.json())
        // .then(data => setTest(data));
    //     console.log('useEffect')
    // }, [])

    useEffect(() => {
        // const time = '5:20'
        // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJNdlltMzVTYjdlZ1dnMXdxbWI5T09HWGpNU2dEc1h2c2FMNUlqRU9NbVpzIn0.eyJleHAiOjE2ODI2MTM5ODcsImlhdCI6MTY4MjU5NTk4NywianRpIjoiNWUyNmFhMzEtYThlMi00N2IzLTllMjItNWFmZGMyNDVhM2ZkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL2F1dGgvcmVhbG1zL2poaXBzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY3NDJiYTZmLTFkOGEtNGRlYy1iZjE1LWUwMmRhYjUwODI4MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImludGVybmFsIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE3Mi4xOC4wLjEiLCJjbGllbnRJZCI6ImludGVybmFsIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWludGVybmFsIiwiY2xpZW50QWRkcmVzcyI6IjE3Mi4xOC4wLjEifQ.G9wLEfUFgHREfCO4dmt4yMj5wouFvloLO4JVKqeJ1b5aD0y25tanneLUqHSmdgrfvpr8HGW67yDFPHBnQ8aSeNylZ3JXI2jErtukNNQLhm0mJNqUfQAgOs6PIAFCNkJotY782AGWf8OnvNgiIvYbWtyJERF2l50gURP6NtubcQlPJuTgluYzyhw-qn-EGNSIqUCsOkxRVSEXNpXe-yZzpDcrIfdlO5keh7nSoKrqkq1KhZFnI8iWnzjVtcfDhwOBRDIv6q_V7C0jm2_20q6pYvbuHeIfK40vGY1K5GusP9PkrKjY3VUrd5kmjdg0KI3uSn9v0ZDRG33AAEyC-hdv-g'
        // const headers = { 
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${token}` 
        //  }
         
        // // fetch('http://localhost:8080/services/items/api/getProcedureCodeByName', { 
        //     fetch('http://localhost:8080/services/items/api/getProcedureCodeByName?procedureName=Crutches', { 
        // // fetch('http://10.10.6.30:8090/api/getProcedureCodeByName?procedureName=Crutches', {
        // method: 'GET',    
        // headers })
        // .then(response => response.json())
        // .then(data => setTest(data));
         getData();
        // console.log('data');
        // console.log(data);
        // /* @ts-ignore */
        // setOption(data);
    }, [])


    // useEffect(() => {
    //     console.log('test');
    //     console.log(test);
    // }, [test])

    const getData = async () => {
        npi.GET_ALL_NPI()
        // const res = await api.get('items/api/getProcedureCodeByName?procedureName=Crutches')
        // const res = await api.get('utilityapis/api/nppes/getAllDoctorDetails')
         .then(response => setOption(response.data))
         .catch(error => console.log(error));
        // return res;
      }

    // const _handleChange = (event: any) => {
    //     const { name, value } = event.target;
    //     if (value.length > 0) {
    //         const _option = data.filter(item => item.name.toLocaleUpperCase().startsWith(value.toLocaleUpperCase()));
    //         setOption(_option);
    //         _option.length > 0 ? setFlag(true) : setFlag(false);
    //     } else
    //         setFlag(false)
    //     setField(value);
    // }

    // const _handleOption = (id: number) => {
    //     console.log({ id })
    //     /* @ts-ignore */
    //     setField(option.find(item => item.procedureCodeId === id).itemProcedureCodeDesc);
    //     setFlag(false);
    // }

    const handleChange = (event: any) =>{
        const { name, value } = event.target;
        console.log( event.target);
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
                                        // optArray={data}
                                        optArray={option}
                                        name="npi"
                                        label="NPM"
                                        optionLabelValue="procedureCodeId"
                                        optionLabelTitle="itemProcedureCodeDesc"
                                        // optionLabelArr={optionLabelArr}
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