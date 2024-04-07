import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { openWeatherMapKey } from "./apisConsts";

interface WeatherData {
    name: string;
    temperature: number;
    description: string;
}

interface WeatherContextType {
    topCities: WeatherData[];
    getCitiesClimate: () => Promise<void>;
}

export const ClimateContext = createContext<WeatherContextType | undefined>(undefined);

export const ClimateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [topCities, setTopCities] = useState<WeatherData[]>([]);

    const getCitiesClimate = async () => {
        const cities = [
            "São Paulo",
            "Rio de Janeiro",
            "Belo Horizonte",
            "Brasília",
            "Curitiba",
            "Fortaleza",
            "Recife",
            "Salvador",
            "Manaus",
            "Porto Alegre",
        ];

        const requests = cities.map(city =>
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapKey}&units=metric`)
        );

        try {
            const responses = await Promise.all(requests);

            const data: WeatherData[] = responses.map((response, index) => {
                const responseData = response.data;

                if (responseData && responseData.name && responseData.main && responseData.weather) {
                    const { name, main, weather } = responseData;
                    const { temp } = main;
                    const { description } = weather[0];

                    return {
                        name,
                        temperature: temp,
                        description
                    };
                } else {
                    return {
                        name: `Dados indisponíveis (${index})`,
                        temperature: 0,
                        description: ""
                    };
                }
            });

            setTopCities(data);
        } catch (error) {
            console.error('Erro ao buscar dados de clima:', error);
        }
    };

    useEffect(() => {
        getCitiesClimate();
    }, []); // Executado uma vez ao montar o componente

    const contextValue: WeatherContextType = {
        topCities,
        getCitiesClimate
    };

    return (
        <ClimateContext.Provider value={contextValue}>
            {children}
        </ClimateContext.Provider>
    );
};
