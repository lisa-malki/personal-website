import Navigation from '../components/Header';
import Footer from '../components/Footer';
import { Container, Card } from 'react-bootstrap'; 

import Publication from '../components/Research/Publication.js';
import Talk from '../components/Research/Talk.js';

import publications from '../data/research/publications.js';
import talks from '../data/research/talks.js';
import media from '../data/research/media.js';


import { useEffect } from 'react';

const Research = () => {
  console.log(media);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const listItems = media.map(article => 
    <li key = {article.headline}> 
      <a href = {article.url} target = '_blank' style = {{fontWeight: '700'}}> {article.headline} </a> - {article.publisher}
      </li>
  );
  

  return (
    <div className="App">
      <header id="header">
        <Navigation /> 
      </header>
      <main>
        <div className='page-cover'>
            <Container className = "narrow-container-2 py-5 text-center" fluid="sm">
                <h1 style={{color:'white', fontWeight: '600'}}> Research and Publications </h1>
            </Container>  
              <Container className = "narrow-container-2 pb-5" fluid="sm">
                <Card>
                  <Card.Body>
                      <div className = 'py-2 px-4'>
                          <h3 style={{fontWeight: '700'}} > Publications </h3>
                          <p class = 'lead'> Recent papers I've published </p>
                          <hr></hr>
                          {publications.map((publication) => (
                            <Publication data={publication} key={publication.title} />
                          ))}
                      </div>
                      <div className = 'px-4'>
                          <h3 style={{fontWeight: '700'}}> Talks </h3>
                          <p class = 'lead'> Talks, workshops, and panels I've participated in </p>
                          <hr></hr>
                          {talks.map((talk) => (
                            <Talk data={talk} key={talk.title} />
                          ))}
                      </div>
                      <div className = 'px-4'>
                          <h3 style={{fontWeight: '700'}}> Media </h3>
                          <p class = 'lead'> Media coverage of my research </p>
                          <hr></hr>   
                          <ul>
                            {listItems}    
                          </ul>          
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

export default Research;
