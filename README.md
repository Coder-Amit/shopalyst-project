### Problem statement

#### Files

- index.html
- src/index.js (app file)
- src/components (where the components reside)
- Code to be checked in back to the same repository

#### Build

- Build a multi select drop down component using using a combination of div/span/ul/li.
- Refrain from using select and option tag since the idea is to mimic a dropdown

Presentation

- The component should support label and value as a typical select component would do
- Display a list of items from which the user can select one value
- On selecting an item the list should collapse and selected value should be shown on the drop down
- The dropdown unit to support a search field which on typing filters the list of items shown

Evaluation

- Code structure (The default state of dropdown + search & options listing to be handled by different components)
- Logic
- Styling
- Functionality

Functionality Overview

 <img src="https://static.shopalyst.com/assets/campaigns/IMG_74D71D05A22F-1__2__1664182464485.jpeg" width="128" />


Stack

- react
- parcel (install from https://parceljs.org/getting_started.html)
- nodejs & npm (download & install from https://nodejs.org/dist/latest-v10.x/)

Run

- `npm install` - Install all dependencies in package.json
- `npm run start` - Parcel will start a live reload server at port 1234 and take care of build & bundling
