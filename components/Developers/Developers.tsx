import axios from "axios";
import { useEffect } from "react";

const Developers = () => {
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
    const response = await getCollaborators("decentxyz", "airdrop-starter");
    console.log("response", response);
  };

  useEffect(() => {
    getAllCollaborators();
  }, []);
  return <div>hello world</div>;
};

export default Developers;
