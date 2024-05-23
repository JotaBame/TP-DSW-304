
import express, { NextFunction, Request, Response } from 'express'
import { deportes } from './deportes.js';
import { Deporte } from './deporte.entity.js';


 
const app = express()
app.use(express.json())




//ESTA EN LOS VIDEOS

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

app.get('/api/deportes', (req, res) => {
  res.json({ data: deportes })
})

app.get('/api/deportes/:id', (req, res) => { // capaz cada deporte necesita un id?
  const Deporte = deportes.find((Deporte) => Deporte.id === req.params.id) // EN VEZ DE TIPO era ID, capaz necesitemos id?
  if (!Deporte) {
    return res.status(404).send({ message: 'Deporte not found' })
  }
  res.json({ data: Deporte })
})

//app.get('/api/deportes/:tipo', (req, res) => { // capaz cada deporte necesita un id?
//  const Deporte = deportes.find((Deporte) => Deporte.tipo === req.params.tipo) // EN VEZ DE TIPO era ID, capaz necesitemos id?
//  if (!Deporte) {
//    return res.status(404).send({ message: 'Deporte not found' })
//  }
//  res.json({ data: Deporte })
//})

app.post('/api/deportes', sanitizeDeporteInput, (req, res) => {
  const input = req.body.sanitizedInput

  const deporte = new Deporte(
    
    input.tipo,
    input.cupo,
    input.horario,
    input.costo,

  )

  deportes.push(deporte)
  return res.status(201).send({ message: 'Deporte created', data: Deporte })
})

//LO MODIFIQUÉ PARA BUSCAR EN EL ARRAY DE DEPORTES QUE BUSQUEMOS ESE ID

app.put('/api/deportes/:id', sanitizeDeporteInput, (req, res) => {
  const deporteId = req.params.id; // Obtener el ID del deporte de los parámetros de la solicitud

  // Buscar el índice del deporte en el array basado en su ID
  const DeporteIdx = deportes.findIndex((Deporte) => Deporte.id === deporteId);

  if (DeporteIdx === -1) {
    return res.status(404).send({ message: 'Deporte not found' });
  }

  // Actualizar el deporte con los datos proporcionados en el cuerpo de la solicitud
  deportes[DeporteIdx] = { ...deportes[DeporteIdx], ...req.body.sanitizedInput };

  return res.status(200).send({ message: 'Deporte updated successfully', data: deportes[DeporteIdx] });
});

//app.put('/api/deportes/:id', sanitizeDeporteInput, (req, res) => {
  //const DeporteIdx = deportes.findIndex((Deporte) => Deporte.tipo === req.params.tipo)

  //if (DeporteIdx === -1) {
    //return res.status(404).send({ message: 'Deporte not found' })
  //}

  //deportes[DeporteIdx] = { ...deportes[DeporteIdx], ...req.body.sanitizedInput }

  //return res.status(200).send({ message: 'Deporte updated successfully', data: deportes[DeporteIdx] })
//})

app.patch('/api/deportes/:id', sanitizeDeporteInput, (req, res) => {
  const DeporteIdx = deportes.findIndex((Deporte) => Deporte.id === req.params.id)

  if (DeporteIdx === -1) {
    return res.status(404).send({ message: 'Deporte not found' })
  }

  Object.assign(deportes[DeporteIdx], req.body.sanitizedInput)

  return res.status(200).send({ message: 'Deporte updated successfully', data: deportes[DeporteIdx] })
})

app.delete('/api/deportes/:id', (req, res) => {
  const DeporteIdx = deportes.findIndex((Deporte) => Deporte.id === req.params.id)

  if (DeporteIdx === -1) {
    res.status(404).send({ message: 'Deporte not found' })
  } else {
    deportes.splice(DeporteIdx, 1)
    res.status(200).send({ message: 'Deporte deleted successfully' })
  }
})

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000//')
})


