import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log('App loaded')
  }, [])

  const handleConnect = async () => {
    try {
      const res = await fetch('https://tiny-trees-fix.loca.lt/generate')
      const { payload, nonce, encryption_public_key } = await res.json()

      const redirectLink = `${window.location.origin}/#/connected`
      const deeplink = `https://phantom.app/ul/v1/connect?app_url=${encodeURIComponent(
        window.location.origin
      )}&redirect_link=${encodeURIComponent(
        redirectLink
      )}&encryption_public_key=${encodeURIComponent(
        encryption_public_key
      )}&payload=${encodeURIComponent(payload)}&nonce=${encodeURIComponent(
        nonce
      )}&cluster=devnet`

      window.location.href = deeplink
    } catch (error) {
      console.error('Ошибка при подключении:', error)
      alert('Ошибка при подключении к Phantom')
    }
  }

  return (
    <div className="p-4">
      <h1>Подключить Phantom</h1>
      <button
        onClick={handleConnect}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Подключиться
      </button>
    </div>
  )
}

export default App
