import React, {Component, ReactNode} from "react";
import ReactPaginate from 'react-paginate';


export default class Pagination extends Component{
    handlePageClick = (event) => {
        const newOffset = (event.selected * this.props.itemsPerPage) % this.props.user.public_repos;
        this.props.setCurrentPage(newOffset/4+1);
        this.props.setItemsOffset(newOffset);
        const endOffset = newOffset + this.props.itemsPerPage;
        this.props.setCurrentItems(this.props.userRepo.slice(newOffset, endOffset));
        this.props.setPageCount(Math.ceil(this.props.user.public_repos / this.props.itemsPerPage));
    }

    render() {
        const {pageCount}=this.props;
        return (
            <div className="pagination-wrapper">
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
            </div>
        )
      }
}