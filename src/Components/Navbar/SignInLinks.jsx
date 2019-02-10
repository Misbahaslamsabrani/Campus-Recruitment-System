import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const SignInLinks = (props) => {
    const char = props.email.slice(0, 1)
    return (
        <ul className="right">
            {props.status === "Company" || props.status === "Admin" ? (<li>
                <NavLink to="/Students">Students</NavLink>
            </li>) : (null)}
            {props.status === "Admin" ? (<li>
                <NavLink to="/Comapnies">Companies</NavLink>
            </li>) : (null)}
            {props.status === "Student" || props.status === "Admin" ? (<li>
                <NavLink to="/Vacancies">Vacancies</NavLink>
            </li>) : (null)}
            {props.status === "Company" ? (<li>
                <NavLink to="/Posting">Post New Vacancy</NavLink>
            </li>) : (null)}
            <li>
                <NavLink to="/SignOut">Sign Out</NavLink>
            </li>
            {props.status === "Company" || props.status === "Student" ? (<li>
                <NavLink to="/Profile" className='btn btn-floating orange darken-3'>{char}</NavLink>
            </li>) : (null)}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
    }
}
export default connect(mapStateToProps)(SignInLinks);