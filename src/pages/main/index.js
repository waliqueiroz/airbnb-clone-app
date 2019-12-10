import React from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";

// import styles from './styles';

const Main = () => (<MapboxGL.MapView
    centerCoordinate={[-49.6446024, -27.2108001]}
    style={{ flex: 1 }}
    styleURL={MapboxGL.StyleURL.Dark}
/>);

export default Main;
