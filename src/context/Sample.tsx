import { ReactNode, createContext, useState } from 'react'

const defaultProvider: any = {
  user: null,
  loading: true,
  sample: [] //sample
}

const SampleContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

 const SampleProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  const [sample, setSample] = useState<any>(defaultProvider.sample)

  const values = {
    user,
    loading,
    sample
  }

  return <SampleContext.Provider value={values}>{children}</SampleContext.Provider>
}


export { SampleContext, SampleProvider }