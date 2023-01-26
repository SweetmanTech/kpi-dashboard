import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ethers } from "ethers";
import { DecentSDK, edition } from "@decent.xyz/sdk";
import { useNetwork, useSigner } from "wagmi";
import SeoHead from "../SeoHead";
import Developers from "../Developers";

const Home: NextPage = () => {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const [recipientString, setRecipientString] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [contractName, setContractName] = useState("");

  const handleContractChange = async (e: any) => {
    if (!ethers.utils.isAddress(e.target.value) || !chain || !signer) {
      return false;
    }
    setContractAddress(e.target.value);

    const sdk = new DecentSDK(chain.id, signer);
    const contract = await edition.getContract(sdk, e.target.value);
    const name = await contract.name();
    setContractName(name);
  };

  return (
    <div className={`${styles.container} background`}>
      <SeoHead />
      <main className={styles.main}>
        <div className="flex items-center gap-4">
          <ConnectButton />
          <Link
            href="https://github.com/SweetmanTech/kpi-dashboard"
            target="_blank"
          >
            <Image
              src="/images/github-mark-white.svg"
              height={22}
              width={22}
              alt="link to repository"
            />
          </Link>
        </div>

        <h1 className={`${styles.title} font-medium`}>Dashboard Starter Kit</h1>
        <Developers />
      </main>

      <footer className="py-8 border-t border-white text-white">
        <div>
          <p className="flex justify-center pb-4 text-xl">
            for the musicians 💿
          </p>
          <a
            className="flex justify-center items-center text-xl"
            href="https://decent.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pr-4">🏗️</span>
            <Image
              src="/images/decent.png"
              height={18}
              width={100}
              alt="Decent 💪"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
