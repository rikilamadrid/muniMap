import React from 'react';
import _ from 'lodash';
import { Map, LineGroup } from 'react-d3-map';

export default class Home extends React.Component {
    constructor() {
        super();
        this.mapWidth = 2000;
        this.mapHeight = 1800;
        this.mapScale = 1 << 22;
        this.mapScaleExtent = [1 << 20, 1 << 24];
        this.mapCenter = [-122.42, 37.76];
        this.state = {
            freewaysData: null
        };
    }

    componentDidMount() {
        fetch('/assets/sfmaps/freeways.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    freewaysData: data
                });
            });
    }

    render() {
        if(!this.state.freewaysData) {
            return(
                <div>Loading</div>
            );
        }

        return (
            <Map
                width= {this.mapWidth}
                height= {this.mapHeight}
                scale= {this.mapScale}
                scaleExtent = {this.mapScaleExtent}
                center= {this.mapCenter}
              >
                  <g>
                        <LineGroup
                            key= {"line-test"}
                            data= {this.state.freewaysData}
                            //popupContent= {popupContent}
                            // onClick= {onLineClick}
                            // onCloseClick= {onLineCloseClick}
                            // onMouseOver= {onLineMouseOver}
                            // onMouseOut= {onLineMouseOut}
                            meshClass= {"freeways"}
                        />
                  </g>
              </Map>
        )
    }
}
