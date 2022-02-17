// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, imageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="card-container">
        <img src={imageUrl} alt={`${name}`} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
