
import Badge from 'react-bootstrap/Badge';

function Skills({data}){
    return(
        <div className= 'pb-3'>
            <div  className="pb-2">
            <   span style={{fontWeight: '600'}}>Technologies: </span> {(data.languages).map((language) =>(<Badge style={{marginLeft: '5px'}} bg="success" pill>{language}</Badge>))}
            </div>
            <div className="pb-2">
                <span style={{fontWeight: '600'}}>Data Science/AI: </span> {(data.techniques).map((technique) =>(<Badge style={{marginLeft: '5px'}} bg="success" pill>{technique}</Badge>))}
            </div>
            <div className='pb-3'>
                <span style={{fontWeight: '600'}}>User Research: </span> {(data.research).map((rskill) =>(<Badge style={{marginLeft: '5px'}} bg="success" pill>{rskill}</Badge>))}
            </div>        
   </div>
    );
}

export default Skills;