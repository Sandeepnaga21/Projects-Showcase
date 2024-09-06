import './index.css'

const CategoriesList = props => {
  const {categoryDetails} = props
  const {id, name, imageUrl} = categoryDetails

  return (
    <li className="list-categories" key={id}>
      <img src={imageUrl} alt={name} className="c-img" />
      <p className="heading">{name}</p>
    </li>
  )
}

export default CategoriesList
