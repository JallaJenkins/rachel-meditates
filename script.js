"use strict";

///////////////////////////////////////////////
// Coming events data

const upcomingEvents = [
  // startDate = date events starts
  // showDate = date to show listing until

  {
    startDate: new Date(2024, 1, 1),
    showDate: new Date(2024, 1, 8),
    title: `In the Buddha's Words: Letting Go of the Senses`,
    displayDate: `Feb 1 & 8<br>4 - 5:30 PM PT<br>2024`,
    summary: `IMS Online Course`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/letting-go-of-the-senses",
  },
  {
    startDate: new Date(2024, 3, 30),
    showDate: new Date(2024, 3, 30),
    title: `Cultivating the Joy of Insight (with Tuere Sala)`,
    displayDate: `Apr 30 -<br>May 6<br>2024`,
    summary: `BCIMS Residential Retreat`,
    location: `Bethlehem Retreat Centre`,
    link: "https://www.eventbrite.ca/e/bcims-residential-retreat-with-rachel-lewis-and-tuere-sala-2024apr30beth-registration-699771093177",
  },
  {
    startDate: new Date(2024, 1, 17),
    showDate: new Date(2024, 1, 7),
    title: `Day of Mindfulness`,
    displayDate: `Feb 17<br>9 AM - 4 PM<br>PT<br>2024`,
    summary: `In person day-long retreat`,
    location: `Mountain Rain Zen`,
    link: "https://www.eventbrite.ca/e/day-of-mindfulness-tickets-804259209947",
  },
  {
    startDate: new Date(2024, 3, 13),
    showDate: new Date(2024, 3, 13),
    title: `Day of Mindfulness`,
    displayDate: `Apr 13<br>9 AM - 4 PM <br>PT<br>2024`,
    summary: `In person day-long retreat`,
    location: `Mountain Rain Zen`,
    link: "https://www.eventbrite.ca/e/day-of-mindfulness-tickets-804273352247",
  },
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
    startDate: new Date(2024, 6, 29),
    showDate: new Date(2024, 6, 29),
    title: `Monday Night Meditation and Talk`,
    displayDate: `Jul 29<br>4:30 PM<br>PT`,
    summary: `Dharma Talk and Guided Medtation`,
    location: `ONLINE/Durango Dharma Center, Durango, Colorado`,
    link: "https://www.durangodharmacenter.org/events/#!event/2024/7/29/monday-night-meditation-and-talk-with-rachel-lewis-in-person-and-online-with-rachel-streaming-on-zoom",
  },
  {
    startDate: new Date(2024, 7, 13),
    showDate: new Date(2024, 7, 13),
    title: `IMS Metta Sangha`,
    displayDate: `Aug 13<br>4-5 PM<br>PT`,
    summary: `Metta Meditation and Dharma Talk`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/metta-sangha-2024",
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
    startDate: new Date(2024, 7, 26),
    showDate: new Date(2024, 7, 26),
    title: `IMS Monday Night Meditation`,
    displayDate: `Aug 26<br>3-4 PM<br>PT`,
    summary: `Guided Meditation and Dharma Discusssion`,
    location: `ONLINE`,
    link: "https://ims.dharma.org/courses/monday-night-meditation-2024",
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
    startDate: new Date(2024, 7, 15),
    showDate: new Date(2024, 7, 15),
    title: `BCIMS park hang`,
    displayDate: `Aug 15<br>6:30-<br>8:30 PM<br>PT`,
    summary: `Come hang out in the park with us!`,
    location: `Mount Pleasant Park (Ontario & 16th Ave., Vancouver)`,
    link: "https://www.facebook.com/events/720932950158598/",
  },
  {
    startDate: new Date(2024, 8, 14),
    showDate: new Date(2024, 8, 14),
    title: `Day of Mindfulness with Rachel Lewis`,
    displayDate: `Sept 14<br>9 AM-<br>4 PM<br>PT`,
    summary: `Daylong retreat, in person`,
    location: `2950 Laurel Street, Vancouver (St Mary Magdalene Anglican Church)`,
    link: "https://september_mindfulness.eventbrite.ca/",
  },
  {
    startDate: new Date(2024, 9, 19),
    showDate: new Date(2024, 9, 19),
    title: `Seven Factors of Awakening 8-month online sutdy program`,
    displayDate: `Oct 2024 -<br>May 2025`,
    summary: `Intensive study course`,
    location: `ONLINE`,
    link: "https://docs.google.com/document/d/1PwJVoR98vai6CQYomtGH0QIR0FTNWhkhYErPROcLz-0/edit?usp=drive_link",
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
