import React from 'react'
import { Container } from './styles'
import moment from 'moment'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { togglePatientModal } from '../../store/patient.store' 

const PatientModal: React.FC = () => {
    const dispach = useDispatch()
    const { showModal, currentPatient } = useSelector((state: RootState) => state.patient)
    
    return (
        <Container>
            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    dispach(togglePatientModal(false))
                }}
            >
                <View style={{ flex:1, justifyContent:'flex-end', backgroundColor:'rgba(0,0,0,.5)' }}>
                    <View style={{ backgroundColor:'#fff', height: '90%' }}>
                        <TouchableOpacity onPress={() => dispach(togglePatientModal(false))}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                        <Text>{ currentPatient?.gender }</Text>
                    </View>
                </View>
            </Modal>
        </Container>
    )
}

export default PatientModal
