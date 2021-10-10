"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  {
    startDate: new Date(2021, 10, 30),
    title: `The Way of the Buddha: Module 11`,
    displayDate: `Nov 2 - <br>Nov 30`,
    link: "https://www.union.fit/events/insight-meditation-society-the-way-of-the-buddha-module-11-21wob11",
    summary: `Weekly evening class`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 10, 9),
    title: `Waking up to the truth: mindfulness and the four noble truths`,
    displayDate: `Nov 9 - <br>Dec 14`,
    link: "https://www.eventbrite.ca/e/waking-up-to-the-truth-mindfulness-and-the-four-noble-truths-tickets-176667265547",
    summary: `Weekly evening class`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 9, 20),
    title: `The Foundations of Mindfulness with Bhikkhu Anālayo`,
    displayDate: `Oct 1 - <br>Dec 24`,
    link: "https://wisdomexperience.org/courses/foundations-mindfulness/",
    summary: `12-week course - open for registration`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 8, 15),
    title: `Finding Refuge: Chanting and Meditation`,
    displayDate: `Sept 14<br>4-5:30 PM<br>PT`,
    link: "https://rivervalleyinsight.org/meditations-and-talks/",
    summary: `Dharma talk`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 6, 22),
    title: `Online Retreat with Rachel Lewis and Vance Pryor`,
    displayDate: `Jul 22 - <br>Jul 25`,
    link: "https://www.eventbrite.ca/e/online-retreat-with-rachel-lewis-and-vance-pryor-2021jul22lgol-tickets-142007854315",
    summary: `4 day silent retreat`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 7, 17),
    title: `Tuesday Night BCIMS Drop-In`,
    displayDate: `Aug 17 <br>7-8:30 PM PT`,
    link: "https://www.eventbrite.ca/e/tuesday-evening-drop-in-meditation-group-tickets-153058892267",
    summary: `Dharma talk`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 10, 4),
    title: `Evening Talk for New York Insight`,
    displayDate: `Nov 4 <br>4-6 PM <br>PT`,
    link: "https://www.nyimc.org/event/the-generous-heart/",
    summary: `Dharma talk - The Generous Heart`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 8, 8),
    title: `Introduction to Meditation: Mindfulness, Loving-Kindness, and Liberation`,
    displayDate: `Sept 8 - <br>Oct 6`,
    link: "https://intro_mindfulness.eventbrite.ca",
    summary: `Weekly evening course`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 9, 1),
    title: `Waking Up White Study Groups`,
    displayDate: `Sept - <br>Nov`,
    link: "https://docs.google.com/document/d/1EjYYVQf87KE8TdCzQ8_SWf2D-UHaAYMwdCdYTMMvO60/edit",
    summary: `Bi-weekly study groups`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 8, 18),
    title: `Eightfold Path Intensive`,
    displayDate: `Sept 18 - <br>May 14`,
    link: "https://docs.google.com/document/d/1cmjjAB1-TNTvpwemQqtkMjGoAqGcFGFkUgfYTczSAbY/edit",
    summary: `In-depth 9 month course`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2021, 9, 10),
    title: `Satipatthana Meditation with Bhikkhu Anālayo`,
    displayDate: `Oct 10 - <br>Dec 11`,
    link: "https://www.buddhistinquiry.org/online-programs/satipatthana_meditation/",
    summary: `9 week course - registration now closed`,
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
