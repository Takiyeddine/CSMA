import React from 'react';
 import ReactDom from 'react-dom';
 import EpiD from './EpiD';
 import CatD from './CatD';
 import { BrowserRouter as Router ,Link } from 'react-router-dom';


 
class Choice extends React.Component {

    

////////////////////////////////////////////////////////
  dasher1 = event => {
    event.preventDefault();
             ReactDom.render(<EpiD  my_compte ={this.props.my_compte} to="/Choice/EpiD" />,document.getElementById('root'));   
            };
////////////////////////////////////////////////////////
   dasher2 = event => {
      event.preventDefault();
                ReactDom.render(<CatD my_compte={this.props.my_compte} to="/Choice/CatD" />,document.getElementById('root'));
  
                            };
  
////////////////////////////////////////////////////////  





 ////////////////////////////////////////////////////////
  render(){

    return(
              <div>
                 <Router>

                    <div className="container text-center">   
                      <h1>  Bienvenu {this.props.my_compte.prenom}  {this.props.my_compte.nom} dans notre application   </h1>
                      <h1>   Le nom d'hopital est : {this.props.my_compte.nom_etablisement}  </h1>
                          <button onClick={this.dasher1} className="btn btn-primary text-uppercase"> 
                                  <Link  to="/Choice/EpiD"  my_compte ={this.props.my_compte}> Dash Pendimie   </Link>
                          </button>
                          <button  onClick={this.dasher2} className="btn btn-primary text-uppercase"> 
                                    <Link  to="/Choice/CatD" my_compte ={this.props.my_compte} >   Dash catastrophe    </Link>
                          </button>

                      </div>

                </Router>
             </div>

    )
             
           }


////////////////////////////////////////////////////////
}
export default Choice;

