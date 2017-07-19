import React from 'react';
import {Map, MarkerGroup} from 'react-d3-map';


class FullMap extends React.Component {
    constructor(props){
        super(props);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        // set your zoom scale
        this.scale = 1200 * 5;
        // min and max of your zoom scale
        this.scaleExtent = [1 << 30, 1 << 1];
        // set your center point
        this.center = [-43.228019, -22.861636];

        this.data = {
            "type": "Feature",
            "properties": {
              "text": "this is a Point!!!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [122, 23.5]
            }
        };
    }

    render(){
        // set your popupContent
        let popupContent = (d) => (d.properties.text);
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute'}}>
                <Map
                    height={this.height}
                    width={this.width}
                    scale={this.scale}
                    scaleExtent={this.scaleExtent}
                    center={this.center}>
                        <MarkerGroup
                            key= {"polygon-test"}
                            data= {this.data}
                            popupContent= {popupContent}
                            markerClass= {"your-marker-css-class"}/>
                </Map>
            </div>
        );
    }
}

export default FullMap;