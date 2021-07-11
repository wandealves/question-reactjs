import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="p-6 bg-gray-800 font-sans font-bold">
        <div className="p-4 flex justify-between items-center shadow-lg bg-blue-440">
          <span className="text-white text-center text-2xl">Questions</span>
          <nav>
            <ul className="flex text-white text-center">
              <li className="m-4 p-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:bg-gray-600 focus:ring-opacity-50">
                <Link to="/">Home</Link>
              </li>
              <li className="m-4 p-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:bg-gray-600 focus:ring-opacity-50">
                <Link to="/configurations">Configurações</Link>
              </li>
              <li className="m-4 p-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:bg-gray-600 focus:ring-opacity-50">
                <Link to="/questions">Questões</Link>
              </li>
              <li className="m-4 p-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:bg-gray-600 focus:ring-opacity-50">
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
