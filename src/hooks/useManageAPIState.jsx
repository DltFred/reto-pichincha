import { useState } from 'react'

export const useManageAPISTate = () => {
  const [isLoading, setLoad] = useState(false)
  const [error, setErr] = useState({ isError: false, message: 'Ocurrió un error' })
  const [isSuccess, setSucc] = useState(false)

  const setError = ({ message = 'Ocurrió un error' }) => {
    console.log(message)
    setLoad(false)
    setSucc(false)
    setErr({ isError: true, message: `${message}` })
  }
  const setSuccess = () => {
    setErr({ isError: false, message: 'Ocurrió un error' })
    setLoad(false)
    setSucc(true)
  }
  const setLoading = () => {
    setErr({ isError: false, message: 'Ocurrió un error' })
    setSucc(false)
    setLoad(true)
  }

  return { isLoading, isSuccess, error, setError, setLoading, setSuccess }
}
