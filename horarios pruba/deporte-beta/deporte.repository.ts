import { horario_boxeo, horario_boxeo_noche} from '../horarios/horarios.repository.js'
import { Repository } from '../shared/repository.js'
import { Deporte } from './deporte.entity.js';
import { db } from '../shared/db/conn.js'
import { ObjectId } from 'mongodb'

const deportes = db.collection<Deporte>('deportes')

<<<<<<< HEAD
export const deportes = [
    new Deporte(
      " Boxeo",
      20,
      [horario_boxeo, horario_boxeo_noche],
      8500,
      'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
  ];
  
=======
export class DeporteRepository implements Repository<Deporte> {
  public async findAll(): Promise<Deporte[] | undefined> {
    return await deportes.find().toArray()
  }
>>>>>>> 8090e6bc89b6f3daf56b2373af859596670ec19a

  public async findOne(item: { id: string }): Promise<Deporte | undefined> {
    const _id = new ObjectId(item.id)
    return (await deportes.findOne({ _id })) || undefined
  }

  public async add(item: Deporte): Promise<Deporte | undefined> {
    item._id = (await deportes.insertOne(item)).insertedId 
    return item
  }

  public async update(id: string, item: Deporte): Promise<Deporte | undefined> {
    const _id = new ObjectId(id)
    return (await deportes.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined
  }

  public async delete(item: { id: string }): Promise<Deporte | undefined> {
    const _id = new ObjectId(item.id)
    return (await deportes.findOneAndDelete({ _id })) || undefined
  }
}