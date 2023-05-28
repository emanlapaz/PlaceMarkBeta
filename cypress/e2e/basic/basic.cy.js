describe("Login", () => {
    beforeEach(() => {
      cy.visit("http://ujin:3000/login"); // Visit the login page before each test
    });
  
    it("Should log in successfully with valid credentials", () => {
      // Enter valid email and password
      cy.get("input[name=\"email\"]").type("homer@simpson.com");
      cy.get("input[name=\"password\"]").type("123");
      
      // Submit the login form
      cy.get("button[type=\"submit\"]").click();
      cy.url().should("include", "http://ujin:3000/dashboard"); // Update with the expected URL
      cy.get("dashboard-view").should("contain", "Hello Homer"); 
    });
    it("Should display an error message with invalid credentials", () => {
        // Enter invalid email and password
        cy.get("input[name=\"email\"]").type("invalid@example.com");
        cy.get("input[name=\"password\"]").type("invalidpassword");
        cy.get("button[type=\"submit\"]").click();
      
        // Assert that an error message is displayed
        cy.get(".error-message").should("be.visible");
      });
});
/*
      // Assert that the user is redirected to the dashboard or home page
      cy.url().should("include", "/dashboard"); // Update with the expected URL
      
      // Assert that the user is logged in
      cy.get("dashboard-view").should("contain", "Hello Homer"); 
    });
  
    it("Should display an error message with invalid credentials", () => {
      // Enter invalid email and password
      cy.get("input[name=\"email\"]").type("invalid@example.com");
      cy.get("input[name=\"password\"]").type("invalidpassword");
      
      // Submit the login form
      cy.get("button[type=\"submit\"]").click();
      
      // Assert that an error message is displayed
      cy.get(".error-message").should("be.visible");
    });
  });
  
  */