
const Audience = () => {
    return (
        <div id='audience'>
            <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Who Benefits from Our Website?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <img src="https://i.ibb.co/0nT8xyB/vecteezy-software-engineer-png-graphic-clipart-design-20962989.png" alt="" />
                        <h3 className="text-xl font-semibold mb-2">Developers</h3>
                        <p>
                            Our website is tailored to developers who are looking for a resourceful platform to enhance their coding
                            skills, discover new technologies, and stay updated on industry trends.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <img src="https://i.ibb.co/FKkHTp6/vecteezy-business-people-characters-working-in-the-office-minimal-23353937.png" alt="" />
                        <h3 className="text-xl font-semibold mb-2">Corporate Professionals</h3>
                        <p>
                            Corporate professionals benefit from our platform by gaining access to valuable insights, best practices,
                            and tools that can enhance their efficiency and decision-making processes.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <img src="https://i.ibb.co/VmJprV2/vecteezy-3d-earth-character-time-is-money-32046945.png" alt="" />
                        <h3 className="text-xl font-semibold mb-2">Bankers and Finance Professionals</h3>
                        <p>
                            For bankers and finance professionals, our website provides a reliable source of information on market trends,
                            financial analysis, and regulatory updates, aiding in making informed decisions.
                        </p>
                    </div>
                    {/* Add more sections for other target audiences as needed */}
                </div>
                <p className="mt-6 text-lg">
                    Regardless of your professional background, our website is designed to cater to a diverse audience. Whether you're
                    a developer honing your skills, a corporate professional seeking insights, or a banker navigating financial markets,
                    our platform is here to empower and benefit you.
                </p>
            </div>        </div>
    );
}

export default Audience;