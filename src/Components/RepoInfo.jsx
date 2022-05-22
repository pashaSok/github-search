import React, {Component, ReactNode} from "react";
import RepositoryIsEmpty from "./RepositoryIsEmpty";

export default class RepoInfo extends Component{

    render() {
        const {userRepo}= this.props;
        if(!userRepo.length){
            return(
                <RepositoryIsEmpty/>
            );
        }
        return (
            <div className="repo-wrapper">
                <span className="repo-number">Repositories ({userRepo.length})</span>
                <div className="repo-items-wrapper">
                    {userRepo.map(element=>{
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
