import React, {Component, ReactNode} from "react";
import InitPage from "./InitPage";
import UserPage from "./UserPage";
import UserNotFoundPage from "./UserNotFoundPage";
import Loading from "./Loading";

export default class PageContentContainer extends Component{

    render() {
        const {user, userRepo,loadingInProgress, setCurrentPage, currentPage, setUser} = this.props;
        if(loadingInProgress){
            return(
                <Loading/>
            )
        }
        if(!user){
            return (
                <InitPage/>
            );
        }
        if(user.message && user.message === 'Not Found'){
            return (
                <UserNotFoundPage/>
            );
        }
        return(
            <UserPage user={user} userRepo={userRepo} setCurrentPage={setCurrentPage} currentPage={currentPage} setUser={setUser}/>
        );
      }
}
