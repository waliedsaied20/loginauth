import VideoScreen from '../image/Amazing.mp4'
import '../style.css';


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
                    <h3>Login Page</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text"  placeholder="Email or Phone" id="username" required onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required onChange={(e) => setPassword(e.target.value)}/>

                            <button className='bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded w-1/2 my-8 mx-2 'onClick={signIn}>Log In</button>
                </form>
                    <div className='flex justify-'>

                        <button className='w-3/4 bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded ' onClick={handleSubmit}>SignIn with Google</button>
                        <button className="w-fit bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded  my-8 mx-2">Register</button>
                 
                    </div>
                </div>
          
            </div>

        </>

    )
}


export default Login;