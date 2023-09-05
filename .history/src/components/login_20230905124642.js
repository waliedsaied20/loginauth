import VideoScreen from '../image/Amazing.mp4'
import '../style.css';
import {auth , googleProvider} from '../config/firebase';
import { createUserWithEmailAndPassword , signInWithPopup , signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';


function Login({signIn , logOut , signInWithGoogle , setEmail, setPassword}) {
    
    // const handleSubmit = (ee) => {
    //     ee.preventDefault();
    //     //  signInWithGoogle();
    //     localStorage.setItem('email', ee.user.email)
    // }
        const [value , setValue] = useState('');

    const loginSuccess = () => {
        signInWithPopup(auth, googleProvider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem('email', value)
        })
        useEffect(() => {
            setValue(localStorage.getItem('email'))
        },[])
    }
     
    
        return (
        <>
        {value ?}
            <div className="background ">
                <video autoPlay muted loop playsInline className='h-screen' >
                    <source src={VideoScreen} type="video/mp4"  className='h-screen'/>
                   
                </video>
                <div className='loginand'>

                <form onSubmit={handleSubmit}>
                    <h3 className='max-sm:text-xl'>Login Page</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text"  placeholder="Email or Phone" id="username" required onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required onChange={(e) => setPassword(e.target.value)}/>

                            <button className=' bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded w-full my-5  'onClick={signIn}>Log In</button>
                </form>
                        <button className='w-full bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded ' onClick={handleSubmit}>SignIn with Google</button>
                        <button className="w-full bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded  my-5 ">Register</button>
                 
                </div>
          
            </div>
        : <button onClick={loginSuccess} className=''>Signin With google</button>
        </>

    )
}


export default Login;