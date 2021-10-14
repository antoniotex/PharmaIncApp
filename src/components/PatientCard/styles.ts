import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 16px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #fff;
`;

export const Picture = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px;
    margin-right: 10px;
`;

export const Info = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const InfoName = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const InfoFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoGender = styled.Text`
    font-size: 18px;
`;

export const InfoDob = styled(InfoGender)``;


