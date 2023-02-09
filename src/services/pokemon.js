import { BASE_URL } from '../config/constants'

export const getPokemons = async ({ idAuthor, setPokemons, status }) => {
  const url = `${BASE_URL}?idAuthor=${idAuthor}`
  status.setLoading()
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setPokemons(data)
      status.setSuccess()
    })
    .catch(err => {
      console.log(err)
      status.setError({ message: 'Error al obtener los registros' })
    })
}

export const createNewPokemon = async ({ status, data }) => {
  const url = `${BASE_URL}`
  status.setLoading()
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cors: 'no-cors',
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw new Error('Error al crear nuevo registro')
      status.setSuccess()
    })
    .catch(err => {
      console.log(err)
      status.setError({ message: 'Error al crear nuevo registro' })
    })
}

export const updatePokemon = async ({ status, data, idPokemon }) => {
  const url = `${BASE_URL}/${idPokemon}`
  status.setLoading()
  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw new Error('Error al actualizar el registro')
      status.setSuccess()
    })
    .catch(err => {
      console.log(err)
      status.setError({ message: 'Error al actualizar el registro' })
    })
}

export const deletePokemon = async ({ status, idPokemon }) => {
  const url = `${BASE_URL}/${idPokemon}`
  status.setLoading()
  await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) throw new Error('Error al borrar el registro')
      status.setSuccess()
    })
    .catch(err => {
      console.log(err)
      status.setError({ message: 'Error al borrar el registro' })
    })
}

export const getOnePokemon = async ({ setPokemons, status, idPokemon }) => {
  const url = `${BASE_URL}/${idPokemon}`
  status.setLoading()
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setPokemons([data])
      status.setSuccess()
    })
    .catch(err => {
      console.log(err)
      status.setError({ message: 'Error al obtener los registros' })
    })
}
