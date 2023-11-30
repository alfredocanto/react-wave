import { Lista } from "../components/Lista";

import { useApiContent } from "../hooks/useApiContent";

export const MetodosLista = () => {
  const { content, keys } = useApiContent(
    "http://localhost:5001/metodos_pago/lista/json"
  );

  return (
    <Lista
      pagename="Metodos"
      content={content}
      columns={keys}
      contentKey="id"
    />
  );
};
