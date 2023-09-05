// import { signOut } from "firebase/auth";

function RobotLoading() {

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <>
      <div id="robot bg-orange-500">
        <div class="piston">
          <div class="rotator"></div>
          <div class="block">
            R<div class="arm"></div>
          </div>
        </div>
        <div class="piston">
          <div class="rotator"></div>
          <div class="block">
            O<div class="arm"></div>
          </div>
        </div>
        <div class="piston">
          <div class="rotator"></div>
          <div class="block">
            B<div class="arm"></div>
          </div>
        </div>
        <div class="piston">
          <div class="rotator"></div>
          <div class="block">
            O<div class="arm"></div>
          </div>
        </div>
        <div class="piston">
          <div class="rotator"></div>
          <div class="block">
            T<div class="arm"></div>
          </div>
        </div>
      </div>

      <button onClick={logout} className="text-white fixed right-6 top-6 bg-gray-400 p-2 rounded font-bold hover:bg-red-500">Sign Out </button>
    </>
  );
}

export default RobotLoading;
