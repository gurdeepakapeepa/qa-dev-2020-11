## Setup and Installation
Running `yarn install` from the root will install Cypress locally as a dev dependency for project.

## Run Automated Tests
Run `npx cypress open`(npx is included with  `npm > v5.2`) from the root to launch the Cypress Test Runner.
Select `list.js` from the test runner to run the test.
For Full Documention of cypress  https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
For test libarary Documention https://github.com/testing-library/cypress-testing-library

## Test Document

### Note:
- Item list is not connected to database and reloading will clear application state.

### Steps to run:
- Inside the repository, run `yarn start`
This will open the application in your default web browser at http://localhost:3000.

### Defaut List on load:
Purpose: Ensure the application loads with the default item List.
1. Ensure the `Items` title is present.
2. Ensure the default list is present.
3. Ensure the List items text.
4. Ensure List items contains a `Remove` button
5. Ensure the Label `Title` is present.
6. Ensure Title text field is blank by default.
7. Ensure validation tip is present.
8. Ensure `Add Item` button is present.

Expected Result: All List items are present and visible on application load.

### Add an item:
Purpose: Ensure that the user can add an item to the list.
1. Select the `Title` text field.
2. Enter valid text(10-20 Chars) into the field.
3. Click `Add Item` button.

Expected Result: The text item is added to the bottom of the list and has an `Remove` button.

### Remove an item:
Purpose: Ensure that user can remove an item from the list.
1. Click the `Remove` button next to any list item.

Expected Result: The item is removed from the list.

### Validation - Less characters
Purpose: Ensure that user cannot add a list item with less than 10 character.
1. Select the `Title` text field.
2. Enter a text shorter than 10 characters.
3. Click `Add Item` button.

Expected Result: The item is not added and an Validation error message appers, "Title must be at least 10 characters."

### Validation - Many characters
Purpose: Ensure that the user cannot add a list item with more than 20 characters.
1. Select the `Title` text field.
2. Enter a text longer than 20 characters.
3. Click `Add Item` button.

Expected Result: The item is not added and an Validation error message appers, "Title can be at most 20 characters."
