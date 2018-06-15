import Axios from 'axios';
import { config } from '../crumb-config';

const AxiosConfig = {
  headers: {
    Accept: 'application/vnd.github.v3+json'
  },
  params: {
    client_id: config.client_id,
    client_secret: config.client_secret
  }
};

/**
 * Retrieve a list of gist from a user
 * @param {string} user
 */
export const getUserGistList = async (user = 'gaearon') => {
  const github = Axios.create({
    baseURL: `${config.githubApi}/users/${user}`,
    ...AxiosConfig
  });

  try {
    const gists = await github.get('/gists');
    const list = gists.data;
    console.log(list);
    return {
      list
    };
  } catch (error) {
    console.warn(`Failed fetching gists list for ${user}, ${error} `);
  }
};

export const getForks = async url => {
  const gist = Axios.create({
    baseURL: `${url}`,
    ...AxiosConfig
  });

  try {
    const forks = await gist.get();
    return forks.data;
  } catch (error) {
    console.warn(`Failed fetching forks, ${error} `);
  }
};
