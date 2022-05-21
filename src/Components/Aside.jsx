import React, {Component, ReactNode} from "react";

export default class Aside extends Component{

    render() {
        const {user} = this.props;
        return (
            <aside className="aside">
                <div className="aside__image-wrapper">
                    <img src={user.avatar_url} alt="user-foto" className="user-foto"></img>
                </div>
                <span className="user-name">{user.name}</span>
                <a href={user.html_url} className="github-name" target='_blank'>{user.login}</a>
                <div className="follow">
                    <div className="followers follow-wrapper">
                        <div className="icon-wrapper">
                            <svg className="followers-icon"><use xlinkHref="../assets/sprite.svg#followers"></use></svg>
                        </div>
                        <span>{user.followers} followers</span>
                    </div>
                    <div className="following follow-wrapper">
                        <div className="icon-wrapper">
                            <svg className="following-icon"><use xlinkHref="../assets/sprite.svg#following"></use></svg>
                        </div>
                        <span>{user.following} following</span>
                    </div>
                </div>
            </aside>
        );
      }
}
