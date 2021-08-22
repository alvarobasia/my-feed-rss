import { createContext, PropsWithChildren, useState } from 'react'
import { PubType } from '../pages/pub'

type PubContextType = {
  pub: PubType | null
  setPub: (pub: PubType) => void
}

export const PubContext = createContext({} as PubContextType)

export function PubProvider(props: PropsWithChildren<any>) {
  const [pub, setPub] = useState<PubType | null>(null)
  return (
    <PubContext.Provider value={{ pub, setPub }}>{props.children}</PubContext.Provider>
  )
}
