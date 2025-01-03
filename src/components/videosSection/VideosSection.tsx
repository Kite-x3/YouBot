import { VideoBlock } from '../videoBlock/VideoBlock'
import { videos } from './../../helpers/data/Videos'
import classes from './VideoSection.module.css'

export const VideosSection = () => {
  return (
    <section className={classes.VideoSection}>
      {videos.map((el, i) => (
        <VideoBlock key={i} {...el} />
      ))}
    </section>
  )
}
