import Axios from 'axios';
import { config } from '../crumb-config';

/**
 * Retrieve a list of gist from a user
 * @param {string} user
 */
export const getUserGistList = async (user = 'thebiltheory') => {
  const github = Axios.create({
    baseURL: `${config.githubApi}/users/${user}`,
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  });

  try {
    const gists = await github.get('/gists');
    const list = gists.data;
    return {
      list
    };
  } catch (error) {
    console.log(`Failed fetching gists list for ${user}`);
  }
};
