import React, { useState } from 'react';

const members = [
  {
    name: "Alese Zainob Oyinkansola",
    image: "/images/Oyinkansola.jpg",
    role: "Group Member 1",
    description: "Zainob is a product designer with a background in Computer Science and Cybersecurity. Her passion for design led her to pursue further studies in Web Design and Development.",
    hobbies: ["Movies", "Reading", "Music", "Dancing"],
  },
  {
    name: "Anselm Ojimadu",
    image: "images/Anselm.jpg",
    alias: "OperationalTurtle",
    description: "A cybersecurity enthusiast, currently taking a program in Web design and development. He hails from Imo state, home to the Igbo Tribe.",
    hobbies: ["Music", "Stunt Driving", "Video Games", "Hiking"],
  },
  {
    name: "Bright Edom",
    image: "images/Bright.jpeg",
    role: "Group Member 3",
    description: "Bright is a user support technician and a future cybersecurity expert. He handled the JavaScript of this project.",
    hobbies: ["Football", "Movies", "Music", "Gaming"],
  },
];

function Profiles() {
  // State to manage toggling hobbies visibility
  const [visibleMember, setVisibleMember] = useState(null);

  const toggleHobbies = (index) => {
    setVisibleMember(visibleMember === index ? null : index);
  };

  return (
    <article id="profiles">
      {members.map((member, index) => (
        <section className="member" key={index}>
          <h3>{member.name}</h3>
          <img src={member.image} alt={member.name} className="member-image" />
          <p><strong>Role:</strong> {member.role || member.alias}</p>
          <p>{member.description}</p>
          <button onClick={() => toggleHobbies(index)}>
            {visibleMember === index ? 'Hide Hobbies' : 'Show Hobbies'}
          </button>
          {visibleMember === index && (
            <div className="hobbies">
              <h4>Hobbies:</h4>
              <nav>
                {member.hobbies.map((hobby, i) => (
                  <span key={i}>{hobby}</span>
                ))}
              </nav>
            </div>
          )}
        </section>
      ))}
    </article>
  );
}

export default Profiles;
