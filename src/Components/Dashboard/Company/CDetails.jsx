import React, { Fragment } from 'react';
import { connect } from "react-redux";
import DefaultPicC from "../../../defaultPicC.jpg";
import { BlockC } from '../../../Store/Actions/AdminActions';

const CDetails = (props) => {
    const goBack = () => {
        props.history.push("/Vacancies")
        }
    const currentCompany = props.allCompanies.find(com => {
        return com.userId === props.match.params.id;
    })
    return (
        <div><br/>{props.user ? (<Fragment>{currentCompany ? (<div className="container"><div className="grey-text underline form_a" onClick={goBack}> &nbsp;  
        <i className="material-icons">arrow_back</i></div>
        <div className="row">
        <div className="col s12 m6 l6 offset-l3">
            <div className="card">
                <div className="card-image">
                    <img src={DefaultPicC} alt="user-profile" className="pImage" />
                    {props.Status === "Admin" ? (<span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => {props.blockC(currentCompany.companyID, currentCompany.userId)}}><i className="material-icons">block</i></span>): (null)}
                </div>
                <div className="card-content">
                    <div className="card-title orange-text">
                        COMPANY'S INFORMATION
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th className="grey-text">Comapny Name</th>
                                <td>{currentCompany.cname}</td>
                            </tr>
                            <tr>
                                <th className="grey-text">Established</th>
                                <td>{currentCompany.es}</td>
                            </tr>
                            <tr>
                                <th className="grey-text">HR Name</th>
                                <td>{currentCompany.hrname}</td>
                            </tr>
                            <tr>
                                <th className="grey-text">Email</th>
                                <td>{currentCompany.email}</td>
                            </tr>
                            <tr>
                                <th className="grey-text">Conatct Number</th>
                                <td>{currentCompany.cnum}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div></div>):(<div className="center grey-text lighten-3">Loading. . . . </div>)}</Fragment>) : (null)}</div>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        allCompanies: state.company.allCompanies,
        Status: state.auth.status,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        blockC: (cid, cuid) => dispatch(BlockC(cid, cuid)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CDetails);