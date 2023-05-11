import styled from 'styled-components';


export const Container = styled.div`
    margin: 30px auto;
    max-width: 300px;
    padding: 50px;
    text-align: center;
    background-color: goldenrod;
    border-radius: 50%;
    box-shadow: 10px 10px 30px 6px rgba(0, 0, 0, 0.2);
    background-image: radial-gradient(
            circle at center,
            rgba(185, 47, 44, 1) 1%,
            rgba(185, 46, 44, 0.767) 1%,
            rgba(25, 0, 255, 0) 60%
        );
`; 

export const Title = styled.h2`
    font-size: 25px;
    margin-bottom: 20px;
`; 
