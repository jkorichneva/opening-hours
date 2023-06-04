Application that is requesting opening hours from backend and displaying them.
- displays skeleton while fetching data, error if fetching has failed
- handles errors from backend and while parsing data, sends them into error tracker
- handles random clicks on unclickable elements to track user behaviour
- includes a small easter egg in clock icon

## Getting Started

Prerequisites: [node 18](https://nodejs.org/en/download)

First, install the dependencies with `npm ci`. Then run application with

```bash
npm run dev
```

This will start frontend app as well as small server to serve json with hours.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


To run tests with coverage `npm run test:coverage`.

The page is also accessible on https://jkorichneva.github.io/opening-hours/