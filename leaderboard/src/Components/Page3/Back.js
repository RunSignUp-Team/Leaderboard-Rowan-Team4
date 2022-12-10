import image from '../../Images/PinkArrow.png'

export default function Back() {

    return(
        <div>
            <a href="/Page2"> <img src={image} className="BackArrow" alt="Pink Arrow" 
            style={{position: 'fixed',top: '20px',left: '20px'}}/> </a>
        </div>
    )


}