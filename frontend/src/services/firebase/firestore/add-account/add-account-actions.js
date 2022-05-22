import {firestore } from 'firebase';
import * as AA from "./add-account-types"
import Generateuuid from "../../../uuid/GenerateUUID";

export const addUserAccountFirestore = (account) => {

    return async dispatch => {

        if (account.userEmail) {

            dispatch(addAccountRequest());

            const db = firestore();

            await db.collection('profiles')
                .doc(account.userEmail)
                .set({
                    email: account.userEmail,
                    name: account.userName,
                    password: Generateuuid() + btoa(account.userPassword),
                    online: true,
                }).then(() => {
                    dispatch(addAccountSuccess(account));
                })
                .catch(error => {
                    dispatch(addAccountFailure(error));
                })
        }
    }

}


export const addCompanyAccountFirestore = (account) => {

    return async dispatch => {

        if (account.companyEmail) {

            dispatch(addAccountRequest());

            const db = firestore();

            await db.collection('profiles')
                .doc(account.companyEmail)
                .set({
                    email: account.companyEmail,
                    name: account.companyName,
                    password: Generateuuid() + btoa(account.companyPassword),
                    online: true,
                }).then(() => {
                    dispatch(addAccountSuccess(account));
                })
                .catch(error => {
                    dispatch(addAccountFailure(error));
                })
        }
    }

}

export const addSocialAccountFirestore = (account) => {

    return async dispatch => {

        dispatch(addAccountRequest());
        const db = firestore();

        await db.collection('profiles')
            .doc(account.userEmail)
            .set({
                email: account.userEmail,
                name: account.userName,
                password: account.userPassword,
                online: true,
            }).then(() => {
                dispatch(addAccountSuccess(account));
            })
            .catch(error => {
                dispatch(addAccountFailure(error));
            })
    }

}


const addAccountRequest = () => {

    return {

        type: AA.ADD_ACCOUNT_REQUEST
    }

}


const addAccountSuccess = (account) => {

    return {

        type: AA.ADD_ACCOUNT_SUCCESS,
        payload:account
    }

}


const addAccountFailure = (error) => {

    return {

        type: AA.ADD_ACCOUNT_FAILURE,
        payload:error
    }

}