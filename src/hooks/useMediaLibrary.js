import { useEffect, useState } from "react";
import { fetchPhotos } from "../utils/fetchPhotos";

export const useMediaLibrary = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      let _photos = [];
      let after = "";
      let _hasNextPage = true;

      for (let index = 0; _hasNextPage === true; index++) {
        const { hasNextPage, assets } = await fetchPhotos({ after });

        if (hasNextPage) {
          after = assets[assets.length - 1].id;
        }
        _photos.push(assets);
        _hasNextPage = hasNextPage;
      }

      setPhotos(_photos.flat());
    })();
  }, []);

  return {
    photos,
  };
};
