import "../styles/card.css"

export const Card = ({props}) => {

  const {work, dateAndEnterprise, description} = props;

  return (
    <div className="card" id="card-container">
        <div className="card-body">
            <h5 className="card-title">{work}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{dateAndEnterprise}</h6>
            <p className="card-text">{description}</p>
        </div>
    </div>
  )
}
