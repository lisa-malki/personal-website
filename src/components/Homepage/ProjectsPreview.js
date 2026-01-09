import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import publications from '../../data/research/publications.js';
import ProjectCard from './ProjectCard.js';
import { Link } from 'react-router-dom';

function ProjectPreview(){
    
    return (
        <>
            <Container className="narrow-container my-5" fluid="sm">
                <div class>
                    <h2 class='pb-4'>
                        Recent Projects
                    </h2>
                        {publications.slice(0,3).map((project) => (
                            <ProjectCard data={project} key={project.title} />
                        ))}
                 
                    <div class='my-4' >
                        <Button as={Link} to = '/research' variant="outline-dark" style={{width:'25%'}}>All Publications</Button>
                    </div>
                </div>
                

                
            </Container>
        </>
    );
}

export default ProjectPreview;