import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';

const Footer = () => {
    return (
        <div>
            <div className='flex'>
                <p>See more about me </p>
                <span className='mt-1 ml-4'><GoArrowRight /></span>
            </div>

            <div className='flex gap-5 mt-5 mb-10'>
                <p style={{ fontSize: '40px' }}><FaFacebook /></p>
                <p style={{ fontSize: '40px' }}><FaGithub /></p>
                <p style={{ fontSize: '40px' }}><FaLinkedin /></p>
            </div>
        </div>
    );
};

export default Footer;