import "../styles/education.css"

export const Education = ({institution, degree, date, hasNext}) => {
    const start = "\{";
    const end = "\}";
    let coma='';

    if (hasNext === 'true')
        coma=',';

    return (
        <div  id="education-container">
        {start}<br/>
        &nbsp;&nbsp;"institution" : "{institution}",<br/>
        &nbsp;&nbsp;"degree" : "{degree}",<br/>
        &nbsp;&nbsp;"date" : "{date}"<br/>
        {end}{coma}
        </div>
  )
}
