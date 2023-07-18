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
    deliveryItemDetailsList:  DeliveryItem[],
    providerName: string,
    npiapi: number
}

