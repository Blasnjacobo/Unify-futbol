import React, { useState } from 'react'
import Header from '../Home/Header'
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  Select,
  MenuItem,
  Avatar
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleAlt, faCarrot, faGlobe, faCouch, faMusic, faHeart, faDumbbell, faPaintBrush, faTheaterMasks, faCode, faLaptop, faTv, faDice, faBook, faGlasses, faBriefcase, faCamera, faPalette, faCity } from '@fortawesome/free-solid-svg-icons'

const equipos = [
  { nombre: 'Blas FC', icono: faCoffee },
  { nombre: 'MAYCO FC', icono: faAppleAlt },
  { nombre: 'ROSALLY FC', icono: faCarrot },
  { nombre: 'SANDRA FC', icono: faGlobe },
  { nombre: 'MIGUEL FC', icono: faCouch },
  { nombre: 'ALEXA FC', icono: faMusic },
  { nombre: 'CRISTAL FC', icono: faHeart },
  { nombre: 'ALEX FC', icono: faDumbbell },
  { nombre: 'NUNEZ FC', icono: faPaintBrush },
  { nombre: 'JACOBO FC', icono: faTheaterMasks },
  { nombre: 'RICARDO FC', icono: faCode },
  { nombre: 'DULCES FC', icono: faLaptop },
  { nombre: 'PELICANOS FC', icono: faTv },
  { nombre: 'PANTALONES FC', icono: faDice },
  { nombre: 'LIBRETAS FC', icono: faBook },
  { nombre: 'COMPUTADORA FC', icono: faGlasses },
  { nombre: 'CELULAR FC', icono: faBriefcase },
  { nombre: 'MOUSE FC', icono: faCamera },
  { nombre: 'MONITOR FC', icono: faPalette },
  { nombre: 'REACT FC', icono: faCity }
]

const CalendarioJuegos = () => {
  const [selectedJornada, setSelectedJornada] = useState(1) // Jornada por defecto: 1

  // Generar los enfrentamientos para todas las jornadas
  const generarEnfrentamientos = () => {
    // Lógica para generar los enfrentamientos, evitando repeticiones
    const numEquipos = 20
    const enfrentamientos = []

    const fechaInicio = new Date('2024-01-13') // Fecha de inicio del torneo
    const diasPorJornada = 7

    for (let jornada = 1; jornada <= 19; jornada++) {
      const enfrentamientosJornada = []
      const equiposUsados = new Set()

      const fechaJornada = new Date(fechaInicio.getTime())
      fechaJornada.setDate(fechaInicio.getDate() + ((jornada - 1) * diasPorJornada))

      // Distribuir los partidos en viernes, sábado y domingo
      const viernes = []
      const sabado = []
      const domingo = []

      for (let partido = 1; partido <= 10; partido++) {
        let equipoLocal = Math.floor(Math.random() * numEquipos)
        while (equiposUsados.has(equipoLocal)) {
          equipoLocal = Math.floor(Math.random() * numEquipos)
        }

        let equipoVisitante = Math.floor(Math.random() * numEquipos)
        while (equiposUsados.has(equipoVisitante) || equipoVisitante === equipoLocal) {
          equipoVisitante = Math.floor(Math.random() * numEquipos)
        }

        equiposUsados.add(equipoLocal)
        equiposUsados.add(equipoVisitante)

        const horario = Math.floor(Math.random() * 4) + 7 // Hora random entre 7 y 10

        // Distribuir partidos en viernes, sábado y domingo
        if (partido <= 2) {
          viernes.push({
            equipoLocal: equipos[equipoLocal],
            equipoVisitante: equipos[equipoVisitante],
            fecha: new Date(fechaJornada.getTime()),
            horario: `${horario}:00 PM`
          })
        } else if (partido <= 6) {
          sabado.push({
            equipoLocal: equipos[equipoLocal],
            equipoVisitante: equipos[equipoVisitante],
            fecha: new Date(fechaJornada.getTime() + (24 * 60 * 60 * 1000)),
            horario: `${horario}:00 PM`
          })
        } else {
          domingo.push({
            equipoLocal: equipos[equipoLocal],
            equipoVisitante: equipos[equipoVisitante],
            fecha: new Date(fechaJornada.getTime() + (48 * 60 * 60 * 1000)),
            horario: `${horario}:00 PM`
          })
        }
      }
      enfrentamientosJornada.push(...viernes, ...sabado, ...domingo)
      enfrentamientos.push(enfrentamientosJornada)
    }

    return enfrentamientos
  }

  // Obtener los enfrentamientos de la jornada seleccionada
  const enfrentamientosPorJornada = generarEnfrentamientos()
  const enfrentamientosJornadaSeleccionada = enfrentamientosPorJornada[selectedJornada - 1]

  // Manejar cambio de jornada en el selector
  const handleJornadaChange = (event) => {
    setSelectedJornada(event.target.value)
  }

  // Generar opciones para el selector de jornadas
  const opcionesJornadas = enfrentamientosPorJornada.map((_, index) => (
    <MenuItem key={index + 1} value={index + 1}>{`Jornada ${index + 1}`}</MenuItem>
  ))

  return (
    <div>
      <Header />
      <Container style={{ paddingTop: '20px' }}>
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <Select
            value={selectedJornada}
            onChange={handleJornadaChange}
            MenuProps={{ getContentAnchorEl: null, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } }}
          >
            {opcionesJornadas}
          </Select>
        </FormControl>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Horario</TableCell>
                <TableCell>Equipo Local</TableCell>
                <TableCell />
                <TableCell>Equipo Visitante</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enfrentamientosJornadaSeleccionada.map((enfrentamiento, index) => (
                <TableRow key={index}>
                  <TableCell>{enfrentamiento.fecha.toLocaleDateString('es-ES')}</TableCell>
                  <TableCell>{enfrentamiento.horario}</TableCell>
                  <TableCell>
                    <Avatar style={{ fontSize: '1em', width: '1em', height: '1em', marginRight: '5px', backgroundColor: 'blue', color: 'white' }}>
                      <FontAwesomeIcon icon={enfrentamiento.equipoLocal.icono} />
                    </Avatar>
                    {enfrentamiento.equipoLocal.nombre}
                  </TableCell>
                  <TableCell>VS</TableCell>
                  <TableCell>
                    <Avatar style={{ fontSize: '1em', width: '1em', height: '1em', marginRight: '5px', backgroundColor: 'red', color: 'white' }}>
                      <FontAwesomeIcon icon={enfrentamiento.equipoVisitante.icono} />
                    </Avatar>
                    {enfrentamiento.equipoVisitante.nombre}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default CalendarioJuegos
