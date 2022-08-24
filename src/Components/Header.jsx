import React, {Component, ReactNode} from "react";
import Input from "./Input";

export default class Header extends Component{

    render() {
        return (
          <header>
            <div className="header-container">
            <a href='#' className="icon-wrapper">
                <svg className="github-icon"><use xlinkHref="../assets/sprite.svg#github"></use></svg>
            </a>
            <Input setUser={this.props.setUser} setLoading={this.props.setLoading} currentPage={this.props.currentPage} />
          </div>
          </header>
        );
      }
}
