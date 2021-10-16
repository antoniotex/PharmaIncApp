import React from 'react'
import { Container, Filter, Input, InputWrapper } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants/theme'
import { useDispatch } from 'react-redux';
import { toggleFilterModal } from '../../store/filter.store';

interface Props {
    onChangeText: any;
    value: string;
}

const PatientSearch: React.FC<Props> = ({ onChangeText, value }) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <InputWrapper>
                <Input
                    placeholder="Searching"
                    placeholderTextColor={COLORS.secondaryBlue}
                    value={value}
                    onChangeText={onChangeText}
                />
                <Icon name="account-search" size={30} color={COLORS.secondaryOrange} />
            </InputWrapper>
            <Filter onPress={ () => dispatch(toggleFilterModal(true))}>
                <Icon name="filter" size={30} color={COLORS.secondaryOrange} />
            </Filter>
        </Container>
    )
}

export default PatientSearch
