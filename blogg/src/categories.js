import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


class Categories extends React.Component{
  constructor(props){
    super(props)
    this.state= {categories:[], message:[], title:[]}
    this.send = this.send.bind(this)
    this.message = this.message.bind(this)
    this.title = this.title.bind(this)
  }

  componentDidMount(){
  axios.get('http://localhost:3001/categories')
  .then(res=>{
    if(res.status === 200){
      this.setState({categories:res.data})
    }
  })
  }
  message(e){
    this.setState({message:e.target.value})
  }
  send(e){
  axios.post("http://localhost:3001/posts",{
    message: this.state.message
  })
  }
  title(e){
    this.setState({title:e.target.value})
  }


  render(){
    return(
      <div className='container'>
              <h1 className="heading">{this.state.title}</h1>
       <div className=' row'>
        <div className='col'>
          <form action='/posts' method='POST'>
            <textarea className='text' onChange={this.message} name="text"/>
           <NavLink to='/posts'> <input type='button' onClick={this.send} value='Отправить'/></NavLink>
          </form>
        </div>
        <div className='col'>
            <Form.Select onChange={this.title} aria-label="Default select example">
                <option>Categories</option>
                {this.state.categories.map(c=> <option key={c.id} >{c.title}</option>)}
            </Form.Select>
        </div>
        </div>
        <br/>
        {/* <div>
          <ul class="list-group">
          {this.state.categories.map(c=> <li className="list-group-item" >  {c.title} </li> )}
          </ul>
        </div> */}
      </div>
    )
  }
}

export default Categories;
