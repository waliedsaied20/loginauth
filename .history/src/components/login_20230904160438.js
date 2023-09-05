import VideoScreen from '../image/Amazing.mp4'
import { Link } from 'react-router-dom';
import '../style.css';

function Login() {
    return (
        <>
            <div class="background">
                <video autoplay muted loop playsInline >
                    <source src={VideoScreen} type="video/mp4" />
                   
                </video>

                <form>
                    <h3>Login To Chat GPT</h3>

                    <label for="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" required />

                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required />

                            <button>Log In</button>
                        <button class="Register">Register</button>
                </form>
            </div>

            {/* <button>
                <Link to="auth" >
                    Go To Auth
                </Link>
            </button> */}
        </>

    )
}


export default Login;