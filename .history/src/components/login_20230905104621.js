import VideoScreen from '../image/Amazing.mp4'
import '../style.css';
const handleSubmit = (ee) => {
    ee.preventDefault();
    signInWithGoogle();
}

function Login({signIn , logOut , signInWithGoogle , setEmail, setPassword}) {
    return (
        <>
            <div className="background ">
                <video autoPlay muted loop playsInline className='h-screen' >
                    <source src={VideoScreen} type="video/mp4"  className='h-screen'/>
                   
                </video>

                <form onSubmit={handleSubmit}>
                    <h3>Login Page</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text"  placeholder="Email or Phone" id="username" required onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required onChange={(e) => setPassword(e.target.value)}/>

                        <div className='flex '>
                            <button className='bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded w-1/2 my-8 mx-2 'onClick={signIn}>Log In</button>
                            <button className="bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded w-1/2 my-8 mx-2">Register</button>
                        </div>
                        <button className='block w-full bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded ' onClick={ () => signInWithGoogle} >SignIn with Google</button>
                </form>
          
            </div>

        </>

    )
}


export default Login;