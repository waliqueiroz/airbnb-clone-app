import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignitems: center;
  justifycontent: center;
  backgroundcolor: #f5f5f5;
`;

const Logo = styled.Image`
  height: 30%;
  marginbottom: 40px;
`;

const SuccessMessage = styled.Text`
  textalign: center;
  color: #08a092;
  fontsize: 16px;
  marginbottom: 15px;
  marginhorizontal: 20px;
`;

const Input = styled.TextInput`
  paddinghorizontal: 20px;
  paddingvertical: 15px;
  borderradius: 5px;
  backgroundcolor: #fff;
  alignself: stretch;
  marginbottom: 15px;
  marginhorizontal: 20px;
  fontsize: 16px;
`;

const ErrorMessage = styled.Text`
  textalign: center;
  color: #ce2029;
  fontsize: 16px;
  marginbottom: 15px;
  marginhorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderradius: 5px;
  backgroundcolor: #fc6663;
  alignself: stretch;
  margin: 15px;
  marginhorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontweight: bold;
  fontsize: 16px;
  textalign: center;
`;

const SignInLink = styled.TouchableHighlight`
  padding: 10px;
  margintop: 20px;
`;

const SignInLinkText = styled.Text`
  color: #999;
  fontweight: bold;
  fontsize: 16px;
  textalign: center;
`;

export {Container, Logo, SuccessMessage, Input, ErrorMessage, Button, ButtonText, SignInLink, SignInLinkText};
