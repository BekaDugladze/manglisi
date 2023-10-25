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
            <h1>პროექტის შესახებ</h1>
            <div className="abpro">
                <div className="about">
                    <img src={man} alt="მანგლისი ინნ" />
                    <p>  მანგლისი ინნ • Manglisi Inn - ის მიმდინარე პროექტი ხორციელდება მანგლისის მთავარი დასასვენებელი პარკის მიმდებარედ. პროექტის რეკრეაციული ზონა მთლიანად ერწყმის დასასვენებელ პარკს. <br></br>
                    ტერიტორია, რომელზეც მიმდინარეობს სამშენებლო სამუშაოები შეადგენს 2100 კვადრატულ მეტრს. შენობა ნაგებობის ფართი იკავებს 750 მეტრ კვადრატს,ხოლო დანარჩენ ფართში განსაზღვრულია რეკრეაციული ზონა,რაც გულისხმობს ბავშვთა გასართობ და სპორტულ მოედნებს. <br></br>
                    ასევე ეზოს ტერიტორიაზე მოეწყობა უფროსი ასაკის დამსვენებელთათვის ბარბექიუს ზონა და მოსასვენებელი სივრცეები. <br></br>
                    შენობის ნულ სართულზე გათვალისწინებულია სადღესასწაულო და საკონფერენციო სივრცე, რესეფშენი,და კაფეტერია მობინადრეებისათვის.
                    </p>
                </div>
                <div id="map" style={{ height: "400px", width: "100%", borderRadius: '0 0 25px 25px', marginTop: '30px' }}></div>
        
            </div>
            </div>
        )
    }
}
