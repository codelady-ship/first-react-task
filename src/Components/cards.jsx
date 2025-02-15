
import { data } from "../Mock/Data"; 

const Cards=()=>{
    return(
      <div class="cards" >
        {
            data.map(({id,title,description,thumbnail,qiymet})=>{
            return(
                <div class="card" key ={id}>
                  <img src={thumbnail} />
                 <div>
                   <h2>{title}</h2>
                   <p>{description}</p>
                   <h4>{qiymet>0 ? qiymet +"AZN": "Pulsuz"}</h4>
                 </div>
                </div>
                )
            })
        }    
      </div>
    )
}
export default Cards;