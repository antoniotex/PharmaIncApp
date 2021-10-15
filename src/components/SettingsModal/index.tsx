import React, { useState } from 'react'
import { CloseButton, Container, Content, ContentHeader, ContentWrapper } from './styles'
import { Modal, Text} from 'react-native'
import Slider from '@react-native-community/slider';
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme'
import { toggleSettingModal } from '../../store/setting.store';

const SettingsModal: React.FC = () => {
    const dispach = useDispatch()
    const { showSettingsModal, itemsPerRequest } = useSelector((state: RootState) => state.setting)
    const [ qtd, setQtd ] = useState(25)
    
    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showSettingsModal}
                onRequestClose={() => {
                    dispach(toggleSettingModal(false))
                }}>
                <ContentWrapper>
                    <Content>
                        <ContentHeader>
                            <CloseButton onPress={() => dispach(toggleSettingModal(false))}>
                                <Icon name="close" size={30} color={COLORS.primaryOrange} />
                            </CloseButton>
                        </ContentHeader>
                        <Slider
                            step={5}
                            style={{width: 200, height: 40}}
                            value={itemsPerRequest}
                            onValueChange={(t) => setQtd(t)}
                            minimumValue={20}
                            maximumValue={50}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                        />
                    </Content>
                </ContentWrapper>
            </Modal>
        </Container>
    )
}

export default SettingsModal
