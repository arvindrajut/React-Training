
function Planets({planetName, isGasPlanet}: any) {
 return  isGasPlanet ? <div> {planetName}</div> : null
 
}
//condition can be placed inside map as well planets.map((planet) => isGasPlanet && <div>{name}</div>) 

export default Planets