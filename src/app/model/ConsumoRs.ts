import { ComponenteRS } from "./ComponenteRS";

export interface ConsumoRs {
  id:string;
  mercadoria:string;
  mesa:string;
  componentes:Array<ComponenteRS>;
  adicionais:Array<ComponenteRS>;
}
