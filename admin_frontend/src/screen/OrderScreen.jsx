import React from 'react'

const OrderScreen = () => {
    return (
        <div className="page-body">
            {/* Table Start */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>Order List</h5>

                                </div>
                                <div>
                                    <div className="table-responsive">
                                        <table
                                            className="table all-package order-table theme-table"
                                            id="table_id"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Order </th>
                                                    <th>Order Code</th>
                                                    <th>Date</th>
                                                    <th>Email</th>
                                                    <th>Delivery Status</th>
                                                    <th>Amount</th>
                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr data-bs-toggle="offcanvas" href="#order-details">
                                                    <td>#1</td>
                                                    <td>
                                                        <a
                                                            className="d-block"
                                                            data-bs-original-title=""
                                                            title=""
                                                        >
                                                            <span className="order-image">
                                                                <img
                                                                    src="../public/assets_client/box.png"
                                                                    className="img-fluid"
                                                                    alt="users"
                                                                />
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>#4404449596209624</td>
                                                    <td>2023-10-12 07:37:36</td>
                                                    <td>2509roblox@gmail.com</td>
                                                    <td className="order-success">
                                                        <span>Success</span>
                                                    </td>
                                                    <td>$15</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    className="btn btn-sm btn-solid text-white"
                                                                    href="./order-detail.php?bill=73"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr data-bs-toggle="offcanvas" href="#order-details">
                                                    <td>#2</td>
                                                    <td>
                                                        <a
                                                            className="d-block"
                                                            data-bs-original-title=""
                                                            title=""
                                                        >
                                                            <span className="order-image">
                                                                <img
                                                                    src="../public/assets_client/box.png"
                                                                    className="img-fluid"
                                                                    alt="users"
                                                                />
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>#4509968953132206</td>
                                                    <td>2023-10-09 07:46:54</td>
                                                    <td>2509roblox@gmail.com</td>
                                                    <td className="order-success">
                                                        <span>Success</span>
                                                    </td>
                                                    <td>$15</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    className="btn btn-sm btn-solid text-white"
                                                                    href="./order-detail.php?bill=72"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Table End */}
            {/* footer start*/}
            <div className="container-fluid">
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

export default OrderScreen