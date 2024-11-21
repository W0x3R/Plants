# **Plants:leaves:**

**Plants** is a landing page that offers its services for growing plants in the garden and caring for them.

![readmePhoto](/assets/images/readme-photo.jpg)

📋 Task: [Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants.md)

🏞️ Layout in figma: [Link](https://www.figma.com/design/ntVt8IwlwzfVFMBuVVAze8/Plants?node-id=0-1&node-type=canvas&t=0ZA6HK1qOdJk70e8-0)

💻 Deploy: [Link](https://w0x3r.github.io/Plants/)

## Technology stack

➖ HTML

➖ SCSS (BEM)

➖ JavaScript (ES6)

➖ PerfectPixel

➖ Webpack 5

## Features

✅ **Burger menu:**

- On screen resolutions smaller than 768px, the navigation bar is hidden and the burger icon appears.

- When you click on the burger icon, an adaptive menu appears.
- When you click on the cross, the adaptive menu is hidden by moving off the screen.

- The links in the adaptive menu work by providing smooth scrolling through the anchors.

- When clicking on a link in the adaptive menu the adaptive menu is smooth, also hiding the menu happens if you make a click outside this window.

✅ **Service blur:**

- Pressing the buttons: Gardens, Lawn, Planting changes the focus to services in the service section.

- When you select one service (click one button), the other service cards take the blur effect, the selected service remains unchanged.

- The user can press two service buttons at the same time, then this button also takes the active style and the cards with the service name come out of the blur effect. In this case the user cannot press all three service buttons at the same time. When the active button is pressed again, it is deactivated (becomes inactive) and the positions bound to it return to the initial state (enter the blur state if there is still an active button or stop being in blur if it was the only button pressed).

- When two buttons are active - the third button becomes inactive.

✅ **Prices accordion:**

- Implementation of 3 drop-down lists about services and prices in the prices section.

- When you click on the dropdown button, a description of the price rates appears according to the layout. An order button is implemented inside, which leads to the contacts section, when you click on it Accordion still remains open.

- The user can independently close the content by clicking on the button, but cannot open all service tariffs at the same time, when opening a new tariff, the previous one is automatically closed.

✅ **Contacts select:**

- In the contacts section select with selection of cities is implemented.

- Depending on the user's choice, a block with the address and phone number of the office in a particular city appears.
- When you press the Call us button, a call is realized by the number that corresponds to the selected city.

✅ **Adaptive:**

- The application elements optimally occupy the page space.

- The app displays correctly on both computer and mobile devices.

## Run the project locally:

To start working on the project on your local machine, please, make sure that you install [Git](https://git-scm.com/downloads) and [Node.js LTS](https://nodejs.org/en/download).

### Steps to start:

- Clone [repository](https://github.com/W0x3R/Plants).
- Open the project locally.
- Switch to the dev-page branch.
- Run `npm install` or `npm i` - to install all packages needed.
- Run `npm run start` - to starts a local dev-server (The tab will open automatically in the browser).
- Run `npm run dev` - build the project for development.
- Run `npm run prod` - build the project for production.
