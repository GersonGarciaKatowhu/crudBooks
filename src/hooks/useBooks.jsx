import { useContext, useEffect, useState } from "react"
import { BooksContext } from "../context/BooksContext"

function filteredCategories(books) {
  const allCategories = books
    .flatMap((book) => book.categories.split(' '))
    .filter(Boolean);

  const uniqueCategories = Array.from(new Set(allCategories)); 

  return uniqueCategories
}


function useBooks() {
  const { books, setBooks, editingBook, setEditingBook } = useContext(BooksContext)
  const [categories, setCategories] = useState([])
  useEffect(()=> {
    setCategories(filteredCategories(books))
  }, [books])
  function handleDeleteBook(id){
    setBooks(prevBooks => prevBooks.filter(prevBook => prevBook.id !== id))
  }
  function handleAddBook(newBook) {
    if (editingBook) {
      setBooks(prevBooks => 
        prevBooks.map(book => book.id === editingBook.id ? newBook : book)
      );
      setEditingBook(null);
    } else {
      setBooks(prevBooks => [...prevBooks, newBook]);
    }
  }
  function handleEditBook(book) {
    setEditingBook(book)
  }
  return { books, handleDeleteBook, categories, handleAddBook, handleEditBook, editingBook }
}

export default useBooks
