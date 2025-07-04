import { ProviderAPIConfig } from '../types';

const BytezInferenceAPI: ProviderAPIConfig = {
  getBaseURL: () => 'https://api.bytez.com',
  headers: async ({ providerOptions }) => {
    const { apiKey } = providerOptions;

    const headers: Record<string, string> = {};

    headers['Authorization'] = `Key ${apiKey}`;

    return headers;
  },
  getEndpoint: ({ gatewayRequestBodyJSON: { version = 2, model } }) =>
    `/models/v${version}/${model}`,
};

export default BytezInferenceAPI;
