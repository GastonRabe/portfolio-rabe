import "../styles/education.css"

export const Education = ({institution, degree, date}) => {
    const start = "\{";
    const end = "\}";
    return (
        <div  id="education-container">
        {start}<br/>
        &nbsp;&nbsp;"institution" : "{institution}",<br/>
        &nbsp;&nbsp;"degree" : "{degree}",<br/>
        &nbsp;&nbsp;"date" : "{date}"<br/>
        {end}
        </div>
  )
}
