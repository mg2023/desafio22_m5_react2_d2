// Requerimiento n1:Crear un contexto con Context API que se pueda importar desde cualquier
// componente de la aplicación. (2 Puntos)

import  { createContext } from "react"
const MyContext = createContext({})
export default MyContext
