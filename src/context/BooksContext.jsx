import { createContext, useState } from "react";
import initialBooks from '../mocks/books.json'


export const BooksContext = createContext()

export default function BooksProvider({children}) {
  const [books, setBooks] = useState(initialBooks)
  const [editingBook, setEditingBook] = useState(null)


  return (
    <BooksContext.Provider value={{ books, setBooks, editingBook, setEditingBook }}>
      {children}
    </BooksContext.Provider>
  )
}