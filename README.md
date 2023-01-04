<!-- LOGO -->
![Logo][logo]
<div align="center">
<h1>PIXEMA</h1>
Movie APP based on Kinopoisk API
<hr/>
<img src='https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white&style=plastic' alt='Angular badge'>

[//]: # (<h4>LIVE DEMO</h4>)
<hr/>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#details">Details</a></li>
  </ol>
</details>

<!-- DESCRIPTION -->
## Description

Pixema is a free movie database. The service provides following opportunities:

- watch through all movie database or top movies/premieres specifically;
- search for movies and use different filtering;
- look through detailed movie information and recommended movies;
- authorized users can add/remove movies to/from their favourites list;
- change the application theme (dark/light).

<!-- INSTALLATION -->
## Installation

1. Clone repository:

   `git clone https://github.com/kraskoe/filmopoisk`
2. Install dependencies:

   `npm i`
3. Start local server:

   `npm start`

<!-- DETAILS -->
## Details
Once you started the app, you can see home page with all movies presented. You can switch between this view and top/premieres view
![Home page][home]

If you want to toggle between dark/light schemes, click on switch at the navigation menu
![Toggle themes][light-theme]

You can use simple search at the top of page or advanced filters (toggled by the button in search field)
![Search filters][filters]

All chosen filters are shown at page and can be turned off one by one
![Active filters][active-filters]

If you click on movie card you can see detailed information on that movie
![Detailed information][single]

...along with recommended movies
![Recommended movies][recommended]

In order to use advanced options you must log in / sign up
![Sign up][signup]

After that you can use favourites page
![Empty favourites][favs-empty]

In order to add a movie to your favourites, click on the favourites badge, and you will be able to see all your favourites
![Favourites][favs]

<p align="right"><a href="#start-of-content">back to top &#8593;</a></p>

[demo]: url

[logo]: screens/logo.png

[home]: screens/home.png
[light-theme]: screens/light-theme.png
[filters]: screens/filters.png
[active-filters]: screens/active-filters.png
[active-filters]: screens/active-filters.png
[single]: screens/singlemovie.png
[recommended]: screens/recommended.png
[signup]: screens/signup.png
[favs-empty]: screens/favourites-empty.png
[favs]: screens/favourites.png

[angular-badge]: https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white&style=plastic
[react-badge]: https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=plastic
[react-router-badge]: https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white&style=plastic
[styled-components-badge]: https://img.shields.io/badge/-Styled%20components-DB7093?logo=styled-components&logoColor=white&style=plastic
[redux-badge]: https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=plastic
[redux-toolkit-badge]: https://img.shields.io/badge/-Redux%20Toolkit-764ABC?logo=redux&logoColor=white&style=plastic
[typescript-badge]: https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white&style=plastic
