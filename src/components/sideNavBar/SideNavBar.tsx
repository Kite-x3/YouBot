import classes from './SideNavBar.module.css'
import { HistoryIcon } from './icons/HistoryIcon'
import { HomeIcon } from './icons/HomeIcon'
import { SubscriptionsIcon } from './icons/SubscriptionsIcon'

export const SideNavBar = ({ show }: { show: boolean }) => {
  return (
    <nav className={`${classes.SideNavBar} ${show ? classes.Show : ''}`}>
      <ul>
        <li>
          <HomeIcon className={classes.Logos} /> Главная
        </li>
        <li>
          <HistoryIcon className={classes.Logos} /> История
        </li>
        <li>
          <SubscriptionsIcon className={classes.Logos} /> Подписки
        </li>
      </ul>
    </nav>
  )
}
