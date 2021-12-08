import { useContext } from "react";
import React from "react";
import Clicado from "./Contexto";
import "./estilos.css";
export default function D() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="dd">
<span>Componente D: {botao}</span>
<button onClick={() => setBotao("D")}>Clicar</button>
</div>
);
}