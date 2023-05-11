// import { Component } from "react";                // для класів
import PropTypes from 'prop-types';
import { List, Item, Property, Numbers } from "./styled";


// export class Statistics extends Component {                             // для класів
//     render() {
//         const { options, total, positivePercentage } = this.props;


export const Statistics = ({ options, total, positivePercentage }) => {
        const entries = Object.entries(options); // масив масивів
        return (
            <> 
                <List>
                    {entries.map(([name, value]) => (  //деструктуризація масиву
                        <Item key={name}>
                            <Property>{name}:</Property>
                            <Numbers>{value}</Numbers>
                        </Item>                        
                    ))}
                </List>
                <List>
                    <Item>
                        <Property>total:</Property>
                        <Numbers>{total()}</Numbers>
                    </Item>
                    <Item>
                        <Property>positiveFeedback:</Property>
                        <Numbers>{positivePercentage()}</Numbers>
                    </Item>
                </List>
            </>
        );
}

Statistics.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};