import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Alta = ({ pagename, children }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4">
          <h4 id="title">
            <i className="fa fa-user"></i>&nbsp;{pagename}
          </h4>
        </div>
        {children}
      </div>
      <div className="col-12">
        <div className="form-group d-flex" style={{ float: "right" }}>
          <button
            id="Guardar"
            className="btn btn-round btn-success m-1 d-flex align-items-center"
          >
            <FaSave />
            &nbsp;Guardar
          </button>
          <button
            onClick={handleBackClick}
            className="btn btn-round btn-danger m-1 d-flex align-items-center"
          >
            <FaArrowLeft />
            &nbsp;Volver
          </button>
        </div>
      </div>
    </>
  );
};
