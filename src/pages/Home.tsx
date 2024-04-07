import { useContext } from "react";
import { Header } from "../components/header/Header";
import { BackgroundImage } from "../styles/BackgroundImage";
import { ClimateContext } from "../contexts/ClimateContext";
import { TopClimate } from "../components/lists/topClimate/TopClimate";
import { StyleMainContainer } from "../components/containers/StyleMainContainer";


export function Home() {

    return (
        <>
            <BackgroundImage>
                <Header />
                <main>
                    <StyleMainContainer>
                        <TopClimate />
                    </StyleMainContainer>
                </main>
            </BackgroundImage>
        </>
    )
}