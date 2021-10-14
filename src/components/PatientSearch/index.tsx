import React from 'react'
import { Container, Filter, Input, InputWrapper } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants/theme'


const PatientSearch: React.FC = () => {
    return (
        <Container>
            <InputWrapper>
                <Input
                    placeholder="Searching"
                    placeholderTextColor={COLORS.secondaryOrange}
                />
                <Icon name="account-search" size={30} color={COLORS.secondaryOrange} />
            </InputWrapper>
            <Filter>
                <Icon name="filter" size={30} color={COLORS.secondaryOrange} />
            </Filter>
        </Container>
    )
}

export default PatientSearch
