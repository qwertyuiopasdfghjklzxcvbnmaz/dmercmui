const initialState = {items:[]};

const npiReducer = (state = initialState, action: any) => {
    console.log(action);
  switch (action.type) {
    case "allNpiList":
      return { ...state, items:action.payload };
    default:
      return state;
  }
};

export default npiReducer;