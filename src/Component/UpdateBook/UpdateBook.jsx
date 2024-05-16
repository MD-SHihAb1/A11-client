// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Providers/useContext";

const UpdateBook = () => {

  const book = useLoaderData();
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
  console.log(ratings);


  const {user} = useAuth() || {};

  const handleUpdateBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);
        const formProps = Object.fromEntries(formData.entries());
      
          const {
            img,
            authorName,
            shortDes,
            category,
            email,
            aboutTheBook,
            writerName,
            quantity,
            ratings,
            names,
            
          } = formProps;

    // const img = form.img.value;
    // const authorName = form.authorName.value;
   
    // const shortDes = form.shortDes.value;
    // const category = form.category.value;
    
    // const aboutTheBook = form.aboutTheBook.value;
    // const writerName = form.writerName.value;
    // const quantity = form.quantity.value;
    // const ratings = form.ratings.value;
    // const names = form.names.value;
    // const email = user.email

    const updatedBook = {
      img,
      authorName,
      shortDes,
      category,
      email,
      aboutTheBook,
      writerName,
      quantity,
      ratings,
      names,
    };
    console.log(updatedBook);

    // send data to the server

    fetch(`http://localhost:5000/book/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount> 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };


  const {id} = useParams()
  console.log(id);

  // const [update, setUpdate] = useState({});

  // useEffect(()=> {
  //   fetch(`http://localhost:5000/updateBook/${id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setUpdate(data)
  //     console.log(data);
  //   })
  // },[id])

  return (
    <div>
      <div>
        <input type="text" name="" id="" />
        
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Update Book {names}
            </h2>

            <form onSubmit={handleUpdateBook}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Image
                  </label>
                  <input
                    id="img"
                    defaultValue={img}
                    name="img"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Author Name
                  </label>
                  <input
                  defaultValue={authorName}
                    id="authorName"
                    name="authorName"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    {" "}
                    Name
                  </label>
                  <input
                  defaultValue={names}
                    id="name"
                    name="name"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    {" "}
                    Short description
                  </label>
                  <input
                  defaultValue={shortDes}
                    id="shortDes"
                    name="shortDes"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

              
                <div>
                <select
                
                  required
                  name="category"
                  defaultValue={category}
                  className="  select select-bordered max-w-xs block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled  value="">
                    Category
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    {" "}
                    Rating
                  </label>
                  <input
                  defaultValue={ratings}
                    id="rating"
                    name="rating"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    texts about the book
                  </label>
                  <input
                  defaultValue={aboutTheBook}
                    id="aboutTheBook"
                    name="aboutTheBook"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                <label className="text-gray-700 dark:text-gray-200">
                  {" "}
                  Quantity
                </label>
                <input
                defaultValue={quantity}
                  required
                  id="rating"
                  name="quantity"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  {" "}
                  Writer Name
                </label>
                <input
                defaultValue={writerName}
                  required
                  id="writerName"
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

               
              </div>

              <div className="flex justify-end mt-6">
                <input
                  className="btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  type="submit"
                  value="Update Book"
                />
              </div>
            </form>
          </section>
       
      </div>
    </div>
  );
};

export default UpdateBook;
