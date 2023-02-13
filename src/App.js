import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

 
function App() {

  const [ selectedPage, setSelectedPage ] = useState('home');
  const isAboveMediumScreens =  useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // we pass an empty array, so the useEffect runs when the component is loaded 
  

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selected={selectedPage}
        setSelectedPage={setSelectedPage} 
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto ">
        {/* md:h-full: fks up my design */}
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        {/* md:h-full */}
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        {/* md:h-full */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
