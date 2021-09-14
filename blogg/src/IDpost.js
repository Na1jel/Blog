import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios'
import { NavLink } from 'react-router-dom';


class IDpost extends React.Component{
    constructor(props){
        super(props)
        this.state={categoryId:[],posts:[]}

    }
    componentDidMount(){
        axios.get(`http://localhost:3001/categories/2`)
        .then(res=>{
            if(res.status === 200){
                this.setState({posts:res.data})
                console.log(this.state.posts)
            }

        })
    }
    render(){
        return(
            <div>
                ghbdtnasfgsdf
            </div>
        )
    }
}

export default IDpost;