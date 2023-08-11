import { VideoDetail, VideoList } from '../../views';

type routersType = {
  path: string;
  element: JSX.Element;
};

export const router: Array<routersType> = [
  {
    path: '/',
    element: <VideoList />,
  },
  {
    path: '/detail-video/:videoId',
    element: <VideoDetail />,
  },
];
