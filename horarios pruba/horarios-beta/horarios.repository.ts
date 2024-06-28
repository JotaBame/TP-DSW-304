import { RepositoryHorario } from '../shared/repository.js'
import { Horario } from './horario.entity.js';
import { Deporte } from '../deporte/deporte.entity.js';

export const horario_boxeo= new Horario("Martes", "10:30") // Pruebas
export const horario_boxeo_noche = new Horario("Jueves", "22:15") // pruebas

export const deportes = [
  new Deporte(
    " Boxeo",
    20,
    [horario_boxeo, horario_boxeo_noche],
    8500,
    'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
  ),
];


  export class HorarioRepository implements RepositoryHorario<Horario> {

    public findAll(): Horario[] | undefined {
      const lista_horarios:Horario[]=[]
      deportes.forEach(deporte => { lista_horarios.push(...deporte.horario)});

      return lista_horarios
    }
    //find all -- no creo que sea necesario para el sistema que estamos realizando



    public findOne(item: { id: string }): Horario[] | undefined {
      const deporte_id = deportes.find((deporte) => deporte.id === item.id)
      return deporte_id?.horario
    }


    public add( item: Horario, item2: {id:string} ): Horario | undefined {
      const deporte_id = deportes.find((deporte) => deporte.id === item2.id)
      deporte_id?.horario.push(item)

      return item
    }
  
    
    public update(item: Horario): Horario | undefined {
      const horarioIdx = horarios.findIndex((horario) => horario.id === item.id)
  
      if (horarioIdx !== -1) {
        horarios[horarioIdx] = { ...horarios[horarioIdx], ...item }
      }
      return horarios[horarioIdx]
    }
  
    public delete(item: { id: string }): Horario | undefined {
      const horarioIdx = horarios.findIndex((horario) => horario.id === item.id)
  
      if (horarioIdx !== -1) {
        const deletedHorarios = horarios[horarioIdx]
        horarios.splice(horarioIdx, 1)
        return deletedHorarios
      }
    }
  }