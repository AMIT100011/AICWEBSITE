function formatDate(dateInput) {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function buildCard(eventItem) {
  return `
    <a class="event-card" href="event.html?id=${encodeURIComponent(eventItem.id)}">
      <img class="event-card__image" src="${eventItem.coverImage}" alt="${eventItem.title}" loading="lazy" />
      <div class="event-card__content">
        <div class="event-meta">
          <span class="event-chip">${eventItem.category}</span>
          <span>${formatDate(eventItem.date)}</span>
          <span>${eventItem.location}</span>
        </div>
        <h3>${eventItem.title}</h3>
        <p>${eventItem.shortDescription}</p>
      </div>
    </a>
  `;
}

function renderEvents() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  if (!Array.isArray(EVENTS) || EVENTS.length === 0) {
    grid.innerHTML = `<p class="muted">No events added yet. Update <code>js/events-data.js</code> to add your first event.</p>`;
    return;
  }

  grid.innerHTML = EVENTS.map(buildCard).join("");
}

renderEvents();
