import { useState } from "react";
import { StyleHeaderContainer } from "../containers/StyleHeaderContainer";
import { IoCloseCircle, IoSearchCircle } from "react-icons/io5";
import { StyleHeader } from "./StyleHeader";
import { FaSearch } from "react-icons/fa";

export function Header() {
    const [inputVisible, setInputVisible] = useState({
        visible: false,
        class: "",
    });

    const renderInput = () => {
        if (inputVisible.visible === false) {
            setInputVisible({ visible: true, class: "displayNone"});
        }else{
            setInputVisible({ visible: false, class: "inputConatiner"});
        }
    };
    
    return (
        <StyleHeader>
            <StyleHeaderContainer>
                <figure>
                    <h1>Logo</h1>
                </figure>
                <IoSearchCircle onClick={renderInput} className={inputVisible.class}/>
                {inputVisible.visible ? (
                    <div className="inputContainer">
                        <IoCloseCircle onClick={renderInput} className="close"/>
                        <input type="search" placeholder="Consulte o Clima" />
                        <FaSearch  className="submit"/>
                    </div>
                ) : null}
            </StyleHeaderContainer>
        </StyleHeader>
    );
}
