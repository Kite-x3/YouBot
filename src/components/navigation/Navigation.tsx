import { useState } from 'react'
import { SideNavBar } from '../sideNavBar/SideNavBar'
import classes from './Navigation.module.css'
import { BurgerMenuIcon } from './icons/BurgerMenuIcon'

export const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  const SideBarClickHandler = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <>
      <header className={classes.Navigation}>
        <div className={classes.LeftSideControls}>
          <button
            onClick={SideBarClickHandler}
            className={classes.BurgerMenuButton}
          >
            <BurgerMenuIcon className={classes.BurgerMenuIcon} />
          </button>
          <img src='./YouBotLogo.png' alt='YouBot logo' />
        </div>
        <div className={classes.SearchBlock}>
          <input type='text' placeholder='Введите запрос' />
          <button>search</button>
        </div>

        <button>кнопка</button>
      </header>
      <SideNavBar show={showSideBar} />
    </>
  )
}
