import React, { useState } from 'react';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('residential');
    const [activeSubcategory, setActiveSubcategory] = useState('unit-design');

    const categories = [
        { id: 'residential', name: 'Residential' },
        { id: 'commercial', name: 'Commercial' }
    ];

    const subcategories = {
        residential: [
            { id: 'unit-design', name: 'Unit Design' },
            { id: 'temple', name: 'Temple' },
            { id: 'wardrobe', name: 'Wardrobe' },
            { id: 'sliding-wardrobe', name: 'Sliding Wardrobe' },
            { id: 'kitchen', name: 'Kitchen' },
            { id: 'hall', name: 'Hall' }
        ],
        commercial: [
            { id: 'office', name: 'Office Space' },
            { id: 'retail', name: 'Retail' },
            { id: 'restaurant', name: 'Restaurant' },
            { id: 'hotel', name: 'Hotel' }
        ]
    };

    // Sample projects data
    const projectsData = {
        residential: {
            'unit-design': [
                {
                    id: 1,
                    title: 'Modern Apartment',
                    description: 'Sleek and contemporary apartment design with clean lines and functional spaces.',
                    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                },
                {
                    id: 2,
                    title: 'Urban Loft',
                    description: 'Open-concept loft design with industrial touches and warm accents.',
                    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'temple': [
                {
                    id: 3,
                    title: 'Contemporary Temple',
                    description: 'Modern temple design with traditional elements for a serene spiritual space.',
                    image: 'https://images.unsplash.com/photo-1609619385001-3bb3a793e4a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVtcGxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'wardrobe': [
                {
                    id: 4,
                    title: 'Luxury Wardrobe',
                    description: 'Custom-designed wardrobe with optimized storage and elegant finishes.',
                    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'sliding-wardrobe': [
                {
                    id: 5,
                    title: 'Space-Saving Sliding Wardrobe',
                    description: 'Efficient sliding wardrobe design perfect for modern living spaces.',
                    image: 'https://images.unsplash.com/photo-1595526051245-5cbe05fb82f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhcmRyb2JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'kitchen': [
                {
                    id: 6,
                    title: 'Modern Kitchen',
                    description: 'Sleek kitchen design with top-of-the-line appliances and efficient layout.',
                    image: 'https://images.unsplash.com/photo-1600607687644-c7171b41df22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'hall': [
                {
                    id: 7,
                    title: 'Elegant Living Hall',
                    description: 'Spacious and elegant living hall design with perfect blend of comfort and style.',
                    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpdmluZyUyMHJvb20lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                }
            ]
        },
        commercial: {
            'office': [
                {
                    id: 8,
                    title: 'Corporate Office',
                    description: 'Modern office space designed for productivity and employee well-being.',
                    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'retail': [
                {
                    id: 9,
                    title: 'Boutique Retail Space',
                    description: 'Inviting retail environment designed to enhance customer experience and showcase products.',
                    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'restaurant': [
                {
                    id: 10,
                    title: 'Contemporary Restaurant',
                    description: 'Stylish dining space with attention to acoustics, lighting, and customer flow.',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                }
            ],
            'hotel': [
                {
                    id: 11,
                    title: 'Luxury Hotel Lobby',
                    description: 'Striking hotel lobby design that creates a memorable first impression for guests.',
                    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }
            ]
        }
    };

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setActiveSubcategory(subcategories[categoryId][0].id);
    };

    const handleSubcategoryChange = (subcategoryId) => {
        setActiveSubcategory(subcategoryId);
    };

    const activeProjects = projectsData[activeCategory][activeSubcategory] || [];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Projects</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                className={`px-8 py-3 text-sm font-medium ${activeCategory === category.id
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                    } border border-gray-200 rounded-l-lg focus:outline-none ${category.id === 'commercial' ? 'rounded-l-none rounded-r-lg' : ''
                                    }`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Subcategory Tabs */}
                <div className="flex justify-center mb-12 flex-wrap">
                    {subcategories[activeCategory].map((subcategory) => (
                        <button
                            key={subcategory.id}
                            type="button"
                            className={`px-6 py-2 mx-2 my-2 text-sm font-medium rounded-full ${activeSubcategory === subcategory.id
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                } focus:outline-none`}
                            onClick={() => handleSubcategoryChange(subcategory.id)}
                        >
                            {subcategory.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="relative h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <button className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800">
                                    View Details
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 