import "../styles/language.css";

export const Language = ({img, level}) => {
  return (
    <div id="language-container">
        <img src={img} id="language-img" className="language-element"/>
        <h6 id="language-descrip" className="language-element">{level}</h6>
    </div>
  )
}
