import { COLORS } from '../../constants/theme';
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
    padding: 10px;
    margin-top: 40px;
    z-index: -1;
`;

export const ContentItem = styled.View`
    background-color: ${COLORS.secondaryBlue};
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    z-index: -1;
`;

export const ItemsPerRequest = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TitleText = styled.Text`
    color: ${COLORS.secondaryOrange};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
`;

export const ItemsPerRequestText = styled.Text`
    color: ${COLORS.secondaryOrange};
    font-weight: bold;
    font-size: 25px;
    margin-right: 10px;
`;

export const Gender = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const GenderOption = styled.TouchableOpacity`
    border: 1px solid ${COLORS.secondaryOrange};
    border-radius: 20px;
    padding: 10px;
    /* background-color: ${COLORS.primaryOrange}; */
`;

export const GenderOptionText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: ${COLORS.secondaryOrange};
`;

export const Nationality = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const NationalityScroller = styled.ScrollView`
    max-height: 400px;
`;

export const NationalityOption = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: 1px solid ${COLORS.secondaryOrange};
    border-radius: 20px;
    padding: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    justify-content: space-between;
`;

export const Flag = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`;

export const CountryName = styled(GenderOptionText)`
`;



