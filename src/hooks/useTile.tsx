import { useContext } from "react"
import { TileContext } from "../context/tilecontext"

export const useTile = () =>{
    const context = useContext(TileContext)
    if(!context){
        throw new Error ("useTile must be used within a TileProvider")
    }
    return context;
};