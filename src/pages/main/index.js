import React, { Component } from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import {
    Container,
    AnnotationContainer,
    AnnotationText,
    NewButtonContainer,
    ButtonsWrapper,
    CancelButtonContainer,
    SelectButtonContainer,
    ButtonText,
    Marker,
} from './styles';

export default class Main extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        locations: [],
        newRealty: false,
        cameraModalOpened: false,
        dataModalOpened: false,
        realtyData: {
            location: {
                latitude: null,
                longitude: null,
            },
            name: '',
            price: '',
            address: '',
            images: [],
        },
    };

    renderLocations = () => (
        this.state.locations.map(location => (
            <MapboxGL.PointAnnotation
                id={location.id.toString()}
                coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
            >
                <AnnotationContainer>
                    <AnnotationText>{location.price}</AnnotationText>
                </AnnotationContainer>
                <MapboxGL.Callout title={location.title} />
            </MapboxGL.PointAnnotation>
        ))
    )

    async componentDidMount() {
        try {
            const response = await api.get('/properties', {
                params: {
                    latitude: -27.210768,
                    longitude: -49.644018,
                },
            });

            this.setState({ locations: response.data });
        } catch (err) {
            console.log(err);
        }
    }

    renderConditionalsButtons = () => (
        !this.state.newRealty ? (
            <NewButtonContainer onPress={this.handleNewRealtyPress}>
                <ButtonText>Novo Imóvel</ButtonText>
            </NewButtonContainer>
        ) : (
                <ButtonsWrapper>
                    <SelectButtonContainer onPress={this.handleGetPositionPress}>
                        <ButtonText>Selecionar localização</ButtonText>
                    </SelectButtonContainer>
                    <CancelButtonContainer onPress={this.handleNewRealtyPress}>
                        <ButtonText>Cancelar</ButtonText>
                    </CancelButtonContainer>
                </ButtonsWrapper>
            )
    )

    renderMarker = () => (
        this.state.newRealty &&
        !this.state.cameraModalOpened &&
        <Marker resizeMode="contain" source={require('../../images/marker.png')} />
    )

    handleGetPositionPress = async () => {
        try {
            const [longitude, latitude] = await this.map.getCenter();
            this.setState({
                cameraModalOpened: true,
                realtyData: {
                    ...this.state.realtyData,
                    location: {
                        latitude,
                        longitude,
                    },
                },
            });
        } catch (err) {
            console.tron.log(err);
        }
    }

    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <MapboxGL.MapView
                    centerCoordinate={[-49.6446024, -27.2108001]}
                    style={{ flex: 1 }}
                    styleURL={MapboxGL.StyleURL.Dark}
                    ref={map => {
                        this.map = map;
                    }}
                >
                    {this.renderLocations()}
                </MapboxGL.MapView>
                {this.renderConditionalsButtons()}
                {this.renderMarker()}
            </Container>
        );
    }
}