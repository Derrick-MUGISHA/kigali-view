import React, { useState } from 'react';
import './kigaliNewsCard.css';

const ColumbusNewsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  // Mock data for news cards
  const newsCards = [
    {
      "title": "Nyandungu Eco-Tourism Park",
      "description": "A serene eco-park in Kigali offering walking trails, birdwatching, and a peaceful escape into nature.",
      "imageUrl": "https://www.ktpress.rw/wp-content/uploads/2022/07/Nyandungu-16.jpg",
      "link": "./src/pages/kigaliNewsCard/NewCard.js"
    },
    {
      "title": "Kigali Genocide Memorial",
      "description": "A poignant memorial honoring the victims of the 1994 Genocide against the Tutsi, offering historical insights and reflection.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPxaeXMZnCeFCOxf3MkrGA8IlfgZKAP5TEoMzYq=w540-h312-n-k-no",
      "link": "https://www.kgm.rw/"
    },
    {
      "title": "Volcanoes National Park",
      "description": "Home to the endangered mountain gorillas, this park offers unforgettable gorilla trekking experiences in the Virunga Mountains.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/48/Volcanoes_National_Park_Banner_Image.gif",
      "link": "https://www.visitrwanda.com/destinations/volcanoes-national-park/"
    },
    {
      "title": "Lake Kivu",
      "description": "A stunning freshwater lake perfect for swimming, kayaking, and relaxing by the shores in towns like Gisenyi and Kibuye.",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQrcyFCschjDRlznkFCktUOz7RyZNtcBVDBIWE5zlTBBHWj5otFsOkH1ux5nTRTJ4qfXXDOGSNPFF5dcueIW-HDY0kcvu7XVRN0RQZ5qw",
      "link": "https://www.visitrwanda.com/destinations/lake-kivu/"
    },
    {
      "title": "Akagera National Park",
      "description": "Rwanda's only savannah park, home to lions, elephants, giraffes, and a variety of wildlife, ideal for safari adventures.",
      "imageUrl": "",
      "link": "https://www.africanparks.org/the-parks/akagera"
    },
    {
      "title": "Inema Arts Center",
      "description": "A vibrant arts center in Kigali showcasing contemporary Rwandan art, workshops, and cultural performances.",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ9O5gqi09FI3awcOu1Gemeued5d6qtSJCHkPfeLVlBnO44DGM1aNd9Xxio5g7aKR7yC_aiJ8__Fp1saKc1CscCZWmRDoa6EAt-aqBtX-c",
      "link": "https://www.inemaarts.com/"
    },
    {
      "title": "King’s Palace Museum",
      "description": "Located in Nyanza, this museum offers a glimpse into Rwanda's royal history and traditional architecture.",
      "imageUrl":"",
      "link": "https://www.museum.gov.rw/king-palace-museum"
    },
    {
      "title": "Nyungwe Forest National Park",
      "description": "A biodiversity hotspot with canopy walks, chimpanzee tracking, and over 1,000 plant species in one of Africa's oldest rainforests.",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSllrI7rEVRm04vYwhjsifKZ03o-DWeMS9Mg_juhkC-3GHe0syIob7_MIyL8Qoq9HE5BIMpsDa_VqnlLs5N3sDBx_miBALpXLgughKOW0Q",
      "link": "https://www.visitrwanda.com/destinations/nyungwe-national-park/"
    },
    {
      "title": "Rwanda Art Museum",
      "description": "Housed in the former presidential palace, this museum showcases Rwandan art and cultural heritage.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMHK9yQkCYyloMyu1C4VvVEm1v7VX4w1xEubbnH=w675-h390-n-k-no",
      "link": "https://www.museum.gov.rw/rwanda-art-museum"
    },
    {
      "title": "Mount Karisimbi",
      "description": "A challenging trek to Rwanda's highest peak, offering breathtaking views and a chance to explore the Virunga Mountains.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipNOIGEirHO9T5_31uVlVB1MFF7csPln67eKA3C6=w675-h390-n-k-no",
      "link": "https://www.visitrwanda.com/destinations/volcanoes-national-park/"
    },
    {
      "title": "Gishwati-Mukura National Park",
      "description": "A newly established park with lush forests, waterfalls, and opportunities for hiking and primate tracking.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMmpx3g9u0fAkAOsKqBTQj7L1xAhWFOkKLeaz7-=w675-h390-n-k-no",
      "link": "https://www.visitrwanda.com/destinations/gishwati-mukura-national-park/"
    },
    {
      "title": "Kigali Heights",
      "description": "A modern shopping and entertainment hub in Kigali, offering restaurants, cafes, and a cinema.",
      "imageUrl": "https://igihe.com/local/cache-vignettes/L800xH534/dsc_9449-2-94b30-fe6ee.jpg?1728928934",
      "link": "https://kigaliheights.com/"
    },
    {
      "title": "Rusumo Falls",
      "description": "A stunning waterfall on the Rwanda-Tanzania border, perfect for nature lovers and photographers.",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTFxSEd06JLJmwdrlMJrose81FNywM4D8-W8YGdeZShJpzA9pcblgWYOd8XEMaR-HsDQYerN-uBPyzEj2WqDekidQ2yQjWgMiU5UuZxEME",
      "link": "https://www.visitrwanda.com/destinations/rusumo-falls/"
    },
    {
      "title": "Iby’Iwacu Cultural Village",
      "description": "Experience Rwandan culture, traditions, and village life near Volcanoes National Park.",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f4/48/24/come-and-enjoy-our-traditional.jpg?w=900&h=500&s=1",
      "link": "https://www.ibyiwacu.com/"
    },
    {
      "title": "Kigali convestion center",
      "description": "A bustling market in Kigali where you can shop for fresh produce, crafts, and traditional Rwandan fabrics.",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/e8/d6/ef.jpg",
      "link": "https://www.visitkigali.rw/kimironko-market/"
    },
    {
      "title": "The Musanze Caves",
      "description": "Explore these fascinating lava tubes formed by volcanic activity, located near Volcanoes National Park.",
      "imageUrl": "https://lp-cms-production.imgix.net/2020-11/shutterstockRF_34434805.jpg?w=1440&h=810&fit=crop&auto=format&q=75",
      "link": "https://www.visitrwanda.com/destinations/musanze-caves/"
    }
  ];

  return (
    <div className="columbus-news-section">
      {/* Title and Subtitle */}
      <div className="columbus-news-header">
        <h2>Yes, Kigali is Making Headlines</h2>
        <h3>KIGALI IN THE NEWS</h3>
      </div>
  
      {/* Cards Section */}
      <div className="columbus-cards">
        {newsCards.slice(0, showMore ? newsCards.length : 4).map((card, index) => (
          <div className="columbus-card" key={index}>
            <div className="columbus-card-content">
              {/* Wrap the whole content in an anchor tag to make it clickable */}
              <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-link">
                <img 
                  src={card.imageUrl} 
                  alt="News" 
                  className="columbus-card-image" 
                />
                <div className="columbus-card-overlay"></div>
                <div className="columbus-card-text">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
  
      {/* See More Button */}
      <div className="columbus-see-more">
        <button onClick={toggleShowMore} className="see-more-button">
          {showMore ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
}    

export default ColumbusNewsSection;