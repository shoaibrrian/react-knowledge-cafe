 import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog =>{
    console.log('Adding Soon');
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
