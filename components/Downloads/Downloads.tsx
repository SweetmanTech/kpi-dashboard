import axios from "axios";
import { useEffect, useState } from "react";
import DataPoint from "../DataPoint";

const Downloads = (props: any) => {
  const { toggle } = props;
  const [downloads, setDownloads] = useState(0);
  const [clickActive, setClickActive] = useState(false);

  const getCollaborators = async () => {
    try {
      const date = new Date();
      const startYear = date.getFullYear() - (date.getMonth() === 0 ? 1 : 0);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const endMonth = (
        "0" + (date.getMonth() === 0 ? 12 : date.getMonth())
      ).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const start = `${startYear}-${month}-${day}`;
      const end = `${year}-${endMonth}-${day}`;
      const response = await axios.get(
        `https://api.npmjs.org/downloads/range/${start}:${end}/@decent.xyz/sdk`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCollaborators = async () => {
    const usernames = ["decentxyz"];
    let newCollaborators = [] as any;
    for (let i = 0; i < usernames.length; i++) {
      let response = await getCollaborators();
      newCollaborators = [...newCollaborators, ...response.downloads];
    }
    const sum = newCollaborators.reduce((acc: any, currentValue: any) => {
      return acc + currentValue.downloads;
    }, 0);
    setDownloads(sum);
  };

  useEffect(() => {
    getAllCollaborators();
  }, []);

  const handleClick = () => {
    setClickActive(!clickActive);
  };

  const handleHover = () => {
    if (clickActive) return;
    toggle("Monthly NPM Downloads");
  };

  return (
    <DataPoint
      active={clickActive}
      handleHover={handleHover}
      handleClick={handleClick}
      text={downloads}
      // text={downloads > 1000 ? `${(downloads / 1000).toFixed(1)}K` : downloads}
    />
  );
};

export default Downloads;
