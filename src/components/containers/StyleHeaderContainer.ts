import styled from "styled-components";


export const StyleHeaderContainer = styled.div`
    max-width: 1200px; 
    margin: 0 auto;
    padding: 15px; 
    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: var(--grey-100);
        font-weight: 800;
    }

    svg{
        color: var(--grey-100);
        width: 40px;
        height: 40px;
    }
`