import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Book = () => {
  const books = useLoaderData();
  

  
  

  return (
    <div className="m-20 ">
      <h1 className="text-6xl text-center">All Books {books.length}</h1>

   <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-7 xl:grid-cols-4 gap-4">
   {
        books.slice(0, 16).map(book => <BookCard
        key={book._id}
        book={book}
        ></BookCard>) 
    }
    
  
   
   </div>
   <div className="w-full text-center my-20">
   <Link to='/all'><button className=" btn btn-active btn-secondary">Browse More</button></Link>
   </div>
    </div>
  );
};

export default Book;
