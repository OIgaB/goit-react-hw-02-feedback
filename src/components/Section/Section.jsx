// import { Component } from "react";          //  для класів
import PropTypes from 'prop-types';

// export class Section extends Component {          //  для класів
//     render() {
//         const { title, children } = this.props;


export const Section = ({ title, children }) => {
        return (
            <div>
                <h3>{title}</h3>
                {children}
            </div>   
        );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };