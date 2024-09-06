import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CategoriesList from '../CategoriesList'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class Projects extends Component {
  state = {activeItem: categoriesList[0].id, categoryList: [], isLoading: true}

  componentDidMount() {
    this.getCategoriesList()
  }

  onChangeActiveItem = event => {
    this.setState({activeItem: event.target.value})
  }

  getCategoriesList = async () => {
    const {activeItem} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${activeItem}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const {projects} = await data
    const updatedData = await projects.map(eachOne => ({
      id: eachOne.id,
      name: eachOne.name,
      imageUrl: eachOne.image_url,
    }))
    this.setState({categoryList: updatedData, isLoading: false})
  }

  render() {
    const {activeItem, isLoading, categoryList} = this.state
    console.log(activeItem)
    console.log(categoryList)

    return (
      <>
        <Header />
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={50}
            width={50}
            testid="loader"
          />
        ) : (
          <div className="p-container">
            <div className="c-list">
              <select
                className="s-select"
                onChange={this.onChangeActiveItem}
                value={activeItem}
              >
                {categoriesList.map(eachCategory => (
                  <option value={eachCategory.id}>
                    {eachCategory.displayText}
                  </option>
                ))}
              </select>

              <ul>
                {categoryList.map(each => (
                  <CategoriesList categoryDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Projects
