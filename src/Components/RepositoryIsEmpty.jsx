import React, {Component, ReactNode} from "react";

export default class RepositoryIsEmpty extends Component{

    render() {
        return (
            <article className="void-page-wrapper repository-empty-page">
                <div className="icon-wrapper">
                    <svg className="repository-empty-icon"><use xlinkHref="../assets/sprite.svg#repositoryEmptyIcon"></use></svg>
                </div>
                <span>Repository list is empty</span>
            </article>
        );
      }
}
