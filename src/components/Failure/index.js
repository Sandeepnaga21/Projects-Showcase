import './index.css'
import Header from '../Header'

const Failure = () => (
  <>
    <Header />
    <div className="f-container">
      <img
        alt="failure view"
        className="f-img"
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
      />
      <h1 className="heading">Oops! Something Went Wrong</h1>
      <p className="paragraph">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" className="r-button" onClick={onClickRetryBtn}>
        Retry
      </button>
    </div>
  </>
)

export default Failure
