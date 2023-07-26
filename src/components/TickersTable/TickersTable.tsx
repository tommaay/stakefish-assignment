import { FC } from "react";
import { Ticker } from "@/types";

interface TickersTableProps {
  tickers: Ticker[];
}

const TickersTable: FC<TickersTableProps> = ({ tickers }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="th">Coin</th>
            <th className="th">Pair</th>
            <th className="th">Price</th>
            <th className="th">Spread</th>
            <th className="th">24h Volume</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {tickers.map((ticker) => (
            <tr key={`${ticker.coin_id}-${ticker.base}-${ticker.target}`}>
              <td className="td">{ticker.base}</td>
              <td className="td">
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
              <td className="td">{ticker.last}</td>

              <td className="td">{ticker.bid_ask_spread_percentage}</td>
              <td className="td">
                {Math.round(ticker.volume).toLocaleString()}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TickersTable;
