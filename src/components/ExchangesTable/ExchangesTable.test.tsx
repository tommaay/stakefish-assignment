import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ExchangesTable from "./ExchangesTable";
import { MOCK_EXCHANGES_LIST } from "mocks/data";
import { roundNumberAndCovertToLocale } from "utils/numbers";

const exchange1 = MOCK_EXCHANGES_LIST[0];
const exchange2 = MOCK_EXCHANGES_LIST[1];
const exchange3 = MOCK_EXCHANGES_LIST[2];

describe("ExchangesTable", () => {
  const renderExchangesTable = async () =>
    await render(
      <BrowserRouter>
        <ExchangesTable />
      </BrowserRouter>,
    );

  it("should render the exchanges table headers", async () => {
    renderExchangesTable();
    await waitFor(() => {
      expect(screen.getByText("#")).toBeVisible();
      expect(screen.getByText("Name")).toBeVisible();
      expect(screen.getByText("Trust Score")).toBeVisible();
      expect(screen.getByText("24h Volume")).toBeVisible();
      expect(screen.getByText("Country")).toBeVisible();
      expect(screen.getByText("URL")).toBeVisible();
    });
  });

  it("should render the exchanges table with Exchange 1 data", async () => {
    renderExchangesTable();
    await waitFor(() => {
      const nameLink = screen.getByText(exchange1.name);
      expect(nameLink).toBeVisible();
      const trustScore = screen.getByText(exchange1.trust_score);
      expect(trustScore).toBeVisible();
      const tradeVolume = screen.getByText(
        `${roundNumberAndCovertToLocale(
          exchange1.trade_volume_24h_btc_normalized,
        )} BTC`,
      );
      expect(tradeVolume).toBeVisible();
      const country = screen.getByText(exchange1.country);
      expect(country).toBeVisible();
      const url = screen.getByText(exchange1.url);
      expect(url).toBeVisible();
    });
  });

  it("should render the exchanges table with Exchange 2 data", async () => {
    renderExchangesTable();
    await waitFor(() => {
      const nameLink = screen.getByText(exchange2.name);
      expect(nameLink).toBeVisible();
      const trustScore = screen.getByText(exchange2.trust_score);
      expect(trustScore).toBeVisible();
      const tradeVolume = screen.getByText(
        `${roundNumberAndCovertToLocale(
          exchange2.trade_volume_24h_btc_normalized,
        )} BTC`,
      );
      expect(tradeVolume).toBeVisible();
      const country = screen.getByText(exchange2.country);
      expect(country).toBeVisible();
      const url = screen.getByText(exchange2.url);
      expect(url).toBeVisible();
    });
  });

  it("should render the exchanges table with Exchange 3 data", async () => {
    renderExchangesTable();
    await waitFor(() => {
      const nameLink = screen.getByText(exchange3.name);
      expect(nameLink).toBeVisible();
      const trustScore = screen.getByText(exchange3.trust_score);
      expect(trustScore).toBeVisible();
      const tradeVolume = screen.getByText(
        `${roundNumberAndCovertToLocale(
          exchange3.trade_volume_24h_btc_normalized,
        )} BTC`,
      );
      expect(tradeVolume).toBeVisible();
      const country = screen.getByText(exchange3.country);
      expect(country).toBeVisible();
      const url = screen.getByText(exchange3.url);
      expect(url).toBeVisible();
    });
  });

  it("should sort the exchanges by volume and then by name", async () => {
    renderExchangesTable();

    // Before sorting
    await waitFor(() => {
      expect(screen.getByTestId("exchange-name-row-1").textContent).toEqual(
        "Mock Exchange 1",
      );
      expect(screen.getByTestId("exchange-name-row-2").textContent).toEqual(
        "Mock Exchange 2",
      );
      expect(screen.getByTestId("exchange-name-row-3").textContent).toEqual(
        "Mock Exchange 3",
      );
    });

    // Sort by volume
    const tradeVolumeHeading = screen.getByText(/24h Volume/i);
    fireEvent.click(tradeVolumeHeading);

    await waitFor(() => {
      expect(screen.getByTestId("exchange-name-row-1").textContent).toEqual(
        "Mock Exchange 2",
      );
      expect(screen.getByTestId("exchange-name-row-2").textContent).toEqual(
        "Mock Exchange 3",
      );
      expect(screen.getByTestId("exchange-name-row-3").textContent).toEqual(
        "Mock Exchange 1",
      );
    });

    // Sort by name
    const nameHeading = screen.getByText(/Name/i);
    fireEvent.click(nameHeading);

    await waitFor(() => {
      expect(screen.getByTestId("exchange-name-row-1").textContent).toEqual(
        "Mock Exchange 1",
      );
      expect(screen.getByTestId("exchange-name-row-2").textContent).toEqual(
        "Mock Exchange 2",
      );
      expect(screen.getByTestId("exchange-name-row-3").textContent).toEqual(
        "Mock Exchange 3",
      );
    });
  });
});
