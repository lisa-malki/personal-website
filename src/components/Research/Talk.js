
import Container from 'react-bootstrap/Container';
import { Row, Col, Badge} from 'react-bootstrap';



function Recording({recording}){
    if (recording) {
        return (
            <Row>
                <Col lg={2}>
                    <span style={{fontWeight: 600, color:'gray'}}>
                        Recording
                    </span>
                </Col>
                <Col>
                    <a href={recording} target='_blank'>
                    CPDP DPD 2025 - Who’s watching your period?
                    </a>
                </Col>
            </Row>
        );
    }
    return null;
}

function Talk({data}) {
    return (
        <Container className = "narrow-container-2 pb-5" fluid="sm">

        <h5 style={{fontWeight: 600}} class = 'mb-3'>
                     {data.title} 
                     <span style={{paddingLeft: '10px'}}> 
                        <Badge pill bg="success"> {data.type} </Badge> 
                    </span>
        </h5> 
        <Row>
            <Col lg={2}>
                <span style={{fontWeight: 600, color:'gray'}}>
                    Date
                </span>
            </Col>
            <Col>
                <span >
                   {data.date}
                </span>
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <span style={{fontWeight: 600, color:'gray'}}>
                    Venue
                </span>
            </Col>
            <Col>
                <span >
                   {data.venue}
                </span>
            </Col>
        </Row>
        <Recording recording = {data.recording} />

        </Container>
    );
};

export default Talk;