import React from "react";
import { FaPen, FaRegTrashAlt, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Lista = ({ pagename, columns, content, contentKey, detalles }) => {
    console.log(columns)
  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-between">
        <h4 id="title m-0" className="mb-0 text-center p-2">
          <i className="fa fa-user"></i>&nbsp;{pagename}
        </h4>
        <Link
          id="btnNuevo"
          to={`/${pagename.toLowerCase()}/nuevo`}
          className="btn btn-round btn-success p-2 m-1"
        >
          <i className="fa fa-plus"></i> Nuevo
        </Link>
      </div>
      <div className="col-12" style={{ overflowX: "auto" }}>
        <table className="table table-striped tableFixHead">
          <thead className="border-bottom-0" style={{ borderColor: "gray" }}>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th style={{ textAlign: "center", minWidth: "140px" }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="border-top-0">
            {content?.map((c) => (
              <tr key={c[contentKey]}>
                {columns.map((column) => (
                  <td key={column}>{c[column]}</td>
                ))}
                <td className="ops text-center">
                  {
                    detalles ? (
                      <a href="/" class="btn btn-round btn-sm btn-info" title="Detalles"
                      data-toggle="tooltip">
                          <FaInfo/>
                    </a> 
                    ) : null
                  }

                  <a
                    href=""
                    className="btn btn-round btn-sm btn-warning m-1 items-cente"
                    title="Modificar"
                    data-toggle="tooltip"
                  >
                    <FaPen />
                  </a>
                  <button
                    className="btn btn-round btn-sm btn-danger m-1 text-center"
                    data-toggle="tooltip"
                    data-id=""
                    title="Borrar"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
