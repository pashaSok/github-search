import React, {Component, ReactNode} from "react";
import Aside from './Aside';
import Pagination from "./Pagination";
import RepoInfo from "./RepoInfo";

export default class UserPage extends Component{

    render() {

        const {user,userRepo}= this.props;

        return (
            <div className="container">
                <Aside user={user}/>
                <main className="repo-container">
                    <RepoInfo userRepo={userRepo}/>
                    {/* <Pagination currentPage={currentPage} repoPerPage={repoPerPage} userRepo={userRepo}/> */}
                </main>
            </div>
        );
      }
}
