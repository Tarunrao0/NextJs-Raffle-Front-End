import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";
// import ManualHeader from "../components/ManualHeader";

const supportedChains = ["31337", "11155111"]

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Raffle</title>
        <meta name="description" content="Smart Contract Raffle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
      
      </div>
  );
}
