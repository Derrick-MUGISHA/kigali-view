import React from 'react';
import Events from '../component/EventsComponents/imageEvent';
import EventCalender from '../component/EventsComponents/EventCalender';
import EventArticles from '../component/EventsComponents/EventArticles';
import EventCard from '../component/EventsComponents/EventCard';
import NewsletterSection from '../component/EventsComponents/NewsletterSection';
import TravelSection from '../component/TravelSection';
import Footer from '../component/Footer';

const EventsPage = () => {
    return (
        <>
            <Events />
            <EventCalender />
            <NewsletterSection />
            <EventArticles />
            <EventCard />
            <TravelSection />
            <Footer />
        </>
    );
};

export default EventsPage;
