

const Project = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-10">My Project</h1>
            <div className="hero rounded-xl bg-slate-50 mt-12">
                <div className="hero-content flex gap-6">
                    <img className="w-2/4" src="https://i.ibb.co/6D3cgwh/alliance-football-club-x1-OStt-M2ajo-unsplash.jpg" />
                    <div>
                        <h1 className="text-2xl font-bold">FOREGIN SPORTS LEARNING SCHOOL</h1>
                        <p className="py-6">This website will have users in three roles. There will be students, instructors and admins. User can buy different types of foreign language classes from here. The user must login before selecting th see more...</p>
                        <h2 className="text-2xl font-semibold mb-3">Tecnology</h2>
                        <hr className="border " />
                        <div className="mt-1">
                            <p><span className="font-bold">Front End</span> : HTML , CSS , TAILWIND , Javascript , React</p>
                            <p><span className="font-bold">Back End :</span> Express , Mongodb Databse</p>
                            <p><span className="font-bold">Tools :</span> Git , Github , Firebase</p>
                        </div>
                        <h4 className="text-xl font-semibold mt-4 mb-1">Github Link</h4>
                        <hr />
                        <div className="flex gap-4">
                            <p className="text-emerald-500 font-bold">Client Site</p>
                            <p className="text-violet-700 font-bold">Server Site</p>
                        </div>

                        <button className="btn btn-primary ml-80">Live Site</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Project;