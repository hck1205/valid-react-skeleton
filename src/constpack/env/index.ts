type API_URL = {
    production: string;
    stage: string;
    development: string;
};

const API_INFO_URL: API_URL = {
    production: '',
    stage: '',
    development: 'https://pokeapi.co/api/v2/',
};

// Server Stage
type Stage = 'production' | 'stage' | 'development';
export const SERVER_STAGE = process.env.NODE_ENV as Stage;

// Server URL Info
export const API_BASE_URL: string = API_INFO_URL[SERVER_STAGE];
export const API_REQUEST_TIMEOUT: number = 20000;
export const OAUTH_BASIC_KEY = '';
