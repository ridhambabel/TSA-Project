# Resource Hub

**Contributors: Kunal Katiyar and Ridham Babel**

The Harborough Resource Hub is a template website for a city/town's event, volunteer, and public resource hub.   

It was developed as an entry for the Technology Student Association (TSA) Webmaster contest in 2026, and is meant primarily as a design showcase project.

The website can be accessed live [**here**](https://harboroughresourcehub.netlify.app).

## ✨ Features

* **Clean and Easy-to-understand UI**
  * All necessary links are provided in the hero section and on the navigation bar at all times.
  * Spotlight information is shown almost immediately on the front page to provide users with the most generally relevant information as soon as possible.
  * Events are structured into a neat, chronological timeline.
  * Contains a chatbot in the bottom-right corner to assist with basic navigation for new and inexperienced users.

* **Fully-functional Resource Search:**
  * Contains an easily-editable and parsable database of community resources.
  * Can be filtered for on the main page based on name, category, neighborhood, etc.
  * Each resource can also be individually nominated for the spotlight.
 
* **Favorite Resource System:**
  * Contains a sidebar for favorited resources, which can be saved from the `Spotlight` or `Search` sections and will appear in the sidebar.
  * Uses cookies to store the user's favorited resources without a dedicated backend for easier use.
  * Also generates a printer-friendly PDF of all saved resources for users browsing at a library who don't have a device at home.

* **Add Resource/Event Page**
  * Contains a toggleable form, between inputting an event or resource.
  * Uses Regular Expressions to check input before it reaches manual review.
  * Contains support for any custom hours of operation as well as 24/8.
 
* **Other Features:**
  * Contains a live support page with downloadable PDF guides and forms.
  * Contains a general guide page with the most important community resources to have.
 
## Stack/Frameworks

* The backend server is run on Nuxt.js; since the site is static, Nuxt's Static Site Generation (SSG) allows for pages to be loaded almost instantly.
* The frontend is a stacks of HTML/TailwindCSS/JS in order to allow rapid development and easy configuration of style/script elements.

## Running/Installation

The website can be accessed live [**here**](https://harboroughresourcehub.netlify.app), so no local running is needed. However, it is possible to run this project locally with no loss of function.

### 1. Clone the repository

In Visual Studio Code (or your preferred editor), clone this repository by running

```bash
git clone https://github.com/ridhambabel/TSA-Project.git
```

or paste `https://github.com/ridhambabel/TSA-Project.git` into the "Clone from Github" section of Visual Studio Code.

### 2. Run the site.

After cloning the repository, run the following commands:
```bash
npx nuxt generate

npm install

npx nuxi build

npx nuxt preview
```

This will open the site on some `http://localhost:xxxx` link, which the terminal will show.

## 📄 License

Distributed under the terms of the MIT License. Check out the `LICENSE` file for more concrete legal information.
