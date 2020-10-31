 import React from 'react';
 import ReactDom from 'react-dom';
 import { BrowserRouter as Router ,Link } from 'react-router-dom';

 import EpiD from './EpiD';
 import Listcat from './Listcat'; 
 import Form2 from './Form2';

 

 
class CatD extends React.Component {
     
  

  constructor(props) {
    super(props); 
    this.state = {
    
        wilaya : "Blida" ,
        hopital : "Frantz Fanon",
    
      
    };

  }
///////////////////  ////////////////////////////////////////////////////////////
      componentDidMount(){
        this.state.compte = this.props.my_compte;
      }   
    //////////////////////////////////////////////////////////////////////////////////
  dasher = event => {
    event.preventDefault();
    //window.location.href = "/Choice/EpiD";
      ReactDom.render(<EpiD   />,document.getElementById('root'));
      //window.location.replace("/Choice/EpiD");


                          };
   ////////////////////////////////////////////////////////////////////////////////// 
 
  render(){

    return(
      <Router>
       <div> 
               
         <div>
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                  <button className="nav-link "  onClick={this.dasher}   >
                  <Link  to="/Choice/EpiD"  >   Pendimie Dash    </Link>
                   </button>
                     
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active"   > 
                     Catastrophe Dash 
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
                      <div>  <Listcat   />     </div>    
                                 
                                  
                  </div> 

                  <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                    <div> <Form2 /> </div>
                                   
                  </div>
         
      
              </div>
            </div>
      </div>
      

       </div>      
      </Router>
    )
             
           }
}
export default CatD;

