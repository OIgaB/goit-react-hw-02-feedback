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
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    $mode: PropTypes.string.isRequired,
    total: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.string.isRequired,
};