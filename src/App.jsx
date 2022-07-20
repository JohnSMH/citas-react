import {useState,useEffect} from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

const[pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
const[paciente,setPaciente] = useState({})


useEffect(() => {
  localStorage.setItem('pacientes',JSON.stringify(pacientes))
},[pacientes])

const eliminarPaciente = (id) => {
  console.log('Eliminando paciente ', id)
  const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id)
  setPacientes(pacientesActualizados)
  setPaciente({})
}
  
  return (
    <div className="container mx-auto ml-10 mt-20">
      <Header />
      <div className="mt-20 md:flex">
      <Formulario 
        setPacientes = {setPacientes}
        pacientes = {pacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
      />
      <ListadoPacientes
      setPaciente = {setPaciente}
      pacientes = {pacientes}
      eliminarPaciente = {eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
