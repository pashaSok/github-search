import React, {Component, ReactNode} from "react";

export default class UserNotFound extends Component{

    render() {
        return (
            <article className="void-page-wrapper">
                <div className="icon-wrapper">
                    <svg className="user-icon"><use xlinkHref="../assets/sprite.svg#userNotFoundIcon"></use></svg>
                </div>
                <span>User not found</span>
            </article>
        );
      }
}
