import axios from "axios";

export default async function handler(req: any, res: any) {
    console.log("req", req.query)
    const {username, repo} = req.query;
    console.log("username", username)
    console.log("repo", repo)

    const response = await axios.get(
        `https://api.github.com/repos/${username}/${repo}/collaborators`,
        {
          headers: {
            Authorization: `Token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
          },
        }
    );
    res.status(200).json(response.data)
}