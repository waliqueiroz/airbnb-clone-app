import React from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken('pk.eyJ1Ijoid2FsaXF1ZWlyb3oiLCJhIjoiY2szeXN2dzZ4MDJvaTNmb2tzM2F1eGttdCJ9.Cp-z_1TlIIoRfTC-V3jtpw');

import Routes from './routes';

const App = () => <Routes />;

export default App;
