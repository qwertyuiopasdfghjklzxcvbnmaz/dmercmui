const initalRelationship = {
    signatureBy: "",
    relationship: "",
    reason: "",
}

const initalFields = { 
    deliveryAgentName: "",
    patientName: "",
    serialNo: "",
    patientSignature: "",
    deliveryAgentSignature: "",
    relationFlag: false,
    ...initalRelationship
}

const saveStateObject = {
    isSave: false,
    isOpenModal: false,
    isEdit: false,
    isError: 0
}
const homeStateObject = {
    isOpenForm: false,
    // editId: null,
}
export {
    initalFields,
    saveStateObject,
    homeStateObject,
    initalRelationship
}