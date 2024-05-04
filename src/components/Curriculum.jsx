import IconoPDF from '@mui/icons-material/PictureAsPdf';
import "../styles/curriculum.css";
import { FilePdf } from 'react-bootstrap-icons';
export const Curriculum = ({cv, description}) => {
  return (
    <div id="curriculum-container">
        <a href={cv} target="_blank" rel="noopener noreferrer">
            <FilePdf id="cv-icono"/>
        </a>
        <p id="curriculum-descrip">{description}</p>
    </div>
  )
}
