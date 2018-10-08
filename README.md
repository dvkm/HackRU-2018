## Inspiration
I was trying to hang out with my imaginary friends but it was really hard to come up with plans. I decided to make an app that lets me coordinate hangouts with my non-existent friends easier.

## What it does
This web app helps you create and share fun and exciting events with your friends.

## How I built it
We created node.js functions to be served with Google Cloud functions.
Google Cloud functions allowed us to create a serverless web app so that we don't have to worry about maintaining the server while also allowing for potential easy scaling.
We used Google Firebase to help us with more backend things like storing events in the database and uploading images.

## Challenges I ran into
It was difficult to design an API for the web app to utilize.
Since we were making a serverless app, we had to create a function-driven backend which made us create an API.
Time. Not enough time.
It was hard to incorporate HERE.com API to fit our design.

## Accomplishments that I'm proud of
Learned node.js
Learned Google Cloud Platform
Used git for collaboration and for maximum productivity

## What I learned
How to create a serverless web app
A better understanding of cloud computing
Collaborating with a group of people
Git

## What's next for Plannery
* Technical standpoint:
 * Form validation. More focus was on making the forms work with the server and form validation both on the client and the server side were completely ignored. This needs to be addressed before going into production.
 * Better security. Security was not put into account during the development process either. Firebase permissions were not set properly due to time limitations. This needs to be fixed before going public to prevent attackers from viewing and editing the database freely.


* Features!
 * More social features like comments and liking/sharing an event.
 * Groups! Private groups for people to have their own set of events.
 * Memories! A tab where people can rate past events, talk about them and post pictures.
