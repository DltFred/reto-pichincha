import { BASE_URL } from '../config/constants'

export const getPokemons = async ({ idAuthor, setPokemons, status }) => {
  const url = `${BASE_URL}?idAuthor=${idAuthor}`
  status.setLoading()
  fetch(url)
    .then(res => res.json())
    .then(data => {
      status.setSuccess()
      setPokemons(data)
    })
    .catch(err => {
      status.setError({ message: err })
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
    .then(res => res.json())
    .then(data => {
      status.setSuccess()
    })
    .catch(err => {
      status.setError({ message: err })
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
    .then(res => res.json())
    .then(data => {
      status.setSuccess()
    })
    .catch(err => {
      status.setError({ message: err })
    })
}

export const deletePokemon = async ({ status, idPokemon }) => {
  const url = `${BASE_URL}/${idPokemon}`
  status.setLoading()
  fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {
      status.setSuccess()
    })
    .catch(err => {
      status.setError({ message: err })
    })
}
