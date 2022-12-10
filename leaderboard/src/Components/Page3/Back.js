import image from '../../Images/PinkArrow.png'

export default function Back() {

    return(
        <div>
            <a href="/Page2"> <img src={image} className="BackArrow" alt="Pink Arrow" 
            style={{position: 'fixed',bottom: '85px',right: '30px'}}/> </a>
        </div>
    )


}