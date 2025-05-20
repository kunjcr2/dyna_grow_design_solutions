import React from 'react';

const Rendering = () => {
    const renderingProjects = [
        {
            id: 1,
            title: 'Modern Living Room',
            description: 'Photorealistic 3D rendering of a contemporary living space.',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDNkJTIwcmVuZGVyaW5nJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 2,
            title: 'Luxury Kitchen',
            description: 'Detailed 3D visualization of a high-end kitchen design.',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDNkJTIwcmVuZGVyaW5nJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 3,
            title: 'Office Space Concept',
            description: 'Conceptual 3D rendering for modern office layout.',
            image: 'https://images.unsplash.com/photo-1618840739221-e3adb12c9bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjByZW5kZXJpbmclMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 4,
            title: 'Minimalist Bedroom',
            description: 'Clean and serene bedroom design visualization.',
            image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkJTIwcmVuZGVyaW5nJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }
    ];

    return (
        <section id="rendering" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">3D Rendering Services</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Our advanced 3D rendering services help you visualize your space before the actual work begins. Experience your design in stunning detail with our photorealistic renderings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {renderingProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-200 mb-4">{project.description}</p>
                                <button className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our 3D Rendering Services?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-gray-700">Photorealistic quality that helps you visualize your space exactly as it will look when completed</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-gray-700">Multiple revision options to perfect your design before implementation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-gray-700">Detailed material and lighting simulations for accurate representation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-gray-700">Quick turnaround times to keep your project on schedule</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/3">
                            <div className="bg-emerald-50 rounded-lg p-6 text-center">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Ready to visualize your project?</h4>
                                <p className="text-gray-600 mb-6">Get in touch to discuss how our 3D rendering services can help bring your vision to life.</p>
                                <a href="#contact" className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors duration-300">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rendering; 