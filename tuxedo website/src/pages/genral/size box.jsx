import './style/size box.css'

function SizeBox({size}){

    return(
        <>
            <div className="size-box">
                <p className="size">
                    {size}
                </p>
            </div>
        </>
    )
}
export default SizeBox;