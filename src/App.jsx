import Books from "./components/Books"
import FormBooks from "./components/FormBooks"
import './App.css'

export default function App() {

  return (
    <div className="App">
      <header>
        <h1>¿Cómo calificas tus libros?</h1>
        <p>¡Agrega tus libros favoritos y calificalos!</p>
      </header>
      <div className="content">
      <div className='form-container'>
        <FormBooks />
      </div>
      <div>
        <Books className='books-container' />
      </div>
      </div>

    </div>
  )
}