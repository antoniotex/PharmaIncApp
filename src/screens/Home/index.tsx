import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatientCard from '../../components/PatientCard'
import PatientModal from '../../components/PatientModal'
import PatientSearch from '../../components/PatientSearch'
import { RootState } from '../../store'
import { filterPatientList, getPatients } from '../../store/patient.store'
import { Container, NotFoundText } from './styles'

const Home = () => {
    const dispach = useDispatch()

    const [query, setQuery] = useState<string>('')
    
    useEffect(() => {
        dispach(filterPatientList(query))
    }, [query])

    useEffect(() => {
        dispach(getPatients())
    }, [dispach])

    const patient = useSelector((state: RootState) => state.patient)

    return (
        <Container>
            <PatientSearch value={query} onChangeText={(t: string) => setQuery(t)} />
            { !patient.list.length && <NotFoundText>{ `No results were found for "${query}"` }</NotFoundText> }
            { patient.list.map(patient => (
                <PatientCard key={patient.login.uuid} patient={patient} />
            )) }
            <PatientModal />
        </Container>
    )
}

export default Home
