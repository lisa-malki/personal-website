import Navigation from '../components/Header';
import PersonalIntro from '../components/Homepage/Intro';
import ProjectPreview from '../components/Homepage/ProjectsPreview';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const App = () => {
  return (
    <motion.div 
      className="App"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}>

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
    </motion.div>
  );
};

export default App;
