"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2022, 0, 1),
    showDate: new Date(2022, 2, 31),
    title: `BCIMS Tuesday Night Drop-ins`,
    displayDate: `Tuesdays <br>7:00 PM <br>Jan - Mar <br>2022`,
    link: "https://www.eventbrite.ca/e/weekly-mindfulness-meditation-group-tickets-226600216347",
    summary: `Weekly sit and dharma talk with various teachers`,
    location: `ONLINE, BCIMS`,
  },
  {
    startDate: new Date(2022, 2, 10),
    showDate: new Date(2022, 2, 10),
    title: `Introduction to Buddhist Meditation: Mindfulness and Lovingkindness`,
    displayDate: `Mar 10 - <br>Apr 14 <br>2022`,
    link: "https://www.buddhistinquiry.org/course/introduction-to-buddhist-meditation-mindfulness-and-lovingkindness/",
    summary: `Weekly class`,
    location: `ONLINE, Barre Center for Buddhist Studies`,
  },
  {
    startDate: new Date(2022, 0, 14),
    showDate: new Date(2022, 0, 14),
    title: `Still In the City: A 90-Day Meditation Practice Period and Online Course`,
    displayDate: `Jan 14 - <br>Apr 15 <br>2022`,
    link: "https://www.nyimc.org/event/still-in-the-city-a-90-day-meditation-practice-period-and-online-course/",
    summary: `Weekly class`,
    location: `ONLINE, New York Insight`,
  },
  {
    startDate: new Date(2022, 3, 10),
    showDate: new Date(2022, 3, 10),
    title: `Satipatthana Meditation with Bhikkhu Analayo`,
    displayDate: `Apr 10 - <br>Jun 11 <br>2022`,
    link: "https://www.buddhistinquiry.org/online-programs/satipatthana_meditation/",
    summary: `Weekly class`,
    location: `ONLINE, Barre Center for Buddhist Studies`,
  },
  {
    startDate: new Date(2022, 4, 7),
    showDate: new Date(2022, 4, 7),
    title: `Daylong of practice: Wise attention (with Dawn Scott)`,
    displayDate: `May 7 <br>2022`,
    link: "https://wise_attention.eventbrite.ca",
    summary: `Daylong`,
    location: `St Mary Magdalene Anglican Church, Vancouver`,
  },
  {
    startDate: new Date(2022, 4, 29),
    showDate: new Date(2022, 4, 29),
    title: `So you're thinking about going on retreat... an introductory online day of practice (with Roxanne Dault)`,
    displayDate: `May 29 <br>2022`,
    link: "https://try_a_retreat.eventbrite.ca",
    summary: `Daylong`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2022, 5, 5),
    showDate: new Date(2022, 5, 5),
    title: `Dharma talk with Insight Meditation Ann Arbor`,
    displayDate: `June 5 <br>2022`,
    link: "https://insightmeditationannarbor.org/2022/02/02/sunday-dharma-series-2/",
    summary: `Dharma talk`,
    location: `ONLINE`,
  },
  {
    startDate: new Date(2022, 6, 8),
    showDate: new Date(2022, 6, 8),
    title: `Anapanasati Meditation with Bikkhu Analayo`,
    displayDate: `Jul 8 - <br>Sept 3 <br>2022`,
    summary: `Weekly class`,
    link: "https://www.buddhistinquiry.org/online-programs/mob/",
    location: `ONLINE, Barre Center for Buddhist Studies`,
  },
  {
    startDate: new Date(2022, 6, 29),
    showDate: new Date(2022, 6, 29),
    title: `Residential Retreat (with Tempel Smith)`,
    displayDate: `Jul 29 - <br>Aug 5 <br>2022`,
    summary: `Residential Retreat`,
    link: "https://bcims_july_retreat.eventbrite.ca",
    location: `Bethlehem Retreat Centre<br><strong>Applications open April 1</strong>`,
  },
];

const eventsInDevelopment = [
  {
    startDate: new Date(2022, 9, 23),
    showDate: new Date(2022, 9, 23),
    title: `Mini-Retreat`,
    displayDate: `Oct 23 <br>2022`,
    summary: `Daylong Retreat`,
    location: `ONLINE, Insight Meditation Society`,
  },
  {
    startDate: new Date(2022, 8, 1),
    showDate: new Date(2022, 8, 1),
    title: `Residential Retreat (with Roxanne Dault)`,
    displayDate: `Sep 1-4 <br>2022`,
    summary: `Residential Retreat`,
    location: `Bethlehem Retreat Centre`,
  },
  {
    startDate: new Date(2022, 9, 1),
    showDate: new Date(2022, 9, 1),
    title: `Satipatthana Meditation with Bhikkhu Analayo`,
    displayDate: `Oct - <br>Dec <br>2022`,
    summary: `Weekly class`,
    location: `ONLINE, Barre Center for Buddhist Studies`,
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
