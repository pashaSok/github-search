import React, {Component, ReactNode} from "react";
import RepositoryIsEmpty from "./RepositoryIsEmpty";

export default class RepoInfo extends Component{

    render() {
        const {userRepo,currentItems,user}= this.props;
        if(!userRepo.length){
            return(
                <div className="repo-empty">
                    <RepositoryIsEmpty/>
                </div>
            );
        }
        return (
            <div className="repo-wrapper">
                <span className="repo-number">Repositories ({user.public_repos})</span>
                <div className="repo-items-wrapper">
                    {currentItems.map(element=>{
                        return(
                            <div className="repo-item" key={element.id}>
                                <a href={element.html_url} target='_blanck'>{element.name}</a>
                                <span>{element.description}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
      }
}
