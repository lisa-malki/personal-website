
import {Card, CardBody} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProjectCard({data}) {

    return (
        <Card className='my-3 p-2' style={{borderColor:'lightgray'}}>
        <CardBody>
            <Row>
                <Col xl={11}>
                <h5 >
                    {data.short_title}
                </h5>

                </Col>
                <Col>
                    <p class="project-metadata">
                        {data.date}
                    </p>
                </Col>
            </Row>  
            <Row>
                <p>
                    {data.shortDesc} 
                </p>

                <p style={{fontWeight: '600'}}>
                    Publication: <a href={data.doi} target='_blank'>{data.title}</a>
                </p>
            </Row>
        </CardBody>
        </Card>
        
    );
}

export default ProjectCard;