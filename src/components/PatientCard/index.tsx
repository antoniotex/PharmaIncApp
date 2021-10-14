import React from 'react'
import { Container, Info, InfoDob, InfoFooter, InfoGender, InfoName, Picture } from './styles'
import moment from 'moment'
import { IPatientCard } from '../../interfaces/IPatientCard'
import { useDispatch } from 'react-redux'
import { togglePatientModal, updateCurrentPatient } from '../../store/patient.store'

interface Props {
    patient: IPatientCard
}

const PatientCard: React.FC<Props> = ({ patient }) => {
    const dispach = useDispatch()

    const openModal = () => {
        dispach(updateCurrentPatient(patient))
        dispach(togglePatientModal(true))
    }

    return (
        <Container onPress={openModal}>
            <Picture source={{ uri: patient.picture.thumbnail }} />
            <Info>
                <InfoName>{ `${patient.name.title} ${patient.name.first} ${patient.name.last}` }</InfoName>
                <InfoFooter>
                    <InfoGender>{ patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1) }</InfoGender>
                    <InfoDob>{ moment(patient.dob.date).format('DD/MM/YYYY') }</InfoDob>
                </InfoFooter>
            </Info>
        </Container>
    )
}

export default PatientCard
