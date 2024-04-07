import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext } from "react";
import { StyleTopClimate } from "./StyleTopClimate";
import { ClimateContext } from "../../../contexts/ClimateContext";

interface ICities {
    id: Key | null | undefined;
    temperature: string;
    name: string 
    country: string;
}

export function TopClimate() {
    const { topCities } = useContext(ClimateContext);

    return(
        <StyleTopClimate>
            {
                topCities.map((city: ICities) => {
                    return(
                        <li key={city.id}>
                            <h3>{parseInt(city.temperature)}°C</h3>
                            <p>{city.name}</p>
                        </li>
                    )
                })
            }
        </StyleTopClimate>
    )
}