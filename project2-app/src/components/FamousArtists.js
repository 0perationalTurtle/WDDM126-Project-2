import React from 'react';

const artists = [
  {
    name: "Fela Kuti",
    image: "/images/Fela Kuti.jpeg",
    description: "Fela Kuti, born in 1938 in Abeokuta, Nigeria, was a pioneering Nigerian musician, composer, and political activist who created the genre known as Afrobeat. In the late 1960s, after studying music in London and traveling to the United States, Fela combined jazz, funk, and traditional African rhythms to develop Afrobeat's signature sound—a powerful blend of complex rhythms, horns, and vocals. Beyond music, Fela became a bold voice for social and political change, openly criticizing the Nigerian government and addressing issues like corruption, inequality, and oppression. His activism and revolutionary music made him an icon in Nigeria and around the world, leaving a legacy that continues to inspire musicians and social movements globally..",
  },
  {
    name: "Burna Boy",
    image: "/images/Burna Boy.jpeg",
    description: "Burna Boy, born Damini Ogulu in 1991 in Port Harcourt, Nigeria, is a Grammy-winning Nigerian artist and a leading voice in Afrobeats. His career took off with the 2018 hit Ye, which brought him international fame. Known for blending Afrobeat, reggae, and hip-hop, Burna Boy explores African identity and social issues in his music. His 2019 album African Giant earned a Grammy nomination, and he won Best Global Music Album in 2021 with Twice As Tall. Today, he stands as one of Africa's most influential artists.",
  },
];

function FamousArtists() {
  return (
    <section id="Famous-Artists">
      <h2>Famous Artists from Nigeria</h2>
      <p> Nigeria is home to some of the world's most famous and influential artists, particularly in the music genre known as Afrobeats. This vibrant genre blends traditional African rhythms with jazz, funk, and highlife, creating a unique sound that has gained global popularity. Nigerian artists like Fela Kuti, pioneered the genre, and modern stars like Burna Boy, Wizkid, and Tiwa Savage have put Nigeria on the musical map, making Afrobeats a worldwide phenomenon. Their music showcases Nigeria's cultural richness, energetic beats, and powerful storytelling, captivating audiences across continents.</p>
      <section className="artist-container">
        {artists.map((artist, index) => (
          <section className="artist" key={index}>
            <h3>{artist.name}</h3>
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <p>{artist.description}</p>
          </section>
        ))}
      </section>
    </section>
  );
}

export default FamousArtists;
