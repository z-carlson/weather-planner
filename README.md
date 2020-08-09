# Weather Planner Application

This was a practice project to work on some React concepts (such as lifting state up, working with simple form input), experiment with CSS Modules, and to try out the weather.gov API. I also used this project as an opporunity to practice using Figma to create a simple design system.

## Purpose

Often, when checking the weather, what I really want to know is when will be a good time for a specific outdoor activity, such as swimming or taking hike. Often, I have to check the specific hourly forecasts to find a good time. This application allows me to enter my max and min desired temperature and then automatically highlights hours within those ranges that are sunny.

## Technology Used

The application uses Reactjs, the Navigator web API to get the user's location, and then uses that location to fetch the weekly and hourly forecast from the [national weather service API](https://www.weather.gov/documentation/services-web-api).

## Limitations

Because this was a practice project for learning, there are some limitations to the implementation. It is not mobile friendly, for example, and hasn't been thoroughly tested on browsers other than Chrome.
