# My Personal Portfolio Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Local Setup

In this directory you can run

### `npm start`

from terminal and see the website in a development mode.

## Navigating the Website

## Nav Breakdown

- Overview (Home)
- About
- Contact
- Statistics
- Projects
- Dark Toggle

### UserProfile

The opening webpage will display a UserProfile screen which you **must click** to enter the website.

After you have entered the website you will be met with the `Overview` page. This should reflect a User's Dashboard.

### Overview (Home)

There is a top `nav` bar that will be recurring in all pages.

This page is made into 3 sections. 

#### `profileDisplay`

#### `coursesDisplay`

#### `featured`

#### In the first section

you can find a user image over user skills and an envelope. Interacting with `dash--wrapper` by clicking on it will redirect you to *About*.

Interacting with the `envelope` will redirect you to *Contact*.

#### The middle section

displays courses in progress and completed certifications beneath it. 

#### The final section

displays 3 of the latest projects, by which clicking will redirect to a portfolio test site.

### About

The main components of *About* displays the brief professional summary, and 4 key attributes.

- Fast Learner
- Critical Thinker
- Continuous Learning
- Striving for Excellence

There are `<a>` listed beneath the image to redirect website visitor to corresponding profiles.

1. LinkedIn
2. Github
3. Resume

### Contact

Features a unique utility where the letter will update from `open` to `close` depending on the boolean passed.

This will update both the icon and the text beneath it stating whether I am accepting oppertunities.

The main component is the form where the visitor can email me directly with the submission.

### Statistics

This page shows users exactly what certifications I possess, how many hours have been dedicated to learning, and which institutes provided said certifications.

### Projects

#### The projects page is yet to be completed, but this section will update when it is done.

### Dark Toggle

The dark toggle is a fun feature which allows users to enter the `.dark` mode and find the colors inverted from white to black, and green to pink.

This successfully targets all pages.
