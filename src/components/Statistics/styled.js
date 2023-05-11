import styled from 'styled-components';


export const List = styled.ul`
    padding: 10px;
    &:not(:last-child) {
        display: flex;
        justify-content: center;
        gap: 25px;
        border-top-right-radius: 60%;
        border-top-left-radius: 10px;
    }
    &:not(:first-child) {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 60%;
        border-top-right-radius: 60%;
    }
`; 

export const Item = styled.li`
    align-items: top;
    &:first-child,
    &:last-child {
        margin-top: 20px;
}
`; 


export const Property = styled.p`
    font-style: italic;
    margin: 0;
`; 

export const Numbers = styled.span`
    font-size: 30px;
    color: rgba(49, 18, 33, 0.719);
    text-shadow: 1px 1px 3px rgb(75, 6, 38);
`; 