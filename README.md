# Seattle Parking Finder

A **full-stack web application** to help users find parking spots in Seattle. This MVP demonstrates real-world problem solving using **maps, interactive UI, and distance-aware visualization**.

---

## Features

- Search any Seattle address and zoom to that location on the map.
- Display parking spots with visual indicators:
  - **Green** = Available
  - **Red** = Full / Not Available
  - **Orange** = Unknown
- Circle size indicates **proximity** to the searched location:
  - Bigger circles = closer
  - Smaller circles = farther away
- Sidebar list of parking spots **sorted by distance** from focus location.
- Clickable list items zoom to the selected parking spot and highlight it.
- Auto-refresh every 60 seconds to keep data updated.
- Map includes **highlighted areas** and **legend** for clarity.

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Leaflet.js, Axios
- **Backend:** Node.js, Express, CORS
- **Tools:** VSCode, Live Server, Git/GitHub

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Srira8/seattle-parking-finder.git
cd seattle-parking-finder

2. Install dependencies:

npm install

3. Run the backend server:

node server.js

4. Open frontend/index.html in a browser using Live Server to view the map.

Usage

1. Enter a Seattle address in the search bar.

2. The map will zoom to the location.

3. Green/Red/Orange markers indicate parking availability.

4. Sidebar shows the distance-sorted list of parking spots.

5. Click any item in the sidebar to zoom/highlight the spot.

Future Improvements

1. Integrate real-time Seattle parking data API for live availability.

2. Add filters (EV parking, covered parking, paid/free zones).

3. Make the app mobile-friendly and responsive.

4. Deploy the app publicly for user access.


```
