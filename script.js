"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  {
    startDate: new Date(2021, 6, 22),
    title: `Online Retreat with Rachel Lewis and Vance Pryor`,
    displayDate: `Jul 22 - <br>Jul 25`,
    link: "https://www.eventbrite.ca/e/online-retreat-with-rachel-lewis-and-vance-pryor-2021jul22lgol-tickets-142007854315",
    summary: `4 day silent retreat`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 5, 5),
    title: `Confidence: A Day-Long Retreat with Rachel Lewis and Devon Hase`,
    displayDate: `Jun 5 <br>10:00 AM -<br>4:00 PM <br>PDT`,
    link: "https://www.eventbrite.ca/e/confidence-a-daylong-retreat-tickets-142639475511",
    summary: `Day-long retreat`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 5, 13),
    title: `IMS Mini-Retreat - Tranquillity: Staying Steady in the Storm `,
    displayDate: `Jun 13 <br>6:00 AM -<br> 10:00 AM <br>PDT`,
    link: "https://www.dharma.org/retreats/693",
    summary: `Half-day "mini-retreat"`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 5, 1),
    title: `The Way of the Buddha: Core Teachings of the Dharma Path, Module 6`,
    displayDate: `Jun 1 <br>4:00 PM -<br>5:30 PM <br>PDT`,
    link: "https://www.union.fit/events/insight-meditation-society-the-way-of-the-buddha-module-6-21wob6",
    summary: `Weekly course from Jun 1 to Jun 29`,
    location: `ONLINE`,
  },
];

///////////////////////////////////////////////////
// HTML element selectors

const events = document.querySelector(".events");
const eventsSummary = document.querySelector(".events-summary");
const eventsBox = document.querySelector(".events-upcoming-box");

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

const eventsFiltered = eventsSorted.filter((a) => a.startDate > new Date());

displayUpcomingEvents(eventsFiltered);
