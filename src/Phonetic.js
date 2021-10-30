import result from "react"; 
import './Phonetic.css';

export default function Phonetic(props) { 

return (
    <div class="Phonetic"> 
    < a href={props.phonetic.audio} target="_blank" rel="noreferrer"
    >Listen</a>
<span className="text">
    {props.phonetic.text} </span> 
    </div>
);
}