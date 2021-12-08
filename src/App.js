import { useState } from "react";
import React from "react";
import A from "./A";
import B from "./B";
import Clicado from "./Contexto";
import "./estilos.css";
export default function App() {
const [botao, setBotao] = useState("App");
return (
<Clicado.Provider value={{ botao, setBotao }}>
<div className="app">
<span>Componente App: {botao}</span>
<button onClick={() => setBotao("App")}>Clicar</button>
<A />
<B />
</div>
</Clicado.Provider>
);
}