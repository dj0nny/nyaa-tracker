import axios from 'axios';

import type { ITorrentResponse, ITorrent } from '@/interfaces';

const getNyaaFeed = async (): Promise<ITorrent[]> => {
  const { data } = await axios.get<ITorrentResponse>(
    'https://nyaa-api-proxy-production.up.railway.app/nyaa/feed'
  );

  return data.items;
};

export default getNyaaFeed;
