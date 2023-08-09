const initialFields = {
    id: 0,
    name: '',
    email: '',
    mobile: '',
    password: '',
    maritalStatus: 'single',
    education: true,
    country: '',
    date: '',
    colorCode:"",
    range: "",

    items:[
        {name: '', amount: ''}
    ]
}

const homeStateObject = {
    isOpenForm: false,
    editId: null,
    viewId: null,
    isOpenView: false,
    deleteId: null,
    dataTableFlag: false
}
const saveStateObject = {
    isSave: false,
    isOpenModal: false,
    isEdit: false,
    isError: 0
}
const viewStateObject = {
    isView: false,
    isOpenModal: false,
    isEditPerson: false,
    editPersonId: null
}
const tableColumns = [
    { name: 'title', header: 'title', type: 'default' },
    { name: 'sessionTitle', header: 'session', type: 'default' },
    { name: 'gradeTitle', header: 'class', type: 'default' },
    { name: 'amountPayable', header: 'amountPayable', type: 'default' },
    { name: 'lookupAccountFrequencyTypeTitle', header: 'frequencyType', type: 'default' },
    {
        name: 'action', header: 'action', type: 'buttonV2', properties: [
            { functionName: 'handleView', icon: 'view', params: 'id' },
            { functionName: 'handleSaveForm', icon: 'edit', params: 'id' },
            { functionName: 'handleDelete', icon: 'delete', params: 'id' }
        ]
    }
];

const alphanumeric = /^[a-zA-Z0-9]+$/;
const NUMBER = /^\d+$/;
const requiredFields = [
    { fieldName: 'name', fieldType: 'default' },
    { fieldName: 'date', fieldType: 'date' },
    { fieldName: 'email', fieldType: 'default' },
    { fieldName: 'mobile', fieldType: 'regExpNotRequired', regExp: NUMBER },
    { fieldName: 'password', fieldType: 'default' },
    { fieldName: 'country', fieldType: 'default' },
    { fieldName: 'range', fieldType: 'default' }
]
const integerFields = ['billingHeadId', 'sessionId', 'lookupAccountFrequencyType']
const floatFields = ['amountPayable'];

const fromFields = {}


// const cardTitle = {
//     personalDetails: "Personal Details",
//     address: "Address"
// }

const cardTitle = {
    personalDetails: "Personal Details",
    item: "Item"
}





export {
    tableColumns,
    homeStateObject,
    initialFields,
    viewStateObject,
    saveStateObject,
    integerFields,
    floatFields,
    requiredFields,
    fromFields,
    cardTitle
}