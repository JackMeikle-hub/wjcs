function StationHeader({ stationName, location, slogan}){
    return (
        <header className = "stationHeader">
            <h1 className = "call-letters">{stationName}</h1>
            <p className = "slogan"> {slogan} </p>
            <p className = "location"> Serving {location} </p>
        </header>
    );
}
export default StationHeader;