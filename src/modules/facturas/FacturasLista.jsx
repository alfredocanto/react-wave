import { Lista } from "../components/Lista";

import { useApiContent } from "../hooks/useApiContent";

export const FacturasLista = () => {
  const { content, keys } = useApiContent(
    "http://localhost:5001/facturas/lista/json"
  );

  return (
    <Lista
      pagename="Facturas"
      content={content}
      columns={keys}
      contentKey="id"
      detalles= {true}
    />
  );
};
