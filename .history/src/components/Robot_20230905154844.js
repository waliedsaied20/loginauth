// import { signOut } from "firebase/auth";
// import { auth } from "../config/firebase";

function RobotLoading() {

    const logout =  () => {
        localStorage.removeItem('email');
        window.location.reload();
        alert("Thanks For ")
    }
  return (
    <>
    <section className="bg-orange-200 h-screen opacity-40 w-full">

      <div id="robot" className="">
        <div className="piston">
          <div className="rotator"></div>
          <div className="block">
            R<div className="arm"></div>
          </div>
        </div>
        <div className="piston">
          <div className="rotator"></div>
          <div className="block">
            O<div className="arm"></div>
          </div>
        </div>
        <div className="piston">
          <div className="rotator"></div>
          <div className="block">
            B<div className="arm"></div>
          </div>
        </div>
        <div className="piston">
          <div className="rotator"></div>
          <div className="block">
            O<div className="arm"></div>
          </div>
        </div>
        <div className="piston">
          <div className="rotator"></div>
          <div className="block">
            T<div className="arm"></div>
          </div>
        </div>
      </div>
    </section>

      <button onClick={logout} className="text-white fixed right-6 top-6 bg-gray-400 p-2 rounded font-bold hover:bg-red-500">Sign Out </button>
    </>
  );
}

export default RobotLoading;
