import React from 'react'

const DetailsOrderScreen = () => {
    return (
        <div className="page-body">
            {/* tracking table start */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="title-header title-header-block package-card">
                                    <div>
                                        <h5>Order #36648</h5>
                                    </div>
                                    <div className="card-order-section">
                                        <ul>
                                            <li>October 21, 2021 at 9:08 pm</li>
                                            <li>6 items</li>
                                            <li>Total $5,882.00</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-inner cart-section order-details-table">
                                    <div className="row g-4">
                                        <div className="col-xl-12">
                                            <div className="table-responsive table-details">
                                                <table className="table cart-table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th colSpan={2}>Items</th>
                                                            <th className="text-end" colSpan={2}>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="theme-color"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    Edit Items
                                                                </a>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="table-order">
                                                            <td>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <img
                                                                        src="../public/images/1696159512_10.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <p>Product Name</p>
                                                                <h5>4</h5>
                                                            </td>
                                                            <td>
                                                                <p>Quantity</p>
                                                                <h5>4</h5>
                                                            </td>
                                                            <td>
                                                                <p>Price</p>
                                                                <h5>$4.00</h5>
                                                            </td>
                                                        </tr>
                                                        <tr className="table-order">
                                                            <td>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <img
                                                                        src="../public/images/1696159516_11.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <p>Product Name</p>
                                                                <h5>4</h5>
                                                            </td>
                                                            <td>
                                                                <p>Quantity</p>
                                                                <h5>1</h5>
                                                            </td>
                                                            <td>
                                                                <p>Price</p>
                                                                <h5>$4.00</h5>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>

                                                        <tr className="table-order">
                                                            <td colSpan={3}>
                                                                <h4 className="theme-color fw-bold">
                                                                    Total Price :
                                                                </h4>
                                                            </td>
                                                            <td>
                                                                <h4 className="theme-color fw-bold">$20.00</h4>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">

                                        </div>
                                    </div>
                                </div>
                                {/* section end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tracking table end */}
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

export default DetailsOrderScreen