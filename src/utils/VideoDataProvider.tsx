import { AxiosError } from 'axios';
import React from 'react';
import { getVideos } from '../api';
import VideoResponse from '../interfaces/videos/videos.interface';

type ContextState = {
  status: 'LOADING' | 'ERROR' | 'LOADED';
  videos: VideoResponse[];
};

const Context = React.createContext<ContextState | null>(null);

export const useDataProvider = (): ContextState => {
  const contextState = React.useContext(Context);
  if (contextState === null) {
    throw new Error('useItemData must be used within a ItemDataProvider tag');
  }
  return contextState;
};

export const VideoDataProvider: React.FC = (props) => {
  const [state, setState] = React.useState<ContextState>({
    status: 'LOADING',
    videos: [],
  });

  React.useEffect(() => {
    setState((s) => ({ ...s, status: 'LOADING' }));

    (async (): Promise<void> => {
      const response: VideoResponse[] | AxiosError | void = await getVideos();
      if (Array.isArray(response)) {
        setState({
          status: 'LOADED',
          videos: response,
        });
      } else {
        setState((s) => ({ ...s, status: 'ERROR' }));
      }
    })();
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
