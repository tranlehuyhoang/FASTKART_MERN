import React from 'react'

const UserScreen = () => {
    return (
        <div className="page-body">
            {/* All User Table Start */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>All Users</h5>
                                    <form className="d-inline-flex">
                                        <a
                                            href="add-new-user.html"
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
                                                className="feather feather-plus"
                                            >
                                                <line x1={12} y1={5} x2={12} y2={19} />
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                            </svg>
                                            Add New
                                        </a>
                                    </form>
                                </div>
                                <div className="table-responsive table-product">
                                    <table className="table all-package theme-table" id="table_id">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="table-image">
                                                        <img
                                                            src="../public/assets_admin/images/users/5.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="user-name">
                                                        <span>trinhnguyen0489@gmail.com</span>
                                                        <span>User</span>
                                                    </div>
                                                </td>
                                                <td>trinhnguyen0489@gmail.com</td>
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
                                                            src="../public/assets_admin/images/users/5.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="user-name">
                                                        <span>2508roblox@1312</span>
                                                        <span>User</span>
                                                    </div>
                                                </td>
                                                <td>2508roblox@1312</td>
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
                                                            src="../public/assets_admin/images/users/5.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="user-name">
                                                        <span>tainhps27199@fpt.edu.vn</span>
                                                        <span>User</span>
                                                    </div>
                                                </td>
                                                <td>tainhps27199@fpt.edu.vn</td>
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
                                                            src="../public/assets_admin/images/users/5.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="user-name">
                                                        <span>2509roblox</span>
                                                        <span>Admin</span>
                                                    </div>
                                                </td>
                                                <td>2509roblox@gmail.com</td>
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

export default UserScreen