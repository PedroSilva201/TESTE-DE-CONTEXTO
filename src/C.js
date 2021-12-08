import { useContext } from "react";
import React from "react";
import Clicado from "./Contexto";
import D from "./D";
import "./estilos.css";
export default function C() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="cc">
<span>Componente C: {botao}</span>
<button onClick={() => setBotao("C")}>Clicar</button>
<D />
</div>
);
}