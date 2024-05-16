import { Rating } from '@mui/material';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData();
    const { id } = useParams();
    const idString = id; // Assuming id is already a string
    
    console.log("Book array:", book);
    console.log("ID from params:", idString);

    if (!book) {
        return <div>Loading...</div>;
    }

    const selectedBook = book.find(book => String(book._id) === idString);
    console.log("Selected book:", selectedBook);

    if (!selectedBook) {
        return <div>Book not found!</div>; // Error handling for book not found
    }

    return (
        <div>
            <h2 className='text-6xl text-center my-3'>Book Details</h2>
        
            

            <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className=' justify-center p-10'>
          <div className="  m-20 w-[40%] h-[40%]">
            <img src={selectedBook.img} alt="Book" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{selectedBook.names}</h2>
          <p>
            <span>Author Name: </span>
            {selectedBook.authorName}
          </p>
          <p>
            <span>category: </span>
            {selectedBook.category}
          </p>
          <p>
            <span>Short Des: </span>
            {selectedBook.shortDes}
          </p>
          <p>
            <span>About The Book: </span>
            {selectedBook.aboutTheBook}
          </p>
          <p>
            <span>Writer Name: </span>
            {selectedBook.writerName}
          </p>
          <div className="flex gap-1">
            <div>
              <p>
                <span>Rating </span>
              </p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                defaultValue={selectedBook.ratings}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
          <p>
            <span>quantity: </span>
            {selectedBook.quantity}
          </p>
          <div className="card-actions justify-end">
      <button className="btn btn-primary">Borrowed Books</button>
    </div>
         
        </div>
      </div>



        </div>
    );
};

export default BookDetails;
