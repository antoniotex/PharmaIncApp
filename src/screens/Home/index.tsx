import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Container } from './styles'

const Home = () => {
    const patient = useSelector((state: RootState) => state.patient)
    console.log(patient.list)
    return (
        <Container>
            <Text>Home works!</Text>
        </Container>
    )
}

export default Home
