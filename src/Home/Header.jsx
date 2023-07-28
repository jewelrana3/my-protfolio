
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div>
            <h2 className="text-center text-2xl">Download Resume</h2>

            <div className="gap-6 ">

                <div className="flex gap-6">
                    <div>
                        <h1 className=" mt-20 font-bold">
                            <span style={{ color: 'black', fontWeight: 'bold', fontSize: '38px' }}>
                                {/* Style will be inherited from the parent element */}
                                <TypeAnimation
                                    sequence={[
                                     "I'm jewel rana",
                                     2000,
                                     "I'm junior web developer and software enginear",
                                     2000,
                                     'wellcome to my protfolio project',
                                     2000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                        <p className="mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt incidunt quisquam libero sequi corrupti assumenda sit, unde reprehenderit impedit nostrum, rerum quae perferendis consectetur itaque maiores mollitia velit facere commodi!</p>
                    </div>
                    <img className="w-1/3 " src='https://i.ibb.co/G7BhQFn/IMG20230423174926.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;