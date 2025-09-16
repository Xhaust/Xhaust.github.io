export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-2">Software Engineer at TechCorp</h3>
                        <p className="text-gray-600 mb-4">Jan 2020 - Present</p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Developed and maintained web applications using React.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;