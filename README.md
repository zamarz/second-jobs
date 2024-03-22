# MP Second Jobs

This is a project to make the data around MP's Registered Interests more accessible and easier to read. You can find the API for this data [here](https://members-api.parliament.uk/index.html).

The application essentially pulls data from the Members API and displays it on the site. Users are able to search for an MP by name from the home page, with the results displayed automatically below the search bar. Alternatively, users can also search via the MP List page which orders MP names alphabetically by surname.

Each MP will then have a dedicated page which displays a breakdown of the data found in the registered interests API. This is split into a number of sections depending on what each MP has declared.

## Tech stack

This project uses React, Next.js, Tailwind, Firebase (for analytics), and TypeScript. It also uses a number of dependencies including Axios, React Icons, Jest, and React GA4.

## Future plans

In the future, I hope to add historical data to this project to make the analysis more concrete. I also may add charts and graphs. I would also like to look at members of the House of Lords and see analyse their registered interests too.

You can find the hosted version of this project here: https://second-jobs.vercel.app/

## Getting Started

Clone the repo and download the files to your computer. Open you code editor and install all dependencies, using npm i for example.

Then you can the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit any page you like and you will see the updates when you view it.


