import { useEffect, useState } from "react";
import { fetchData } from "../../services/getContent";

export const useApiContent = (url) => {
  const [content, setContent] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    fetchData(url).then((data) => {
      setContent(data);
      setKeys(Object.keys(data[0]));
      console.log(keys)
    });
  }, []);
  return { content, keys };
};
