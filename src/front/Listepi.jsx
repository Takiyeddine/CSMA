import React from 'react';
 import ReactDom from 'react-dom';
 import axios from 'axios';
 import Item1 from './Item1';


 
class Listepi extends React.Component {

   
  constructor(props) {
    super(props);
    this.state = {
          Liste_Epi: [],
          serchbar : "",
           wilaya : "Blida" ,
          hopital : "Frantz Fanon",
     };
    this.handleChange = this.handleChange.bind(this);
 
  }
         
  ///////////////////////////////////////////////////////////////////////////////////////////////////
          getlist(){

            const list=[];

               axios.get('http://localhost:5000/cas_epi/')
                            .then( cas_epis => {
                               cas_epis.data.map(cas=>{
                                      if ( cas.hopital === "Frantz Fanon") {
                                               
                                            list.push(cas)
                                         };
                                                 });
                            
                               this.setState({ Liste_Epi : list})  ; 

                            
                                })//AXIOS CATCH 
                             .catch(function (error) { console.log(error); })
                              
                            }
///////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount(){
       this.getlist();
                        }     
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chercher (){
         const list = [...this.state.Liste_Epi];
          const list2=[];
           list.map(
             cas =>{
                      if( (cas.nom === this.state.serchbar)
                        || (cas.prenom === this.state.serchbar)
                        || (cas.nom_pendiment === this.state.serchbar)
                        ||( cas.sexe === this.state.serchbar)
                        ||( cas.adresse === this.state.serchbar)
                        ){    
                           list2.push(cas);    
                        }
                      
                    }
                   );
                      this.setState({Liste_Epi : list2})

                  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
handleChange = event => {
        this.setState({ serchbar: event.target.value });

               }; 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_mort= event => {
    this.setState({categorie : " Mort "});
    this.getlist() ;

  const list = [...this.state.Liste_Epi];
        const list2=[];
        list.map(
        cas =>{
             if( cas.Situation_actuelle === "mort"){ 
                   list2.push(cas); 
               }
             }
          );
             this.setState({Liste_Epi : list2})
         
         };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_conta= event => {
  this.setState({categorie : " contaminé "});
  this.getlist() ;

  const list = [...this.state.Liste_Epi];
  const list2=[];
  list.map(
  cas =>{
      if( cas.Situation_actuelle === "contamine"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Epi : list2})
   
         };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_cava= event => {
  this.setState({categorie : "Gueri "});
     this.getlist() ;
  const list = [...this.state.Liste_Epi];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "gueri"){ 
             list2.push(cas); 
         } 
       }
    );
       this.setState({Liste_Epi : list2})
   
         };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

render(){

    return(
              <div>
                 <h1> List epidimique du {this.state.hopital}</h1>

                 <div className="container text-center">   
          <div>
              <div className="container">
                         
                      <div className="row pl-5">
                          
                          {/* Reset list */}
                          <div>
                          <h1> La liste des cas epidemique : </h1>

                          </div>
                          
                           <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                               <button onClick={()=> this.getlist()}  className="btn btn-primary text-uppercase"> Tous La liste </button>
                              </div>
                          {/* Barre de recherche */}
                              <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                                <input onChange={this.handleChange} className="form-control" type="text" placeholder="Rechercher un cas pendimique" aria-label="Search"></input>
                              </div>
                             {/*  valider la crecherche  */}
                             <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                               <button onClick={()=> this.chercher()}  className="btn btn-primary text-uppercase"> Rechercher </button>
                              </div>

                      </div>
                    </div>
                    
                    
                    {/* Tableau des étudiants */}

                     <div id="liste_malade" >
                             <table className=" table">
                                       <thead>
                                            <tr>
                                             <th scope="col">NSS</th>
                                             <th scope="col">Num ident</th>
                                             <th scope="col">Nom</th>
                                             <th scope="col">Prénom</th>
                                              <th scope="col">sexe</th>
                                             <th scope="col">adresse</th>
                                             <th scope="col">lieu_naissance</th>
                                             <th scope="col">nom_Pendemi</th>
                                             <th scope="col">Etat actulle</th>
                                            </tr>
                                      </thead>
                           <tbody >
                           {  
                            this.state.Liste_Epi.map(cas => {
                               
                                return <Item1 key={cas.nom} item={cas} /> 
                                
                                                       } )   
                              
                              }    
                           
                                          <tr>
                                                {/* dernière ligne concernant le calcul de la moyenne générale */}
                                            <th> Liste des Cas pendeme </th>
                                            <td></td>
                                            <td></td>
                                         </tr>
                            </tbody>
              
                                    </table>
                  </div>
          <div>
          <button onClick={()=> this.afficher_mort()}  className="btn btn-primary text-uppercase"> mort </button>
          <button onClick={()=> this.afficher_conta()}  className="btn btn-primary text-uppercase"> contaminé </button>
          <button onClick={()=> this.afficher_cava()}  className="btn btn-primary text-uppercase"> Guéri  </button>

            
          </div>         
          
          </div>               
          </div>



             </div>

    )
             
           }
}
export default Listepi;

