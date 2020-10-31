import React from 'react';
import ReactDom from 'react-dom';
 import { BrowserRouter as Router ,Link } from 'react-router-dom';

import CatD from './CatD';
import Listepi from './Listepi'; 
import Form1 from './Form1';




class EpiD extends React.Component {



  constructor(props) {
    super(props); 
    this.state = {
    
        wilaya : "Blida" ,
        hopital : "Frantz Fanon",
    
      
    };

  }
       
   //////////////////////////////////////////////////////////////////////////////////
 dasher = event => {
   event.preventDefault();
           // window.location.href = "/Choice/CatD";

            ReactDom.render(<CatD  />,document.getElementById('root'));
               //window.location.replace("/Choice/CatD");


                         };
  ////////////////////////////////////////////////////////////////////////////////// 

 render(){

   return(
     <Router>
       <div> 
               
          <div>
               <ul className="nav nav-pills nav-fill">
                 <li className="nav-item">
                   <button    className="nav-link active" >
                     Pendimie Dash     
                     </button>
                 </li>
                 <li className="nav-item">
                   <button className="nav-link "  onClick={this.dasher}   > 
                   <Link  to="/Choice/CatD"  >   Catastrophe Dash    </Link>
                  </button>
                 </li>
                 
               </ul>

      </div>
       <div className="row">
           <div className="col-3">
               <div className="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                 <a className="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true"> Consulter  </a>
                 <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false">  Ajouter Cas  </a>
               </div>
           </div>
           <div className="col-9">
             <div className="tab-content" id="v-pills-tabContent">

                 <div className="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
                     <div>  <Listepi   />     </div>    
                                
                                 
                 </div> 

                 <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                   <div> <Form1  /> </div>
                                  
                 </div>
        
     
             </div>
           </div>
     </div>
    

      </div>      
      </Router>
   )
            
          }
}
export default EpiD;

