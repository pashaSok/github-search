import React, {Component, ReactNode} from "react";


export default class Input extends Component{

    state ={
        userName:'',
    }
    getUserInfo = async() =>{
        this.props.setLoading(true);
        const userRespose = await fetch(`https://api.github.com/users/${this.state.userName}`);
	    const userData = await userRespose.json();
        const repoResponse = await fetch(`https://api.github.com/users/${this.state.userName}/repos?page=1&per_page=100`);
        const repoData = await repoResponse.json();
        this.props.setUser(userData, repoData);
        this.props.setLoading(false);
    }
    inputChange = event =>{
        const inputUserName = event.target.value;
        this.setState({userName: inputUserName});
    }
    handleSubmit = e =>{
        if(e.keyCode === 13){
            this.getUserInfo();       
        }
    }
    render() {
        const {userName}=this.state;
        return (
            <div className="form-search" onKeyDown={this.handleSubmit}>
                <a href='#' className="icon-wrapper" onClick={this.getUserInfo}>
                    <svg className="search-icon"><use xlinkHref="../assets/sprite.svg#nameSearch"></use></svg>
                </a>
                <input className="name-search" rows='1' placeholder="Enter GitHub username"  onChange={this.inputChange}></input>
            </div>
        );
      }
}
