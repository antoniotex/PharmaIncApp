import React, { useState } from 'react'
import { CloseButton, Container, Content, ContentBody, ContentHeader, ContentItem, ContentWrapper, ItemsPerRequest, TitleText, ItemsPerRequestText } from './styles'
import { Modal } from 'react-native'
import Slider from '@react-native-community/slider';
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme'
import { toggleSettingModal, updateItemsPerRequest } from '../../store/setting.store';

const SettingsModal: React.FC = () => {
    const dispach = useDispatch()
    const { showSettingsModal, itemsPerRequest } = useSelector((state: RootState) => state.setting)
    
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
                        <ContentBody>
                            <ContentItem>
                                <TitleText>Items per Request</TitleText>
                                <ItemsPerRequest>
                                    <ItemsPerRequestText>{ itemsPerRequest }</ItemsPerRequestText>
                                    <Slider
                                        step={5}
                                        style={{flex:1, height: 40}}
                                        value={itemsPerRequest}
                                        onValueChange={(t) => dispach(updateItemsPerRequest(t))}
                                        minimumValue={20}
                                        maximumValue={50}
                                        minimumTrackTintColor={COLORS.primaryOrange}
                                        maximumTrackTintColor={COLORS.primaryCyan}
                                    />
                                </ItemsPerRequest>
                            </ContentItem>
                        </ContentBody>
                    </Content>
                </ContentWrapper>
            </Modal>
        </Container>
    )
}

export default SettingsModal
