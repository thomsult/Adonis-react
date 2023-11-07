import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Routage from './routage'
const root = document.getElementById('app')

interface PropsPage {
  component: string
  version: string
  props: any
  url: string
}

const ServerContext = React.createContext({})
function Server(props: any) {
  return <ServerContext.Provider value={props}>{props.children}</ServerContext.Provider>
}

function App(propsPage: PropsPage) {
  const { props } = propsPage
  console.log(propsPage)
  return (
    <StrictMode>
      <Server {...props}>
        <Routage />
      </Server>
    </StrictMode>
  )
}
createRoot(root!).render(<App {...JSON.parse(root?.dataset.page!)} />)
