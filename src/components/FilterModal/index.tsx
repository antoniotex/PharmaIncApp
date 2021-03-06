import React from 'react'
import { CloseButton, Container, Content, ContentBody, ContentHeader, ContentItem, ContentWrapper, ItemsPerRequest, TitleText, ItemsPerRequestText, Gender, GenderOption, GenderOptionText, Nationality, NationalityOption, Flag, CountryName, NationalityScroller } from './styles'
import { Modal, Platform } from 'react-native'
import Slider from '@react-native-community/slider';
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme'
import { GenderEnum, toggleFilterModal, updateGender, updateItemsPerRequest, countries, addNationality, removeNationality } from '../../store/filter.store';
import { getPatients, resetPage } from '../../store/patient.store';
// @ts-ignore
import { FLAG_CDN_URL } from 'react-native-dotenv'

const FiltersModal: React.FC = () => {
    const dispach = useDispatch()
    const { showFilterModal, filter } = useSelector((state: RootState) => state.filter)

    const search = () => {
        const query = {
            gender: filter.gender,
            itemsPerRequest: filter.itemsPerRequest,
            nationality: filter.nationality.join()
        }
        dispach(resetPage())
        dispach(getPatients(query))
    }
    
    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showFilterModal}
                onDismiss={search}
                onRequestClose={() => {
                    dispach(toggleFilterModal(false))
                }}>
                <ContentWrapper>
                    <Content>
                        <ContentHeader>
                            <CloseButton onPress={() => {
                                if(Platform.OS == 'android'){
                                    search()
                                }
                                dispach(toggleFilterModal(false))
                            }}>
                                <Icon name="close" size={30} color={COLORS.primaryOrange} />
                            </CloseButton>
                        </ContentHeader>
                        <ContentBody>
                            <ContentItem>
                                <TitleText>Items per Request</TitleText>
                                <ItemsPerRequest>
                                    <ItemsPerRequestText>{ filter.itemsPerRequest }</ItemsPerRequestText>
                                    <Slider
                                        step={5}
                                        style={{flex:1, height: 40}}
                                        value={filter.itemsPerRequest}
                                        onValueChange={(t) => dispach(updateItemsPerRequest(t))}
                                        minimumValue={20}
                                        maximumValue={50}
                                        minimumTrackTintColor={COLORS.primaryOrange}
                                        maximumTrackTintColor={COLORS.primaryCyan}
                                    />
                                </ItemsPerRequest>
                            </ContentItem>
                            <ContentItem>
                                <TitleText>Gender</TitleText>
                                <Gender>
                                    <GenderOption onPress={() => dispach(updateGender(GenderEnum.female))} style={{
                                        backgroundColor: filter.gender == GenderEnum.female ? COLORS.primaryOrange : 'transparent'
                                    }}>
                                        <GenderOptionText>Female</GenderOptionText>
                                    </GenderOption>
                                    <GenderOption onPress={() => dispach(updateGender(GenderEnum.male))} style={{
                                        backgroundColor: filter.gender == GenderEnum.male ? COLORS.primaryOrange : 'transparent'
                                    }}>
                                        <GenderOptionText>Male</GenderOptionText>
                                    </GenderOption>
                                    <GenderOption onPress={() => dispach(updateGender(GenderEnum.other))} style={{
                                        backgroundColor: filter.gender == GenderEnum.other ? COLORS.primaryOrange : 'transparent'
                                    }}>
                                        <GenderOptionText>Other</GenderOptionText>
                                    </GenderOption>
                                </Gender>
                            </ContentItem>
                            <ContentItem>
                                <TitleText>Nationality</TitleText>
                                <NationalityScroller>
                                    <Nationality>

                                        { countries.map((country, i) => (
                                            <NationalityOption 
                                              key={i} 
                                              onPress={() => {
                                                  if(filter.nationality.includes(country.abbreviation)){
                                                    dispach(removeNationality(country.abbreviation))
                                                  }else{
                                                    dispach(addNationality(country.abbreviation))
                                                  }
                                              }}
                                              style={{
                                                  backgroundColor: filter.nationality.includes(country.abbreviation) ? COLORS.primaryOrange : 'transparent'
                                              }}  
                                            >
                                                <Flag source={{ uri: `${FLAG_CDN_URL}/28x21/${country.abbreviation.toLowerCase()}.png`}} />
                                                <CountryName>{ country.name }</CountryName>
                                            </NationalityOption>
                                        )) }
                                    </Nationality>
                                </NationalityScroller>
                            </ContentItem>
                        </ContentBody>
                    </Content>
                </ContentWrapper>
            </Modal>
        </Container>
    )
}

export default FiltersModal
