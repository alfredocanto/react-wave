import { Alta } from '../components/Alta'
import { useForm } from '../hooks/useForm'

export const MetodosAlta = () => {
  const { formState, onInputChange, descripcion, activo } = useForm({
    descripcion: '',
    activo: '',
  })

  return (
    <>
      <Alta pagename='Nuevo metodo'>
        <div class='col-md-6'>
          <div class='form-group'>
            <label for='nombre'>
              <b>Descripcion</b>
            </label>
            <input
              class='form-control'
              id='descripcion'
              placeholder='Descripcion'
              required
              maxlength='100'
              autocomplete='off'
              value={descripcion}
            />
          </div>
        </div>

        <div class='col-md-6'>
          <div class='form-group'>
            <label for='activo'>
              <b>Activo</b>
            </label>
            <select id='activo' class='form-control'>
              <option value='0'>No</option>
              <option value='1'>Si</option>
            </select>
          </div>
        </div>
      </Alta>
    </>
  )
}
