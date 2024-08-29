import useBooks from '../hooks/useBooks'
import Stars from './Stars'
import './Books.css'
function Books() {
  const {books, handleDeleteBook, handleEditBook } = useBooks()

  

  return (
    <ul>
      {
        books.map(({id, url, title, categories, authorName, publicationDate, review, rating}) => (
          <li key={id} className='book'>
            <h2>
            <a href={url}>
              {title}
            </a>
            </h2>
            <p>
              Categories: {categories} <span>Autor: {authorName}</span>
            </p>
            <time dateTime={publicationDate}>
              <span>Fecha de publicación: {publicationDate}</span>
            </time>
            <p>Review: {review}</p>
            <span>
                <Stars rating={rating}/>
            </span>
            <div className='button-container'>

            <button className='button button-edit' onClick={()=>handleDeleteBook(id)}>Eliminar</button>
            <a href="#form">
            <button className='button button-delete' onClick={()=> handleEditBook({id, url, title, categories, authorName, publicationDate, review, rating})}>Editar</button>
            </a>
            </div>
        </li>
        ))
      }
      {books.length === 0 && <p className='no-books'>Añade un libro</p>}
    </ul>
  )
}

export default Books
