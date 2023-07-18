const initialFields = {
    title: '',
    amountPayable: '',
    billingHeadId: 0,
    gradeId: '',
    sessionId: 0,
    lookupAccountFrequencyType: 0,
    noOfFrequency: '',
    startDate: '',
    endDate: '',
    maxInstallmentsAllowed: '',
    id: 0,
    activeUserId: 0,
    customerId: 0,
    message: "",
    deletionReason: "",
    isValid: true
}
const initialViewFields = {
    amountPayable: 0,
    billingHeadTitle: "",
    gradeTitle: "",
    lookupAccountFrequencyTypeTitle: "",
    sessionTitle: "",
    title: ""
}
const initialFieldsPagination = {
    schoolId: 2084,
    userRoleId: 0,
    userId: 0,
    sessionId: 0,
    gradeId: 0,
    departmentId: 0,
    pageNumber: 1,
    pageSize: 10,
    searchText: "",
    orderByColumn: "title",
    sortOrder: "asc",
    filterParams: "",
    isExport: true,
    selectAll: true
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
const requiredFields = [
    { fieldName: 'title', fieldType: 'default' },
    { fieldName: 'amountPayable', fieldType: 'default' },
    { fieldName: 'sessionId', fieldType: 'default' },
    { fieldName: 'gradeId', fieldType: 'default' },
    { fieldName: 'frequencyTypeId', fieldType: 'default' },
    { fieldName: 'lookupAccountFrequencyType', fieldType: 'default' },
    { fieldName: 'noOfFrequency', fieldType: 'default' },
    { fieldName: 'endDate', fieldType: 'dateCompNotRequired', associatedField: 'startDate' }
]
const integerFields = ['billingHeadId', 'sessionId', 'lookupAccountFrequencyType']
const floatFields = ['amountPayable']
export {
    tableColumns,
    homeStateObject,
    initialFieldsPagination,
    initialFields,
    initialViewFields,
    viewStateObject,
    saveStateObject,
    integerFields,
    floatFields,
    requiredFields
}