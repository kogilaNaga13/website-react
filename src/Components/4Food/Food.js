import './Food.css'
import { FaStar } from "react-icons/fa";
const Food=({top})=>{
    let Food= top.map((e)=>{
         return(
            <div className="col4">
            <div className="offerImage">
                <div className="image">
                     <img src={e.image} alt="img"/>
                </div>
                    <div className="image_content">
                        <h3>{e.branch}</h3>
                            <div className="image_rat">
                                <span><FaStar className='icons'/></span>
                                <span>{e.rating}</span>
                                <span>{e.time} Mins</span>
                            </div>
                        <p>{e.dish}</p>
                        <p>{e.location}</p>
                        
                    </div>
            </div>
        </div>
            
         )
     })
     return(
         <div className='container'>
             <h2>Restaurants with online food delivery in Chennai</h2>
             <div className='row'>
                 {Food}
             </div>
         </div>
     )
 }
 
 
 export default Food;