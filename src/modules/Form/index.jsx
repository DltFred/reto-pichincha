import { useEffect } from 'react'
import iconCancel from '../../assets/Cancel.svg'
import iconSave from '../../assets/Save.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputTypeRange } from '../../components/Input/inputTypeRange'
import { useForm } from '../../hooks/useForm'
import style from './index.module.css'
export const NewPokemonForm = ({ setShow, dataToEdit, setDataToEdit, createNewPokemon, updateNewPokemon }) => {
  const initState = {
    name: '',
    image: '',
    attack: 0,
    defense: 0
  }
  const { handleChange, values, handleReset, setInitState } = useForm(initState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.name || !values.image) {
      // eslint-disable-next-line no-undef
      alert('Los campos no pueden estar vacios')
      return
    }
    if (values.id === null || values.id === undefined) createNewPokemon(values)
    else updateNewPokemon(values)
    handleReset()
    setDataToEdit(null)
  }

  const handleCancel = () => {
    setShow(false)
    handleReset()
    setDataToEdit(null)
  }

  useEffect(() => {
    if (dataToEdit !== null) setInitState(dataToEdit)
  }, [dataToEdit])

  return (
    <div className={style.form} onSubmit={handleSubmit}>
      <h2>Nuevo Pokemon</h2>
      <div className={style.inputs}>
        <Input
          label='Nombre: '
          placeholder='Nombre'
          type='text'
          name='name'
          onChange={handleChange}
          value={values.name}
        />
        <InputTypeRange
          label='Ataque: '
          type='range'
          name='attack'
          min='0'
          max='100'
          onChange={handleChange}
          style={{ '--width-track': `${values.attack}em` }}
          value={values.attack}
        />
        <Input
          label='Imagen: '
          placeholder='Url'
          type='text'
          name='image'
          onChange={handleChange}
          value={values.image}
        />
        <InputTypeRange
          label='Defensa: '
          type='range'
          name='defense'
          min='0'
          max='100'
          style={{ '--width-track': `${values.defense}em` }}
          onChange={handleChange}
          value={values.defense}
        />
      </div>
      <div className={style.buttons}>
        <Button
          img={iconSave}
          onClick={handleSubmit}
          disabled={!values.name || !values.image}
        >Guardar
        </Button>
        <Button
          img={iconCancel}
          onClick={handleCancel}
        >Cancelar
        </Button>
      </div>
    </div>
  )
}
