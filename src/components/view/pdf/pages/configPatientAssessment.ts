const initalFields = {
	formName: "PatientAssessmentForm",
	deliveryTicketId: "1",
	companyName: "Bird",
	streetAddress: "1053 Linden Avenue",
	cityStateZip: " Marion, North Carolina, 28752",
	phoneNo: "407-551-1920",
	fax: "324234",
	patientName: "Gopu",
	address: "1692 Counts Lane, Lexington, Kentucky, 40517",
	p_cityStateZip: "a",
	phone: "859-971-0658",
	patientId: "1222-A1",
	account: "a",
	alternateContacts:{
		name1: "",
		phone1: "",
		relationship1: "",
		name2: "",
		phone2: "",
		relationship2: ""
	},
	patientVision: 'Yes',
	patientHearing: 'No',
	patientSpeech: 'Na',
	patientAmbulatory:'Yes',
	alertUnderstand: 'Yes',
	confused: 'No',
	dementia: 'Yes',
	patientMobile: 'Na',
	patintBedRidden: 'Yes',
	patientFallRisk: 'No',
	patientNutritional: 'Na',
	caregiverWilling: 'Yes',
	caregiverAble: 'No',
	caregiverUnderstands: 'Yes',
	caregiverMaintain: 'No',
	comments: "",
	signaturePatientRepresentative: "",
	patientRepresentativeName: "",
	patientRelationship: "",
	reasonNotToSign: "",
	date: "",
	signatureCompRepresentative: "",
	companyRepresentativeName: ""
}

const integerFields: string[] = ['deliveryTicketId'];
const floatFields: string[] = [];
const readonlyFields: string[] = [];

export {
    initalFields,
    integerFields,
    floatFields,
    readonlyFields
}