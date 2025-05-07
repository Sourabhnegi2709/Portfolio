import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IGNOU",
      year: "2022 - 2025",
      description: "Focused on software development, web technologies, and database management."
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="p-4 border-l-4 border-blue-400 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-lg text-gray-300">{edu.institution}</p>
            <span className="block text-sm text-gray-400 mb-2">{edu.year}</span>
            <p className="text-gray-400">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
