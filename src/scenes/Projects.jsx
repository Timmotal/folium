import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

// const container = {
//     hidden: {},
//     visible: {
//         transition: { staggerChildren: 0.2} //makes me remember Adrain usuing the index or something to stagger
//     }
// }

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}



// const projectVariant = {
//     hidden: { opacity: 0, scale: .8 },
//     visible: { opacity: 1, scale: 1 }
// }


const Project = ({ title, webLink, githubLink, appTitle }) => {

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey
                             z-30 flex flex-col justify-center text-center p-16 text-deep-blue`;
     const projectTitle = title
                        .split(" ")
                        .join("-")
                        .toLowerCase();

                
    return (
        <motion.div variants={projectVariant} className="relative"> 
        {/* we made the parent element also to be a motion.div, so that the child could detect the changes or something */}
            <div className={overlayStyles}>
            <p className=" hidden">{title}</p>
            <p className="text-2xl font-playfair ">{appTitle} App</p>
            <br />
            <p className="flex justify-around">
            <a target="_blank" href={webLink}>
            <span>
            <img src="../assets/web.png" alt="" />
            </span>
            </a>

            <a target="_blank" href={githubLink}>
            <span>
            <img src="../assets/zoom.png" alt="" />
            </span>
            </a>
            
            </p>
            
            
            </div>
            <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
            {/* some pretty neato logic */}
        </motion.div>
    )
}

const Projects = () => {

  return (
    <section id="projects" className="pt-48 pb-48">
        {/* HEADINGS */}
        <motion.div
                    className="md:w-2/4 mx-auto text-center" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div>
                    <p className="font-playfair font-semibold text-4xl">
                        My <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                    </div>
                    <p className="mt-10 mb-10"> 🚧 Some Web Applications & Websites I've built.</p>
        </motion.div>

        {/* PROJECTS */}
        <div className="flex justify-center">
        <div
                    className="sm:grid sm:grid-cols-3"
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true, amount: 0.5 }}
                    // transition={{ duration: 0.5 }}
                    // variants={{ container }}
                    // variants={{ -------WE ARE ABSTRACTING THIS
                    //     hidden: { opacity: 0, x: -50 },
                    //     visible: { opacity: 1, x: 0 }
                    // }}
                >
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[410px] text-2xl font-playfair font-semibold">
                        MODERN USER INTERFACE
                    </div>
                    {/* ROW 1 */}
                    <Project title="Project 1" appTitle={"AI Image Generator"} webLink={"https://www.google.com/"} githubLink={"#"} />
                    <Project title="Project 2" appTitle={"GrapheVilla: Share & discuss photographs"} webLink={"#"} githubLink={"#"} />
                    {/* ROW 2 */}
                    <Project title="Project 3" appTitle={"E-commerce: with payment integration"} webLink={"#"} githubLink={"#"} />
                    <Project title="Project 4" appTitle={"Moonverse"} webLink={"#"} githubLink={"#"} />
                    <Project title="Project 5" appTitle={"Gym Membership"} webLink={"#"} githubLink={"#"} />
                    {/* ROW 3 */}
                    <Project title="Project 6" appTitle={"React Music "} webLink={"#"} githubLink={"#"} />
                    <Project title="Project 7" appTitle={"Chat"} webLink={"#"} githubLink={"#"} />

                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        INTUITIVE & SIMPLE USER INTERFACE
                    </div>
        </div>
        </div>
    </section>
  )
}

export default Projects