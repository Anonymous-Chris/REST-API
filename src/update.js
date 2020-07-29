import React, {Component} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/posts`
})

class update extends Component{

    state={
        courses: []
    }

    constructor(){
        super();
        api.get('/').then(res=>{
            console.log(res.data)
            this.setState({courses: res.data})
           
        })
    }

    createCourse = async() =>{
        let res = await api.post('/', {body:"geko",id:111,title: "Chris", userId:2})
    }
    render(){
        return(
            <div>
                <h1>update data</h1>
        {this.state.courses.map(course=><h2>{course.title}</h2>)}

        <button onClick={this.createCourse}>Clickme</button>
            </div>
        );

      
    }
}

export default update;