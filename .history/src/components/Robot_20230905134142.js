function RobotLoading() {
  return (
    <>
      <div id="robot">
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

      <button className="text-white fixed right-6 top-6 bg-gray-400 ">Sign Out </button>
    </>
  );
}

export default RobotLoading;
