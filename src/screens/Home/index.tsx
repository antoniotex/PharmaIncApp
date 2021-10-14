import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import PatientCard from '../../components/PatientCard'
import { RootState } from '../../store'
import { Container } from './styles'

const Home = () => {
    const patient = useSelector((state: RootState) => state.patient)
    console.log(patient.list)
    return (
        <Container>
            { patient.list.map(patient => (
                <PatientCard key={patient.id} patient={patient} />
            )) }
        </Container>
    )
}

export default Home
