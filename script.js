"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2023, 0, 1),
    showDate: new Date(2023, 0, 1),
    title: `Mindfulness of Breathing (with Bhikkhu Analayo)`,
    displayDate: `Jan - Mar <br>2023`,
    summary: `Weekly class`,
    location: `ONLINE, Barre Center for Buddhist Studies`,
    link: "https://www.buddhistinquiry.org/online-programs/mob/",
  },
  {
    startDate: new Date(2023, 0, 28),
    showDate: new Date(2023, 0, 28),
    title: `Wise Intention: A Day of Mindfulness (with Jeanne Corrigal)`,
    displayDate: `28 Jan 2023<br>9 AM - 4 PM<br>PST`,
    summary: `Day-Long Retreat`,
    location: `ONLINE`,
    link: "https://wise_intention.eventbrite.ca",
  },
  {
    startDate: new Date(2022, 11, 26),
    showDate: new Date(2022, 11, 31),
    title: `Days of Mindfulness: a year-end non-residential retreat`,
    displayDate: `Dec 26-31<br>2022<br>9 AM - 4 PM<br>PST`,
    summary: `Day-Long Retreat Series`,
    location: `Mountain Rain Zendo<br>2016 Wall St., Vancouver BC`,
    link: "https://www.eventbrite.ca/e/days-of-mindfulness-tickets-452376348837",
  },
  {
    startDate: new Date(2023, 0, 14),
    showDate: new Date(2023, 0, 14),
    title: `BCIMS community gathering`,
    displayDate: `14 Jan 2023<br>2-4 PM PST`,
    summary: `New Year celebration`,
    location: `2950 Laurel St., Vancouver`,
    link: "https://www.eventbrite.ca/e/bcims-community-gathering-tickets-472380341317",
  },
  {
    startDate: new Date(2023, 1, 5),
    showDate: new Date(2023, 1, 5),
    title: `Meditation Mini-Retreat`,
    displayDate: `5 Feb 2023<br> 9 AM - 12 PM PST`,
    summary: `Extended Morning Sit`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreats-tickets-466641175317",
  },
  {
    startDate: new Date(2023, 2, 12),
    showDate: new Date(2023, 2, 12),
    title: `Meditation Mini-Retreat`,
    displayDate: `12 Mar 2023<br> 9 AM - 12 PM PST`,
    summary: `Extended Morning Sit`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreats-tickets-466641175317",
  },
  {
    startDate: new Date(2023, 3, 16),
    showDate: new Date(2023, 3, 16),
    title: `Meditation Mini-Retreat`,
    displayDate: `16 Apr 2023<br> 9 AM - 12 PM PST`,
    summary: `Extended Morning Sit`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreats-tickets-466641175317",
  },
  {
    startDate: new Date(2023, 4, 30),
    showDate: new Date(2023, 4, 30),
    title: `BCIMS Meditation Retreat (with Dawn Scott)`,
    displayDate: `May 30 - <br>June 3<br>2023`,
    summary: `Residential Retreat`,
    location: `Bethlehem Retreat Centre in Nanaimo, BC`,
  },
];

const eventsInDevelopment = [
  {
    startDate: new Date(2023, 0, 2),
    showDate: new Date(2023, 0, 2),
    title: `30-day meditation challenge`,
    displayDate: `Jan 2-31<br>2023`,
    summary: `Daily guided meditation`,
    location: `ONLINE (sponsored by IMS)`,
  },
  {
    startDate: new Date(2023, 6, 23),
    showDate: new Date(2023, 6, 23),
    title: `Mini-retreat: introduction to meditation`,
    displayDate: `July 23<br>6-9 AM PT<br>2023`,
    summary: `Extended morning sit`,
    location: `ONLINE (sponsored by IMS)`,
    link: "https://www.eventbrite.ca/e/residential-retreat-with-rachel-lewis-and-dawn-scott-2023may30beth-registration-469412283777",
  },
];

///////////////////////////////////////////////////
// HTML element selectors

// const events = document.querySelector(".events");
// const eventsSummary = document.querySelector(".events-summary");
const eventsBox = document.querySelector(".events-upcoming-box");
const eventsInDevelopmentBox = document.querySelector(
  ".events-in-development-box"
);

///////////////////////////////////////////////////
// Display upcoming events

const displayUpcomingEvents = function (events) {
  eventsBox.innerHTML = ``;
  events.forEach(function (event, i) {
    const html = `<div class="events-row">
    <div class="events-date">${event.displayDate}</div>
    <div class="events-description">
      <div class="events-name">
        <a
          class="events-name link-text"
          href="${event.link}"
          target="_blank"
        >
          ${event.title}</a
        >
      </div>
      <div class="events-summary">
        ${event.summary}
      </div>
      <div class="events-location">${event.location}</div>
    </div>`;

    eventsBox.insertAdjacentHTML(`afterbegin`, html);
  });
};

const eventsSorted = upcomingEvents.sort((a, b) => b.startDate - a.startDate);

const eventsFiltered = eventsSorted.filter((a) => a.showDate > new Date());

displayUpcomingEvents(eventsFiltered);

///////////////////////////////////////////////////
// Display events in development

const displayEventsInDevelopment = function (events) {
  eventsInDevelopmentBox.innerHTML = ``;
  events.forEach(function (event, i) {
    const html = `<div class="events-row">
    <div class="events-date">${event.displayDate}</div>
    <div class="events-description">
      <div class="events-name">
        ${event.title}
      </div>
      <div class="events-summary">
        ${event.summary}
      </div>
      <div class="events-location">${event.location}</div>
    </div>`;

    eventsInDevelopmentBox.insertAdjacentHTML(`afterbegin`, html);
  });
};

const eventsInDevelopmentSorted = eventsInDevelopment.sort(
  (a, b) => b.startDate - a.startDate
);

const eventsInDevelopmentFiltered = eventsInDevelopmentSorted.filter(
  (a) => a.showDate > new Date()
);

displayEventsInDevelopment(eventsInDevelopmentFiltered);
