import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
           Aiming to be a Digital Renaissance. I am constantly surfing
           for the bests tools in the world of technology to help develop ideas into live web apps, 
           {isAboveMediumScreens ? (
           <span className="text-blue"> some of my popular tools 👉</span>
           ) : (
            <span className="text-blue"> some of my popular tools 👇</span>
           )}
          </p>
          
        </motion.div>

        <div className="md:order-2 flex justify-center basis-3/5 z-10">
          {/* {isAboveMediumScreens ? (
                <div
                    className="relative z-10 ml-20 before:absolute before:-top-10 before:-left-10  
                                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                >
                    <img src="assets/skills-image.png" alt="skills" className="z-10" /> */}

          <div className="flex flex-row flex-wrap justify-center container-icon">
          <div class="box-icon">
              <i class="devicon devicon-react-original" aria-hidden="true"></i>
              <p>React</p>
            </div>
            <div class="box-icon">
              <i class="fab fa-js" aria-hidden="true"></i>
              <p>JavaScript</p>
            </div>
            <div class="box-icon">
              <i class="devicon-nextjs-original"></i>
                <p>Next JS</p>
            </div>
            <div className="box-icon">
            <i class="devicon-typescript-plain"></i>
            <p>Typescript</p>
            </div>
          <div class="box-icon">
            <i class="devicon devicon-html5-plain" aria-hidden="true"></i>
            <p>HTML5</p>
          </div>
            <div className="box-icon">
              <i class="devicon devicon-css3-plain" aria-hidden="true"></i>
              <p>CSS3</p>
            </div>
            <div class="box-icon">
            <i class="devicon-tailwindcss-plain"></i>
            <p>Tailwind CSS</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-git-plain" aria-hidden="true"></i>
              <p>Git</p>
            </div>
            
            <div class="box-icon">
              <i class="devicon devicon-github-plain" aria-hidden="true"></i>
              <p>Github</p>
            </div>
            
            {/* <div class="box-icon">
            <div class="container-img-i i-firebase">
                <img src="./assets/icon-firebase.svg" alt="firebase icon" aria-hidden="true" />
            </div>
            <p>Firebase</p>
          </div> */}
            <div class="box-icon">
              <i class="devicon devicon-sass-original" aria-hidden="true"></i>
              <p>SASS</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-terminal" aria-hidden="true"></i>
              <p>Command Line</p>
            </div>
            <div class="box-icon">
              <i
                class="devicon devicon-visualstudio-plain"
                aria-hidden="true"
              ></i>
              <p>VS Code</p>
            </div>
            {/* <div class="box-icon">
            <div class="container-img-i i-responsive"> */}
            {/* <!-- This icon by Freepik from "https://www.flaticon.com/" --> */}
            
            {/* </div>
            <p>Responsive Websites</p>
          </div> */}
          </div>
        </div>
        {/*
            ) : (
                <img src="assets/skills-image.png" alt="skills" className="z-10" />
            )} 
        </div> */}
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">
            一
            </p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              User-Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
           Developing Web Apps that runs across devices & platforms & 
           delivering a seamless experience for all users.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">
            二
            </p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Value
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="font-playfair font-semibold text-5xl"></p>
          <p className="mt-5">
          Passionate about building superb software. 
          Integrating modern languages & frameworks to help deliver value and enrich lives.
          
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">三</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Simple
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-gumbo absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Enjoy bringing ideas to life in browsers.
          Leveraging the powers of Javascript and other technologies to develop friendly & simple UI
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
