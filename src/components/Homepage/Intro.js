
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Highlight from './Highlight.js';
import highlights from '../../data/home/highlights.js';
import Markdown from 'markdown-to-jsx';
import { Row, Col } from 'react-bootstrap';


function PersonalIntro() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import('../../data/home/about.md').then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => setMarkdown(res))
        });               
    });
    return (
        <div className='page-cover-intro'>
        <Container>
            <div class="text-center py-4" >
                <Image src={`${process.env.PUBLIC_URL}${'/images/headshot.jpg'}`} className="img-fluid pb-4" id="main-headshot" roundedCircle />
                <h1 style={{color: 'white'}}> Lisa Mekioussa Malki </h1>
                <h2 style={{color: 'white', fontWeight: '300'}}>
                    Doctoral Student in AI and Privacy
                </h2>
                
                < span style={{color: 'white'}}>lisa.malki.21@ucl.ac.uk </span>
                <br></br>
                <a style={{fontWeight: '500', color: 'white'}} href='https://scholar.google.com/citations?user=9SxbJ6gAAAAJ&hl=en&oi=ao' target='_blank'>Google Scholar</a>
                <br></br>
                <a style={{fontWeight: '500', color: 'white'}} href='https://www.linkedin.com/in/lisa-malki/' target='_blank'>LinkedIn</a>
                <br></br>
  
            </div>
        </Container>
        <Container className = "narrow-container-2" style={{opacity:'90%'}} fluid="sm">
                <Card class="my-4 mx-5">
                <div class="my-4 mx-5">
                    <Markdown>{markdown}</Markdown>
                    <hr></hr>
                    <h5 class = 'my-4'>
                        News and Highlights
                    </h5>
                    {highlights.map((highlight) => (
                        <Highlight data={highlight} key={highlight.date} />
                    ))}
        
                    
                </div>
                </Card> 
        </Container>
        </div>
    );
}

export default PersonalIntro