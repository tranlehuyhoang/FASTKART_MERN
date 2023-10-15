import React from 'react'

const ReviewScreen = () => {
    return (
        <div className="page-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            {/* Table Start */}
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>Product Reviews</h5>
                                </div>
                                <div>
                                    <div className="table-responsive">
                                        <table
                                            className="user-table ticket-table review-table theme-table table"
                                            id="table_id"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Customer Name</th>
                                                    <th>Product Name</th>
                                                    <th>Rating</th>
                                                    <th>Comment</th>
                                                    <th>Published</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>1</td>
                                                    <td>2509roblox</td>
                                                    <td>4</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>sản phẩm tốt</td>
                                                    <td className="td-check">
                                                        <i className="ri-checkbox-circle-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>2509roblox</td>
                                                    <td>4</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star theme-color" />
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>123123</td>
                                                    <td className="td-check">
                                                        <i className="ri-checkbox-circle-line" />
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* Table End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
            <div className="container-fluid">
                {/* footer start*/}
                <footer className="footer">
                    <div className="row">
                        <div className="col-md-12 footer-copyright text-center">
                            <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>


    )
}

export default ReviewScreen