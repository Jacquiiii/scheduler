# Interview Scheduler

Interview scheduler is a single page app built with React that allows users to book, edit and cancel interview appointments. Booking can be done Monday through Friday and users are able to select their timeslot and interviewer.

This app was built by Jacqui Koroll using Create React App boilerplate code from [this respository](https://github.com/lighthouse-labs/scheduler/)

## Getting started

- Fork and clone this repository
- Install dependencies with `npm install`
- Fork and clone [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) and follow it's README.md instructions to setup the database

## Usage

- Running Webpack Development Server: ```npm start```
  - Note: Ensure the Scheduler-Api is running prior to starting the server to receive the desired results
- Running Jest Test Framework: ```npm test```
  - Note: Ensure the Scheduler-Api and the Webpack Development Server are running prior to starting the server to receive the desired results
- Running Storybook Visual Testbed: ```npm run storybook```


## Dependencies

- Node 15.14.0
- Axios
- React
- @testing-library/react-hooks
- react-test-renderer
- Babel
- Storybook
- Jest
- @testing-library/jest-dom

## Screenshots

!["Desktop View"](https://github.com/Jacquiiii/scheduler/blob/master/docs/DesktopView.png)
!["Mobile View"](https://github.com/Jacquiiii/scheduler/blob/master/docs/MobileView.png)
!["Create interview"](https://github.com/Jacquiiii/scheduler/blob/master/docs/CreateInterview.png)
!["Booked interview"](https://github.com/Jacquiiii/scheduler/blob/master/docs/BookedInterview.png)
!["Cancel interview"](https://github.com/Jacquiiii/scheduler/blob/master/docs/CancelInterview.png)
!["Spots remaining each day"](https://github.com/Jacquiiii/scheduler/blob/master/docs/SpotsRemaining.png)
