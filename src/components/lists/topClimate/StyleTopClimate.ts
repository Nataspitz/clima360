import styled from "styled-components";

export const StyleTopClimate = styled.ul`
    background-color: var(--grey-100);
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto; 
    white-space: nowrap; 
    -webkit-overflow-scrolling: touch; 

    &::-webkit-scrollbar {
        width: 8px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--grey-400);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }


    li {
        background: var(--grey-200);
        width: 65px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        gap: 5px;

        p {
            font-size: var(--text-3);
        }
    }
`;
