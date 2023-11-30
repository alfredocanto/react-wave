import { useEffect, useState } from "react";
import { Alta } from "../components/Alta";
import { useApiContent } from "../hooks/useApiContent";
import { useForm } from "../hooks/useForm";
import { fetchData } from "../../services/getContent";

export const ClientesAlta = () => {
  const {
    formState,
    onInputChange,
    apellido,
    nombre,
    direccion,
    cuit,
    tipo,
    provincia,
    localidad,
  } = useForm({
    apellido: "",
    nombre: "",
    direccion: "",
    cuit: "",
    tipo: "",
    provincia: "",
    localidad: "",
  });

  const { content: provincias } = useApiContent(
    "http://localhost:5001/provincias/lista/json"
  );

  const [id, setId] = useState(null);
  const [localidades, setLocalidades] = useState([]);

  useEffect(() => {
    if (id !== null) {
      fetchData(`http://localhost:5001/localidades/get/${id}`).then(
        (data) => {
          setLocalidades(data);
        }
      );
    }
  }, [id]);

  const handleProvinciaChange = (e) => {
    e.preventDefault();
    setId(e.target.value);
    onInputChange(e);
  };

  return (
    <>
      <Alta pagename="Nuevo cliente">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="apellido">
              <b>Apellido</b>
            </label>
            <input
              className="form-control"
              name="apellido"
              placeholder="Apellido"
              required
              maxLength="50"
              value={apellido}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="Nombre">
              <b>Nombre</b>
            </label>
            <input
              className="form-control"
              name="nombre"
              placeholder="Nombre"
              required
              maxLength="50"
              value={nombre}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="Direccion">
              <b>Direccion</b>
            </label>
            <input
              className="form-control"
              name="direccion"
              placeholder="Calle 123"
              required
              maxLength="50"
              value={direccion}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="cuit">
              <b>CUIT</b>
            </label>
            <input
              className="form-control"
              name="cuit"
              placeholder="11-11111111-1"
              required
              maxLength="11"
              value={cuit}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="tipo">
              <b>Tipo</b>
            </label>
            <select
              className="form-control"
              name="tipo"
              id="tipo"
              onChange={onInputChange}
            ></select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>
              <b>Provincia</b>
            </label>
            <select
              className="form-control"
              name="provincia"
              onChange={handleProvinciaChange}
            >
              {provincias?.map((p) => (
                <option value={p.id} key={p.id}>
                  {p.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="mb-0">
              <b>Localidad</b>
            </label>
            <span
              className="position-relative d-inline-block w-100"
              tabIndex="0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Primero seleccione una provincia"
            >
              <select
                className="form-control"
                id="localidades"
                onChange={onInputChange}
                name="localidad"
              >
                {localidades && localidades.length > 0 ? (
                  localidades.map((p) => (
                    <option value={p.id} key={p.id}>
                      {p.nombre}
                    </option>
                  ))
                ) : (
                  <option>Seleccione una provincia</option>
                )}
              </select>
              <div
                id="loadLoca"
                className="spinner-border text-primary"
                role="status"
                style={{ display: "none" }}
              >
                <span className="sr-only">Loading...</span>
              </div>
            </span>
          </div>
        </div>
      </Alta>
    </>
  );
};
