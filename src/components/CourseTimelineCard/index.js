// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="project-duration-content">
        <h1 className="course-heading"> {courseTitle} </h1>
        <div className="duration-content">
          <AiFillClockCircle className="clock-image" />
          <p className="duration"> {duration} </p>
        </div>
      </div>
      <p className="description"> {description} </p>
      <ul className="list-items-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="list-item">
            <p className="tag-name"> {eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
