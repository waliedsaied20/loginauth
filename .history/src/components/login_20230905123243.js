import VideoScreen from '../image/Amazing.mp4'
import '../style.css';
import {auth , googleProvider} from ' '


function Login({signIn , logOut , signInWithGoogle , setEmail, setPassword}) {
    const handleSubmit = (ee) => {
        ee.preventDefault();
        //  signInWithGoogle();
        localStorage.setItem('email', ee.user.email)
    }
    
        
     
    
        return (
        <>
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

        </>

    )
}


export default Login;