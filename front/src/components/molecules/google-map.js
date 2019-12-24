import React from "react"
import GoogleMapReact from "google-map-react"

const ReactComponent = ({ text }) => <div>{text}</div>

export const GoogleMap = () => {
  const props = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  return (
    <div style={{ height: "280px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDNQTUTjfDhQuUgSBw2mCE3N37ScsS8ByU" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <ReactComponent lat={59.955413} lng={30.337844} text="TLP" />
      </GoogleMapReact>
    </div>
  )
}
