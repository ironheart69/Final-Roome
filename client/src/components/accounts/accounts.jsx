import "./accounts.scss";

import { useContext , useState, useEffect } from "react";
import { Context } from "../../utils/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Accounts = ({setShowAccount}) => {
const Navigate= useNavigate();
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password: password
      });
      
      console.log(response.data);
      // Handle successful login
      
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

   
    return (
    <div className="fav-panel">
    <div className="opac-layer" ></div>
    <div className="account-content rounded-xl">

        <div className="fav-header">
            <span className="heading">Accounts</span>
            <span className="close-btn" >
                <span className="text" onClick={()=>setShowAccount(false)}>close</span>
            </span>
        </div>
       <div>
       <section onSubmit={handleSubmit} class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-90vh lg:py-4 ">
      <span class ="flex items-center mb-8 text-2xl font-semibold text-gray-900 dark:text-white"> Room-E </span>
    
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-600 dark:border-gray-800">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input   type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required=""></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input   type="password"  value={password} name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""></input>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 " onClick={()=> Navigate(`/ad/:id`) } >Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

       </div>
   
    <div>
    </div>
    </div>
</div>);
    
};

export default Accounts;
