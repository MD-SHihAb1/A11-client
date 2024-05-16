import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'





const Registration = () => {

    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState('');

    const [showPassword, setShowPassword] = useState(false);


    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, name, photo, accepted);

        setRegisterError('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setRegisterError('your password mast be uper characters')
            return;
        }
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/.test(password)){
            setRegisterError('Password should be a Uniq Character')
            return;
        }

        else if(!accepted){
            setRegisterError('Please accept our terms and condition');
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: 'Registration Successfully!',
                icon: 'success',
                
              })
            e.target.reset();
            navigate('/');
           
        })
        .catch(error => {
            console.error(error)
            setRegisterError(error.message);
        })
    }

    return (
        <div>
            <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-20">

                <h1 className="text-center text-2xl">
                Registration Now
                </h1>
                

                        <form onSubmit={handleSignUp} className="max-w-md mx-auto my-20 ">
                        <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                       
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type={ showPassword ? "text" : "password" }  id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                            <span className="absolute mx-96 -my-10" onClick={ () => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEyeOff className="text-3xl"></IoMdEyeOff> :  <IoMdEye className="text-3xl "></IoMdEye>
                                }
                                   

                               
                                

                            </span>

                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="photo"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                          

                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                        </div>
                      
                     
                        <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        <br />

                                        <div className="flex items-start my-6">
                                            <div className="flex items-center h-6">
                                                <input id="remember" type="checkbox" value=""  name="terms" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                            </div>
                                            <label className="ms-2 text-/ font-medium text-gray-900 dark:text-gray-300">Accept Our Terms and Condition</label>
                                        </div>

                        <br />
                        {
                        registerError && <p className="text-red-600">{registerError}</p>
                        }
                        <br />

                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Already Have An Account? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Login</a>
                            </div>
                        
                        </form>

            </div>
        </div>
    );
};

export default Registration;