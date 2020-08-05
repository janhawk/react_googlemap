import React from 'react';
import GoogleMapReact from 'google-map-react';

const markerStyle = { backgroundColor: 'white', width: 40, textAlign: 'center', padding: 5};
const AnyReactComponent = ({ text }) => <div style={markerStyle}>{text}</div>;

class App extends React.Component {
  render() {
    return (
      <div style={{ width: 600, height: 600 }}>
        <div style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCB0hLXCk7-NHtoz1X7A12mqRFzOkK9qME" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={48.856037}
              lng={2.3899333}
              text="AGECA"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  center: {
    lat: 48.8588377,
    lng: 2.27702
  },
  zoom: 12
}

export default App;