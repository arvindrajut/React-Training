
function Toolbar({onPlayMovie, onPlayMusic}: any) {
  return (
    <div>
        <Button onClick={onPlayMovie}>Play Movie</Button>
        <Button onClick={onPlayMusic}>Upload Image</Button>
        
    </div>
  )
}

function Button({children, onClick}: any){
    return(
        <button style={{color: "blue"}} onClick={onClick}>{children}</button>
    )
}

export default Toolbar