import styled from "styled-components";


export const StyleHeader = styled.header`
    h1{
        color: var(--grey-100);
        font-weight: 800;
    }

    svg{
        color: var(--grey-100);
        width: 40px;
        height: 40px;
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
        
        .submit{
            color: var(--grey-700);
            position: absolute;
            right: 5px;
            top: 5px;

            height: 70%;
        }

        input{
            padding: 10px 50px 10px 30px;
            background-color: var(--grey-200);
            border: none;
            border-radius: 5px;
        }
    }
    
    
    @media (min-width: 700px) {
        .inputContainer{
            display: block;
        }
        
        .searchIcon{
            display: none;
        }
    }
`