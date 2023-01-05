import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './components/card'
import BlogList from './components/blogList'



const App = () => {
  const [tikla, setTikla] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [sira, setSira] = useState(1)

  const [query, setQuery] = useState("")


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + sira)
      .then(response => response.json())
      .then(json => setBlogs([...blogs, json]))

    console.log(blogs)
  }, [sira])


  const doIt = () => {
    setSira(sira+1)
  }


  return (
    <div>

      <div className='navigation py-5   bg-white sticky top-0 z-50 opacity-90   '>
        <nav className='justify-around flex'>
          <p className="text-4xl ...">Tablet Fiyatı Bul</p>
          <button onClick={() => doIt()} className="bg-white opacity-100  hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span className=' first-letter:'>Bir Post Daha Lütfen</span>
          </button>

          <form onSubmit={(e) => {
            e.preventDefault()
            console.log(query)
          }} >
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative w-[30vw]">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={(e) => setQuery(e.target.value)} type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>

        </nav>
      </div>

      {/* // main */}
      <BlogList myblogs={[...blogs]} />

    </div >

  )
}

export default App