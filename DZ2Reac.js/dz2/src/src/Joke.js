
import 'bootstrap/dist/css/bootstrap.css'

function Myjoke(props){
    return (
      
   
        <div className="card"  style={{width:350, height:540, margin: 20, backgroundColor: "#eef2e9" }}>
          <img src={props.imgUrl} class="card-img-top" alt="..." style={{padding:15}}/>
          <div className="card-body">
             <h5 className="card-title text-success">Вопрос</h5>
             <p className="card-text">{props.quastion}</p>
         </div>
         <div className="card-body">
             <h5 className="card-title text-warning">Ответ</h5>
             <p className="card-text">{props.answer}</p>
         </div>
       </div>

    
    )
}

export default Myjoke