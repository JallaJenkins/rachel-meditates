"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2023, 9, 15),
    showDate: new Date(2023, 9, 15),
    title: `Meditation mini-retreat`,
    displayDate: `Oct 15<br>9 AM - 12 PM PT<br>2023`,
    summary: `Extended morning sit`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreats-tickets-466640954657?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2023, 10, 12),
    showDate: new Date(2023, 10, 12),
    title: `Meditation mini-retreat`,
    displayDate: `Nov 12<br>9 AM - 12 PM PT<br>2023`,
    summary: `Extended morning sit`,
    location: `ONLINE`,
    link: "https://www.eventbrite.ca/e/meditation-mini-retreats-tickets-466640954657?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2023, 11, 28),
    showDate: new Date(2023, 11, 28),
    title: `Day of mindfulness`,
    displayDate: `Dec 28<br>9 AM - 4 PM PT<br>2023`,
    summary: `In-person daylong retreat`,
    location: `Mountain Rain Zen, 2016 Wall St, Vancouver, BC`,
    link: "https://www.eventbrite.ca/e/days-of-mindfulness-tickets-690392321017?aff=oddtdtcreator",
  },
  {
    startDate: new Date(2023, 11, 8),
    showDate: new Date(2023, 11, 8),
    title: `Joy in the Darkness`,
    displayDate: `Dec 9 -<br>Dec 10<br>2023`,
    summary: `Short online retreat`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "https://ims.dharma.org/collections/upcoming-live-programs",
  },
  {
    startDate: new Date(2023, 11, 14),
    showDate: new Date(2023, 11, 8),
    title: `Heartfelt Wisdom`,
    displayDate: `Dec 14 -<br>Dec 19<br>2023`,
    summary: `Online hybrid retreat`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "https://ims.dharma.org/courses/heartfelt-wisdom-2023",
  },
  {
    startDate: new Date(2023, 11, 30),
    showDate: new Date(2024, 0, 1),
    title: `Experience of Insight`,
    displayDate: `Dec 30<br>2023 &<br>Jan 2-31 2024`,
    summary: `Month-long daily practice course`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "https://ims.dharma.org/courses/heartfelt-wisdom-2023",
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
