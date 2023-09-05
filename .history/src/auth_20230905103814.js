// import Login from './components/Login'
import { auth , googleProvider} from "./config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Login from './components/Login'

 const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };
  return (
    <div>
      {/* <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Signin</button>
    <button onClick={logOut}> logOut</button> */}
    <button className="text-white bg-" onClick={signInWithGoogle}> Signin with google more</button>
      <Login signIn={signIn} setEmail={setEmail} setPassword={setPassword} logOut={logOut} signInWithGoogle={signInWithGoogle}/>
    </div>
  );
};


export default Auth;