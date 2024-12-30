import classes from './SideNavBar.module.css'

export const SideNavBar = ({ show }: { show: boolean }) => {
  return (
    <nav className={`${classes.SideNavBar} ${show ? classes.Show : ''}`}>
      <ul>
        <li>Главная</li>
        <li>История</li>
        <li>Подписки</li>
      </ul>
    </nav>
  )
}
