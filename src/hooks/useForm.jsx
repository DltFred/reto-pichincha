import { useState } from 'react'

export const useForm = (initState) => {
  const [state, setState] = useState(initState)

  const setInitState = (data) => setState(data)
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleReset = () => {
    setState(initState)
  }

  return {
    values: state,
    handleChange,
    handleReset,
    setInitState
  }
}
