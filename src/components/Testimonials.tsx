import React from 'react';

const Testimonials = () => {
  const getImagePath = (imageName: string) => {
    // For GitHub Pages, we need to include the repository name in the path
    const basePath = import.meta.env.BASE_URL || '/';
    return `${basePath}${imageName}`;
  };

  const testimonials = [
    {
      id: 1,
      name: "Joshua Goulden",
      image: getImagePath("testimonial-avatar.jpg"),
      text: "I had the opportunity to work with Andrew Hollett on the Bubble Blast Game Jam. Andrew Hollett brought a lot of enthusiasm with taking on tasks and getting the job done. He often took initiative in sprite creation in this Game Jam and was never afraid to try new ideas. He's a friendly and motivated team member who puts effort into seeing a project through to completion, and his dedication to the work was clear from start to finish.",
      link: "https://joshuagoulden520.itch.io/"
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Feedback from others that I've worked with on various projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-green-950/50 backdrop-blur-sm rounded-2xl p-8 border border-green-900/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Name at top - clickable if link exists */}
              {testimonial.link ? (
                <a 
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-bold text-white mb-6 text-center hover:text-green-300 transition-colors duration-200"
                >
                  {testimonial.name}
                </a>
              ) : (
                <h3 className="text-xl font-bold text-white mb-6 text-center">{testimonial.name}</h3>
              )}
              
              {/* Image in center */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-green-800/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text at bottom */}
              <p className="text-gray-200 leading-relaxed text-center">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;