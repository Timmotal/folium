import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}


const Project = ({ title, webLink, githubLink, appTitle }) => {

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey
                             z-30 flex flex-col justify-center text-center p-16 text-deep-blue`;
     const projectTitle = title
                        .split(" ")
                        .join("-")
                        .toLowerCase();

                
    return (
        <motion.div variants={projectVariant} className="relative"> 
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
        </motion.div>
    )
}

const Projects = () => {

  return (
    <section id="projects" className="pt-48 pb-48">
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

        <div className="flex justify-center">
        <div className="sm:grid sm:grid-cols-3" >
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[410px] text-2xl font-playfair font-semibold">
                        MODERN USER INTERFACE
                    </div>
                    {/* ROW 1 */}
                    <Project title="Project 1" appTitle={"AI Image Generator MERN"} webLink={"https://timmortal.vercel.app/assets/project-1.png"} githubLink={"#"} />
                    <Project title="Project 2" appTitle={"GrapheVilla: Share & discuss photographs"} webLink={"https://timmortal.vercel.app/assets/project-2.png"} githubLink={"#"} />
                    {/* ROW 2 */}
                    <Project title="Project 3" appTitle={"E-commerce: with payment integration"} webLink={"https://timmortal.vercel.app/assets/project-3.png"} githubLink={"#"} />
                    <Project title="Project 4" appTitle={"Moonverse"} webLink={"https://timmortal.vercel.app/assets/project-4.png"} githubLink={"#"} />
                    <Project title="Project 5" appTitle={"Gym Membership"} webLink={"https://timmortal.vercel.app/assets/project-5.png"} githubLink={"#"} />
                    {/* ROW 3 */}
                    <Project title="Project 6" appTitle={"React Music "} webLink={"https://timmortal.vercel.app/assets/project-6.png"} githubLink={"#"} />
                    <Project title="Project 7" appTitle={"Chat"} webLink={"https://timmortal.vercel.app/assets/project-7.png"} githubLink={"#"} />

                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[410px] text-2xl font-playfair font-semibold">
                        INTUITIVE & SIMPLE USER INTERFACE
                    </div>
        </div>
        </div>
    </section>
  )
}

export default Projects