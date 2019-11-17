import React from 'react';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import './App.css';
import glmaps from 'glmaps';
const {
  TripLayer,
} = glmaps;

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function App() {
  const 
    controller = true, 
    baseMap = true;
  const mapboxToken = getParameterByName('MAPBOX_TOKEN');

  return (
    <section>
      {/* TitleBar */}
      {/* <div className="title-container">
        <h3>glmaps demo</h3>
        <p>Read codes in <a href="https://github.com/hijiangtao/glmaps">GitHub</a></p>
        <hr/>
        <code>
          git clone git@github.com:hijiangtao/glmaps.git<br/>
          cd glmaps<br/>
          npm install<br/>
          npm run start
        </code>
      </div> */}
      
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
        {/* New Menu */}
        {/* <div id="menu" /> */}

        {/* Map or Globe layer */}
        <DeckGL
          // width="100%" 
          // height="100%" 
          layers={[
            new TripLayer({
              // ...LAYER_CONFIGS[layer],
              data: {},
              configs: {},
              accessors: {},
            }),
          ]}
          viewState={{
            longitude: -74,
            latitude: 40.72,
            zoom: 13,
            pitch: 45,
            bearing: 0
          }}
          onViewStateChange={() => {}}
          controller={true}
        >
          {baseMap && mapboxToken && (
            <StaticMap
              onLoad={() => {}}
              // reuseMaps
              mapStyle="mapbox://styles/mapbox/dark-v9"
              preventStyleDiffing
              mapboxApiAccessToken={mapboxToken}
            />
          )}
        </DeckGL>
      </div>
    </section>
  );
}

export default App;
