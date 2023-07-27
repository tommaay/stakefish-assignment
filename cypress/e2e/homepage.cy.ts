describe("Homepage", () => {
  it("should display the homepage and display the top 10 exhanges", () => {
    cy.visit("/");

    // Page title
    cy.findByText(/Top 10 Trusted Exhanges/i).should("exist");
  });
});
