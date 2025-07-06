import React, { createContext, useState } from 'react'

export const WalletContext = createContext<{ wallet: string | null, setWallet: (val: string) => void }>({
  wallet: null,
  setWallet: () => {}
})

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<string | null>(null)
  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  )
}
