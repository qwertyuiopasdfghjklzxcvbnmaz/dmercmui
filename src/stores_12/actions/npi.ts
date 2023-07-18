import {INITIAL_ITEM } from "../constants";
import npi from "../../common/api/npi";
// export const add_item = (item) => {
//   return {
//     type: ADD_ITEM,
//     payload: item
//   };
// };

// export const initial_item = (item) => {
//     // console.log(item);
//   return {
//     type: INITIAL_ITEM,
//     payload: item
//   };
// };


const callCommonListApi = () => (dispatch: any) => {
    // return fetch("https://randomuser.me/api")
    //   .then(response => response.json())
    //   .then(myJson => dispatch({ type: "allNpiList", payload: myJson })); 
      return  npi.GET_ALL_NPI()
            .then(response => dispatch({ type: "allNpiList", payload: response.data }))
            .catch(error => console.log(error));
  };
  
  export default callCommonListApi;
