import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatientCard from '../../components/PatientCard'
import PatientModal from '../../components/PatientModal'
import { RootState } from '../../store'
import { getPatients } from '../../store/patient.store'
import { Container } from './styles'

const Home = () => {
    const dispach = useDispatch()

    useEffect(() => {
        dispach(getPatients())
    }, [dispach])

    const patient = useSelector((state: RootState) => state.patient)

    return (
        <Container>
            { patient.list.map(patient => (
                <PatientCard key={patient.login.uuid} patient={patient} />
            )) }
            <PatientModal />
        </Container>
    )
}

export default Home
