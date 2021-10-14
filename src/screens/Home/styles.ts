import React from 'react';
import styled from "styled-components/native";
import { COLORS } from '../../constants';

export const Container = styled.ScrollView`
    height: 100%;
    padding: 0px 10px;
`;

export const NotFoundText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${COLORS.secondaryOrange};
`;
