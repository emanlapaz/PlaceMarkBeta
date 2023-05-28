describe("Signup and Login", () => {
  beforeEach(() => {
    cy.visit("https://placemarkbeta-community.onrender.com/signup");
  });

  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => false);
  });

  it("should sign up a new user and login successfully", () => {
    const firstName = "John";
    const lastName = "Doe";
    const email = "john.doe@example.com";
    const password = "password123";

    cy.get("input[name=\"firstName\"]").type(firstName);
    cy.get("input[name=\"lastName\"]").type(lastName);
    cy.get("input[name=\"email\"]").type(email);
    cy.get("input[name=\"password\"]").type(password);
    cy.get("form").submit();

    // Go to the login page
    cy.visit("https://placemarkbeta-community.onrender.com/login");

    // Log in with the same credentials
    cy.get("input[name=\"email\"]").type(email);
    cy.get("input[name=\"password\"]").type(password);
    cy.get("form").submit();

    // Assert that the login was successful
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", `Hello ${  firstName}`);
  });
});


describe("Login-addplacemarks", () => {
  beforeEach(() => {
    cy.visit("https://placemarkbeta-community.onrender.com/login"); // Visit the login page before each test
  });

  before(() => {
    // Configure uncaught exception handling
    Cypress.on("uncaught:exception", (err, runnable) => 
      // Return false to prevent the error from failing the test
       false
    );
  });

  it("should add a public placemark successfully", () => {
    // Log in with valid credentials
    cy.get("input[name=\"email\"]").type("homer@simpson.com");
    cy.get("input[name=\"password\"]").type("123");
    cy.get("form").submit();

    // Assert the successful login
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", "Hello Homer");

    // Add a public placemark
    cy.get("input[name=\"placeMark\"]").type("New Public Placemark");
    cy.get("input[name=\"lat\"]").type("51.5074"); // Enter latitude value
    cy.get("input[name=\"long\"]").type("-0.1278"); // Enter longitude value
    cy.get("select[name=\"privacy\"]").select("public"); // Set privacy to public
    cy.get("form.edit-placemark").submit(); // Submit the form

    // Assert that the placemark was added successfully
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", "New Public Placemark");
  });

  it("should add a private placemark successfully", () => {
    // Log in with valid credentials
    cy.get("input[name=\"email\"]").type("homer@simpson.com");
    cy.get("input[name=\"password\"]").type("123");
    cy.get("form").submit();

    // Assert the successful login
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", "Hello Homer");

    // Add a private placemark
    cy.get("input[name=\"placeMark\"]").type("New Private Placemark");
    cy.get("input[name=\"lat\"]").type("51.5074"); // Enter latitude value
    cy.get("input[name=\"long\"]").type("-0.1278"); // Enter longitude value
    cy.get("select[name=\"privacy\"]").select("private"); // Set privacy to private
    cy.get("form.edit-placemark").submit(); // Submit the form

    // Assert that the placemark was added successfully
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", "New Private Placemark");
  });
});

describe("Add Point to Placemark", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => false);
  });

  beforeEach(() => {
    cy.visit("https://placemarkbeta-community.onrender.com/login");
    cy.get("input[name=\"email\"]").type("homer@simpson.com");
    cy.get("input[name=\"password\"]").type("123");
    cy.get("form").submit();
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", "Hello");
  });

  it("should add a point to the placemark successfully", () => {
    cy.visit("https://placemarkbeta-community.onrender.com/placemark/6473874c63e5309a2a97856f");
    cy.get("input[name=\"pointName\"]").should("be.visible").type("New Point");
    cy.get("input[name=\"latitude\"]").type("51.5074");
    cy.get("input[name=\"longitude\"]").type("-0.1278");
    cy.get("input[name=\"description\"]").type("Description of the point");
    cy.get("select[name=\"category\"]").select("Nature");
    cy.get("form.box").submit();

    cy.url().should("match", /\/placemark\/[a-zA-Z0-9]+$/);
    cy.get("body").should("contain", "New Point");
  });
});


describe("Update Placemark Privacy", () => {
  beforeEach(() => {
    cy.visit("https://placemarkbeta-community.onrender.com/login"); // Visit the login page before each test
  });

  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => false);
  });

  it("should update the placemark privacy to private", () => {
    // Log in with valid credentials
    cy.get("input[name=\"email\"]").type("homer@simpson.com");
    cy.get("input[name=\"password\"]").type("123");
    cy.get("form").submit();

    // Assert the successful login
    cy.url().should("include", "placemarkbeta-community");
    cy.get("body").should("contain", "Hello Homer");

    // Go to the edit placemark page
    cy.visit("https://placemarkbeta-community.onrender.com/dashboard/editplacemark/6473874c63e5309a2a97856f");

    // Change the privacy to private
    cy.get("select[name=\"privacy\"]").select("private");

    // Submit the form to update the placemark
    cy.get("form.box").submit();

  });

it("should update the placemark privacy to public", () => {
  // Log in with valid credentials
  cy.get("input[name=\"email\"]").type("homer@simpson.com");
  cy.get("input[name=\"password\"]").type("123");
  cy.get("form").submit();

  // Assert the successful login
  cy.url().should("include", "placemarkbeta-community");
  cy.get("body").should("contain", "Hello Homer");

  // Go to the edit placemark page
  cy.visit("https://placemarkbeta-community.onrender.com/dashboard/editplacemark/6473874c63e5309a2a97856f");

  // Change the privacy to public
  cy.get("select[name=\"privacy\"]").select("public");

  // Submit the form to update the placemark
  cy.get("form.box").submit();

});
})

