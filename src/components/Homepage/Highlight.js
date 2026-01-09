import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge } from 'react-bootstrap';



function Highlight({data}) {

    var highlight = data.highlight
    if (data.url && data.highlight.includes("{text}")) {
        const parts = data.highlight.split("{text}");
        highlight = (
        <>
            {parts[0]}
            <a href={data.url} target="_blank">{data.link_text}</a>
            {parts[1]}
        </>
        );

    } else {
        highlight = data.highlight;
    }

    return (
        <Row>
            <Col lg={2}>
                <h5>
                    <Badge bg="success">{data.date}</Badge>
                </h5>
            </Col>
            <Col>
                <p >
                    {highlight}
                </p>
            </Col>
        </Row>
    );
}

export default Highlight;