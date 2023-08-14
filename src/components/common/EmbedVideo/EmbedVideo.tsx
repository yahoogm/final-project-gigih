type propsEmbedVideo = {
  videoId: string;
};

const EmbedVideo: React.FC<propsEmbedVideo> = ({ videoId }) => {
  return (
    <iframe
      width={'700vh'}
      height="500"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default EmbedVideo;
