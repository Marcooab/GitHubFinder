import { UserProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"
import css from "./User.module.css"

const User = ({login, 
  avatar_url, 
  followers, 
  following, 
  location,
}: UserProps) => {
  return (
    <div className={css.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={css.location}><MdLocationPin />
        <span>{location}</span>
      </p>
      )}
      
      <div  className={css.stats}>
        <div>
          <p>Followers:</p>
          <p className={css.number}>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p className={css.number}>{following}</p>
        </div>
      </div>
      <Link to ={`/repos/${login}`}>Check more projects</Link>
    </div>
  )
}

export default User