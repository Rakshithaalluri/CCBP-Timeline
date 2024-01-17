// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="title-duration-container">
        <h1 className="project-title-heading"> {projectTitle} </h1>
        <div className="duration-container">
          <AiFillCalendar className="calender-image" />
          <p className="duration"> {duration} </p>
        </div>
      </div>
      <p className="description"> {description} </p>
      <a href={projectUrl} className="anchor-link">
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimelineCard
