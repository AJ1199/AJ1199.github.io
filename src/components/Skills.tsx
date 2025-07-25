import React from 'react';

const Skills = () => {
  const getImagePath = (imageName: string) => {
    // For GitHub Pages, we need to include the repository name in the path
    const basePath = import.meta.env.BASE_URL || '/';
    return `${basePath}${imageName}`;
  };

  const technologyLogos = [
    {
      name: "C++",
      image: getImagePath("cpp.png")
    },
    {
      name: "Love2D",
      image: getImagePath("love2d.png")
    },
    {
      name: "Unreal",
      image: getImagePath("unreal-engine-logo.png")
    },
    {
      name: "Unity",
      image: getImagePath("unity-logo.png")
    },
    {
      name: "Godot",
      image: getImagePath("godot.png")
    },
    {
      name: "Visual Studio",
      image: getImagePath("visual-studio-icon.png")
    },
    {
      name: "Photoshop",
      image: getImagePath("photoshop-logo.jpg")
    },
    {
      name: "Aseprite",
      image: getImagePath("aseprite-logo.png")
    },
    {
      name: "Blender",
      image: getImagePath("blender-logo.png")
    },
    {
      name: "Paint Tool SAI",
      image: getImagePath("paint-tool-sai-logo.png")
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Skills Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here are the programming languages and tools I have experience with.
          </p>
        </div>

        {/* Technology Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologyLogos.map((tech, index) => (
            <div key={index} className="bg-green-950/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-green-900/50 flex flex-col items-center justify-center">
              <img 
                src={tech.image} 
                alt={tech.name}
                className={`object-contain mb-4 ${tech.name === 'Paint Tool SAI' ? 'w-20 h-20' : 'w-16 h-16'}`}
              />
              <p className="text-white font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;