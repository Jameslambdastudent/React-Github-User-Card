import React, { Component } from 'react'
import { Form, Card, Image, Icon } from "semantic-ui-react"

 class FetchGithub extends Component {
    state = {
        name: "",
        userName: "",
        follwers: "",
        following: "",
        repos: "",
        avatar: "",
        userInput: "",
    }
    componentDidMount() {
        const url = `https://api.github.com/users/jameslambdastudent`
       fetch(url)
       .then(res => res.json())
       .then(data => {
           users(data)
       })
       


       const users = ({name, login, followers, following, public_repos, avatar_url}) => {
           this.setState({
               name: name,
               userName: login,
               followers: followers,
               following: following,
               repos: public_repos,
               avatar_url: avatar_url


           })
       }

      

        const handleSubmit = (event) => {
          event.preventDefault()
           fetch(`https://api.github.com/users/${this.state.userInput}`)
           .then(res => res.json())
           .then(data => {
              users(data)
           })

       }
       
    
      }
  
    
   handleChange = (event) => {
     this.setState({
       userInput: event.target.value
     })

   }

    render() {
      
        return (
            <>
            <div className="navbar">Github User Search</div>
            <div className="search">
            <Form onSubmit={this.handleSubmit}>
              
          <Form.Group>
            <Form.Input
              placeholder='Github User'
              name='github user'
              onChange={this.handleSearch}
              />
           <Form.Button content='Search'/>
          </Form.Group>
          </Form>
            </div>
            <div className="card">
            <Card>
    <Image 
    src={this.state.avatar_url}
     wrapped 
     ui={false} 
     />
    <Card.Content>
        <Card.Header>{this.state.name}</Card.Header>
        <Card.Header>{this.state.userName}</Card.Header>
     
      </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {this.state.follwers} Followers
      </a>
    </Card.Content>

    <Card.Content extra>
      <a>
        <Icon name='user' />
        {this.state.repos} Repos
      </a>
    </Card.Content>

    <Card.Content extra>
      <a>
        <Icon name='user' />
        {this.state.following} Following
      </a>
    </Card.Content>
  </Card>
            </div>
          

            </>
        )
    }
}
export default FetchGithub