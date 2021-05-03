# App

You can visit the app at https://gene-phenotype.herokuapp.com/

## Table of Contents
* [React Frontend](#quick-start)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Licensing](#licensing)

## [React v16](https://facebook.github.io/react/) Frontend
In the frontend side, I utilized a React template created by [Creative Tim](https://github.com/creativetimofficial/paper-kit-react?ref=pkr-docs-navbar), which is a free Bootstrap 4, React, React Hooks and Reactstrap UI Kit with pale colors, beautiful typography and thoughtful drawings. Besides, Ant Design is also used.

## [Flask](http://flask.pocoo.org/) Backend
As for the backend side, Flask is used to write RESTful APIs. The entry point is in the `main()` method in `app.py`.
```
if __name__ == '__main__':
    # deployment mode
    # app.run(host='0.0.0.0') # start the flask program
    
    # local mode
    app.run(debug=True)
```

## Production Deployment

If you want to deploy the app to somewhere (I deployed it to Heroku), you can change some code in the following files:

1. app.py
```
# comment out import CORS in the deployment mode
from flask_cors import CORS

...

# comment out CORS(app) in the deployment mode
CORS(app, resources={r"/*": {"origins": "*"}})

mongo = PyMongo(app)

...

if __name__ == '__main__':
    # deployment mode
    # app.run(host='0.0.0.0') # start the flask program
```
2. src/config/apiUrl.js

You'll need to change the ipUrl to your own backend URL+/api/.


## Quick start
To Runnning locally, you can follow the instructions below:
1.  Git clone the project
2.  Make sure you have node.js (<https://nodejs.org/en/>) installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4. Run `npm run build` in the root dictionary
5. Run  `pip install -r requirements.txt` in the root dictionary
6.  You will find all the branding colors inside `src/assets/scss/paper-kit/_variables.scss`. You can change them with a `HEX` value or with other predefined variables
7. If your MongoDB database is created locally, open a terminal and run `mongo`. The default server is `http://localhost:27017`
8. Open a new terminal, and run `yarn start (or npm run start)` in the app folder. This will 
9. Open a new terminal, go to the app folder and run `flask run`

Once it's done building and everything has booted up:

```
Access the app at: http://localhost:3000
The API (eg for testing with CURL): http://localhost:5000
MongoDB server: http://localhost:27017

```

## File Structure

Within the download you'll find the following directories and files:
```
genepheno_database/app
├── LICENSE.md
├── Procfile
├── README.md
├── __pycache__
├── api
|  ├── __pycache__
|  └── venv
├── app.py
├── gulpfile.js
├── jsconfig.json
├── package.json
├── public
|  ├── apple-icon.png
|  ├── favicon.ico
|  ├── index.html
|  └── manifest.json
├── requirements.txt
├── src
|  ├── assets
|  |  ├── css
|  |  ├── demo
|  |  ├── fonts
|  |  ├── img
|  |  └── scss
|  ├── components
|  |  ├── Footers
|  |  |  └── DemoFooter.js
|  |  ├── Graphs
|  |  |  ├── BarChartComponent.js
|  |  |  └── PieChartComponent.js
|  |  ├── Headers
|  |  |  ├── IndexHeader.js
|  |  |  └── SearchPageHeader.js
|  |  ├── Navbars
|  |  |  └── PageNavbar.js
|  |  └── SearchList.js
|  ├── config
|  |  └── apiUrl.js
|  ├── index.js
|  ├── logo.svg
|  ├── static
|  |  ├── pipeline.png
|  |  └── style
|  |     ├── index.css
|  |     └── searchPaper.css
|  └── views
|     └── pages
|        ├── HomeGenePage.js
|        ├── HomePaperPage.js
|        ├── Index.js
|        ├── ResultGenePage.js
|        └── ResultPaperPage.js
└── static.json

```

Here are some important files:
1. `app.py` is about the RESTful APIs that connect with database and frontend side.
2. `requirements.txt` includes all the Python packages that is used in the app.py. This file can be generated automatically by running `pip freeze > requirements.txt`
3. `src` folder includes all the components, pages and css that are used in the frontend side.
    * `components`: includes the components like Navbars, Headers, Footers
    * `views/pages`: includes the pages like the home page: [index.js](https://gene-phenotype.herokuapp.com/), the home paper search page: [HomePaperPage.js](https://gene-phenotype.herokuapp.com/search_paper/), and home gene search page: [HomeGenePage.js](https://gene-phenotype.herokuapp.com/search_gene/), etc.
    * `index.js`: includes all the routers of the pages.


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Licensing

- Copyright 2021 Creative Tim (https://www.creative-tim.com/?ref=pkr-github-readme)

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md
