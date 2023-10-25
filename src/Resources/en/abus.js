import React, {Component} from "react";
import './css/abus.css';
import man from '../img/man.jpg';


export default class Abus extends Component {
    constructor(props) {
        super(props);
        this.map = null;
      }
    
      componentDidMount() {
        this.initMap();
      }
    
      initMap() {
        this.map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 41.6962348843876, lng: 44.37065932749681 },
          zoom: 17,
          mapTypeId: window.google.maps.MapTypeId.SATELLITE,
          label: {
            text: "Manglisi Inn",
            color: "white", // Text color
            fontWeight: "bold", // Text font-weight
          },
        });
        const marker = new window.google.maps.Marker({
            position: { lat: 41.6962348843876, lng:  44.37065932749681, },
            map: this.map,
            title: "Manglisi Inn",
          });
      }
    render(){
        return(
            <div className="abus" id="abus">
            <h1>About Our Project</h1>
            <div className="abpro">
                <div className="about">
                    <img src={man} alt="manglisi inn" />
                    <p>  The current project of Manglisi Inn is being implemented near the main recreation park of Manglisi. The recreation area of ​​the project completely merges with the recreation park. <br></br>
                    The area, on which construction works are underway, is 2100 square meters. The area of ​​the building occupies 750 square meters, while the rest of the area is defined as a recreational zone, which means children's entertainment and sports fields. <br></br>
                    Also, a barbecue zone and rest areas will be arranged for older vacationers in the yard. <br></br>
                    On the ground floor of the building there is a celebration and conference space, a reception, and a cafeteria for residents.
                    </p>
                </div>
                <div id="map" style={{ height: "400px", width: "100%", borderRadius: '0 0 25px 25px', marginTop: '30px' }}></div>
        
            </div>
            </div>
        )
    }
}
