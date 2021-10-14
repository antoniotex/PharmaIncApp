import { COLORS } from './../../constants/theme';
import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const InputWrapper = styled.View`
    flex: 1;
    border: 1px solid ${COLORS.secondaryOrange};
    flex-direction: row;
    border-radius: 8px;
    padding: 8px;
    margin: 20px 0px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 18px;
    color: ${COLORS.primaryOrange};
`;

export const Filter = styled.TouchableOpacity`
    padding: 10px;
`;


