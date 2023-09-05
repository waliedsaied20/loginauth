import VideoScreen from '../image/Amazing.mp4'
import '../style.css';

function Login({signIn , logOut , signInWithGoogle}) {
    return (
        <>
            <div className="background ">
                <video autoPlay muted loop playsInline className='h-screen' >
                    <source src={VideoScreen} type="video/mp4"  className='h-screen'/>
                   
                </video>

                <form>
                    <h3>Login To Chat GPT</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text"  placeholder="Email or Phone" id="username" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required />

                        <div className='flex '>
                            <button className='bg-white ' onClick={signIn}>Log In</button>
                            <button className="Register">Register</button>
                        </div>
                        <button className='block w-full text-2xl' onClick={signInWithGoogle}>SignIn with Google</button>
                </form>
          
            </div>

        </>

    )
}


export default Login;