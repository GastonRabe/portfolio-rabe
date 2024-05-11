import "../styles/education.css"
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const Education = ({props}) => {
  const {institution, degree, date, hasNext} = props;
    const start = "\{";
    const end = "\}";
    let coma='';

    const inst = {
        english: "institution",
        spanish: "institución"
      }
    
      const deg = {
        english: "degree",
        spanish: "título"
      }

      const year = {
        english: "date",
        spanish: "fecha"
      }
    
      const {language} = useContext(LanguageContext);

    if (hasNext === 'true')
        coma=',';

    return (
        <div  id="education-container">
            {start}<br/>
            &nbsp;&nbsp;"{inst[language]}" : "{institution}",<br/>
            &nbsp;&nbsp;"{deg[language]}" : "{degree}",<br/>
            &nbsp;&nbsp;"{year[language]}" : "{date}"<br/>
            {end}{coma}
        </div>
  )
}