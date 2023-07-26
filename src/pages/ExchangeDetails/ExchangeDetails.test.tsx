import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ExchangeDetails from "./ExchangeDetails";
import { MOCK_EXCHANGE_DETAILS } from "mocks/data";

describe("ExchangeDetails", () => {
  const renderExchangeDetails = async () => {
    await render(
      <BrowserRouter>
        <ExchangeDetails />
      </BrowserRouter>,
    );
  };

  it("renders exchange details with correct data", async () => {
    renderExchangeDetails();

    await waitFor(() => {
      // Details header
      expect(screen.getByAltText(MOCK_EXCHANGE_DETAILS.name)).toBeVisible();
      expect(screen.getByText(MOCK_EXCHANGE_DETAILS.name)).toBeVisible();
      expect(screen.getByText("Trust score")).toBeVisible();
      expect(screen.getByText(MOCK_EXCHANGE_DETAILS.trust_score)).toBeVisible();

      // Back link
      expect(screen.getByText("< Back to home")).toBeVisible();

      // Description
      expect(screen.getByText(MOCK_EXCHANGE_DETAILS.description)).toBeVisible();

      // Details card grid
      expect(screen.getByText("Year Established")).toBeVisible();
      expect(
        screen.getByText(MOCK_EXCHANGE_DETAILS.year_established),
      ).toBeVisible();
      expect(screen.getByText("Country")).toBeVisible();
      expect(screen.getByText(MOCK_EXCHANGE_DETAILS.country)).toBeVisible();
      expect(screen.getByText("24 Trading Volume")).toBeVisible();
      expect(
        screen.getByText(
          `${Math.round(
            MOCK_EXCHANGE_DETAILS.trade_volume_24h_btc,
          ).toLocaleString()} BTC`,
        ),
      ).toBeVisible();

      // Social media card
      expect(screen.getByAltText(/Facebook logo/i)).toBeVisible();
      expect(screen.getByAltText(/Reddit logo/i)).toBeVisible();
      expect(screen.getByAltText(/Telegram logo/i)).toBeVisible();
      expect(screen.getByAltText(/Slack logo/i)).toBeVisible();
      expect(screen.getByAltText(/Twitter logo/i)).toBeVisible();

      // Tickers table
      MOCK_EXCHANGE_DETAILS.tickers.forEach((ticker) => {
        expect(screen.getByText(ticker.base)).toBeVisible();
        expect(
          screen.getByText(`${ticker.base}/${ticker.target}`),
        ).toBeVisible();
        expect(screen.getByText(ticker.last)).toBeVisible();
        expect(
          screen.getByText(ticker.bid_ask_spread_percentage),
        ).toBeVisible();
        expect(
          screen.getByText(Math.round(ticker.volume).toLocaleString()),
        ).toBeVisible();
      });
    });
  });
});
