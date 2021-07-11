function Header() {
  return (
    <>
      <div className="p-6 bg-blue-400 font-sans font-bold">
        <div className="p-4 flex justify-between items-center shadow-lg bg-blue-440">
          <span className="text-white text-center text-2xl">Questions</span>
          <nav>
            <ul className="flex text-white text-center">
              <li className="m-4 p-2 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-300 focus:ring-opacity-50">
                <a href="/">Home</a>
              </li>
              <li className="m-4 p-2 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-300 focus:ring-opacity-50">
                <a href="/">Configurações</a>
              </li>
              <li className="m-4 p-2 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-300 focus:ring-opacity-50">
                <a href="/">Questões</a>
              </li>
              <li className="m-4 p-2 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-300 focus:ring-opacity-50">
                <a href="/">Nova</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
