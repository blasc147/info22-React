import { Children } from 'react'
import Header from './Header'

function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  )
}

export default Layout
