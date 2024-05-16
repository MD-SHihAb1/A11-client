import Swal from "sweetalert2";
import useAuth from "../Providers/useContext";

const AddBook = () => {
  
  const {user} = useAuth() || {};

  const handleAddBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const img = form.img.value;
    const authorName = form.authorName.value;
   
    const shortDes = form.shortDes.value;
    const category = form.category.value;
    
    const aboutTheBook = form.aboutTheBook.value;
    const writerName = form.writerName.value;
    const quantity = form.quantity.value;
    const ratings = form.ratings.value;
    const names = form.names.value;
    const email = user.email

    const newBook = {
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
    console.log(newBook);

    // send data to the server

    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Painting Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <input type="text" name="" id="" />

        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 md:my-6 lg:my-14">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Account settings
          </h2>

          <form onSubmit={handleAddBook}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Image
                </label>
                <input
                  required
                  id="img"
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
                  required
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
                  required
                  id="name"
                  name="names"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  {" "}
                  Writer Name
                </label>
                <input
                  required
                  id="writerName"
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
                  required
                  id="shortDes"
                  name="shortDes"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  texts about the book
                </label>
                <input
                  required
                  id="aboutTheBook"
                  name="aboutTheBook"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <select
                  required
                  name="category"
                  defaultValue=""
                  className="  select select-bordered max-w-xs block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled value="">
                    Category
                  </option>
                  <option>Fantasy</option>
                  <option>Mystery</option>  
                  <option>Adventure</option>
                  <option>Novel</option>
                  <option> Thriller</option>
                  <option>History</option>
                  <option> Drama</option>
                  <option> Sci-Fi</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  {" "}
                  Quantity
                </label>
                <input
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
                  Rating
                </label>
                <input
                  required
                  id="rating"
                  name="ratings"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <input
                className="btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                value="Add Book"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddBook;
