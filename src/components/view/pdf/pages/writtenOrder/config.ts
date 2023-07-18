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

    providerName: "HAPPY DOCTORS GROUPPRACTICE",
    providerAddress: "000 address1, apt 000, city2 tn 372030000",
    providerPhone: "0000000001",
    providerFax: "",
    providerDocId: "CM1000000007",
    patientName: "JOHNTWO DOEONE",
    patientAddress: "000 address1, apt 000, City1 wa 372030000",
    patientPhone: "0000000002",
    patientDob: "01/01/1980",
    patientPolicy: "00001",
    physicianName: "johntwo Doctor doeone",
    physicianAddress: "000 address1, apt 000, City2,tn 372030000",
    physicianLicense: "doeone",
    physicianPhone: "0000000001",
    physicianNpi: "1942788757",
    physicianFax: "",

    orderInitialDate: "",
    orderRevisedDate: "",
    orderRecertificationDate: "",
    orderLengthofNeed: "",
    orderPrognosis: "",
    refillAuthorized: "50",
    diagnosis:[
        {
            icd10Code: "G45",
            description: "Episodic and paroxysmal disorders"
        },
        {
            icd10Code: "G72",
            description: "Diseases of myoneural junction and muscle"
        },
        {
            icd10Code: "G55",
            description: "Nerve, nerve root and plexus disorders"
        }
    ],
    equipments: [
        {
            itemId: "1",
          qty: "3.0",
          procCode: "E0110",
          extallow: "0.00",
          itemName: "Crutches, forearm, includes crutches of various materials, adjustable or fixed, pair, complete with tips and handgrips",
          count: "3",
          interval: "3"
        },
        {
            itemId: "2",
            qty: "5.0",
            procCode: "E0105",
            extallow: "0.00",
            itemName: "Cane, quad or three prong, includes canes of all materials, adjustable or fixed, with tips",
            count: "5",
            interval: "5"
        }
    ],
    addnNote: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    date: "13/07/2023"
}

const integerFields: any = [];
const floatFields: any = [];


export { initalFields, floatFields, integerFields };