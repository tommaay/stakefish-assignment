import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Exchange } from "@/types";
import { COIN_GECKO_URL } from "@/constants";
import { roundNumberAndCovertToLocale } from "utils/numbers";
import Loader from "../Loader";

const ExchangesTable: FC = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      const response = await fetch(`${COIN_GECKO_URL}/exchanges/?per_page=10`);
      const data = await response.json();
      setExchanges(data);
      setIsLoading(false);
    };
    setIsLoading(true);

    try {
      fetchExchanges();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Trust Score</th>
            <th>24h Volume</th>
            <th>Country</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {exchanges.map((exchange) => (
            <tr key={exchange.id}>
              <td>{exchange.trust_score_rank}</td>
              <td>
                <div className="flex-items-center">
                  <img
                    src={exchange.image}
                    alt={exchange.name}
                    width={20}
                    height={20}
                  />

                  <Link to={`/${exchange.id}`} className="name-link">
                    {exchange.name}
                  </Link>
                </div>
              </td>
              <td className="text-center">{exchange.trust_score}</td>
              <td className="text-center">
                {roundNumberAndCovertToLocale(
                  exchange.trade_volume_24h_btc_normalized,
                )}{" "}
                BTC
              </td>
              <td>{exchange.country}</td>
              <td>
                <a href={exchange.url} target="_blank">
                  {exchange.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangesTable;
