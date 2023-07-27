describe("Homepage", () => {
  beforeEach(() => {
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
  });

  it("should display the homepage and display the top 10 exhanges", () => {
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

  it("should navigate to the exchange details page when clicking on the exhange name", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.coingecko.com/api/v3/exchanges/1",
      },
      {
        fixture: "exchangeDetails.json",
      },
    );

    // Click the exchange name which will navigate to the exchange details page
    cy.findByText("Exchange 1").click();
    cy.url().should("include", "/exchange-id-1");
  });
});
