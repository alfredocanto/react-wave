import { Lista } from "../components/Lista";

import { useApiContent } from "../hooks/useApiContent";

export const ProductosLista = () => {
  const { content, keys } = useApiContent(
    "http://localhost:5001/productos/lista/json"
  );

  return (
    <Lista
      pagename="Productos"
      content={content}
      columns={keys}
      contentKey="id"
    />
  );
};
