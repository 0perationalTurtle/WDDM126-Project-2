import React, { useState } from 'react';

const landmarks = [
  {
    name: "The National Theatre",
    image: "images/National Theatre.jpeg",
    description: "The National Theatre in Nigeria, located in Iganmu, Lagos, is an iconic cultural landmark and a hub for the arts. Built in 1976 to commemorate Nigeria's hosting of the Festival of Arts and Culture (FESTAC) in 1977, it was modeled after the Palace of Culture and Sports in Varna, Bulgaria. The structure was designed to celebrate Nigerian heritage, art, and performance, with its grand architecture reflecting traditional Nigerian motifs.",
  },
  {
    name: "The Zuma Rock",
    image: "images/Zuma Rock.jpg",
    description: "Zuma Rock is a large monolithic rock located in Niger State, Nigeria, just north of the capital, Abuja. Often called the 'Gateway to Abuja,' this towering rock is around 725 meters tall, nearly twice the height of the Great Pyramid of Giza. Known for its distinctive human-like face markings, Zuma Rock has long been significant in local folklore, symbolizing strength and mystery. Historically, the Gwari people revered it as a spiritual protector, and it continues to be an iconic symbol in Nigeria, even featured on the country's 100-naira note.",
  },
];

function FamousLandmarks() {
  const [selectedLandmark, setSelectedLandmark] = useState(null);

  const handleClick = (index) => {
    setSelectedLandmark(index === selectedLandmark ? null : index);
  };

  return (
    <section id="Famous-Landmarks">
      <h2>Famous Landmarks</h2>
      <p>Nigeria is known for its iconic landmarks that showcase the country's rich history and natural beauty. The Zuma Rock, towering near Abuja, is a striking monolith often called the "Gateway to Abuja." Olumo Rock in Abeokuta holds historical significance, serving as a refuge during tribal wars. Lagos is home to the bustling Lekki Conservation Centre and the famous National Theatre, a cultural hub for Nigerian arts. Additionally, the Yankari National Park in Bauchi offers a view of Nigeria's diverse wildlife, attracting visitors from around the world. These landmarks highlight Nigeria's unique blend of culture, history, and natural wonders.</p>
      <section className="landmark-container">
        {landmarks.map((landmark, index) => (
          <section 
            key={index} 
            className="landmark" 
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer", marginBottom: "20px" }}
          >
            <h3>{landmark.name}</h3>
            <img src={landmark.image} alt={landmark.name} />
            {selectedLandmark === index && <p>{landmark.description}</p>}
          </section>
        ))}
      </section>
    </section>
  );
}

export default FamousLandmarks;
