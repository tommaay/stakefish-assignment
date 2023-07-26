import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TickersTable from "./TickersTable";
import { MOCK_EXCHANGE_DETAILS } from "mocks/data";
import { Ticker } from "@/types";

const mockTickers = MOCK_EXCHANGE_DETAILS.tickers as Ticker[];

describe("ExchangesTable", () => {
  const renderTickersTable = async (tickers: Ticker[] = []) => {
    await render(
      <BrowserRouter>
        <TickersTable tickers={tickers} />
      </BrowserRouter>,
    );
  };

  it("renders tickers table with correct data", () => {
    renderTickersTable(mockTickers);

    const ticker1 = mockTickers[0];

    // Table headers
    expect(screen.getByText("Coin")).toBeVisible();
    expect(screen.getByText("Pair")).toBeVisible();
    expect(screen.getByText("Price")).toBeVisible();
    expect(screen.getByText("Spread")).toBeVisible();
    expect(screen.getByText("24h Volume")).toBeVisible();

    // Table data
    expect(screen.getByText(ticker1.base)).toBeVisible();
    expect(screen.getByText(`${ticker1.base}/${ticker1.target}`)).toBeVisible();
    expect(screen.getByText(ticker1.last)).toBeVisible();
    expect(screen.getByText(ticker1.bid_ask_spread_percentage)).toBeVisible();
    expect(
      screen.getByText(Math.round(ticker1.volume).toLocaleString()),
    ).toBeVisible();
  });

  it("renders empty table when no tickers provided", () => {
    renderTickersTable();

    expect(screen.getByText("Coin")).toBeVisible();
    expect(screen.getByText("Pair")).toBeVisible();
    expect(screen.getByText("Price")).toBeVisible();
    expect(screen.getByText("Spread")).toBeVisible();
    expect(screen.getByText("24h Volume")).toBeVisible();

    expect(screen.queryByText("BTC")).toBeNull();
    expect(screen.queryByText("BTC/USD")).toBeNull();
    expect(screen.queryByText("40000")).toBeNull();
    expect(screen.queryByText("0.5")).toBeNull();
    expect(screen.queryByText("500,000")).toBeNull();
  });
});
