import { useContext } from "react";
import React from "react";
import Clicado from "./Contexto";
import "./estilos.css";
export default function A() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="aa">
<span>Componente A: {botao}</span>
<button onClick={() => setBotao("A")}>Clicar</button>
</div>
);
}