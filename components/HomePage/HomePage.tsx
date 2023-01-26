import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import SeoHead from "../SeoHead";
import Developers from "../Developers";
import { useState } from "react";

const Home: NextPage = () => {
  const DEFAULT = "Dashboard Starter Kit";
  const [title, setTitle] = useState(DEFAULT);

  const toggle = (newTitle: string) => {
    if (title === DEFAULT) {
      setTitle(newTitle);
    } else {
      setTitle(DEFAULT);
    }
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

        <h1 className={`${styles.title} font-medium`}>{title}</h1>
        <Developers toggle={toggle} />
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
