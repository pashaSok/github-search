import React, {Component, ReactNode} from "react";
import Aside from './Aside';
import RepoInfo from "./RepoInfo";

export default class UserPage extends Component{

    render() {
        const {user,userRepo}= this.props;
        return (
            <div className="container">
                <Aside user={user}/>
                <RepoInfo userRepo={userRepo}/>
            </div>
        );
      }
}
