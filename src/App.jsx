import React, { Component , ReactNode} from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Header from './Components/Header'
import PageContentContainer from './Components/PageContentContainer';

class App extends Component{
    state={
        user:null,
        userRepo:null,
        loadingInProgress:false
    }
    handleUserChange = (user,userRepo) =>{
        this.setState({user,userRepo});
    }
    handleLoading = (loadingInProgress) =>{
        this.setState({loadingInProgress});
    }
    render(){
        const {user,userRepo,loadingInProgress} = this.state; 
        return(
            <Router>
                <Header setUser={this.handleUserChange} setLoading={this.handleLoading}/>
                <Routes>
                    <Route path='/' element={<PageContentContainer loadingInProgress={loadingInProgress} user={user} userRepo={userRepo}/>}></Route>
                </Routes>
            </Router>
        )
    }
}
export default App;