import Navigation from '../components/Header';
import Footer from '../components/Footer';
import { Container, Card } from 'react-bootstrap';

import experiences from '../data/cv/experience.js';
import degrees from '../data/cv/degrees.js';
import skills from '../data/cv/skills.js';

import Job from '../components/CV/Job.js';
import Degree from '../components/CV/Degree.js';
import Skills from '../components/CV/Skills.js';

const CV = () => {
  return (
    <div className="App">
      <header id="header">
        <Navigation /> 
      </header>
      <main>
        <div className = 'page-cover'>
            <Container className = "narrow-container-2 py-5 text-center" fluid="sm">
                <h1 style={{color:'white', fontWeight: '600'}}> My CV</h1>
            </Container>
            <Container className = "narrow-container-2 pb-5" fluid="sm">
                <Card>
                    <Card.Body>
                    
                        <div className = 'py-2 px-4'>
                            <h3> Education </h3>
                            <hr></hr>
                            {degrees.map((degree) => (
                                <Degree data={degree} />
                            ))} 
                        </div>
                        <div className = 'py-2 px-4'>
                            <h3> Experience </h3>
                            <hr></hr>
                            {experiences.map((experience) => (
                                <Job data={experience} />
                            ))}
                        </div>
                        <div className = 'py-2 px-4'>
                            <h3> Skills </h3>
                            <hr></hr>
                            <Skills data={skills} />
                        </div>                          
            
        
                    </Card.Body>
                </Card> 
        </Container>   
        </div>
        <footer id="footer"> <Footer /> </footer>
      </main>
    </div>
  );
};

export default CV;
