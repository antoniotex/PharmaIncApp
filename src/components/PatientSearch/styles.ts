import { COLORS } from './../../constants/theme';
import React from "react";
import styled from "styled-components/native";
import { Platform } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const InputWrapper = styled.View`
    flex: 1;
    border: 1px solid ${COLORS.secondaryBlue};
    flex-direction: row;
    border-radius: 8px;
    padding: ${Platform.OS == 'ios' ? '10px' : '0px 10px'};
    margin: 20px 0px;
    align-items: center;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 18px;
    color: ${COLORS.secondaryOrange};
`;

export const Filter = styled.TouchableOpacity`
    padding: 10px;
`;


