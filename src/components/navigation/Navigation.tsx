import { useState } from 'react'
import { SideNavBar } from '../sideNavBar/SideNavBar'
import classes from './Navigation.module.css'

export const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  const SideBarClickHandler = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <>
      <header className={classes.Navigation}>
        <button onClick={SideBarClickHandler}>кнопка</button>
        <p>Logo</p>
        <button>кнопка</button>
        <button>кнопка</button>
      </header>
      <SideNavBar show={showSideBar} />
    </>
  )
}
