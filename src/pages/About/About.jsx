import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mt-6">About Me</h1>
                <p>I am a Junior Web Developer with a passion for creating dynamic and immersive web experiences. With a strong <br />foundation in front-end development and a continuous drive to learn new technologies, I am dedicated <br /> to delivering visually appealing and user-friendly websites.</p>
            </div>
            <div className='flex gap-5 mt-5 mb-10'>
                <p style={{ fontSize: '20px' }}><FaFacebook /></p>
                <p style={{ fontSize: '20px' }}><FaGithub /></p>
                <p style={{ fontSize: '20px' }}><FaLinkedin /></p>
            </div>
        </div>
    );
};

export default About;