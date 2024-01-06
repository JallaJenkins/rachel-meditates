"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2024, 1, 1),
    showDate: new Date(2024, 1, 8),
    title: `In the Buddha's Workds: Letting Go of the Senses`,
    displayDate: `Feb 1 & 8<br>7 - 8:30 PM <b><u>ET</u></b><br>2024`,
    summary: `IMS Online Course`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/letting-go-of-the-senses",
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
