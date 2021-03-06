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
export const getUserGistList = async (user = config.default_user) => {
  const github = Axios.create({
    baseURL: `${config.githubApi}/users/${user}`,
    ...AxiosConfig
  });

  try {
    const gists = await github.get('/gists');
    const list = gists.data;
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

export const getUserProfileFor = async (user = config.default_user) => {
  const gist = Axios.create({
    baseURL: `${config.githubApi}/users/`,
    ...AxiosConfig
  });

  try {
    const profile = await gist.get(`/${user}`);
    return profile.data;
  } catch (error) {
    console.warn(`Failed fetching profile '${user}', ${error} `);
  }
};
