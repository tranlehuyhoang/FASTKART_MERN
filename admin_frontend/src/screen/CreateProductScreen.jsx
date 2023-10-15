import React from 'react'

const CreateProductScreen = () => {
    return (
        <div className="page-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="title-header option-title d-sm-flex d-block">
                                    <h5>Products List</h5>
                                    <div className="right-options">
                                        <ul>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    data-bs-original-title=""
                                                    title=""
                                                >
                                                    import
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0)"
                                                    data-bs-original-title=""
                                                    title=""
                                                >
                                                    Export
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="btn btn-solid"
                                                    href="add-new-product.html"
                                                    data-bs-original-title=""
                                                    title=""
                                                >
                                                    Add Product
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="table-responsive">
                                        <table
                                            className="table all-package theme-table table-product"
                                            id="table_id"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Product Image</th>
                                                    <th>Product Name</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>
                                                        <div className="table-image">
                                                            <img
                                                                src="../public/images/1696159447_2.png"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>2</td>
                                                    <td>rau củ</td>
                                                    <td className="td-price">$2</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="order-detail.html"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-eye-line" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-pencil-line" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModalToggle"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-delete-bin-line" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="table-image">
                                                            <img
                                                                src="../public/images/1696159332_1.png"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>1</td>
                                                    <td>rau củ</td>
                                                    <td className="td-price">$1</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="order-detail.html"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-eye-line" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-pencil-line" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModalToggle"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-delete-bin-line" />
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
            {/* Page Body End */}
        </div>

    )
}

export default CreateProductScreen