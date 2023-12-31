const initalFields = {
    pickupExchangeId: 1,
    pickupExchangeNo: "PE100000001",
    pickupExchangeType: "Exchange",
    soId: 14,
    soNo: "1245",
    branchId: 13,
    branchName: "HAPPY DOCTORS GROUPPRACTICE",
    branchAddress: "123 address1, 000 address1, wa, city2, 372030784",
    currentDate:"2023-06-22",
    documentId: "PE100000001",
    patientSignature: "",
    technicianSignature: "",
    inventoryLocationId: 14,
    inventoryLocationName: "Location - 4",
    patientId: 16,
    patientIdNo: "PAT0000016",
    patientFirstName: "Johnone",
    patientMiddleName: "",
    patientLastName: "doeOne",
    patientContact1: "503-816-1443 ",
    patientContact2: "718-442-2225 ",
    patientBillingAddressLine1: "2330 NW FLANDERS ST STE 101",
    patientBillingAddressLine2: "PORTLAND, OR 97210-3400 ",
    patientBillingAddressState: "Oregon",
    patientBillingAddressCity: "PORTLAND",
    patientBillingAddressZip: "97210-3400 ",
    patientDeliveyAddressLine1: "2330 NW FLANDERS ST STE 101",
    patientDeliveyAddressLine2: "PORTLAND, OR 97210-3400 ",
    patientDeliveyAddressState: "Oregon",
    patientDeliveyAddressCity: "PORTLAND",
    patientDeliveyAddressZip: "97210-3400 ",
    pickupExchangeScheduleDateTime: "2022-09-16",
    pickupExchangeActualDateTime: "2022-09-16",
    pickupExchangeReason: "Replacement of an item",
    pickupExchangeRequest: "Patient requested replacement over call on date 16-09-2022",
    pickupExchangeNote: "come between 1200hr to 1600hr",
    pickupExchangeAgentIdNo: "AG100001",
    pickupExchangeAgentName: "Arijit Amature Sharma",
    pickupExchangeDocumentId: 1,
    pickupExchangeDocumentNo: "987345",
    pickupExchangeDocumentName: "1245-POD",
    pickupExchangeStatus: "completed",
    pickupExchangeComments: "item has been exchanged aginst the request",
    isPatientSigned: "Y",
    relationshipWithPatient: "Self",
    patientSignedDateTime: "2022-09-16",
    isAgentSigned: "Y",
    pickupExchangeSupportingDocument1: "",
    pickupExchangeSupportingDocument2: "",
    status: "active",
    createdById: 3,
    createdByName: "Ritam Das",
    createdDate: "2022-09-16",
    pickupExchangeUuid: "f9d8024b-4c53-4647-a43c-581341df11f7",
    pickupExchangeItems:[
        {
            pickupExchangeItemId: 1,
            pickupExchangeId: 1,
            soId: 14,
            itemId: 13,
            itemNo: "ITM1000000013",
            itemName: "Walker, with trunk support, adjustable or fixed height, any type",
            whetherSerialized: "Y",
            pickupItemSerialNo: "658967803",
            pickupItemAssetNo: "2074456802",
            replacementItemSerialNo: "658967802",
            replacementItemAssetNo: "1973456802",
            quantity: 1,
            itemPickupExchangeType: "exchange",
            itemPickupExchangeNote: "replacement against dispute item",
            itemPickupExchangeComment: "come between 1200hr to 1600hr",
            itemPickupExchangeStatus: "completed",
            status: "active",
            createdById: 3,
            createdByName: "ritam",
            updatedByName: ""
        },
        {
            pickupExchangeItemId: 4,
            pickupExchangeId: 1,
            soId: 14,
            itemId: 12,
            itemNo: "ITM1000000012",
            itemName: "Walker, folding (pickup), adjustable or fixed height",
            whetherSerialized: "Y",
            pickupItemSerialNo: "296123568",
            pickupItemAssetNo: "296123568",
            replacementItemSerialNo: "296123570",
            replacementItemAssetNo: "296123570",
            quantity: 1,
            itemPickupExchangeType: "Exchange",
            itemPickupExchangeNote: "replacement against dispute item",
            itemPickupExchangeComment: "come between 1200hr to 1600hr",
            itemPickupExchangeStatus: "scheduled",
            status: "Active\n",
            createdById: 3,
            createdByName: "Ritam",
            updatedByName: "",
            pickupExchangeItemUuid: "9236a537-a141-4a1b-8130-b8dcfd96fd9c"
        }
    ],

    patientNotsignedReason: "",
}

const integerFields: any = [];
const floatFields: any = [];


export { initalFields, floatFields, integerFields };