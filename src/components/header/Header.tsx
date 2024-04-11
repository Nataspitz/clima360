import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyleHeaderContainer } from "../containers/StyleHeaderContainer";
import { IoCloseCircle, IoSearchCircle } from "react-icons/io5";
import { StyleHeader } from "./StyleHeader";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/Logo_Clima360.svg";

type FormData = {
    searchTerm: string;
};

export function Header() {
    const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>(); // Especificando o tipo de dados do formulário
    const [inputVisible, setInputVisible] = useState({
        visible: false,
        class: "inputRender",
        widthWindow: window.innerWidth
    });
    const searchTerm = watch("searchTerm");

    useEffect(() => {
        const handleResize = () => {
            setInputVisible(prevState => ({
                ...prevState,
                widthWindow: window.innerWidth
            }));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderInput = () => {
        setInputVisible(prevState => ({
            ...prevState,
            visible: !prevState.visible,
            class: !prevState.visible ? "displayNone" : "inputRender"
        }));
    };

    const onSubmit: SubmitHandler<FormData> = (data) => { // Definindo o tipo de `onSubmit` como `SubmitHandler<FormData>`
        const { searchTerm } = data;
        if (searchTerm.trim() !== "") {
            console.log("Realizando pesquisa para:", searchTerm);
            reset();
        }
    };

    return (
        <StyleHeader>
            <StyleHeaderContainer>
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <IoSearchCircle onClick={renderInput} className={inputVisible.class} />
                {(inputVisible.visible || inputVisible.widthWindow > 700) && (
                    <div className="inputContainer">
                        <IoCloseCircle onClick={renderInput} className="close" />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="search"
                                placeholder="Consulte o Clima"
                                {...register("searchTerm")}
                            />
                            <button type="submit" className="submit">
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                )}
            </StyleHeaderContainer>
        </StyleHeader>
    );
}
