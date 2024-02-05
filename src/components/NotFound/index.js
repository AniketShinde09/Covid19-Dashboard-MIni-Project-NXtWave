import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="covid-error-view-container">
    <div className="notfound-card">
      <img
        src="https://res.cloudinary.com/aniket-shinde/image/upload/v1705426228/covideproject6_a7b77s.jpg"
        alt="not-found-pic"
        className="not-found-image"
      />
      <h1 className="notfound-heading">PAGE NOT FOUND</h1>
      <p className="notfound-description">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button type="button" className="go-to-home-button">
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
