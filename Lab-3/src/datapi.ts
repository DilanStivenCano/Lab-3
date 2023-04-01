import { characters } from "./components/card/ts/index";

export const getInfo = async(): Promise<Array<characters>> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const datos = await response.json();
    console.log(datos.results);
    return datos.results;
}

