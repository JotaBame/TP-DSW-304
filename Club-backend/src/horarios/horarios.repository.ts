import { Repository } from '../shared/repository.js'
import { Horario } from './horario.entity.js';
import { deportes } from '../deporte/deporte.repository.js';
import { ObjectId } from 'mongodb'
import { Deporte } from '../deporte/deporte.entity.js';

  
  export class HorarioRepository implements Repository<Horario> {


    public async findAll(): Promise<Deporte[] | undefined> {

      return await deportes.find({projection:{tipo:1 , horario:1, _id:0}}).toArray()
    }
 
 

    public async find(item: { id: string }): Promise<Deporte[] | undefined> {
      const _id = new ObjectId(item.id)
      return await  deportes.find({ _id }, { projection: { horario: 1, _id: 0 } }).toArray() || undefined
    }


    public async add( item: Horario, id: string): Promise<Deporte | undefined>{
      const deporteID = new ObjectId(id);
      let depoHorario = deporte.horario.push(Horario)
      
      return await deportes.horario.updateOne({deporteID} , {$set {item}})
    }
  
    
    public update(item: Horario): Promise< Horario | undefined > {
      const horarioIdx = horarios.findIndex((horario) => horario.id === item.id)
  
      if (horarioIdx !== -1) {
        horarios[horarioIdx] = { ...horarios[horarioIdx], ...item }
      }
      return horarios[horarioIdx]
    }
  
    public delete(item: { id: string }):Promise< Horario | undefined> {
      const horarioIdx = horarios.findIndex((horario) => horario.id === item.id)
  
      if (horarioIdx !== -1) {
        const deletedHorarios = horarios[horarioIdx]
        horarios.splice(horarioIdx, 1)
        return deletedHorarios
      }
    }
  }