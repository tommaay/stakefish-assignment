import Layout from "components/Layout";
import ExchangesTable from "components/ExchangesTable";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 className="page-title">Top 10 Trusted Exhanges</h1>
      <ExchangesTable />
    </Layout>
  );
};

export default Home;
