import { IoArrowBackOutline } from "react-icons/io5";

export const Navbar = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <button
          onClick={goBack}
          className="nav-item btn btn-link text-white"
          href="#"
        >
          <IoArrowBackOutline size={28} />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="http://localhost:5001"
              >
                Wave
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};