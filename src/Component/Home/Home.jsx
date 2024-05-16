
import img1 from "../../assets/Image/Banner/1.jpg.jpg";
import img2 from "../../assets/Image/Banner/2.jpg.jpg";
import img3 from "../../assets/Image/Banner/3.jpg.jpg";
import img4 from "../../assets/Image/Banner/4.jpg.jpg";
import Review from "../../Review/Review";
import { Link } from "react-router-dom";

const Home = () => {
    return (
     <div>
         <div className=" justify-center">
              <div className="md:ml-32 xl:ml-44 ">
      <div className="carousel w-[90%]  h-[900px] my-20" data-carousel="slide">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute  h-full rounded-xl flex items-center  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                {" "}
                Affordable Price For Book
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
              <Link to='/book'><button className="btn btn-primary mr-5">Discove More</button></Link>
              <Link to='/all'>
               <button className="btn btn-outline btn-secondary">
                  Latest Book
                </button>
               </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute  h-full rounded-xl flex items-center  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                {" "}
                Affordable Price For Book
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <Link to='/book'><button className="btn btn-primary mr-5">Discove More</button></Link>
              <Link to='/all'>
               <button className="btn btn-outline btn-secondary">
                  Latest Book
                </button>
               </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute  h-full rounded-xl flex items-center  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                {" "}
                Affordable Price Book
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <Link to='/book'><button className="btn btn-primary mr-5">Discove More</button></Link>
              <Link to='/all'>
               <button className="btn btn-outline btn-secondary">
                  Latest Book
                </button>
               </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute  h-full rounded-xl flex items-center  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                {" "}
                Affordable Price For Book
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <Link to='/book'><button className="btn btn-primary mr-5">Discove More</button></Link>
               <Link to='/all'>
               <button className="btn btn-outline btn-secondary">
                  Latest Book
                </button>
               </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div>

        </div>
        <div>
          <Review></Review>
          
        </div>
     </div>
     
    );
};

export default Home;