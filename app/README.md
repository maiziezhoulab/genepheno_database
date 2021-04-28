# [Paper Kit React - Free Bootstrap 4, React, React Hooks and Reactstrap UI Kit](https://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme) ![version](https://img.shields.io/badge/version-1.3.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/paper-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Paper Kit React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/opt_pk_react_thumbnail.jpg)

Gene-phenotype app is a database to provide the search functio


### React Hooks support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports React Hooks.


### Bootstrap 4 support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports them. Most of the elements from the framework are re-designed to resemble sheets of paper and color pastels. If the are elements that we have not touched, they will gracefully fall back to the Bootstrap 4 default.


### Examples

Paper Kit React contains some pages already designed and implemented. Here is the list with the pages available. We are also working on more example pages, that you will be able to access no matter the version you download.


* [Landing Page](https://demos.creative-tim.com/paper-kit-react/#/landing-page?ref=pkr-github-readme)
* [Register](https://demos.creative-tim.com/paper-kit-react/#/register-page?ref=pkr-github-readme)
* [Profile Page](https://demos.creative-tim.com/paper-kit-react/#/profile-page?ref=pkr-github-readme)

Tutorial and components

Once you download the archive, you will be able find a tutorial page inside it explaining how to start using it. You can also check the [documentation online](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Quick start

1.  Git clone the project
2.  Make sure you have node.js (<https://nodejs.org/en/>) installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4. Run `npm run build` in the root dictionary
4.  You will find all the branding colors inside `src/assets/scss/paper-kit/_variables.scss`. You can change them with a `HEX` value or with other predefined variables.
5.  There are two mode in this project: development and deployment.
    - In development mode, you need to 1) go to app.py, and follow the instructions written in the comment line. 2) go to src/config folder, and change the ipUrl to `http://localhost:5000/api/`
    - In the

## Documentation
The documentation for the Paper Kit React is hosted at our [website](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## File Structure

Within the download you'll find the following directories and files:
```
gene-phenotype
.
/Users/wangyasi/Desktop/gene_phenotype_app/app
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


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



**Dashboards:**

| HTML | React | Vue  | Angular |
| --- | --- | ---  | ---  |
| [![Paper Dashboard  HTML](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-2-html/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-2?ref=pkr-github-readme) | [![Paper Dashboard  React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-react/opt_pd_react_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-pro-react?ref=pkr-github-readme) | [![Vue Paper Dashboard](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-paper-dashboard/opt_pd_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-paper-dashboard?ref=pkr-github-readme)  | [![ Paper Dashboard Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-angular/opt_pk2_angular_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-angular?ref=pkr-github-readme)


## Licensing

- Copyright 2021 Creative Tim (https://www.creative-tim.com/?ref=pkr-github-readme)

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md