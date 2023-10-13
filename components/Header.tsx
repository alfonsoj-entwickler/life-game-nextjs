const Header = () => {
  return (
    <header className="w-screen h-[4rem] px-10 flex justify-between items-center bg-[#ee7752] text-gray-900 z-10">
      <div>
        <h1 className="text-4xl">Life-Game</h1>
      </div>
      <div></div>
      <div className="flex items-center space-x-4 text-xl">
        <p>
          Life: <span className="text-red-600">0</span>
        </p>
        <p>
          Die: <span className="text-blue-600">0</span>
        </p>
        <p>
          Total: <span className="text-green-600">0</span>
        </p>
      </div>
    </header>
  );
};

export default Header;