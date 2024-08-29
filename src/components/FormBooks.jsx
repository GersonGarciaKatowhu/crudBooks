import { useEffect, useState } from 'react';
import './FormBooks.css';
import { Star } from './Icons';
import useBooks from '../hooks/useBooks';

function FormBooks() {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [review, setReview] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [url, setUrl] = useState('');
  const { handleAddBook, editingBook } = useBooks();

  useEffect(() => {
    if (editingBook) {
      setRating(editingBook.rating);
      setTitle(editingBook.title);
      setCategories(editingBook.categories);
      setAuthorName(editingBook.authorName);
      setReview(editingBook.review);
      setPublicationDate(editingBook.publicationDate);
      setUrl(editingBook.url);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = editingBook ? editingBook.id : Math.random().toString(36).substr(2, 9);

    const newBook = { rating, title, categories, authorName, review, publicationDate, id, url };
    handleAddBook(newBook);

    // Clear the form
    setRating(0);
    setTitle('');
    setCategories('');
    setAuthorName('');
    setReview('');
    setPublicationDate('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className='form' id='form'>
      <div>
        <label htmlFor="titleBook">Titulo de tu libro</label>
        <input type="text" id='titleBook' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="categories">Categorias:</label>
        <input type="text" id="categories" value={categories} onChange={(e) => setCategories(e.target.value)} />
      </div>
      <div>
        <label htmlFor="author">Autor:</label>
        <input
          id="author"
          type="text"
          name="author"
          placeholder="J. K. Rowling, Stephen King..."
          value={authorName}
          onChange={e => setAuthorName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea id="review" value={review} onChange={e => setReview(e.target.value)}></textarea>
      </div>
      <div>
        <label>Rating:</label>
        <div className="stars-container">
        {
          [1, 2, 3, 4, 5].map((starNumber) => (
            <div key={starNumber} onClick={() => setRating(starNumber)} className='star-form'>
              <Star filled={starNumber <= rating} />
            </div>
          ))
        }
        </div>
      </div>
      <div>
        <label htmlFor="publicationDate">Fecha de publicación:</label>
        <input type="date" id="publicationDate" value={publicationDate} onChange={e => setPublicationDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="urlBook">¡Ingresa la URL de tu libro!</label>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      </div>
      <button type="submit">{editingBook ? 'Actualizar libro' : 'Añadir libro'}</button>
    </form>
  );
}

export default FormBooks;
