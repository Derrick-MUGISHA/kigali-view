import React from 'react';
import './intropage.css';

const HeroSection = () => (
  <div className="hero-container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Kigali_night_life.jpg"
      alt="Columbus Blue Jackets Game"
      className="hero-image"
    />
    <div className="overlay" />
    <h1 className="hero-title">
      Things to Do in Kigali
    </h1>
  </div>
);

const AwardsBadges = () => (
  <div className="awards-container">
    <div className="badges">
      <div className="badge red">
        Traveler Choice Awards 2025
      </div>
      <div className="badge border">
        AFAR Where to Go 2026
      </div>
    </div>
    <p className="awards-text">
    Condé Nast Traveler's 2024 Readers' Choice Awards Names Kigali a Top 10 Best Big City in Africa
      <br />- and -<br />
      AFAR Names Kigali a Where to Go in 2025 Destination
    </p>
  </div>
);

const QuickNav = () => (
  <div className="quick-nav">
    <p className="quick-nav-text">
      Jump to:{' '}
      {['Top Attractions & Events', 'Adventure', 'Sports', 'Shopping'].map((item, i) => (
        <React.Fragment key={item}>
          <a href="/" className="quick-nav-link">
            {item}
          </a>
          {i < 3 && ' | '}
        </React.Fragment>
      ))}
    </p>
  </div>
);

const IntroText = () => (
  <div className="intro-text-container">
    <p className="intro-text">
      Say "yes" to new things and new places in Kigali. With local fun like new{' '}
      <a href="/" className="intro-link">
        rooftop bars
      </a>{' '}
      and restaurants, miles of trails, pro sports in every season,{' '}
      <a href="/" className="intro-link">
        top-rated family attractions
      </a>
      , experiential activities and more, you'll never be short of fun things to do in Kigali,
      whether you're planning a date night or a family outing.
    </p>
  </div>
);

const ActivityCard = ({ image, title }) => (
  <div className="activity-card">
    <img src={image} alt={title} className="activity-image" />
    <div className="activity-overlay" />
    <h3 className="activity-title">{title}</h3>
  </div>
);

const AttractionsGrid = () => (
  <div className="attractions-grid">
    <ActivityCard image="https://static01.nyt.com/images/2018/12/23/travel/23kigali6/23kigali6-superJumbo.jpg?quality=75&auto=webp" title="Nightlife" />
    <ActivityCard image="https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2022/07/08/the-park-boasts-of-walkways-and-cycling-lanes-stretching-for-over-eight-kilometres.-courtesy.jpg" title="Nyandungu Park Conservatory" />
    <ActivityCard image="https://rdb.rw/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-17-at-13.41.39-1-768x1024.jpeg" title="Events to upTo time" />
    <ActivityCard image="https://www.newtimes.co.rw/thenewtimes/uploads/images/2024/11/01/thumbs/1200x700/63291.jpg" title="Movies TO showcase" />
    <ActivityCard image="https://rwanda.tortoisepath.com/wp-content/uploads/2024/04/Coconut-Kigali-Kigali-Rwanda-TortoisePathcom-5-jpeg.webp" title="Game Zones" />
    <ActivityCard image="https://rwanda.tortoisepath.com/wp-content/uploads/2024/04/Acacus-Park-Kigali-Rwanda-TortoisePathcom-jpeg.webp" title="Water Park" />
  </div>
);

const TopAttractions = () => (
  <div className="top-attractions">
    <h2 className="attractions-title">Top Attractions & Events</h2>
    <p className="attractions-text">
      Use Kigali View'{' '}
      <a href="/" className="attractions-link">
        experience trails
      </a>{' '}
      to explore the city's coffee, distilleries, pizza and outdoor adventures, or head to family
      favorite attractions like the{' '}
      <a href="/" className="attractions-link">
        Kigali Zoo & Aquarium
      </a>{' '}
      or{' '}
      <a href="/" className="attractions-link">
        Franklin Park Conservatory and Botanical Gardens
      </a>
      .
    </p>
    <AttractionsGrid />
  </div>
);

const App = () => (
  <div className="app-container">
    <HeroSection />
    <div className="content-container">
      <div className="main-content">
        <IntroText />
        <QuickNav />
      </div>
      <div className="awards-content">
        <AwardsBadges />
      </div>
    </div>
    <TopAttractions />
  </div>
);

export default App;
