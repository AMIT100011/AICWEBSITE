# Event Page Starter (HTML, CSS, JS)

This project gives you:

- `events.html` -> all events list (like blog cards)
- `event.html` -> single event detail page
- `js/events-data.js` -> edit this file to add/remove event content
- `events.html` and `event.html` include `#siteHeader` and `#siteFooter` placeholders for your common team header/footer code

## Add a new event

Open `js/events-data.js` and add one object inside the `EVENTS` array:

```js
{
  id: "unique-id",
  title: "Event Title",
  date: "2026-03-10",
  location: "Seminar Hall",
  category: "Workshop",
  shortDescription: "Shown on events.html",
  fullDescription: [
    "Paragraph 1 shown on detail page.",
    "Paragraph 2 shown on detail page."
  ],
  coverImage: "assets/photos/my-cover.jpg",
  galleryImages: [
    "assets/photos/my-photo-1.jpg",
    "assets/photos/my-photo-2.jpg"
  ]
}
```

## Important notes

- Keep `id` unique for every event.
- Use image paths relative to project root.
- Event links are generated as: `event.html?id=your-id`.
- If you have no image yet, keep placeholder image path.
