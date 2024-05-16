import { useEffect, useState } from "react";
import useAuth from "../Component/Providers/useContext";
import { Rating } from "@mui/material";
import { Link, } from "react-router-dom";
import Swal from "sweetalert2";

const MyBook = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myBook/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    // Add your delete logic here
    console.log(`Deleting item with ID: ${id}`);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });


        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                   Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          
            }
        })

        }
      });
  };

  return (
    <div className="m-20">
      

      <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-7 xl:grid-cols-4 gap-4">
        {item?.map((p) => (
          <div key={p?._id}
          
          >
            <div>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <div className="w-[40%] h-[40%]">
                    <img src={p.img} alt="Book" />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.names}</h2>
                  <p>
                    <span>ID: {p._id}</span>
                  </p>
                  <p>
                    <span>Author Name: </span>
                    {p.authorName}
                  </p>
                  <p>
                    <span>category: </span>
                    {p.category}
                  </p>
                  <p>
                    <span>Short Des: </span>
                    {p.shortDes}
                  </p>
                  <p>
                    <span>About The Book: </span>
                    {p.aboutTheBook}
                  </p>
                  <p>
                    <span>Writer Name: </span>
                    {p.writerName}
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
                        defaultValue={p.ratings}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                  <p>
                    <span>quantity: </span>
                    {p.quantity}
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/update/${p._id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBook;