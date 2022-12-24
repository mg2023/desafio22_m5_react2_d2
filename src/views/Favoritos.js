import { useContext } from "react"
import MyContext from "../my_context";

export default function Favoritos() {
  // Requerimiento n4: Hacer uso del hook useContext para acceder al estado global desde los
  // componentes que lo necesiten. (3 Puntos)

  // Aca se destructura a dos variables solo por completitud, pero solo se usa "fotos"
  const { fotos, setFotos } = useContext(MyContext)
  const num_fotos_favoritas = (fotos.filter((foto) => foto.favorito)).length

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          num_fotos_favoritas == 0 ? <p>No hay fotos favoritas</p> :
            fotos.filter((foto) => foto.favorito).map((foto, i) => (
              <img src={foto.src} alt={i} />
            )
            )
        }
      </div>
    </div>
  );
}
