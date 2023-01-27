import axios from "axios";
import { useEffect, useState } from "react";
import DataPoint from "../DataPoint";

const Developers = (props: any) => {
  const { toggle } = props;
  const [collaborators, setCollaborators] = useState([]);
  const [clickActive, setClickActive] = useState(false);

  const getCollaborators = async (username: string, repo: string) => {
    try {
      const response = await axios.get(`/api/getCollaborators`, {
        params: {
          username,
          repo,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCollaborators = async () => {
    const usernames = [
      "decentxyz",
      "decentxyz",
      //   "decentxyz",
      "decentxyz",
      //   "decentxyz",
      "decentxyz",
      //   "decentxyz",
      "decentxyz",
      //   "decentxyz",
      //   "decentxyz",
      //   "decentxyz",
      //   "decentxyz",
    ];
    const repos = [
      "airdrop-starter",
      "DecentSDK-protocol",
      //   "Start-Decent", MISSING ACCESS
      "minting-studio",
      //   "Minting-Page", MISSING ACCESS
      "DecentSDK-npm",
      //   "contract-indexer", MISSING ACCESS
      "ux-components",
      //   "DecentSDK-docs", MISSING ACCESS
      //   "live-ticketing", MISSING ACCESS
      //   "terms-of-service", MISSING ACCESS
      //   "DCNTVaults", MISSING ACCESS
    ];
    let newCollaborators = [] as any;
    for (let i = 0; i < usernames.length; i++) {
      let response = await getCollaborators(usernames[i], repos[i]);
      console.log("repos[i]", repos[i]);
      console.log("response", response);
      newCollaborators = [...newCollaborators, ...response];
    }
    const uniqueItems = newCollaborators.filter(
      (item: any, index: any) =>
        newCollaborators.findIndex((i: any) => i.id === item.id) === index
    );
    console.log("uniqueItems", uniqueItems);
    setCollaborators(uniqueItems);
  };

  useEffect(() => {
    getAllCollaborators();
  }, []);

  const handleClick = () => {
    setClickActive(!clickActive);
  };

  const handleHover = () => {
    if (clickActive) return;
    toggle("Active Developers");
  };

  return (
    <DataPoint
      active={clickActive}
      handleHover={handleHover}
      handleClick={handleClick}
      text={collaborators.length}
    />
  );
};

export default Developers;
