function formatDate(dateInput) {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getEventIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findEvent(eventId) {
  return EVENTS.find((eventItem) => eventItem.id === eventId);
}

function renderNotFound() {
  const container = document.getElementById("eventDetail");
  if (!container) return;
  container.innerHTML = `
    <div class="error-box">
      <h2>Event not found</h2>
      <p>Check the event link or choose another event from the events page.</p>
      <a class="back-link" href="events.html">Go to Events</a>
    </div>
  `;
}

function renderEvent(eventItem) {
  const container = document.getElementById("eventDetail");
  if (!container) return;

  const paragraphs = eventItem.fullDescription
    .map((text) => `<p>${text}</p>`)
    .join("");

  const gallery = eventItem.galleryImages
    .map(
      (image, index) =>
        `<img src="${image}" alt="${eventItem.title} photo ${index + 1}" loading="lazy" />`
    )
    .join("");

  container.innerHTML = `
    <article class="event-detail">
      <img class="event-detail__cover" src="${eventItem.coverImage}" alt="${eventItem.title}" />
      <div class="event-detail__body">
        <div class="event-meta">
          <span class="event-chip">${eventItem.category}</span>
          <span>${formatDate(eventItem.date)}</span>
          <span>${eventItem.location}</span>
        </div>
        <h1>${eventItem.title}</h1>
        ${paragraphs}
        <h3 class="gallery-title">Event Gallery</h3>
        <div class="gallery-grid">${gallery}</div>
      </div>
    </article>
  `;
}

function initializeDetailPage() {
  const eventId = getEventIdFromUrl();
  if (!eventId) {
    renderNotFound();
    return;
  }

  const eventItem = findEvent(eventId);
  if (!eventItem) {
    renderNotFound();
    return;
  }

  renderEvent(eventItem);
}

initializeDetailPage();
