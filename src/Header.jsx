import {Link} from "react-router-dom"
const Header =()=>{
    return(
        <div className="menut">
            <Link to="inicio"> PRESENTACIÓN</Link>&nbsp; &nbsp;&nbsp;
            <Link to="camera"> CAMARA DE FOTOS </Link>&nbsp;&nbsp;&nbsp;
            <Link to="acerca"> METAS</Link>&nbsp; &nbsp;&nbsp;
            <Link to="recordview"> RECORDVIEW </Link>&nbsp;&nbsp;&nbsp;

        </div>
        
    )
}
export default Header