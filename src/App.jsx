import {useState} from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReploList from "./components/ReploList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')
  return(
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil  nomeUsuario={nomeUsuario}/>
          <ReploList nomeUsuario={nomeUsuario}/>
        </>
      )}

      { /*{formularioEstaVisivel && (
        <Formulario />
      )}

      <buttom onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</buttom> */}
    </div>
  )
}

export default App
