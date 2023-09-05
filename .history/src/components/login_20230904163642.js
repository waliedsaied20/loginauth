import VideoScreen from '../image/Amazing.mp4'
import { Link } from 'react-router-dom';
import '../style.css';

function Login() {
    return (
        <>
            <div className="background">
                <video autoPlay muted loop playsInline >
                    <source src={VideoScreen} type="video/mp4" />
                   
                </video>

                <form>
                    <h3>Login To Chat GPT</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required />

                            <button>Log In</button>
                        <button className="Register">Register</button>
                </form>
          
            </div>

        </>

    )
}


export default Login;