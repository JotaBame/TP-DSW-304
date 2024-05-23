import { Repository }from "./shared/repository";
import { Deporte } from './deporte.entity.js';


export const deportes = [
    new Deporte(
      " ",
      0,
      " ",
      0
    ),
  ];
  

export class DeporteRepository implements Repository<Deporte> { 

    public findAll(): Deporte[] | undefined {
        return deportes
    }

    public findOne(item: { id: string; }): Deporte | undefined {
        return Deporte.find((deportes)  => Deporte.id === item.id)
    }

    public add(item: Deporte): Deporte | undefined {
        deportes.push(item)
        return item 
    }

    public  update(item: Deporte): Deporte | undefined {
        //FALTA SEGUIR
        
    }




}
