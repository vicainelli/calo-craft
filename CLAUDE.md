# CaloCraft

## Description
Meal planner based on your personal preferences and dietary restrictions.
User can input their preferences and restrictions, and the app will generate a meal plan for the day/week.
The app will use a dabase of available ingredients from the local grocery store and suggest recipes based on the user's preferences.

## Tech Stack
This is a monorepository that use Turborepo to manage multiple packages

- **Frontend**: React.js, Tailwind, ShadCN
- **Backend**: Node.js, Hono
- **Testing**: Vitest, Playwright

## Code Conventions
- We use Biome for code formatting and linting.
- We use TypeScript for type safety.
- Function components should be used in the frontend.
- 2 spaces for indentation.
- camelCase for function names
- Constant case for variable names

## Project Structure

```
/apps
- /apps/web: The web application built with React/Vite; it will be the main interface for users to interact with the meal planning system
- /apps/api: The API built with HonoJS, it will serve the web application with the storage data of the meals
- /apps/meal-plan-engine: The meal plan engine, will generate the meal plans based on the user preferences, dietary restrictions, and available products of the groceries; and save in the database
- /apps/groceries-scraper: The groceries scraper, will scrape the groceries from the websites and save in the database/file
/packages
- all the shared packages
```

## Impotant Notes

- All js/ts projects use Bun as the package manager and runner.
- New components and routes should have a companion test file.
- State management should be done using TanStack Query.
