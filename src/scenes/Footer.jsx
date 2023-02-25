import SocialMediaIcons from "../components/SocialMediaIcons"


const Footer = () => {
  return (
    <footer className="h-50 bg-red pt-10 pb-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between text-center">
                <div className="flex justify-center items-center mb-4">
                <a href="#">
                <img className='w-24' src="../assets/TimLight.png" alt='logo'/>
                </a>
                </div>
                <p className="font-playfair text-md text-whit">Copyright © {new Date().getFullYear()} Timmortal. All Rights Reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer