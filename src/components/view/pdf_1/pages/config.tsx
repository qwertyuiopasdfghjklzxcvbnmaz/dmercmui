let moment = require('moment');
const initialFields = {
    formName: "DMECertificate",
    deliveryTicketId: "1",
    companyName: "HAPPY DOCTORS GROUPPRACTICE",
    name: "Ritam",
    patientId: "123456789",
    streetAddress: "2330 NW FLANDERS ST STE 101",
    city: "PORTLAND",
    telephoneNo: "503-816-1443 ",
    pan: "123456789",
    tpi: "",
    currentdate: moment().format('L'),
    currentdate_1: "Mon May 15 15:17:41 IST 2023",
    patientSignature: "",
    patientRepresentativeName: "",
    patientRelationship: "",
    reasonNotToSign: "",
    date: "Mon May 15 15:17:41 IST 2023",
    signatureCompRepresentative: "",
    nameCompRepresentative: "",
    dateOfService: null,
    deliveryItemDetailsList: [
        {
            proccode: "E0204",
            description: "Walker, rigid, wheeled, adjustable or fixed height",
            serial: ""
        },
        {
            proccode: "E0204",
            description: "Walker, rigid, wheeled, adjustable or fixed height",
            serial: ""
        },
        {
            proccode: "E0204",
            description: "Walker, rigid, wheeled, adjustable or fixed height",
            serial: ""
        }
    ],
    providerName: "doeone",
    npiapi: "1760854442"
}

const readonlyFields = ['name', 'patientId', 'streetAddress', 'city', 'telephoneNo', 'pan', 'npiapi', 'currentdate', 'proccode', 'description']

export {
    initialFields,
    readonlyFields
}