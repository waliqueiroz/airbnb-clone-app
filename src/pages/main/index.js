import React from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import {
    Container,
    AnnotationContainer,
    AnnotationText
} from './styles';

export default class Main extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        locations: [],
    }

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
                >
                    {this.renderLocations()}
                </MapboxGL.MapView>
            </Container>
        );
    }
}