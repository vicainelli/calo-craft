As a developer, I want to have a mono repository set up for this application.

Here's a list of the applications

/apps
- /apps/web: The web application built with React/Vite; it will be the main interface for users to interact with the meal planning system
- /apps/api: The API built with HonoJS, it will serve the web application with the storage data of the meals
- /apps/meal-plan-engine: The meal plan engine, will generate the meal plans based on the user preferences, dietary restrictions, and available products of the groceries; and save in the database
- /apps/groceries-scraper: The groceries scraper, will scrape the groceries from the websites and save in the database/file
/packages
- all the shared packages

for the js application we'll use bun, for the other (meal-plan-engine and groceries-scraper) application you can suggest the best based on the requirements for each application.

you don't need to set up each application, just the mono repository structure and the package manager; also add a reacme file on each application with a brief description of the application and how to run it;
