import './style/cut box.css'
function CutBox({cutName}){

    return(
        <>
         <div className="cut-box">
            <p className="cut">
                {cutName}
            </p>
        </div>

    </>
        
        
    )
}
export default CutBox