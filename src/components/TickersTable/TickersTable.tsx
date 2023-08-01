import { FC } from "react";
import { Ticker } from "@/types";
import { roundNumberAndCovertToLocale } from "utils/numbers";

interface TickersTableProps {
  tickers: Ticker[];
}

const TickersTable: FC<TickersTableProps> = ({ tickers }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Pair</th>
            <th>Price</th>
            <th>Spread</th>
            <th>24h Volume</th>
          </tr>
        </thead>

        <tbody>
          {tickers.map((ticker) => (
            <tr key={`${ticker.coin_id}-${ticker.base}-${ticker.target}`}>
              <td>{ticker.base}</td>
              <td>
                <div className="flex-items-center">
                  <a
                    href={ticker.trade_url}
                    className="name-link"
                    target="_blank"
                  >
                    {ticker.base}/{ticker.target}
                  </a>
                </div>
              </td>
              <td>{ticker.last}</td>

              <td>{ticker.bid_ask_spread_percentage}</td>
              <td>{roundNumberAndCovertToLocale(ticker.volume)} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TickersTable;
