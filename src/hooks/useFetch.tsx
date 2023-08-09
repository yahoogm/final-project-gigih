type data = {
  image_thumbnail: string;
  video_id: string;
};

type responseData = {
  data: Array<data>;
};

export const useFetch = async (url: string) => {
  try {
    const req = await fetch(url);
    const res = await req.json();

    const data: responseData = res.data;

    return data;
  } catch (error) {
    return (error as Error).message;
  }
};
