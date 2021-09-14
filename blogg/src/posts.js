import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import { NavLink } from 'react-router-dom';

class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state={id:[],posts:[], categories:[]}
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/categories`)
        .then(res=>{
          if(res.status === 200){
            this.setState({categories:res.data})
           this.setState({id: res.data.map(c=> c.id)})
        //    console.log(this.state.id)
          }
        })
        axios.get('http://localhost:3001/posts')
        .then(res=>{
            if(res.status === 200){
                this.setState({posts:res.data})
            }
        })
        }

    render(){
        return(
            <div>
                 <div className='col col-lg-1,5' id="sidebar">
                    <ListGroup>
                       {this.state.categories.map(c=>  <ListGroup.Item key={c.id}> <NavLink to={`/categories/${c.id}`}> {c.title} </NavLink>  </ListGroup.Item>  )}
                    </ListGroup>
                </div>
                <div className='container bar-post'>
                    <div className="row">
                        {this.state.posts.map(p=> <div className="col col-lg-5" key={p.id}> <h1>{p.title}</h1> <img src={p.image}></img> <p >{p.text}</p> </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;