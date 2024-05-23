import { Request, Response, NextFunction } from 'express'
import { DeporteRepository } from './deporte.repository.js'
import { Deporte } from './deporte.entity.js'
 
const repository = new DeporteRepository()

function sanitizeDeporteInput(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedInput = {
      tipo: req.body.tipo,
      cupo: req.body.cupo,
      horario: req.body.horario,
      costo: req.body.costo,
    }
    //more checks here
  
    Object.keys(req.body.sanitizedInput).forEach((key) => {
      if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
      }
    })
    next()
  }
function findAll(req: Request, res: Response) {
  res.json({ data: repository.findAll() })
}

function findOne(req: Request, res: Response) {
  const id = req.params.id
  const deporte = repository.findOne({ id })
  if (!deporte) {
    return res.status(404).send({ message: 'No se encontró el deporte' })
  }
  res.json({ data: deporte })
}

function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput

  const deporteInput = new Deporte(
    input.tipo,
    input.cupo,
    input.horario,
    input.costo,
 
  )

  const deporte = repository.add(deporteInput)
  return res.status(201).send({ message: 'Deporte creado', data: deporte })
}

function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id
  const deporte = repository.update(req.body.sanitizedInput)

  if (!deporte) {
    return res.status(404).send({ message: 'Deporte no encontrado' })
  }

  return res.status(200).send({ message: 'Deportes actualizado exitosamente', data: deporte })
}

function remove(req: Request, res: Response) {
  const id = req.params.id
  const deporte = repository.delete({ id })

  if (!deporte) {
    res.status(404).send({ message: 'Deporte no encontrado' })
  } else {
    res.status(200).send({ message: 'Deporte eliminado exitosamente' })
  }
}

export { sanitizeDeporteInput, findAll, findOne, add, update, remove }