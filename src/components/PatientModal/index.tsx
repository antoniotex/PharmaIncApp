import React from 'react'
import { CloseButton, Container, Content, ContentBody, ContentHeader, ContentWrapper, IconWrapper, PatientContact, PatientContactText, PatientImage, PatientInfo, PatientInfoText, PatientName } from './styles'
import moment from 'moment'
import { Modal} from 'react-native'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { togglePatientModal } from '../../store/patient.store' 
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme'

const PatientModal: React.FC = () => {
    const dispach = useDispatch()
    const { showModal, currentPatient } = useSelector((state: RootState) => state.patient)
    
    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    dispach(togglePatientModal(false))
                }}>
                <ContentWrapper>
                    <Content>
                        <ContentHeader>
                            <CloseButton onPress={() => dispach(togglePatientModal(false))}>
                                <Icon name="close" size={30} color={COLORS.primaryOrange} />
                            </CloseButton>
                        </ContentHeader>
                        <ContentBody>
                            <PatientImage source={{ uri: currentPatient?.picture.large }} />
                            <PatientName>{ `${currentPatient?.name.title} ${currentPatient?.name.first} ${currentPatient?.name.last}` }</PatientName>
                            <PatientInfo>
                                <PatientInfoText>{ moment(currentPatient?.dob.date).format('DD/MM/YYYY') } - </PatientInfoText>
                                <PatientInfoText>{ currentPatient ? currentPatient?.gender.charAt(0).toUpperCase() + currentPatient?.gender.slice(1) : '' } - </PatientInfoText>
                                <PatientInfoText>{ currentPatient?.nat }</PatientInfoText>
                            </PatientInfo>
                            <PatientContact>
                                <IconWrapper>
                                    <Icon name="map-marker" size={50} color={COLORS.primaryOrange} />
                                </IconWrapper>
                                <PatientContactText numberOfLines={3}>
                                    { `${currentPatient?.location.street.name}, ${currentPatient?.location.street.number} - ${currentPatient?.location.city}, ${currentPatient?.location.state} - ${currentPatient?.location.country}` }
                                </PatientContactText>
                            </PatientContact>
                            <PatientContact>
                                <IconWrapper>
                                    <Icon name="at" size={50} color={COLORS.primaryOrange} />
                                </IconWrapper>
                                <PatientContactText>{ currentPatient?.email }</PatientContactText>
                            </PatientContact>
                            <PatientContact>
                                <IconWrapper>
                                    <Icon name="phone" size={50} color={COLORS.primaryOrange} />
                                </IconWrapper>
                                <PatientContactText>{ currentPatient?.phone }</PatientContactText>
                            </PatientContact>
                            <PatientContact>
                                <IconWrapper>
                                    <Icon name="mobile" size={50} color={COLORS.primaryOrange} />
                                </IconWrapper>
                                <PatientContactText>{ currentPatient?.cell }</PatientContactText>
                            </PatientContact>
                            <PatientContact>
                                <IconWrapper>
                                    <Icon name="id-card" size={40} color={COLORS.primaryOrange} />
                                </IconWrapper>
                                <PatientContactText>
                                    {currentPatient?.id.name ? `(${currentPatient?.id.name}) ${currentPatient?.id.value}` : 'Was not informed'}
                                </PatientContactText>
                            </PatientContact>
                        </ContentBody>
                    </Content>
                </ContentWrapper>
            </Modal>
        </Container>
    )
}

export default PatientModal
