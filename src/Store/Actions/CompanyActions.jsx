import Type from "../const/Types";
import "../../config/fb";
import * as firebase from "firebase";

export const addNewCompany = (newCompany) => {
    return dispatch => {
        firebase.database().ref().child("Companies").push(newCompany)
        dispatch({ type: Type.newCompany, newCompany })
    }
}

export const UpdateCurrentCompany = (data, editID) => {
    return (dispatch) => {
        firebase.database().ref().child(`Companies/${editID}`).update(data)
        dispatch({ type: Type.updateCompany })
    }
}

export const PervDataOfCompanies = () => {
    return (dispatch) => {
        firebase.database().ref().child("Companies").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push({
                    companyID: key,
                    userId: data[key].userId,
                    cname: data[key].cname,
                    es: data[key].es,
                    hrname: data[key].hrname,
                    email: data[key].email,
                    cnum: data[key].cnum,
                })
            }
            dispatch({ type: Type.pervDataOfCompanies, data: TemArr })
        })
    }
}