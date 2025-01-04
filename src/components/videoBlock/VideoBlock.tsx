import classes from './VideoBlock.module.css'

export const VideoBlock = ({
  preview,
  text,
  profileIcon,
  chanelName,
}: {
  preview: string
  text: string
  profileIcon: string
  chanelName: string
}) => {
  return (
    <div className={classes.VideoBlock}>
      <img src={preview} alt='img preview' className={classes.VideoPreview} />
      <div className={classes.Description}>
        <img
          src={profileIcon}
          alt='chanel profile icon'
          className={classes.ProfileIcon}
        />
        <div className={classes.textDescription}>
          <h2>{text}</h2>
          <span>{chanelName}</span>
        </div>
      </div>
    </div>
  )
}
