import React from 'react'
import { Text } from 'react-native'
import { Container, Info, InfoDob, InfoFooter, InfoGender, InfoName, Picture } from './styles'

interface PatientCard {
    id: number;
    name: string;
    gender: string;
    dob: string;
    picture: string;
}

interface Props {
    patient: PatientCard
}

const PatientCard: React.FC<Props> = ({ patient }) => {
    return (
        <Container>
            <Picture source={{ uri: patient.picture }} />
            <Info>
                <InfoName>{ patient.name }</InfoName>
                <InfoFooter>
                    <InfoGender>{ patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1) }</InfoGender>
                    <InfoDob>{ patient.dob }</InfoDob>
                </InfoFooter>
            </Info>
        </Container>
    )
}

export default PatientCard
