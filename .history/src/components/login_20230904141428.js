import VideoScreen from './Login page/Amazing.mp4'
import './'

function Login() {
    return (
        <>
            <div class="background">
                <video autoplay muted loop>
                    <source src={VideoScreen} type='video/mp4' />
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
        </>

    )
}


export default Login;