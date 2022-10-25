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
];

const eventsInDevelopment = [
  {
    startDate: new Date(2023, 4, 30),
    showDate: new Date(2023, 4, 30),
    title: `BCIMS Meditation Retreat (with Dawn Scott)`,
    displayDate: `May 30 - <br>June 3<br>2023`,
    summary: `Residential Retreat`,
    location: `Bethlehem Retreat Centre in Nanaimo, BC`,
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
