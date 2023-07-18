const initalFields = {
	formName: "PatientHomeAssessmentForm",
	deliveryTicketId: "1",
	companyName: "XXXXXXXXXXXXX",
	streetAddress: "a",
	cityStateZip: "a",
	phoneNo: "a",
	fax: "a",
	patientName: "a",
	address: "a",
	p_cityStateZip: "a",
	phone: "3434-343-343",
	patientId: "a",
	account: "a",
	// typeOfMobility:{
	// 	cane: true,
	// 	crutches: true,
	// 	walker: false,
	// 	manualwheelchair: false,
	// 	povscooter: false,
	// 	powerwheelchair: false,
	// 	otherchk: true,
	// 	other: ""
	// },
	typeOfMobilityCane: true,
	typeOfMobilityCrutches: true,
	typeOfMobilityWalker: false,
	typeOfMobilityManualwheelchair: false,
	typeOfMobilityPovscooter: false,
	typeOfMobilityPowerwheelchair: false,
	typeOfMobilityOtherchk: false,
	typeOfMobilityOther: '',


	othermedicalequipment: true,
	othermedicalequipmentValue: "othermedicalequipment",
	providerby: "ME",
	// typeOfHome: {
	// 	singlestoryhouse: true,
	// 	multystoryhouse: true,
	// 	aptCondo: true,
	// 	mobileHome: true,
	// 	handicapHousing: false,
	// 	handicapAccessible: true,
	// 	handicapAccessibleValue: {
	// 		handicapAccessibleYes: true,
	// 		handicapAccessibleNo: false
	// 	},
	// 	rampsElevators: true,
	// 	rampsElevatorsValue: {
	// 		rampsElevatorsYes: true,
	// 		rampsElevatorsNo: false
	// 	},
	// 	others2: true,
	// 	other2value: "XXXXXXXXXXXXXX"
	// },
	typeOfHome: 'singlestoryhouse',
	handicapAccessible: true,
	handicapAccessibleValue: 'Yes',
	rampsElevators: true,
	rampsElevatorsValue:'No',
	others2: true,
	other2value: 'It is a long ',
	equipmentTrials: "Equipment Trials",

	// carpetThrowRugs: {
	// 	carpetThrowRugsYes: true,
	// 	carpetThrowRugsNo: false,
	// 	carpetThrowRugsNa: false
	// },
	carpetThrowRugs: 'Yes',
	// looseUnevenFloors: {
	// 	looseUnevenFloorsYes: true,
	// 	looseUnevenFloorsNo: false,
	// 	looseUnevenFloorsNa: false
	// },
	looseUnevenFloors: 'No',
	// stairsSteps: {
	// 	stairsStepsYes: true,
	// 	stairsStepsNo: false,
	// 	stairsStepsNa: false
	// },
	stairsSteps: 'Na',
	// wcRampsInsideOrOutsideTheHome: {
	// 	wcRampsInsideOrOutsideTheHomeYes: true,
	// 	wcRampsInsideOrOutsideTheHomeNo: false,
	// 	wcRampsInsideOrOutsideTheHomeNa: false
	// },
	wcRampsInsideOrOutsideTheHome: 'Yes',
	// explainAccessOptions: {
	// 	explainAccessOptionsYes: true,
	// 	explainAccessOptionsNo: false,
	// 	explainAccessOptionsNa: false
	// },
	explainAccessOptions: 'No',
	explainAccessOptionsValue: "",
	// othersSection: {
	// 	othersSectionYes: true,
	// 	othersSectionNo: false,
	// 	othersSectionNa: false
	// },
	othersSection: "Yes",
	othersSectionValue: "",

	// caneCrutchesWalkerManualWheelchair: {
	// 	caneCrutchesWalkerManualWheelchairYes: true,
	// 	caneCrutchesWalkerManualWheelchairNo: false,
	// 	caneCrutchesWalkerManualWheelchairNa: false
	// },
	caneCrutchesWalkerManualWheelchair: 'Yes',
	// povScooter: {
	// 	povScooterYes: true,
	// 	povScooterNo: false,
	// 	povScooterNa: false
	// },
	povScooter: 'No',
	// powerWheelchair: {
	// 	powerWheelchairYes: true,
	// 	powerWheelchairNo: false,
	// 	powerWheelchairNa: false
	// },
	powerWheelchair: 'Na',
	// bathroomFacilities: {
	// 	bathroomFacilitiesYes: true,
	// 	bathroomFacilitiesNo: false,
	// 	bathroomFacilitiesNa: false
	// },
	bathroomFacilities: 'Yes',
	// roomAccess: {
	// 	roomAccessYes: true,
	// 	roomAccessNo: false,
	// 	roomAccessNa: false
	// },
	roomAccess: 'No',
	roomAccessValue: "",
	// entryDoors:{
	// 	entryDoorsYes: false,
	// 	entryDoorsNo: true,
	// 	entryDoorsSl: "",
	// 	entryDoorsValue: ""
	// },
	entryDoors: 'No',
	entryDoorsSl: '',
	entryDoorsValue: "",
	// bedRoom:{
	// 	bedRoomYes: false,
	// 	bedRoomNo: true,
	// 	bedRoomSl: "",
	// 	bedRoomValue: ""
	// },
	bedRoom: 'Yes',
	bedRoomSl: "",
	bedRoomValue: "",
	// kitchen:{
	// 	kitchenYes: false,
	// 	kitchenNo: true,
	// 	kitchenSl: "",
	// 	kitchenValue: ""
	// },
	kitchen: "No",
	kitchenSl: "",
	kitchenValue: "",
	// bathroom:{
	// 	bathroomYes: false,
	// 	bathroomNo: true,
	// 	bathroomSl: "",
	// 	bathroomValue: ""
	// },
	bathroom: "Yes",
	bathroomSl: "",
	bathroomValue: "",
	// hallways:{
	// 	hallwaysYes: false,
	// 	hallwaysNo: true,
	// 	hallwaysSl: "",
	// 	hallwaysValue: ""
	// },
	hallways: "No",
	hallwaysSl: "",
	hallwaysValue: "",
	// otherRooms:{
	// 	otherRoomsYes: false,
	// 	otherRoomsNo: true,
	// 	otherRoomsSl: "",
	// 	otherRoomsValue: ""
	// },
	otherRooms: "Yes",
	otherRoomsSl: "",
	otherRoomsValue: "",
	assessmentPerformedVerballyCheck: true,
	completedPreliminaryAssessmentCheck: true,
	applyCane: true,
	applyCrutches: true,
	applyWalker: false,
	applyManualWheelchair: false,
	applyPovScooter: false,
	applyPowerWheelchair: false,
	dateOfHomeAssessment: "",
	signaturePatientRepresentative: "",
	patientRepresentativeName: "",
	patientRelationship: "",
	reasonNotToSign: "",
	date: "",
	companyRepresentativeSign: "",
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