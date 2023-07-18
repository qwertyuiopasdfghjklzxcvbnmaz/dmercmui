type DeliveryItem = {
    proccode: string,
    description: string,
    serial: number
};
type DMEcertificate = {
    formName: string,
    deliveryTicketId: number,
    companyName: string,
    name: string,
    patientId: number,
    streetAddress: string,
    city: string,
    telephoneNo: string,
    pan: string,
    tpi: string,
    currentdate: string,
    currentdate_1: string,
    patientSignature: string,
    patientRepresentativeName: string,
    patientRelationship: string,
    reasonNotToSign: string,
    date: string,
    signatureCompRepresentative: string,
    nameCompRepresentative: string,
    dateOfService: number | null,
    deliveryItemDetailsList: DeliveryItem[],
    providerName: string,
    npiapi: number
}
const dmeCertificate: DMEcertificate = {
    formName: "DMECertificateForm",
    deliveryTicketId: 1,
    companyName: "HAPPY DOCTORS GROUPPRACTICE",
    name: "Ritam",
    patientId: 123_456_789,
    streetAddress: "2330 NW FLANDERS ST STE 101",
    city: "PORTLAND",
    telephoneNo: "503-816-1443",
    pan: "123456789",
    tpi: "",
    currentdate: new Date().toISOString(),
    currentdate_1: new Date().toISOString(),
    patientSignature: "",
    patientRepresentativeName: "",
    patientRelationship: "",
    reasonNotToSign: "",
    date: new Date().toISOString(),
    signatureCompRepresentative: "",
    nameCompRepresentative: "",
    dateOfService: null,
    deliveryItemDetailsList: [
        {
            proccode: "E0202",
            description: "Walker, rigid, wheeled, adjustable or fixed height",
            serial: 11_111
        },
        {
            proccode: "E0203",
            description: "Walker, rigid, wheeled, adjustable or fixed height",
            serial: 22_222
        },
        {
            proccode: "E0204",
            description: "Walker, rigid, wheeled, adjustable or fixed height",
            serial: 33_333
        }
    ],
    providerName: "doeone",
    npiapi: 1_760_854_442
}

const integerFields: string[] = ['deliveryTicketId', 'patientId', 'npiapi', 'serial'];
const floatFields: string[] = [];
const readonlyFields: string[] = [];

export {
    dmeCertificate,
    integerFields,
    floatFields,
    readonlyFields
}