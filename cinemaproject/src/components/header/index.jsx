import Cards from "../card";
import './style.css';

export default function Header(){
    return(
        <div className="main_container">
        <h1 className='title_header'>Cinema Project</h1>
        <Cards></Cards>
        </div>
    );
}