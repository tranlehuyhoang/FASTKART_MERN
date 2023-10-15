
import { Outlet } from 'react-router-dom'

const NavSlide = () => {
    return (
        <>


            {/* tap on top start */}
            <div className="tap-top">
                <span className="lnr lnr-chevron-up" />
            </div>
            {/* tap on tap end */}
            {/* page-wrapper Start*/}
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {/* Page Header Start*/}
                <div className="page-header">
                    <div className="header-wrapper m-0">
                        <div className="header-logo-wrapper p-0">
                            <div className="logo-wrapper">
                                <a
                                    href="admin"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <img
                                        className="img-fluid main-logo"
                                        src="../public/assets_admin/images/logo/1.png"
                                        alt="logo"
                                    />
                                    <img
                                        className="img-fluid white-logo"
                                        src="../public/assets_admin/images/logo/1-white.png"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div className="toggle-sidebar" checked="checked">
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
                                    className="feather feather-align-center status_toggle middle sidebar-toggle"
                                >
                                    <line x1={18} y1={10} x2={6} y2={10} />
                                    <line x1={21} y1={6} x2={3} y2={6} />
                                    <line x1={21} y1={14} x2={3} y2={14} />
                                    <line x1={18} y1={18} x2={6} y2={18} />
                                </svg>
                                <a
                                    href="admin"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <img
                                        src="../public/assets_admin/images/logo/1.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <form
                            className="form-inline search-full"
                            action="javascript:void(0)"
                            method="get"
                        >

                        </form>
                        <div className="nav-right col-6 pull-right right-header p-0">
                            <ul className="nav-menus">



                                <li className="profile-nav onhover-dropdown pe-0 me-0">
                                    <div className="media profile-media">
                                        <img
                                            className="user-profile rounded-circle"
                                            src="../public/assets_admin/images/users/4.jpg"
                                            alt=""
                                        />
                                        <div className="user-name-hide media-body">
                                            <span>2509roblox</span>
                                            <p className="mb-0 font-roboto">
                                                Admin
                                                <i className="middle ri-arrow-down-s-line" />
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="profile-dropdown onhover-show-div">

                                        <li>
                                            <a
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                href="javascript:void(0)"
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
                                                    className="feather feather-log-out"
                                                >
                                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                    <polyline points="16 17 21 12 16 7" />
                                                    <line x1={21} y1={12} x2={9} y2={12} />
                                                </svg>
                                                <span>Log out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Header Ends*/}
                <div className="page-body-wrapper">
                    {/* Page Sidebar Start*/}
                    <div className="sidebar-wrapper">
                        <div id="sidebarEffect">
                            <canvas width={1798} height={1112} />
                        </div>
                        <div>
                            <div className="logo-wrapper logo-wrapper-center">
                                <a
                                    href="admin"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <img
                                        className="img-fluid for-white"
                                        src="../public/assets_admin/images/logo/full-white.png"
                                        alt="logo"
                                    />
                                </a>
                                <div className="back-btn">
                                    <i className="fa fa-angle-left" />
                                </div>
                                <div className="toggle-sidebar" checked="checked">
                                    <i className="ri-apps-line status_toggle middle sidebar-toggle" />
                                </div>
                            </div>
                            <div className="logo-icon-wrapper">
                                <a
                                    href="admin"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <img
                                        className="img-fluid main-logo main-white"
                                        src="../public/assets_admin/images/logo/logo.png"
                                        alt="logo"
                                    />
                                    <img
                                        className="img-fluid main-logo main-dark"
                                        src="../public/assets_admin/images/logo/logo-white.png"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <nav className="sidebar-main">
                                <div className="left-arrow disabled" id="left-arrow">
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
                                        className="feather feather-arrow-left"
                                    >
                                        <line x1={19} y1={12} x2={5} y2={12} />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                </div>
                                <div id="sidebar-menu">
                                    <ul className="sidebar-links" id="simple-bar" data-simplebar="init">
                                        <div className="simplebar-wrapper" style={{ margin: 0 }}>
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer" />
                                            </div>
                                            <div className="simplebar-mask">
                                                <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                                    <div
                                                        className="simplebar-content-wrapper"
                                                        style={{ height: "100%", overflow: "hidden" }}
                                                    >
                                                        <div className="simplebar-content" style={{ padding: 0 }}>
                                                            <li className="back-btn" />
                                                            <li className="sidebar-list">
                                                                <a
                                                                    className="sidebar-link sidebar-title link-nav"
                                                                    href="./"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-home-line" />
                                                                    <span>Dashboard</span>
                                                                    <div className="according-menu">
                                                                        <i className="ri-arrow-right-s-line" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="sidebar-list">
                                                                <a
                                                                    className="sidebar-link sidebar-title link-nav"
                                                                    href="./product"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-store-3-line" />
                                                                    <span>Product</span>
                                                                    <div className="according-menu">
                                                                        <i className="ri-arrow-right-s-line" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="sidebar-list">
                                                                <a
                                                                    className="sidebar-link sidebar-title link-nav"
                                                                    href="./category"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-list-check-2" />
                                                                    <span>Category</span>
                                                                    <div className="according-menu">
                                                                        <i className="ri-arrow-right-s-line" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="sidebar-list">
                                                                <a
                                                                    className="sidebar-link sidebar-title link-nav"
                                                                    href="./user"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-user-3-line" />
                                                                    <span>Users</span>
                                                                    <div className="according-menu">
                                                                        <i className="ri-arrow-right-s-line" />
                                                                    </div>
                                                                </a>
                                                            </li>




                                                            <li className="sidebar-list">
                                                                <a
                                                                    className="sidebar-link sidebar-title link-nav"
                                                                    href="./order"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-archive-line" />
                                                                    <span>Orders</span>
                                                                    <div className="according-menu">
                                                                        <i className="ri-arrow-right-s-line" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="sidebar-list">
                                                                <a
                                                                    className="sidebar-link sidebar-title link-nav"
                                                                    href="./review"
                                                                    data-bs-original-title=""
                                                                    title=""
                                                                >
                                                                    <i className="ri-star-line" />
                                                                    <span>Product Review</span>
                                                                    <div className="according-menu">
                                                                        <i className="ri-arrow-right-s-line" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="simplebar-placeholder"
                                                style={{ width: "auto", height: 371 }}
                                            />
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-horizontal"
                                            style={{ visibility: "hidden" }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{ width: 0, display: "none" }}
                                            />
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-vertical"
                                            style={{ visibility: "hidden" }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{ height: 0, display: "none" }}
                                            />
                                        </div>
                                    </ul>
                                </div>
                                <div className="right-arrow" id="right-arrow">
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
                                        className="feather feather-arrow-right"
                                    >
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </nav>

                        </div>
                    </div>
                    {/* Page Sidebar Ends*/}
                    <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog  modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h5 className="modal-title" id="staticBackdropLabel">
                                        Logging Out
                                    </h5>
                                    <p>Are you sure you want to log out?</p>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        data-bs-original-title=""
                                        title=""
                                    />
                                    <div className="button-box">
                                        <button
                                            type="button"
                                            className="btn btn--no"
                                            data-bs-dismiss="modal"
                                            data-bs-original-title=""
                                            title=""
                                        >
                                            No
                                        </button>
                                        <a
                                            href="admin/logout"
                                            className="btn  btn--yes btn-primary"
                                            data-bs-original-title=""
                                            title=""
                                        >
                                            Yes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Outlet></Outlet>


                </div>
            </div>

            <svg
                id="SvgjsSvg1207"
                width={2}
                height={0}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns: svgjs="http://svgjs.com/svgjs"
                style={{
                    overflow: "hidden",
                    top: "-100%",
                    left: "-100%",
                    position: "absolute",
                    opacity: 0
                }}
            >
                <defs id="SvgjsDefs1208" />
                <polyline id="SvgjsPolyline1209" points="0,0" />
                <path
                    id="SvgjsPath1210"
                    d="M-1 298.11199876556395L-1 298.11199876556395C-1 298.11199876556395 161.12545680999756 298.11199876556395 161.12545680999756 298.11199876556395C161.12545680999756 298.11199876556395 322.2509136199951 298.11199876556395 322.2509136199951 298.11199876556395C322.2509136199951 298.11199876556395 483.3763704299927 298.11199876556395 483.3763704299927 298.11199876556395C483.3763704299927 298.11199876556395 644.5018272399902 298.11199876556395 644.5018272399902 298.11199876556395C644.5018272399902 298.11199876556395 805.6272840499878 298.11199876556395 805.6272840499878 298.11199876556395C805.6272840499878 298.11199876556395 966.7527408599854 298.11199876556395 966.7527408599854 298.11199876556395C966.7527408599854 298.11199876556395 966.7527408599854 298.11199876556395 966.7527408599854 298.11199876556395 "
                />
            </svg>
            {/* customizer js */}
            <div className="customizer-links">
                <button className="rtl-btn" data-bs-original-title="" title="">
                    RTL
                </button>
            </div>
            {/* ratio js */}
            {/* sidebar effect */}
            {/* Theme js */}
            <svg
                id="SvgjsSvg1001"
                width={2}
                height={0}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns: svgjs="http://svgjs.dev"
                style={{
                    overflow: "hidden",
                    top: "-100%",
                    left: "-100%",
                    position: "absolute",
                    opacity: 0
                }}
            >
                <defs id="SvgjsDefs1002" />
                <polyline id="SvgjsPolyline1003" points="0,0" />
                <path id="SvgjsPath1004" d="M0 0 " />
            </svg>
        </>
    )
}

export default NavSlide