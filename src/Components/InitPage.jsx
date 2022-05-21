import React, {Component, ReactNode} from "react";

export default class InitPage extends Component{

    render() {
        return (
            <div className="void-page-wrapper">
                <div className="icon-wrapper">
                    <svg className="search-icon"><use xlinkHref="../assets/sprite.svg#nameSearch"></use></svg>
                </div>
                <span>Start with searching a GitHub user</span>
            </div>
        );
      }
}
