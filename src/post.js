import React, {Component} from 'react';

class post extends Component{

    async postData(){
       try {
            let result = await fetch('https://webhook.site/cb35f6fd-c606-48d5-b400-0eb070b3caec', {
                method:'post',
                mode:'no-cors',
                headers:{
                    'Accept' :'application/json',
                    'Content-type': 'application/json',
                },

                body: JSON.stringify({
                    key1:'kshitji'
                })
            });
                   console.log('Result' + result) 
        }
       catch(e){
           console.log(e);
       }
    }

    render(){
        return(
            <div>
                <h1>post data</h1>

                <button onClick={()=>this.postData()}> Press and post data</button>

            </div>
        );
    }
}

export default post;