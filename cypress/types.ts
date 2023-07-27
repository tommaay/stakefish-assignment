export interface Ticker {
  base: string;
  target: string;
  last: number;
  volume: number;
  trust_score: string;
  bid_ask_spread_percentage: number;
  trade_url: string;
  token_info_url: string | null;
  coin_id: string;
}

export interface ExchangeDetails {
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  twitter_handle: string;
  trust_score: number;
  trade_volume_24h_btc: number;
  tickers: Ticker[];
}
