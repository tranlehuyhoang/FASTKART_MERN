import React from 'react'

const CreateCategoryScreen = () => {
    return (
        <div className="page-body">
            {/* All User Table Start */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>All Category</h5>
                                    <form className="d-inline-flex">
                                        <a
                                            href="add-new-category.html"
                                            className="align-items-center btn btn-theme d-flex"
                                            data-bs-original-title=""
                                            title=""
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-plus-square"
                                            >
                                                <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                                <line x1={12} y1={8} x2={12} y2={16} />
                                                <line x1={8} y1={12} x2={16} y2={12} />
                                            </svg>
                                            Add New
                                        </a>
                                    </form>
                                </div>
                                <div className="table-responsive category-table">
                                    <div>
                                        <table className="table all-package theme-table" id="table_id">
                                            <thead>
                                                <tr>
                                                    <th>Category Name</th>
                                                    <th>Category Image</th>
                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>rau củ 2</td>
                                                    <td>
                                                        <div className="table-image">
                                                            <img
                                                                src="../public/images/1696151259_product-5.png"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
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
                                                    <td>rau củ</td>
                                                    <td>
                                                        <div className="table-image">
                                                            <img
                                                                src="../public/images/1696151242_product-5.png"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
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
                                                    <td>rau củ1</td>
                                                    <td>
                                                        <div className="table-image">
                                                            <img
                                                                src="../public/images/1696151097_product-5.png"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
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
            {/* All User Table Ends*/}
            <div className="container-fluid">
                {/* footer start*/}
                <footer className="footer">
                    <div className="row">
                        <div className="col-md-12 footer-copyright text-center">
                            <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
                        </div>
                    </div>
                </footer>
                {/* footer end*/}
            </div>
        </div>


    )
}

export default CreateCategoryScreen