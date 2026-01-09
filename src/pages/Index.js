import Navigation from '../components/Header';
import PersonalIntro from '../components/Homepage/Intro';
import ProjectPreview from '../components/Homepage/ProjectsPreview';
import Footer from '../components/Footer';


const App = () => {
  return (
    <div className="App">
      <header id="header">
        <Navigation /> 
      </header>
      <main>
        <PersonalIntro />
        <ProjectPreview />
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default App;
