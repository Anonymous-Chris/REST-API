import React, {Component} from 'react';

class read extends React.Component{
    constructor(props){
        super(props);
        this.state={
          items:[],
          isLoaded : false,
        }
      }


    
  //reading a data
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

    render(){

        
    var {isLoaded, items} = this.state;
    if (!isLoaded){
      return <div>Loading..........</div>
    }
    else{


        return(
            <div>
                <h1>Read data</h1>


                <ul>
                 {items.map(item=>(
                      <li key={item.id}> 
                    {item.name} </li>
     
   ))}
 </ul>

            </div>
        );
    }
}
}

export default read;