import { StyleHeaderContainer } from "../containers/StyleHeaderContainer";
import { IoSearchCircle } from "react-icons/io5";

export function Header() {
    
    return(
        <header>
            <StyleHeaderContainer>
                <figure>
                    <h1>logo</h1>
                </figure>
                <IoSearchCircle />
            </StyleHeaderContainer>
        </header>
    )
}