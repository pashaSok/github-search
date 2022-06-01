import React, {Component, ReactNode} from "react";
import Aside from './Aside';
import Pagination from "./Pagination";
import RepoInfo from "./RepoInfo";

export default class UserPage extends Component{
    state={ 
        pageCount:Math.ceil(this.props.userRepo.length/4),
        currentItems:this.props.userRepo.slice(0,4),
        itemOffset:0,
        itemsPerPage:4
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
        const {user,userRepo}= this.props;
        return (
            <div className="container">
                <Aside user={user}/>
                <main className="repo-container">
                    <RepoInfo currentItems={currentItems} userRepo={userRepo}/>
                    <Pagination userRepo={userRepo} pageCount={pageCount} itemOffset={itemOffset} itemsPerPage={itemsPerPage} setItemsOffset={this.handleItemsOffset} setCurrentItems={this.handleCurrentItems} setPageCount={this.handlePageCount}/>
                </main>
            </div>
        );
      }
}
