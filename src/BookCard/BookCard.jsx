import { Rating } from "@mui/material";
import { data } from "autoprefixer";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";



const BookCard = ({ book }) => {
  const {
    _id,
    img,
    authorName,
    names,
    shortDes,
    category,
    ratings,
    aboutTheBook,
    writerName,
    quantity,
  } = book;
  // console.log(ratings);



  // const { count } = useLoaderData();
  // console.log( count );

 

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <div className="w-[40%] h-[40%]">
            <img src={img} alt="Book" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{names}</h2>
          <p>
            <span>Author Name: </span>
            {authorName}
          </p>
          <p>
            <span>category: </span>
            {category}
          </p>
          <p>
            <span>Short Des: </span>
            {shortDes}
          </p>
          <p>
            <span>About The Book: </span>
            {aboutTheBook}
          </p>
          <p>
            <span>Writer Name: </span>
            {writerName}
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
                defaultValue={ratings}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
          <p>
            <span>quantity: </span>
            {quantity}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/book/${_id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
