import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import { Table } from '.'

const COLUMNS_POKEMON = [
  {
    label: 'Nombre',
    value: 'name'
  },
  {
    label: 'Imagen',
    value: 'image',
    render: (row) => <img src={row.image} alt='image' />
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
      <div>
        <img alt='remove' src={row.image} role='option' onClick={handleEditClick} />
        <img alt='remove' src={row.image} role='cancel' onClick={handleCancelClick} />
      </div>
  }
]
const ROWS = [
  {
    id: 291,
    name: 'Blastois',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    attack: 54,
    defense: 35,
    hp: 0,
    type: null,
    idAuthor: 2
  },
  {
    id: 301,
    name: 'Dragonite',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png',
    attack: 67,
    defense: 95,
    hp: 0,
    type: null,
    idAuthor: 2
  },
  {
    id: 302,
    name: 'Articuno',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png',
    attack: 91,
    defense: 90,
    hp: 0,
    type: null,
    idAuthor: 2
  },
  {
    id: 303,
    name: 'Flareon',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png',
    attack: 36,
    defense: 55,
    hp: 0,
    type: null,
    idAuthor: 2
  },
  {
    id: 307,
    name: 'prueba',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    attack: 33,
    defense: 59,
    hp: 0,
    type: null,
    idAuthor: 2
  }
]

const handleEditClick = () => {
  return render(<p>edit click</p>)
}
const handleCancelClick = () => {
  return render(<p>cancel click</p>)
}

describe('Table', () => {
  afterEach(cleanup)
  test('Should render component', () => {
    render(<Table columns={COLUMNS_POKEMON} rows={ROWS} />)
  })
  test('Should execute edit click ', async () => {
    const user = userEvent.setup()
    render(<Table columns={COLUMNS_POKEMON} rows={ROWS} />)
    await user.click(screen.getAllByRole('option')[0])
    expect(screen.getByText('edit click')).toBeDefined()
  })
  test('Should execute remove click ', async () => {
    const user = userEvent.setup()
    render(<Table columns={COLUMNS_POKEMON} rows={ROWS} />)
    await user.click(screen.getAllByRole('cancel')[0])
    expect(screen.getByText('cancel click')).toBeDefined()
  })
})
