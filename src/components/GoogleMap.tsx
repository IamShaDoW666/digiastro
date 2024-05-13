import { GoogleMap, Marker, LoadScriptNext ,InfoWindow} from "@react-google-maps/api";

const MapContainer = ({ APIKEY }: { APIKEY: string }) => {
  const mapStyles = {
    height: "100%",
    width: "100%",

  };
  const placeCoordinates = {
    lat: 25.2732815, 
    lng: 55.3094023,
    
  };
  const getDirectionsLink = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${placeCoordinates.lat},${placeCoordinates.lng}`;
  };

  const handleDirectionsClick = () => {
    const directionsLink = getDirectionsLink();
    window.open(directionsLink, '_blank');
  };
  
  return (
    <LoadScriptNext
      googleMapsApiKey={APIKEY}
      onLoad={() => console.log("Google Maps API loaded")}
      loadingElement={<div>Loading...</div>}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={placeCoordinates}>
       
        <InfoWindow position={placeCoordinates}>
        
        <div>
          <h4 style= {{color:"black",fontWeight:"bold",fontSize:"18px"}}>Lovosis Technology L.L.C</h4>
          <p style = {{color:"black", fontWeight: "bold"}}>Hikvision Distributor in DUBAI,U.A.E</p>
          <p style = {{color: "black"}}>Mobile: +971559462214 </p>
          <button className="bg-green-500 rounded-2xl p-2" onClick={handleDirectionsClick}>Get Directions</button>
        </div>

        </InfoWindow>
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
