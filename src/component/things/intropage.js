import React from 'react';
import './intropage.css';

const HeroSection = () => (
  <div className="hero-container">
    <img
      src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
      alt="Columbus Blue Jackets Game"
      className="hero-image"
    />
    <div className="overlay" />
    <h1 className="hero-title">
      Things to Do in Columbus
    </h1>
  </div>
);

const AwardsBadges = () => (
  <div className="awards-container">
    <div className="badges">
      <div className="badge red">
        Traveler Choice Awards 2024
      </div>
      <div className="badge border">
        AFAR Where to Go 2025
      </div>
    </div>
    <p className="awards-text">
      Condé Nast Traveler's 2024 Readers' Choice Awards names Columbus a Top 10 Best Big City in the U.S.
      <br />- and -<br />
      AFAR names Columbus a Where to Go in 2025 Destination
    </p>
  </div>
);

const QuickNav = () => (
  <div className="quick-nav">
    <p className="quick-nav-text">
      Jump to:{' '}
      {['Top Attractions & Events', 'Adventure', 'Sports', 'Shopping'].map((item, i) => (
        <React.Fragment key={item}>
          <a href="#" className="quick-nav-link">
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
      Say "yes" to new things and new places in Columbus. With local fun like new{' '}
      <a href="#" className="intro-link">
        rooftop bars
      </a>{' '}
      and restaurants, miles of trails, pro sports in every season,{' '}
      <a href="#" className="intro-link">
        top-rated family attractions
      </a>
      , experiential activities and more, you'll never be short of fun things to do in Columbus,
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
    <ActivityCard image="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" title="Nightlife" />
    <ActivityCard image="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" title="Franklin Park Conservatory" />
    <ActivityCard image="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" title="Events" />
    <ActivityCard image="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" title="Aquarium" />
    <ActivityCard image="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" title="Science Museum" />
    <ActivityCard image="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" title="Water Park" />
  </div>
);

const TopAttractions = () => (
  <div className="top-attractions">
    <h2 className="attractions-title">Top Attractions & Events</h2>
    <p className="attractions-text">
      Use Experience Columbus'{' '}
      <a href="#" className="attractions-link">
        experience trails
      </a>{' '}
      to explore the city's coffee, distilleries, pizza and outdoor adventures, or head to family
      favorite attractions like the{' '}
      <a href="#" className="attractions-link">
        Columbus Zoo & Aquarium
      </a>{' '}
      or{' '}
      <a href="#" className="attractions-link">
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
