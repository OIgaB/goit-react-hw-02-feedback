// import { Component } from "react";           // для класів
import PropTypes from 'prop-types';


// export class Notification extends Component {      // для класів
//     render() {    
//         const { message } = this.props;


export const Notification = ({ message }) => {  
        return (
            <p>{message}</p>
        );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};