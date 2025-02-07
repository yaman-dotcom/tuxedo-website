import './style/color box.css'
function ColorBox({color ,colorCode}){

    return(
    <>
    <div className="color-box" style={{ "--hover-background-color": colorCode} }>
        <p className="color">
            {color}
        </p>
    </div>

    </>
    )
}
export default ColorBox;