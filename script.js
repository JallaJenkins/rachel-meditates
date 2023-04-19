"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2023, 4, 30),
    showDate: new Date(2023, 4, 30),
    title: `BCIMS Meditation Retreat (with Dawn Scott)`,
    displayDate: `May 30 - <br>June 3<br>2023`,
    summary: `Residential Retreat`,
    location: `Bethlehem Retreat Centre in Nanaimo, BC`,
    link: "https://www.eventbrite.ca/e/residential-retreat-with-rachel-lewis-and-dawn-scott-2023may30beth-registration-469412283777",
  },
  {
    startDate: new Date(2023, 5, 11),
    showDate: new Date(2023, 5, 11),
    title: `Meditation Mini-Retreat`,
    displayDate: `June 11<br>9-12 AM PT<br>2023`,
    summary: `Extended Morning Sit`,
    location: `Online`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreats-tickets-618480651277?aff=erelpanelorg",
  },
  {
    startDate: new Date(2023, 7, 8),
    showDate: new Date(2023, 4, 29),
    title: `Mindfulness of Breathing (with Bhikkhu Anālayo)`,
    displayDate: `July 8 -<br>Sept 2<br>2023`,
    summary: `Weekly Class`,
    location: `Online`,
    link: "https://www.buddhistinquiry.org/online-programs/mob/",
  },
  {
    startDate: new Date(2023, 8, 11),
    showDate: new Date(2023, 8, 11),
    title: `Paramis 10-Month Intensive`,
    displayDate: `Sept 2023 -<br>June 2024`,
    summary: `Dharma Study Program`,
    location: `In development - Click title above for details`,
    link: "https://docs.google.com/document/d/1xojh_3r7rzpwh0PwlliPlo-t5tTdsUezuV4qcDTSxk4/edit?usp=sharing",
  },
];

const eventsInDevelopment = [
  {
    startDate: new Date(2023, 6, 23),
    showDate: new Date(2023, 6, 23),
    title: `Mini-retreat: introduction to meditation`,
    displayDate: `July 23<br>6-9 AM PT<br>2023`,
    summary: `Extended morning sit`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "",
  },
  {
    startDate: new Date(2023, 11, 8),
    showDate: new Date(2023, 11, 8),
    title: `IMS Online Retreat`,
    displayDate: `Dec 8 -<br>Dec 10<br>2023`,
    summary: `Short online retreat`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "",
  },
  {
    startDate: new Date(2023, 9, 1),
    showDate: new Date(2023, 9, 30),
    title: `Satipaṭṭhāna Meditation (with Bhikkhu Anālayo`,
    displayDate: `Oct -<br>Dec<br>2023`,
    summary: `Weekly Class`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.buddhistinquiry.org/'>Barre Center for Buddhist Studies</a>)`,
    link: "",
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
