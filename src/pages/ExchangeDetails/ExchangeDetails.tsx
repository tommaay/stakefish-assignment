import { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "components/Layout";
import DetailsCard from "components/DetailsCard";
import SocialMediaCard from "components/SocialMediaCard";
import TickersTable from "components/TickersTable";
import Loader from "@/components/Loader";
import { ExchangeDetails } from "@/types";
import { COIN_GECKO_URL } from "@/constants";
import { roundNumberAndCovertToLocale } from "utils/numbers";
import "styles/exchange-details.css";

const ExchangeDetails: FC = () => {
  const [exchange, setExchange] = useState<ExchangeDetails | null>(null);

  const { exchangeId } = useParams();

  useEffect(() => {
    const fetchExhange = async () => {
      const response = await fetch(`${COIN_GECKO_URL}/exchanges/${exchangeId}`);
      const data = await response.json();
      setExchange(data);
    };

    try {
      fetchExhange();
    } catch (error) {
      console.error(error);
    }
  }, [exchangeId]);

  if (!exchange)
    return (
      <Layout>
        <Loader />
      </Layout>
    );

  return (
    <Layout>
      <div className="details-header">
        <img src={exchange.image} alt={exchange.name} width={50} height={50} />
        <div className="flex-items-center">
          <h1 className="page-title mb-n">{exchange.name}</h1>
          <div className="v-divider" />
          <p className="trust-score-number">{exchange.trust_score}</p>
          <p className="trust-score-text">Trust score</p>
        </div>
      </div>

      <Link to="/" className="back-btn">
        {"< Back to home"}
      </Link>

      <p className="description">{exchange.description}</p>

      <div className="details-card-grid">
        <DetailsCard
          label="Year Established"
          value={exchange.year_established}
        />
        <DetailsCard label="Country" value={exchange.country} />
        <DetailsCard
          label="24 Trading Volume"
          value={`${roundNumberAndCovertToLocale(
            exchange.trade_volume_24h_btc,
          )} BTC`}
        />
        <SocialMediaCard
          facebook_url={exchange.facebook_url}
          reddit_url={exchange.reddit_url}
          telegram_url={exchange.telegram_url}
          slack_url={exchange.slack_url}
          twitter_handle={exchange.twitter_handle}
        />
      </div>

      <TickersTable tickers={exchange.tickers} />
    </Layout>
  );
};

export default ExchangeDetails;
