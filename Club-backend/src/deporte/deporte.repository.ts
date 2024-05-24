import { Repository } from '../shared/repository.js'
import { Deporte } from './deporte.entity.js';


export const deportes = [
    new Deporte(
      " ",
      0,
      " ",
      0,
      'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
  ];
  

  export class DeporteRepository implements Repository<Deporte> {
    public findAll(): Deporte[] | undefined {
      return deportes
    }
  
    public findOne(item: { id: string }): Deporte | undefined {
      return deportes.find((deporte) => deporte.id === item.id)
    }
  
    public add(item: Deporte): Deporte | undefined {
      deportes.push(item)
      return item
    }
  
    public update(item: Deporte): Deporte | undefined {
      const deporteIdx = deportes.findIndex((deporte) => deporte.id === item.id)
  
      if (deporteIdx !== -1) {
        deportes[deporteIdx] = { ...deportes[deporteIdx], ...item }
      }
      return deportes[deporteIdx]
    }
  
    public delete(item: { id: string }): Deporte | undefined {
      const deporteIdx = deportes.findIndex((deporte) => deporte.id === item.id)
  
      if (deporteIdx !== -1) {
        const deletedDeportes = deportes[deporteIdx]
        deportes.splice(deporteIdx, 1)
        return deletedDeportes
      }
    }
  }