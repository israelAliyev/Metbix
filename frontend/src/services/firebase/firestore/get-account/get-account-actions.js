// import {firestore} from 'firebase';
// import * as GA from "./get-account-types"
//
// export const getAccountFirestore = (mail) => {
//
//     return async dispatch => {
//
//         if (mail) {
//             getAccountRequest()
//
//             const db = firestore();
//
//             const docRef = db.collection("profiles").doc(mail);
//
//             docRef.get().then((doc) => {
//                 if (doc.exists) {
//                     dispatch(getAccountSuccess(doc.data()))
//                 } else {
//                     // doc.data() will be undefined in this case
//                     dispatch(getAccountFailure("No such document!"));
//                 }
//             }).catch((error) => {
//                 dispatch(getAccountFailure(error));
//             });
//         }
//     }
//
// }
//
//
// const getAccountRequest = () => {
//
//     return {
//
//         type: GA.GET_ACCOUNT_REQUEST
//     }
//
// }
//
//
// const getAccountSuccess = (account) => {
//     // console.log(account);
//     return {
//
//         type: GA.GET_ACCOUNT_SUCCESS,
//         payload: account
//     }
//
//
// }
//
//
// const getAccountFailure = (error) => {
//
//     return {
//
//         type: GA.GET_ACCOUNT_FAILURE,
//         payload: error
//     }
//
// }