import { COLORS } from './../../constants/theme';
import React from "react";
import styled from "styled-components/native";

export const Container = styled.View``;

export const ContentWrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
    background-color: rgba(0,0,0,.8);
`;

export const Content = styled.View`
    background-color: ${COLORS.primaryBlue};
    height: 82%;
`;

export const ContentHeader = styled.View``;

export const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 5px;
`;

export const ContentBody = styled.View`
    align-items: center;
    z-index: -1;
    margin-top: -90px;
    padding: 5px;
`;

export const PatientImage = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    border: 5px solid ${COLORS.primaryOrange};
`;

export const PatientName = styled.Text`
    color: ${COLORS.secondaryOrange};
    font-weight: bold;
    font-size: 40px;
    margin: 10px 0px;
`;

export const PatientInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const PatientInfoText = styled.Text`
    color: ${COLORS.secondaryOrange};
    font-size: 20px;
    font-weight: bold;
`;

export const PatientContact = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  `;
export const PatientContactText = styled.Text`
  flex-wrap: wrap;
  flex: 1;
  color: ${COLORS.secondaryOrange};
  font-size: 20px;
`;

export const IconWrapper = styled.View`
    width: 50px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const PatientInfoFlag = styled.Image`
    width: 30px;
    height: 25px;
    margin-left: 5px;
`;


