import Books from "./components/Books"
import FormBooks from "./components/FormBooks"
import './App.css'

export default function App() {

  return (
    <div className="App">
      <FormBooks />
      <Books className='books-container' />
    </div>
  )
}