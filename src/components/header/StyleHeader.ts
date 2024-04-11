import styled from "styled-components";


export const StyleHeader = styled.header`
    figure{
        height: 100px;
        width: 200px;

        img{
            height: 100%;
            width: 100%;
        }
    }

    button{
        background-color: transparent;
        height: 80%;

        position: absolute;
        right: 5px;
        top: 5px;



        svg{
            color: var(--grey-700);
            height: 100%;
            width: 100%;
            cursor: pointer;
          }
    }

    svg{
        color: var(--grey-100);
        height: 40px;
        width: 40px;
        cursor: pointer;
    }
      
      .displayNone{
          display: none;
      }

      .inputContainer{
        position: relative;
        display: flex;
        align-items: center;

        .close{
            color: var(--grey-700);
            position: absolute;
            left: 0px;
            
            height: 60%;
        }
        

        input{
            padding: 10px 50px 10px 30px;
            background-color: var(--grey-200);
            border: none;
            border-radius: 5px;
            width: 200px;

            &::-webkit-search-cancel-button {
            -webkit-appearance: none;
        }
        }
    }
    
    
    @media (min-width: 700px) {
        .inputRender{
            display: none;
        }

        .inputContainer{
            display: flex;

            input{
                padding: 10px;
                width: 300px;
            }
        }

        .close{
            display: none;
        }

    }
`