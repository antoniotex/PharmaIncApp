import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatientCard from '../../components/PatientCard'
import PatientModal from '../../components/PatientModal'
import PatientSearch from '../../components/PatientSearch'
import FilterModal from '../../components/FilterModal'
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
        dispach(getPatients({gender: filter.gender, nationality: filter.nationality.join(), itemsPerRequest: filter.itemsPerRequest}))
    }, [dispach])

    const patient = useSelector((state: RootState) => state.patient)
    const { filter } = useSelector((state: RootState) => state.filter)

    const notFoundMessage: boolean = !patient.list.length && !!query

    return (
        <Container>
            <PatientSearch value={query} onChangeText={(t: string) => setQuery(t)} />
            { notFoundMessage && <NotFoundText>{ `No results were found for "${query}"` }</NotFoundText> }
            { patient.list.map(patient => (
                <PatientCard key={patient.login.uuid} patient={patient} />
            )) }
            <PatientModal />
            <FilterModal />
        </Container>
    )
}

export default Home
