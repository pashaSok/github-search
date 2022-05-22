import React, {Component, ReactNode} from "react";


export default class Pagination extends Component{

    render() {

        const {currentItems}=this.props;

        return (
            <ul className="pagination">
                {currentItems.map(item=>{
                    return(
                    <li className="page-item" key={item}>
                        {item}
                    </li>
                    )
                })}
            </ul>
        );
      }
}