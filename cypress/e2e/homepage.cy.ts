describe("Homepage", () => {
  it("should display the homepage and display the top 10 exhanges", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.coingecko.com/api/v3/exchanges/?per_page=10",
      },
      {
        fixture: "exchangesList.json",
      },
    ).as("getExchanges");

    cy.visit("/");

    // Page title
    cy.findByText(/Top 10 Trusted Exhanges/i).should("exist");

    // Table headers
    cy.findByText(/#/i).should("exist");
    cy.findByText(/name/i).should("exist");
    cy.findByText(/trust score/i).should("exist");
    cy.findByText(/24h volume/i).should("exist");
    cy.findByText(/country/i).should("exist");
    cy.findByText(/url/i).should("exist");

    // Table data - (Exchange names)
    cy.findByText("Exchange 1").should("exist");
    cy.findByText("Exchange 2").should("exist");
    cy.findByText("Exchange 3").should("exist");
    cy.findByText("Exchange 4").should("exist");
    cy.findByText("Exchange 5").should("exist");
    cy.findByText("Exchange 6").should("exist");
    cy.findByText("Exchange 7").should("exist");
    cy.findByText("Exchange 8").should("exist");
    cy.findByText("Exchange 9").should("exist");
    cy.findByText("Exchange 10").should("exist");
  });
});
