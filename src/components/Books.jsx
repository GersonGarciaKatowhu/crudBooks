import useBooks from '../hooks/useBooks'
import Stars from './Stars'
import './Books.css'
function Books() {
  const {books, handleDeleteBook, handleEditBook } = useBooks()

  

  return (
    <ul>
      {
        books.map(({id, url, title, categories, authorName, publicationDate, review, rating}) => (
          <li key={id}>
            <a href={url}>
              {title}
            </a>
            <p>
              Categories: {categories} <span>Author: {authorName}</span>
            </p>
            <time dateTime={publicationDate}>
              Publication date: {publicationDate}
            </time>
            <p>Review: {review}</p>
            <span>
              Rating: 
                <Stars rating={rating}/>
            </span>
            <div className='button-container'>

            <button className='button button-edit' onClick={()=>handleDeleteBook(id)}>Delete</button>
            <button className='button button-delete' onClick={()=> handleEditBook({id, url, title, categories, authorName, publicationDate, review, rating})}>Edit</button>
            </div>
        </li>
        ))
      }
    </ul>
  )
}

export default Books
