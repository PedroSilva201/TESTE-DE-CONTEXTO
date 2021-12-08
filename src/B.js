import { useContext } from "react";
import React from "react";
import Clicado from "./Contexto";
import C from "./C";
import "./estilos.css";
export default function B() {
const { botao, setBotao } = useContext(Clicado);
return (
  <div className="bb">
<span>Componente B: {botao}</span>
<button onClick={() => setBotao("B")}>Clicar</button>
<C />
</div>
);
}