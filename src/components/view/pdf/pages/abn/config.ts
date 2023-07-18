const initalFields = {
    // abnDeliveryId: 2,
    // abnDeliveryDataId: 12,
    // abnDocumentName: "Test_doc_2",
    // scheduleDeliveryDateTime: "2023-06-07",
    // actualDeliveryDateTime: "2023-06-07",
    // deliveryAgentId: 4,
    // deliveryAgentName: "Debanada Acharya",
    // abnDeliveryStatus: "Delivered",
    // abnDeliveryDocumentAckStatus: "Delivered",
    // abnDeliveryDocPatientReplyStatus: "Delivered",
    // abnDeliveryDocPatientReplyDateTime: "2023-06-07",
    // abnResponseJsonData: null,
    // status: "Active",
    // createdById: 5,
    // createdByName: "Nabarun Roy",
    // createdDate: "2023-06-06",
    // updatedById: null,
    // updatedByName: null,
    // updatedDate: null,
    // abnDeliveryUuid: "05641682-a7fa-4130-99f7-fcdade1013d6",
    // deliveryAbnDataId: 12,
    // salesOrderId: 19,
    // patientId: 13,
    // primaryInsuranceName: "Medicare",
    // primaryInsurancePolicyNumber: "00002",
    // patientFirstName: "janetwo",
    // patientMiddleName: null,
    // patientLastName: "doetwo",
    // salesOrderDetailsAbnPrintDate: "2023-06-07",
    // salesOrderDetailsAbnItemName: "Walker, rigid (pickup), adjustable or fixed height",
    // ProcCode: "E0204,E0111,E0112",
    // ChargeAmount: "58.54,150,120",
    // salesOrderDetailsPatientAbnResponse: "2",
    // salesOrderDetailsAbnDeliveryStatus: "2023-06-07",
    // salesOrderDetailsAbnPatientSignatureStatus: "Signed",
    // salesOrderDetailsAbnStatus: "Initiated",
    // salesOrderDetailsAbnReason: "May not be covered by Insurance",
    // salesOrderDetailsAbnModifier1: "GX",
    // salesOrderDetailsAbnModifier2: "GY",
    // branchName: "regional ppo network",
    // branchId: "13",
    // patientIdNo: "1234567890",
    // deliveryAbnDataUuid: "ec805cc6-85cf-4693-b000-11b5db8b8662",
    // equipmentt: [
    //     {
    //         procCode: "E0204",
    //         chargeAmount: "58.54",
    //         reason: "May not be covered by Insurance"
    //     },
    //     {
    //         procCode: "E0111",
    //         chargeAmount: "150",
    //         reason: "May not be covered by Insurance"
    //     },
    //     {
    //         procCode: "E0112",
    //         chargeAmount: "120",
    //         reason: "May not be covered by Insurance"
    //     }
    // ],
    // signatureBy: "Cersi",
    // relationship: "Wife",
    // reason: "Hand was Cut by Stark",
    // paymentOption: "option1",
    // formName: "",
    // patientSignature: ""

    abnDeliveryId: 2,
    abnDeliveryDataId: 12,
    abnDocumentName: "ABN_19_13_00002",
    scheduleDeliveryDateTime: "2023-06-07",
    actualDeliveryDateTime: "2023-06-07",
    deliveryAgentId: 4,
    deliveryAgentName: "Debanada Acharya",
    abnDeliveryStatus: "Delivered",
    abnDeliveryDocumentAckStatus: "Delivered",
    abnDeliveryDocPatientReplyStatus: "Delivered",
    abnDeliveryDocPatientReplyDateTime: "2023-06-07",
    status: "Active",
    createdById: 5,
    createdByName: "Nabarun Roy",
    createdDate: "2023-06-06",
    updatedByName: "",
    abnDeliveryUuid: "05641682-a7fa-4130-99f7-fcdade1013d6",
    deliveryAbnDataId: 12,
    salesOrderId: 19,
    patientId: 13,
    primaryInsuranceName: "Medicare",
    primaryInsurancePolicyNumber: "00002",
    patientFirstName: "janetwo",
    patientMiddleName: "",
    patientLastName: "doetwo",
    salesOrderDetailsAbnPrintDate: "2023-06-07",
    salesOrderDetailsAbnItemName: "Walker, rigid (pickup), adjustable or fixed height",
    ProcCode: "E0204,E0111,E0112",
    ChargeAmount: "58.54,150,120",
    salesOrderDetailsPatientAbnResponse: "",
    salesOrderDetailsAbnDeliveryStatus: "",
    salesOrderDetailsAbnPatientSignatureStatus: "",
    salesOrderDetailsAbnStatus: "Initiated",
    salesOrderDetailsAbnReason: "May not be covered by Insurance",
    salesOrderDetailsAbnModifier1: "GX",
    salesOrderDetailsAbnModifier2: "GY",
    branchName: "regional ppo network",
    branchId: "13",
    patientIdNo: "1234567890",
    notifier: "Branch Office - 6 123 address1 000 address1 city2 wa",
    currentDate: "2023-06-19",
    signatureBy: "",
    relationship: "",
    reason: "",
    paymentOption: "",
    patientSignature: "",
    deliveryAgentSignature: "",
    equipment: [
      {
        procCode: "E0204",
        chargeAmount: "58.54",
        reason: "May not be covered by Insurance"
      },
      {
        procCode: "E0111",
        chargeAmount: "150",
        reason: "May not be covered by Insurance"
      },
      {
        procCode: "E0112",
        chargeAmount: "120",
        reason: "May not be covered by Insurance"
      }
    ]
}

const integerFields: any = [];
const floatFields: any = [];


export { initalFields, floatFields, integerFields };