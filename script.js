"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2024, 11, 29),
    showDate: new Date(2024, 11, 29),
    title: `New Year's Retreat (with Adrianne Ross)`,
    displayDate: `Dec 29 2024<br>to<br>Jan 3 2025`,
    summary: `Residential Retreat`,
    location: `Bethlehem Retreat Centre, Nanaimo BC`,
    link: "https://www.bcims.org/programs",
  },
  {
    startDate: new Date(2024, 8, 10),
    showDate: new Date(2024, 8, 10),
    title: `IMS Metta Sangha`,
    displayDate: `Sept 10<br>4-5 PM<br>PT`,
    summary: `Metta Meditation and Dharma Talk`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/metta-sangha-2024",
  },
  {
    startDate: new Date(2024, 9, 10),
    showDate: new Date(2024, 9, 10),
    title: `IMS Metta Sangha`,
    displayDate: `Oct 22<br>4-5 PM<br>PT`,
    summary: `Metta Meditation and Dharma Talk`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/metta-sangha-2024",
  },
  {
    startDate: new Date(2024, 10, 4),
    showDate: new Date(2024, 10, 4),
    title: `IMS Metta Sangha`,
    displayDate: `Nov 4<br>4-5 PM<br>PT`,
    summary: `Metta Meditation and Dharma Talk`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/metta-sangha-2024",
  },
  {
    startDate: new Date(2024, 8, 5),
    showDate: new Date(2024, 8, 5),
    title: `In the Buddha's Words: Entering into Emptiness`,
    displayDate: `Sept 5 & 12<br>4-5:30 PM<br>PT`,
    summary: `Sutta Study Series`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/n-the-buddha-s-words-entering-into-emptiness",
  },
  {
    startDate: new Date(2024, 9, 19),
    showDate: new Date(2024, 9, 19),
    title: `Seven Factors of Awakening 8-month online study program`,
    displayDate: `Oct 2024 -<br>May 2025`,
    summary: `Intensive study course`,
    location: `ONLINE`,
    link: "https://docs.google.com/document/d/1PwJVoR98vai6CQYomtGH0QIR0FTNWhkhYErPROcLz-0/edit?usp=drive_link",
  },
  {
    startDate: new Date(2024, 8, 8),
    showDate: new Date(2024, 8, 8),
    title: `Meditation Mini-Retreat`,
    displayDate: `Sept 8</br>9 AM-12 PM PT`,
    summary: `Half-day retreat`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreat-tickets-1000992885667?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2024, 9, 27),
    showDate: new Date(2024, 9, 27),
    title: `Meditation Mini-Retreat`,
    displayDate: `Oct 27</br>9 AM-12 PM PT`,
    summary: `Half-day retreat`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreat-tickets-1000992885667?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2024, 10, 17),
    showDate: new Date(2024, 10, 17),
    title: `Meditation Mini-Retreat`,
    displayDate: `Nov 17</br>9 AM-12 PM PT`,
    summary: `Half-day retreat`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreat-tickets-1000992885667?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2024, 11, 22),
    showDate: new Date(2024, 11, 22),
    title: `Meditation Mini-Retreat`,
    displayDate: `Dec 22</br>9 AM-12 PM PT`,
    summary: `Half-day retreat`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreat-tickets-1000992885667?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2024, 9, 26),
    showDate: new Date(2024, 9, 26),
    title: `Day of Mindfulness with Rachel Lewis`,
    displayDate: `Oct 26<br>9 AM-4 PM<br>PT`,
    summary: `Day-long retreat`,
    location: `2950 Laurel Street, Vancouver (St Mary Magdalene Anglican Church)`,
    link: "https://www.eventbrite.ca/e/day-of-mindfulness-tickets-1000981120477",
  },
  {
    startDate: new Date(2024, 10, 30),
    showDate: new Date(2024, 10, 30),
    title: `Day of Mindfulness with Rachel Lewis`,
    displayDate: `Nov 30<br>9 AM-4 PM<br>PT`,
    summary: `Day-long retreat`,
    location: `2950 Laurel Street, Vancouver (St Mary Magdalene Anglican Church)`,
    link: "https://www.eventbrite.ca/e/day-of-mindfulness-tickets-1000981120477",
  },
  {
    startDate: new Date(2024, 11, 28),
    showDate: new Date(2024, 11, 28),
    title: `Day of Mindfulness with Rachel Lewis`,
    displayDate: `Dec 28<br>9 AM-4 PM<br>PT`,
    summary: `Day-long retreat`,
    location: `2950 Laurel Street, Vancouver (St Mary Magdalene Anglican Church)`,
    link: "https://www.eventbrite.ca/e/day-of-mindfulness-tickets-1000981120477",
  },
];

const eventsInDevelopment = [];

///////////////////////////////////////////////////
// HTML element selectors

// const events = document.querySelector(".events");
// const eventsSummary = document.querySelector(".events-summary");
const eventsBox = document.querySelector(".events-upcoming-box");
const eventsInDevelopmentDiv = document.querySelector(".events-in-development");
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
  if (events.length === 0) {
    // Remove header if list is empty
    eventsInDevelopmentDiv.style.display = "none";
  } else {
    // Display sorted list
    eventsInDevelopmentDiv.style.display = "block";
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
  }
};

const eventsInDevelopmentSorted = eventsInDevelopment.sort(
  (a, b) => b.startDate - a.startDate
);

const eventsInDevelopmentFiltered = eventsInDevelopmentSorted.filter(
  (a) => a.showDate >= new Date()
);

console.log(eventsInDevelopmentFiltered);

displayEventsInDevelopment(eventsInDevelopmentFiltered);
