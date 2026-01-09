
import Container from 'react-bootstrap/Container';
import { Row, Col, Accordion } from 'react-bootstrap';

function Publication({data}) {
    
    return (
        <Container className = "narrow-container-2 pb-5" fluid="sm">
        <h5 style={{fontWeight: 600}} class = 'mb-4'> {data.title} </h5>
        <Row>
            <Col lg={2}>
                <span style={{fontWeight: 600, color:'gray'}}>
                    Authors
                </span>
            </Col>
            <Col>
                <span >
                    {data.authors}
                </span>
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <span style={{fontWeight: 600, color:'gray'}}>
                    Publication Date
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
                    Conference
                </span>
            </Col>
            <Col>
                <span >
                    {data.venue}
                </span>
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <span style={{fontWeight: 600, color:'gray'}}>
                    URL
                </span>
            </Col>
            <Col>
                <p>
                    <a target = "_blank" href={data.doi}>{data.doi}</a>
                </p>
            </Col>
        </Row>
       
        <Row>
            <Col lg={2}> </Col>
            <Col>
            <Accordion class>
            <Accordion.Item eventKey="0">
                <Accordion.Header><span style = {{fontWeight: 700, fontSize: '16px'}}>Paper Abstract</span></Accordion.Header>
                <Accordion.Body>
                    {data.abstract}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </Col>
        </Row>
        </Container>
    );
};

export default Publication;