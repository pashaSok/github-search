import React, {Component, ReactNode} from "react";
import Aside from './Aside';
import Pagination from "./Pagination";
import RepoInfo from "./RepoInfo";

export default class UserPage extends Component{
    state={ 
        pageCount:Math.ceil(this.props.user.public_repos/4),
        currentItems:this.props.userRepo.slice(0,4),
        itemOffset:0,
        itemsPerPage:4
    }
    componentDidUpdate=async(prevProps)=>{
        if(prevProps.currentPage!==this.props.currentPage){
            const repoResponse = await fetch(`https://api.github.com/users/${this.props.user.login}/repos?page=${this.props.currentPage}&per_page=4&sort=updated`,
            {
                method:'GET',
                // headers:{
                //     Authorization: 'token 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' 
                // }
            });
            const repoData=await repoResponse.json();
            this.props.setUser(this.props.user, repoData);
        }
    }
    static getDerivedStateFromProps(props, state){
        if(props.userRepo!==state.currentItems){
            return {currentItems: props.userRepo}
        }
        return null;
    }
    handleCurrentItems=(currentItems)=>{
        this.setState({currentItems});
    }
    handlePageCount=(pageCount)=>{
        this.setState({pageCount});
    }
    handleItemsOffset=(itemOffset)=>{
        this.setState({itemOffset});
    }
    render() {
        const {pageCount,currentItems,itemOffset,itemsPerPage}=this.state;
        const {user,userRepo,setCurrentPage}= this.props;
        if(pageCount!==0){
            return (
                <div className="container">
                    <Aside user={user}/>
                    <main className="repo-container">
                        <RepoInfo currentItems={currentItems} userRepo={userRepo} user={user}/>
                        <Pagination 
                            user={user} 
                            userRepo={userRepo} 
                            pageCount={pageCount} 
                            itemOffset={itemOffset} 
                            itemsPerPage={itemsPerPage} 
                            setItemsOffset={this.handleItemsOffset} 
                            setCurrentItems={this.handleCurrentItems} 
                            setPageCount={this.handlePageCount} 
                            setCurrentPage={setCurrentPage} 
                            currentItems={currentItems}
                        />
                    </main>
                </div>
            );
        }
        else{
            return (
                <div className="container">
                    <Aside user={user}/>
                    <main className="repo-container">
                        <RepoInfo currentItems={currentItems} userRepo={userRepo} user={user}/>
                    </main>
                </div>
            );
        }
      }
}
