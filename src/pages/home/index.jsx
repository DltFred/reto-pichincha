import { useEffect, useState } from 'react'
import iconEdit from '../../assets/Edit.svg'
import iconNew from '../../assets/New.svg'
import iconSearch from '../../assets/Search.svg'
import iconRemove from '../../assets/Trash.svg'
import { Button } from '../../components/Button'
import { InputWithImage } from '../../components/Input/inputWithImage'
import { Spinner } from '../../components/Spinner'
import { Table } from '../../components/Table'
import { Toast } from '../../components/Toast'
import { IDAUTHOR } from '../../config/constants'
import { useManageAPISTate } from '../../hooks/useManageAPIState'
import { NewPokemonForm } from '../../modules/Form'
import { createNewPokemon, deletePokemon, getOnePokemon, getPokemons, updatePokemon } from '../../services/pokemon'
import style from './index.module.css'

function Dashboard () {
  const [dataToEdit, setDataToEdit] = useState(null)
  const [pokemons, setPokemons] = useState([])
  const pokemonState = useManageAPISTate()
  const formState = useManageAPISTate()
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
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
          <img src={iconEdit} alt='remove' onClick={() => handleEdit(row)} />
          <img src={iconRemove} alt='remove' onClick={() => handleDelete(row)} />
        </div>
    }
  ]

  const handleEdit = (row) => {
    setDataToEdit(row)
    setShowForm(true)
  }
  const handleCreate = (data) => {
    createNewPokemon({ data: { ...data, idAuthor: IDAUTHOR }, status: formState })
      .then(
        getPokemons({ idAuthor: IDAUTHOR, setPokemons, status: pokemonState })
      )
  }
  const handleUpdate = (data) => {
    updatePokemon({ data, idPokemon: data.id, status: formState })
      .then(
        getPokemons({ idAuthor: IDAUTHOR, setPokemons, status: pokemonState })
      )
  }
  const handleDelete = (data) => {
    deletePokemon({ status: formState, idPokemon: data.id })
      .then(
        getPokemons({ idAuthor: IDAUTHOR, setPokemons, status: pokemonState })
      )
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.target.tagName === 'IMG') {
      if (search === '') getPokemons({ idAuthor: IDAUTHOR, setPokemons, status: pokemonState })
      else getOnePokemon({ setPokemons, status: pokemonState, idPokemon: search })
      setSearch('')
    }
  }

  useEffect(() => {
    getPokemons({ idAuthor: IDAUTHOR, setPokemons, status: pokemonState })
  }, [])

  return (
    <>
      <h1>Listado pokemon</h1>
      <div className={style.navigate}>
        <InputWithImage
          type='text'
          placeholder='Buscar'
          img={iconSearch}
          onChange={handleChange}
          onKeyUp={handleSearch}
          value={search}
          onClick={handleSearch}
        />
        <Button img={iconNew} onClick={() => setShowForm(true)}>Nuevo </Button>
      </div>
      <div className={style.tableContainer}>
        <Table columns={COLUMNS} rows={pokemons} />
      </div>
      {
        pokemonState.error.isError && <p>{pokemonState.error.message}</p>
      }
      {
        showForm && <NewPokemonForm setShow={setShowForm} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} createNewPokemon={handleCreate} updateNewPokemon={handleUpdate} />
      }
      {
        formState.isSuccess && <Toast message='Registro actualizado' />
      }
      {
        formState.error.isError && <Toast message={formState.error.message} />
      }
      {
        pokemonState.isLoading && <div className={style.center}><Spinner /></div>
      }
      {
        formState.isLoading && <div className={style.center}><Spinner /></div>
      }
    </>
  )
}

export default Dashboard
