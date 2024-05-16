import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const AllBook = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showAvailable, setShowAvailable] = useState(false);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `http://localhost:5000/all-book?page=${currentPage}&size=20&filter=${filter}`;
       
        if (searchInput) {
          url += `&search=${searchInput}`;
        }
        if (showAvailable) {
          url += `&available=true`;
        }
        const response = await axios.get(url);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchData();
  }, [currentPage, selectedCategory, searchInput, showAvailable, filter]);

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/booksCount');
        const totalBooks = response.data.count;
        setTotalPages(Math.ceil(totalBooks / 20));
      } catch (error) {
        console.error('Error fetching total pages:', error);
      }
    };
    fetchTotalPages();
  }, []);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset current page when category changes
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset current page when search input changes
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSearchInput("");
    setShowAvailable(false);
    setCurrentPage(1);
  };

  const handleToggleAvailable = () => {
    setShowAvailable(!showAvailable);
    setCurrentPage(1); // Reset current page when available filter changes
  };

  return (
    <div>
      <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <select
            name='category'
            id='category'
            // className='border p-4 rounded-lg'
            // onChange={handleCategoryChange}
            // value={selectedCategory}
            onChange= {e => setFilter(e.target.value)}
            value={filter}
          >
            <option value=''>Filter By Category</option>
            <option value='Fantasy'>Fantasy</option>
                  <option value='Mystery'>Mystery</option>  
                  <option value='Adventure'>Adventure</option>
                  <option value='Novel'>Novel</option>
                  <option value='Thriller'> Thriller</option>
                  <option value='History'>History</option>
                  <option value='Drama'> Drama</option>
                  <option value='Sci-Fi'> Sci-Fi</option>
          </select>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                value={searchInput}
                onChange={handleSearchInput}
                placeholder='Enter Book Title'
                aria-label='Enter Job Title'
              />

              <button type='submit' className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          
          <button className='btn' onClick={handleReset}>Reset</button>
          <button className='btn' onClick={handleToggleAvailable}>
            {showAvailable ? 'Show All' : 'Available Only'}
          </button>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {books.map(book => <BookCard key={book._id} book={book} />)}
        </div>

        <div className='flex justify-center mt-12'>
          <button
            onClick={handlePrevPage}
            className='px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline bg-blue-500 text-white'
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePagination(index + 1)}
              className={`px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className='px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline bg-blue-500 text-white'
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
