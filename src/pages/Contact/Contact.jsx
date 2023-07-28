

const Contact = () => {
    const handleSign = (e) => {
        e.preventDefault();
        const from = event.target
        const name = from.name.value
        const email = from.email.value
        const message = from.message.value
        console.log(name,email,message)
    }
    return (
        <div className="mt-12 text-center">
            <h1 className="text-xl font-semibold text-center mb-4">Contact Me</h1>
            <form onSubmit={handleSign} className="border flex mx-auto border-black rounded-lg h-72 w-2/4">
                <div className="ml-40 mt-12">
                    <div>
                        <input className="border border-black rounded w-full px-2" type="text" name='name' placeholder="name" />
                    </div>
                    <div className="mt-2">
                        <input style={{width:'13rem'}} className="border border-black rounded px-2" type="email" name="email" id="" placeholder="email" />
                    </div>
                    <div className="mt-2">
                       <textarea  className="textarea border-black textarea-bordered  w-full" placeholder="Bio" name="message" id=""  rows="10"></textarea>
                    </div>
                    <input className="btn btn-primary w-full mt-4" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Contact;