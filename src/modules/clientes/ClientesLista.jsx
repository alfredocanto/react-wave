import { Lista } from "../components/Lista";

import { useApiContent } from "../hooks/useApiContent";

export const ClientesLista = () => {
  const { content, keys } = useApiContent(
    "http://localhost:5001/clientes/lista/json"
  );

  return (
    <Lista
      pagename="Clientes"
      content={content}
      columns={keys}
      contentKey="id"
    />
  );
};
