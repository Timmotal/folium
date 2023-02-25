
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start mt-10 mb-4 gap-7">
        <a 
            href="https://www.linkedin.com/in/timmortal/" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel="noreferrer"
        >
            <img src="../assets/linkedin.png" alt="linkedin-link" />
        </a>
        <a 
            href="https://twitter.com/TimmortalOla" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel="noreferrer"
        >
            <img src="../assets/twitter.png" alt="twitter-link" />
        </a>
        <a 
            href="https://github.com/Timmotal" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel="noreferrer"
        >
            <img src="../assets/github.png" alt="github-link" />
        </a>
    </div>
  )
}

export default SocialMediaIcons