import crypto from 'node:crypto'

export class Deporte {
  static id: string;
  constructor(
    public tipo: string,
    public cupo: number,
    public horario: string,
    public costo: number,
    public id = crypto.randomUUID()
  ) {}
}
