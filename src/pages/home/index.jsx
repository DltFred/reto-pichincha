import { useEffect, useState } from 'react'
import iconNew from '../../assets/New.svg'
import iconSearch from '../../assets/Search.svg'
import iconRemove from '../../assets/Trash.svg'
import { Button } from '../../components/Button'
import { InputWithImage } from '../../components/Input/inputWithImage'
import { Table } from '../../components/Table'
import { useManageAPISTate } from '../../hooks/useManageAPIState'
import { NewPokemonForm } from '../../modules/Form'
import { createNewPokemon, deletePokemon, getPokemons, updatePokemon } from '../../services/pokemon'
import style from './index.module.css'

function Dashboard () {
  const [dataToEdit, setDataToEdit] = useState(null)
  const [pokemons, setPokemons] = useState([])
  const pokemonState = useManageAPISTate()
  const formState = useManageAPISTate()
  const [showForm, setShowForm] = useState(false)
  const COLUMNS = [
    {
      label: 'Nombre',
      value: 'name'
    },
    {
      label: 'Imagen',
      value: 'image',
      render: (row) => <img className={style.image} src={row.image} alt='image' />
    }, {
      label: 'Ataque',
      value: 'attack'
    }, {
      label: 'Defensa',
      value: 'defense'
    }, {
      label: 'Acciones',
      value: 'actions',
      render: (row) =>
        <div className={style.icons}>
          <img src={iconRemove} alt='remove' onClick={() => handleEdit(row)} />
          <img src={iconRemove} alt='remove' onClick={() => handleDelete(row)} />
        </div>
    }
  ]

  const handleEdit = (row) => {
    setDataToEdit(row)
    setShowForm(true)
  }
  const handleCreate = (data) => {
    createNewPokemon({ data: { ...data, idAuthor: 2 }, status: formState })
    getPokemons({ idAuthor: 2, setPokemons, status: pokemonState })
  }
  const handleUpdate = (data) => {
    updatePokemon({ data, idPokemon: data.id, status: formState })
    getPokemons({ idAuthor: 2, setPokemons, status: pokemonState })
  }
  const handleDelete = (data) => {
    getPokemons({ idAuthor: 2, setPokemons, status: pokemonState })
    deletePokemon({ status: formState, idPokemon: data.id })
  }

  useEffect(() => {
    getPokemons({ idAuthor: 2, setPokemons, status: pokemonState })
  }, [pokemons])

  return (
    <>
      <h1>Listado pokemon</h1>
      <div className={style.navigate}>
        <InputWithImage type='text' placeholder='Buscar' img={iconSearch} />
        <Button img={iconNew} onClick={() => setShowForm(true)}>Nuevo </Button>
      </div>
      <Table columns={COLUMNS} rows={pokemons} style={{ marginBottom: '2em' }} />
      {
        showForm && <NewPokemonForm setShow={setShowForm} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} createNewPokemon={handleCreate} updateNewPokemon={handleUpdate} />
      }
    </>
  )
}

export default Dashboard
