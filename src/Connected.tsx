import { useEffect, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WalletContext } from './WalletContext'

const Connected = () => {
  const [params] = useSearchParams()
  const { setWallet } = useContext(WalletContext)

  useEffect(() => {
    const publicKey = params.get('public_key')
    if (publicKey) {
      setWallet(publicKey)
      alert(`Подключено: ${publicKey}`)
    } else {
      alert('Не удалось подключиться к кошельку')
    }
  }, [])

  return <div className="p-4">Обработка подключения...</div>
}

export default Connected
