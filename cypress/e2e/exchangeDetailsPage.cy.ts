import { ExchangeDetails } from "../types";
import { roundNumberAndCovertToLocale } from "../../src/utils/numbers";

describe("Exchange details page", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.coingecko.com/api/v3/exchanges/*",
      },
      {
        fixture: "exchangeDetails.json",
      },
    ).as("getExchangeDetails");
    cy.visit("/exchange-id-1");
    cy.fixture("exchangeDetails.json").as("exchangeDetails");
  });

  it("should display the exchange details", () => {
    cy.get<ExchangeDetails>("@exchangeDetails").then((exchangeDetails) => {
      cy.findByText(exchangeDetails.name).should("exist");
      cy.findByText(exchangeDetails.trust_score).should("exist");
      cy.findByText(exchangeDetails.description).should("exist");
      cy.findByText(exchangeDetails.year_established).should("exist");
      cy.findByText(exchangeDetails.country).should("exist");
      cy.findByText(
        `${roundNumberAndCovertToLocale(
          exchangeDetails.trade_volume_24h_btc,
        )} BTC`,
      ).should("exist");
      cy.findByText("Facebook").should("exist");
      cy.findByText("Reddit").should("exist");
      cy.findByText("Telegram").should("exist");
      cy.findByText("Twitter").should("exist");
    });
  });

  it("should display the exchange tickers", () => {
    cy.get<ExchangeDetails>("@exchangeDetails").then((exchangeDetails) => {
      exchangeDetails.tickers.forEach((ticker) => {
        cy.findByText(ticker.base).should("exist");
        cy.findByText(`${ticker.base}/${ticker.target}`).should("exist");
        cy.findByText(ticker.last).should("exist");
        cy.findByText(roundNumberAndCovertToLocale(ticker.volume)).should(
          "exist",
        );
        cy.findByText(ticker.bid_ask_spread_percentage).should("exist");
      });
    });
  });

  it("should go back to the home page", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.coingecko.com/api/v3/exchanges/?per_page=10",
      },
      {
        fixture: "exchangesList.json",
      },
    ).as("getExchanges");

    cy.findByText(/Back to home/i).click();
    cy.url().should("eq", "http://127.0.0.1:5173/");
  });
});
