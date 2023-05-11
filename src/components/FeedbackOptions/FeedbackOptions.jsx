// import { Component } from "react";                     // для класів
import PropTypes from 'prop-types';
import { ButtonsList, Button } from "./styled";


// export class FeedbackOptions extends Component {       // для класів
//     render() {
//          const { options, onLeaveFeedback } = this.props;


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
            <ButtonsList>
                {options.map((option) => (
                    <li key={option}>
                        <Button 
                            type='button' 
                            name={option} 
                            $mode={option} 
                            onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </Button>
                    </li>                        
                ))}
            </ButtonsList>
        );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};