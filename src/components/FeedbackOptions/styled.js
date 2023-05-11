import styled from 'styled-components';

export const ButtonsList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    gap: 15px;
`; 

export const Button = styled.button`
    width: 60px;
    height: 30px;
    border-radius: 20px;
    cursor: pointer;
    border-color: transparent;
    background-color: rgba(78, 23, 23, 0.87);
    color: yellow;
    &:hover,
    &:focus {
        background-color: ${(props) => {
            switch (props.$mode) {
                case "good":
                    return 'rgba(4, 109, 4, 0.534)';
                case "neutral":
                    return 'rgba(235, 235, 4, 0.541)';
                case "bad":
                    return 'rgba(190, 3, 3, 0.603)';
                default:
                    return 'grey'; 
            }
        }};
        color: black;        
    }
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1), color 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

