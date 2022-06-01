import Login from "./Login"
import img from "../images/signup.jpg"

export default function Home(){
    return(
        <div class="container">
            <div className="row">
                <div className="col-md-6"><Login /></div>
                <div className="col-md-6">
                    <img src={img} alt="signup" height="400" width="400"></img>
                </div>
            </div>
            
         </div>   
    )
}