"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

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
    startDate: new Date(2023, 0, 1),
    showDate: new Date(2023, 8, 11),
    title: `** Paramis 10-Month Intensive **`,
    displayDate: `Sept 2023 -<br>June 2024`,
    summary: `Online Dharma Study Program`,
    location: `REGISTRATION NOW OPEN - Click title above for details`,
    link: "https://docs.google.com/document/d/1xojh_3r7rzpwh0PwlliPlo-t5tTdsUezuV4qcDTSxk4/edit?usp=sharing",
  },
  {
    startDate: new Date(2023, 5, 20),
    showDate: new Date(2023, 5, 21),
    title: `Meditation for World Refugee Day (by Rainbow Bridge)`,
    displayDate: `June 20<br>5:30-7 PM<br>PT`,
    summary: `Guided meditation & fundraiser`,
    location: `Casa Copal, 2291 W Broadway, Vancouver, BC`,
    link: "https://www.eventbrite.ca/e/meditation-for-world-refugee-day-by-rainbow-bridge-tickets-610055120287",
  },
  {
    startDate: new Date(2023, 5, 21),
    showDate: new Date(2023, 5, 19),
    title: `Spirituality for Bereavement and End-of-life (by Peace Arch Hospice Society)`,
    displayDate: `June 21<br>10 AM -<br>2:30 PM<br>PT`,
    summary: `Interfaith event & panel discussion`,
    location: `Gracepoint Community Church<br>3487 King George Blvd, Surrey, BC<br><em>** Register by June 19th **<em>`,
    link: "https://www.peacearchhospice.org/spirituality-for-bereavement-end-of-life/",
  },
  {
    startDate: new Date(2023, 5, 13),
    showDate: new Date(2023, 7, 22),
    title: `IMS Metta Sangha`,
    displayDate: `June - Dec<br>2023`,
    summary: `Dharma course`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "https://ims.dharma.org/bundles/metta-sangha",
  },
  {
    startDate: new Date(2023, 6, 23),
    showDate: new Date(2023, 6, 23),
    title: `Mini-retreat: The Joy of Presence`,
    displayDate: `July 23<br>6-9 AM PT<br>2023`,
    summary: `Extended morning sit`,
    location: `ONLINE (sponsored by <a class="link-text" href='https://www.dharma.org'>Insight Meditation Society</a>)`,
    link: "https://ims.dharma.org/courses/the-Joy-of-Presence",
  },
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
    summary: `In-Person Daylong Retreat`,
    location: `Mountain Rain Zen, 2016 Wall St, Vancouver, BC`,
    link: "https://www.eventbrite.ca/e/days-of-mindfulness-tickets-690392321017?aff=oddtdtcreator",
  },
];

const eventsInDevelopment = [
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
    displayDate: `Oct - Dec<br>2023`,
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
  (a) => a.showDate >= new Date()
);

displayEventsInDevelopment(eventsInDevelopmentFiltered);
