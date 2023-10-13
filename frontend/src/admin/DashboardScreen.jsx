 

const DashboardScreen = () => {
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
              href="http://127.0.0.1:1000/admin"
              data-bs-original-title=""
              title=""
            >
              <img
                className="img-fluid main-logo"
                src="http://127.0.0.1:1000/assets_admin/images/logo/1.png"
                alt="logo"
              />
              <img
                className="img-fluid white-logo"
                src="http://127.0.0.1:1000/assets_admin/images/logo/1-white.png"
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
              href="http://127.0.0.1:1000/admin"
              data-bs-original-title=""
              title=""
            >
              <img
                src="http://127.0.0.1:1000/assets_admin/images/logo/1.png"
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
          <div className="form-group w-100">
            <div className="Typeahead Typeahead--twitterUsers">
              <div className="u-posRelative">
                <input
                  className="demo-input Typeahead-input form-control-plaintext w-100"
                  type="text"
                  placeholder="Search Fastkart .."
                  name="q"
                  title=""
                  autofocus=""
                  data-bs-original-title=""
                />
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
                  className="feather feather-x close-search"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
                <div className="spinner-border Typeahead-spinner" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div className="Typeahead-menu" />
            </div>
          </div>
        </form>
        <div className="nav-right col-6 pull-right right-header p-0">
          <ul className="nav-menus">
            <li>
              <span className="header-search">
                <i className="ri-search-line" />
              </span>
            </li>
            <li className="onhover-dropdown">
              <div className="notification-box">
                <i className="ri-notification-line" />
                <span className="badge rounded-pill badge-theme">4</span>
              </div>
              <ul className="notification-dropdown onhover-show-div">
                <li>
                  <i className="ri-notification-line" />
                  <h6 className="f-18 mb-0">Notitications</h6>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-primary" />
                    Delivery processing{" "}
                    <span className="pull-right">10 min.</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-success" />
                    Order Complete<span className="pull-right">1 hr</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-info" />
                    Tickets Generated<span className="pull-right">3 hr</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-danger" />
                    Delivery Complete<span className="pull-right">6 hr</span>
                  </p>
                </li>
                <li>
                  <a
                    className="btn btn-primary"
                    href="javascript:void(0)"
                    data-bs-original-title=""
                    title=""
                  >
                    Check all notification
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="mode">
                <i className="ri-moon-line" />
              </div>
            </li>
            <li className="profile-nav onhover-dropdown pe-0 me-0">
              <div className="media profile-media">
                <img
                  className="user-profile rounded-circle"
                  src="http://127.0.0.1:1000/assets_admin/images/users/4.jpg"
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
                    href="http://127.0.0.1:1000/admin/user"
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
                      className="feather feather-users"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>Users</span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:1000/admin/order-list"
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
                      className="feather feather-archive"
                    >
                      <polyline points="21 8 21 21 3 21 3 8" />
                      <rect x={1} y={3} width={22} height={5} />
                      <line x1={10} y1={12} x2={14} y2={12} />
                    </svg>
                    <span>Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="support-ticket.php"
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
                      className="feather feather-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Spports Tickets</span>
                  </a>
                </li>
                <li>
                  <a
                    href="profile-setting.php"
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
                      className="feather feather-settings"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    <span>Settings</span>
                  </a>
                </li>
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
              href="http://127.0.0.1:1000/admin"
              data-bs-original-title=""
              title=""
            >
              <img
                className="img-fluid for-white"
                src="http://127.0.0.1:1000/assets_admin/images/logo/full-white.png"
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
              href="http://127.0.0.1:1000/admin"
              data-bs-original-title=""
              title=""
            >
              <img
                className="img-fluid main-logo main-white"
                src="http://127.0.0.1:1000/assets_admin/images/logo/logo.png"
                alt="logo"
              />
              <img
                className="img-fluid main-logo main-dark"
                src="http://127.0.0.1:1000/assets_admin/images/logo/logo-white.png"
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
              <ul
                className="sidebar-links"
                id="simple-bar"
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        style={{ height: "100%", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
                          <li className="back-btn" />
                          <li className="sidebar-list">
                            <a
                              className="sidebar-link sidebar-title link-nav"
                              href="http://127.0.0.1:1000/admin"
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
                              className="linear-icon-link sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-store-3-line" />
                              <span>Product</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/product"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Prodcts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/product/create"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Add New Products
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="linear-icon-link sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-list-check-2" />
                              <span>Category</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/category"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Category List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/category/create"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Add New Category
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="linear-icon-link sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-list-settings-line" />
                              <span>Attributes</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/attribute"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Attributes
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/attribute/create"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Add Attributes
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-user-3-line" />
                              <span>Users</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/user"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  All users
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/user/create"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Add new user
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-user-3-line" />
                              <span>Roles</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/role"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  All roles
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/role/create"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Create Role
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="sidebar-link sidebar-title link-nav"
                              href="http://127.0.0.1:1000/admin/media"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-price-tag-3-line" />
                              <span>Media</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-archive-line" />
                              <span>Orders</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/order-list"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Order List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/order-detail"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Order Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/order-tracking"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Order Tracking
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="linear-icon-link sidebar-link sidebar-title"
                              href="javascript:void(0)"
                              data-bs-original-title=""
                              title=""
                            >
                              <i className="ri-price-tag-3-line" />
                              <span>Coupons</span>
                              <div className="according-menu">
                                <i className="ri-arrow-right-s-line" />
                              </div>
                            </a>
                            <ul
                              className="sidebar-submenu"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/coupon-list"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Coupon List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://127.0.0.1:1000/admin/coupon/create"
                                  data-bs-original-title=""
                                  title=""
                                >
                                  Create Coupon
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sidebar-list">
                            <a
                              className="sidebar-link sidebar-title link-nav"
                              href="http://127.0.0.1:1000/admin/product-review"
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
                    style={{ width: "auto", height: 530 }}
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
                    style={{
                      height: 0,
                      transform: "translate3d(0px, 0px, 0px)",
                      display: "none"
                    }}
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
                  href="http://127.0.0.1:1000/admin/logout"
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
      {/* Page Body Start*/}
      {/* index body start */}
      <div className="page-body">
        <div className="container-fluid">
          <div className="row">
            {/* chart caard section start */}
            <div className="col-sm-6 col-xxl-3 col-lg-6">
              <div className="main-tiles border-5 border-0  card-hover card o-hidden">
                <div className="custome-1-bg b-r-4 card-body">
                  <div className="media align-items-center static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Revenue</span>
                      <h4 className="mb-0 counter">
                        $6659
                        <span className="badge badge-light-primary grow">
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
                            className="feather feather-trending-up"
                          >
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                          </svg>
                          8.5%
                        </span>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-database-2-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3 col-lg-6">
              <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                <div className="custome-2-bg b-r-4 card-body">
                  <div className="media static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Orders</span>
                      <h4 className="mb-0 counter">
                        9856
                        <span className="badge badge-light-danger grow">
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
                            className="feather feather-trending-down"
                          >
                            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                            <polyline points="17 18 23 18 23 12" />
                          </svg>
                          8.5%
                        </span>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-shopping-bag-3-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3 col-lg-6">
              <div className="main-tiles border-5 card-hover border-0  card o-hidden">
                <div className="custome-3-bg b-r-4 card-body">
                  <div className="media static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Products</span>
                      <h4 className="mb-0 counter">
                        893
                        <a
                          href="add-new-product.html"
                          className="badge badge-light-secondary grow"
                          data-bs-original-title=""
                          title=""
                        >
                          ADD NEW
                        </a>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-chat-3-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3 col-lg-6">
              <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                <div className="custome-4-bg b-r-4 card-body">
                  <div className="media static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Customers</span>
                      <h4 className="mb-0 counter">
                        4.6k
                        <span className="badge badge-light-success grow">
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
                            className="feather feather-trending-down"
                          >
                            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                            <polyline points="17 18 23 18 23 12" />
                          </svg>
                          8.5%
                        </span>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-user-add-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card o-hidden card-hover">
                <div className="card-header border-0 pb-1">
                  <div className="card-header-title p-0">
                    <h4>Category</h4>
                  </div>
                </div>
                http://127.0.0.1:1000/
                <div className="card-body p-0">
                  <div className="category-slider no-arrow slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{ display: "inline-block" }}
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 4800,
                          transform: "translate3d(-1440px, 0px, 0px)"
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-12}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/meats.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Meats &amp; Seafood</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-11}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/breakfast.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Breakfast</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-10}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/frozen.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Frozen Foods</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-9}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/milk.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Milk &amp; Dairies</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-8}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/pet.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Pet Food</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-7}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/vegetable.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Vegetables &amp; Fruit</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-6}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/cup.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Beverages</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-5}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/meats.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Meats &amp; Seafood</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-4}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/breakfast.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Breakfast</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-3}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/frozen.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Frozen Foods</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-2}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/milk.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Milk &amp; Dairies</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/pet.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Pet Food</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={0}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/vegetable.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Vegetables &amp; Fruit</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={1}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/cup.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Beverages</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={2}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/meats.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Meats &amp; Seafood</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={3}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/breakfast.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Breakfast</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={4}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/frozen.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Frozen Foods</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={5}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/milk.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Milk &amp; Dairies</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={6}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/pet.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Pet Food</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={7}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/vegetable.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Vegetables &amp; Fruit</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={8}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/cup.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Beverages</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={9}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/meats.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Meats &amp; Seafood</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={10}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/breakfast.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Breakfast</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          style={{ width: 120 }}
                          tabIndex={0}
                          data-slick-index={11}
                          aria-hidden="false"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/frozen.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={0}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Frozen Foods</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={12}
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/milk.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Milk &amp; Dairies</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={13}
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/pet.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Pet Food</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={14}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/vegetable.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Vegetables &amp; Fruit</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={15}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/cup.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Beverages</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={16}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/meats.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Meats &amp; Seafood</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={17}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/breakfast.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Breakfast</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={18}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/frozen.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Frozen Foods</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={19}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/milk.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Milk &amp; Dairies</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={20}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/pet.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Pet Food</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={21}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/vegetable.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Vegetables &amp; Fruit</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={22}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/cup.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Beverages</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={23}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/meats.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Meats &amp; Seafood</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={24}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/breakfast.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Breakfast</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={25}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/frozen.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Frozen Foods</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={26}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/milk.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Milk &amp; Dairies</h6>
                            </a>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          style={{ width: 120 }}
                          tabIndex={-1}
                          data-slick-index={27}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="dashboard-category">
                            <a
                              href="javascript:void(0)"
                              className="category-image"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <img
                                src="http://127.0.0.1:1000/assets_admin/svg/pet.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="category-name"
                              tabIndex={-1}
                              data-bs-original-title=""
                              title=""
                            >
                              <h6>Pet Food</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="slick-next slick-arrow"
                      aria-label="Next"
                      type="button"
                      style={{ display: "inline-block" }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* chart card section End */}
            {/* Earning chart star*/}
            <div className="col-xl-6">
              <div className="card o-hidden card-hover">
                <div className="card-header border-0 pb-1">
                  <div className="card-header-title">
                    <h4>Revenue Report</h4>
                  </div>
                </div>
                <div className="card-body p-0" style={{ position: "relative" }}>
                  <div id="report-chart" style={{ minHeight: 335 }}>
                    <div
                      id="apexchartspkv8zyjv"
                      className="apexcharts-canvas apexchartspkv8zyjv light"
                      style={{ width: 668, height: 320 }}
                    >
                      <svg
                        id="SvgjsSvg1580"
                        width={668}
                        height={320}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        className="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                      >
                        <g
                          id="SvgjsG1582"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(66.50112724304199, 30)"
                        >
                          <defs id="SvgjsDefs1581">
                            <clipPath id="gridRectMaskpkv8zyjv">
                              <rect
                                id="SvgjsRect1589"
                                width="704.7527408599854"
                                height="252.42666563796996"
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                fill="#ffffff"
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskpkv8zyjv">
                              <rect
                                id="SvgjsRect1590"
                                width="702.7527408599854"
                                height="250.42666563796996"
                                x={-1}
                                y={-1}
                                rx={0}
                                ry={0}
                                fill="#ffffff"
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                              />
                            </clipPath>
                            <linearGradient
                              id="SvgjsLinearGradient1596"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={1}
                            >
                              <stop
                                id="SvgjsStop1597"
                                stopOpacity="0.7"
                                stopColor="rgba(13,164,135,0.7)"
                                offset={0}
                              />
                              <stop
                                id="SvgjsStop1598"
                                stopOpacity="0.6"
                                stopColor="rgba(255,255,255,0.6)"
                                offset="0.9"
                              />
                              <stop
                                id="SvgjsStop1599"
                                stopOpacity="0.6"
                                stopColor="rgba(255,255,255,0.6)"
                                offset={1}
                              />
                            </linearGradient>
                            <filter
                              id="SvgjsFilter1602"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                id="SvgjsFeFlood1603"
                                floodColor="#720f1e"
                                floodOpacity="0.15"
                                result="SvgjsFeFlood1603Out"
                                in="SourceGraphic"
                              />
                              <feComposite
                                id="SvgjsFeComposite1604"
                                in="SvgjsFeFlood1603Out"
                                in2="SourceAlpha"
                                operator="in"
                                result="SvgjsFeComposite1604Out"
                              />
                              <feOffset
                                id="SvgjsFeOffset1605"
                                dx={0}
                                dy={10}
                                result="SvgjsFeOffset1605Out"
                                in="SvgjsFeComposite1604Out"
                              />
                              <feGaussianBlur
                                id="SvgjsFeGaussianBlur1606"
                                stdDeviation={3}
                                result="SvgjsFeGaussianBlur1606Out"
                                in="SvgjsFeOffset1605Out"
                              />
                              <feMerge
                                id="SvgjsFeMerge1607"
                                result="SvgjsFeMerge1607Out"
                                in="SourceGraphic"
                              >
                                <feMergeNode
                                  id="SvgjsFeMergeNode1608"
                                  in="SvgjsFeGaussianBlur1606Out"
                                />
                                <feMergeNode
                                  id="SvgjsFeMergeNode1609"
                                  in="[object Arguments]"
                                />
                              </feMerge>
                              <feBlend
                                id="SvgjsFeBlend1610"
                                in="SourceGraphic"
                                in2="SvgjsFeMerge1607Out"
                                mode="normal"
                                result="SvgjsFeBlend1610Out"
                              />
                            </filter>
                            <filter
                              id="SvgjsFilter1613"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                id="SvgjsFeFlood1614"
                                floodColor="#720f1e"
                                floodOpacity="0.15"
                                result="SvgjsFeFlood1614Out"
                                in="SourceGraphic"
                              />
                              <feComposite
                                id="SvgjsFeComposite1615"
                                in="SvgjsFeFlood1614Out"
                                in2="SourceAlpha"
                                operator="in"
                                result="SvgjsFeComposite1615Out"
                              />
                              <feOffset
                                id="SvgjsFeOffset1616"
                                dx={0}
                                dy={10}
                                result="SvgjsFeOffset1616Out"
                                in="SvgjsFeComposite1615Out"
                              />
                              <feGaussianBlur
                                id="SvgjsFeGaussianBlur1617"
                                stdDeviation={3}
                                result="SvgjsFeGaussianBlur1617Out"
                                in="SvgjsFeOffset1616Out"
                              />
                              <feMerge
                                id="SvgjsFeMerge1618"
                                result="SvgjsFeMerge1618Out"
                                in="SourceGraphic"
                              >
                                <feMergeNode
                                  id="SvgjsFeMergeNode1619"
                                  in="SvgjsFeGaussianBlur1617Out"
                                />
                                <feMergeNode
                                  id="SvgjsFeMergeNode1620"
                                  in="[object Arguments]"
                                />
                              </feMerge>
                              <feBlend
                                id="SvgjsFeBlend1621"
                                in="SourceGraphic"
                                in2="SvgjsFeMerge1618Out"
                                mode="normal"
                                result="SvgjsFeBlend1621Out"
                              />
                            </filter>
                          </defs>
                          <line
                            id="SvgjsLine1586"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2="248.42666563796996"
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            className="apexcharts-xcrosshairs"
                            x={0}
                            y={0}
                            width={1}
                            height="248.42666563796996"
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <line
                            id="SvgjsLine1587"
                            x1={0}
                            y1={0}
                            x2="700.7527408599854"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={5}
                            strokeWidth={1}
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1588"
                            x1={0}
                            y1={0}
                            x2="700.7527408599854"
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1622"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1623"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText1624"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={0}
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1625"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  Jan
                                </tspan>
                                <title>Jan</title>
                              </text>
                              <text
                                id="SvgjsText1626"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="116.79212347666422"
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1627"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  Feb
                                </tspan>
                                <title>Feb</title>
                              </text>
                              <text
                                id="SvgjsText1628"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="233.58424695332846"
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1629"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  Mar
                                </tspan>
                                <title>Mar</title>
                              </text>
                              <text
                                id="SvgjsText1630"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="350.37637042999273"
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1631"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  April
                                </tspan>
                                <title>April</title>
                              </text>
                              <text
                                id="SvgjsText1632"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="467.1684939066569"
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1633"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  May
                                </tspan>
                                <title>May</title>
                              </text>
                              <text
                                id="SvgjsText1634"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="583.960617383321"
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1635"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  June
                                </tspan>
                                <title>June</title>
                              </text>
                              <text
                                id="SvgjsText1636"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="700.7527408599852"
                                y="277.42666563796996"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan
                                  id="SvgjsTspan1637"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  July
                                </tspan>
                                <title>July</title>
                              </text>
                            </g>
                          </g>
                          <g id="SvgjsG1646" className="apexcharts-grid">
                            <g
                              id="SvgjsG1647"
                              className="apexcharts-gridlines-horizontal"
                            />
                            <g
                              id="SvgjsG1648"
                              className="apexcharts-gridlines-vertical"
                            >
                              <line
                                id="SvgjsLine1649"
                                x1="116.79212347666423"
                                y1={0}
                                x2="116.79212347666423"
                                y2="248.42666563796996"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1650"
                                x1="233.58424695332846"
                                y1={0}
                                x2="233.58424695332846"
                                y2="248.42666563796996"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1651"
                                x1="350.3763704299927"
                                y1={0}
                                x2="350.3763704299927"
                                y2="248.42666563796996"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1652"
                                x1="467.1684939066569"
                                y1={0}
                                x2="467.1684939066569"
                                y2="248.42666563796996"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1653"
                                x1="583.9606173833212"
                                y1={0}
                                x2="583.9606173833212"
                                y2="248.42666563796996"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                            </g>
                            <line
                              id="SvgjsLine1655"
                              x1={0}
                              y1="248.42666563796996"
                              x2="700.7527408599854"
                              y2="248.42666563796996"
                              stroke="transparent"
                              strokeDasharray={0}
                            />
                            <line
                              id="SvgjsLine1654"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="248.42666563796996"
                              stroke="transparent"
                              strokeDasharray={0}
                            />
                          </g>
                          <g
                            id="SvgjsG1592"
                            className="apexcharts-area-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1593"
                              className="apexcharts-series"
                              seriesname="series1"
                              data:longestseries="true"
                              rel={1}
                              data:realindex={0}
                            >
                              <path
                                id="SvgjsPath1600"
                                d="M 0 248.42666563796996L 0 149.05599938278198C 40.877243216832476 149.05599938278198 75.91488025983176 124.21333281898498 116.79212347666423 124.21333281898498C 157.6693666934967 124.21333281898498 192.70700373649598 163.96159932106016 233.58424695332846 163.96159932106016C 274.4614901701609 163.96159932106016 309.4991272131602 171.41439929019927 350.3763704299927 171.41439929019927C 391.25361364682516 171.41439929019927 426.29125068982444 193.77279919761656 467.1684939066569 193.77279919761656C 508.0457371234894 193.77279919761656 543.0833741664887 27.32693322017667 583.9606173833212 27.32693322017667C 624.8378606001536 27.32693322017667 659.8754976431529 49.685333127593964 700.7527408599854 49.685333127593964C 700.7527408599854 49.685333127593964 700.7527408599854 49.685333127593964 700.7527408599854 248.42666563796996M 700.7527408599854 49.685333127593964z"
                                fill="url(#SvgjsLinearGradient1596)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMaskpkv8zyjv)"
                                filter="url(#SvgjsFilter1602)"
                                pathto="M 0 248.42666563796996L 0 149.05599938278198C 40.877243216832476 149.05599938278198 75.91488025983176 124.21333281898498 116.79212347666423 124.21333281898498C 157.6693666934967 124.21333281898498 192.70700373649598 163.96159932106016 233.58424695332846 163.96159932106016C 274.4614901701609 163.96159932106016 309.4991272131602 171.41439929019927 350.3763704299927 171.41439929019927C 391.25361364682516 171.41439929019927 426.29125068982444 193.77279919761656 467.1684939066569 193.77279919761656C 508.0457371234894 193.77279919761656 543.0833741664887 27.32693322017667 583.9606173833212 27.32693322017667C 624.8378606001536 27.32693322017667 659.8754976431529 49.685333127593964 700.7527408599854 49.685333127593964C 700.7527408599854 49.685333127593964 700.7527408599854 49.685333127593964 700.7527408599854 248.42666563796996M 700.7527408599854 49.685333127593964z"
                                pathfrom="M -1 298.11199876556395L -1 298.11199876556395L 116.79212347666423 298.11199876556395L 233.58424695332846 298.11199876556395L 350.3763704299927 298.11199876556395L 467.1684939066569 298.11199876556395L 583.9606173833212 298.11199876556395L 700.7527408599854 298.11199876556395"
                              />
                              <path
                                id="SvgjsPath1611"
                                d="M 0 149.05599938278198C 40.877243216832476 149.05599938278198 75.91488025983176 124.21333281898498 116.79212347666423 124.21333281898498C 157.6693666934967 124.21333281898498 192.70700373649598 163.96159932106016 233.58424695332846 163.96159932106016C 274.4614901701609 163.96159932106016 309.4991272131602 171.41439929019927 350.3763704299927 171.41439929019927C 391.25361364682516 171.41439929019927 426.29125068982444 193.77279919761656 467.1684939066569 193.77279919761656C 508.0457371234894 193.77279919761656 543.0833741664887 27.32693322017667 583.9606173833212 27.32693322017667C 624.8378606001536 27.32693322017667 659.8754976431529 49.685333127593964 700.7527408599854 49.685333127593964"
                                fill="none"
                                fillOpacity={1}
                                stroke="#0da487"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={4}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMaskpkv8zyjv)"
                                filter="url(#SvgjsFilter1613)"
                                pathto="M 0 149.05599938278198C 40.877243216832476 149.05599938278198 75.91488025983176 124.21333281898498 116.79212347666423 124.21333281898498C 157.6693666934967 124.21333281898498 192.70700373649598 163.96159932106016 233.58424695332846 163.96159932106016C 274.4614901701609 163.96159932106016 309.4991272131602 171.41439929019927 350.3763704299927 171.41439929019927C 391.25361364682516 171.41439929019927 426.29125068982444 193.77279919761656 467.1684939066569 193.77279919761656C 508.0457371234894 193.77279919761656 543.0833741664887 27.32693322017667 583.9606173833212 27.32693322017667C 624.8378606001536 27.32693322017667 659.8754976431529 49.685333127593964 700.7527408599854 49.685333127593964"
                                pathfrom="M -1 298.11199876556395L -1 298.11199876556395L 116.79212347666423 298.11199876556395L 233.58424695332846 298.11199876556395L 350.3763704299927 298.11199876556395L 467.1684939066569 298.11199876556395L 583.9606173833212 298.11199876556395L 700.7527408599854 298.11199876556395"
                              />
                              <g
                                id="SvgjsG1594"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1659"
                                    r={0}
                                    cx={0}
                                    cy={0}
                                    className="apexcharts-marker we9utg781f no-pointer-events"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={4}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1595"
                                className="apexcharts-datalabels"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1656"
                            className="apexcharts-yaxis-annotations"
                          />
                          <g
                            id="SvgjsG1657"
                            className="apexcharts-xaxis-annotations"
                          />
                          <g
                            id="SvgjsG1658"
                            className="apexcharts-point-annotations"
                          />
                        </g>
                        <rect
                          id="SvgjsRect1585"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          fill="#fefefe"
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                        />
                        <g
                          id="SvgjsG1638"
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(30.501127243041992, 0)"
                        >
                          <g
                            id="SvgjsG1639"
                            className="apexcharts-yaxis-texts-g"
                          >
                            <text
                              id="SvgjsText1640"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="31.5"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              $120
                            </text>
                            <text
                              id="SvgjsText1641"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="81.28533312759399"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              $100
                            </text>
                            <text
                              id="SvgjsText1642"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="131.07066625518797"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              $80
                            </text>
                            <text
                              id="SvgjsText1643"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="180.85599938278196"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              $60
                            </text>
                            <text
                              id="SvgjsText1644"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="230.64133251037595"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              $40
                            </text>
                            <text
                              id="SvgjsText1645"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="280.42666563796996"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              $20
                            </text>
                          </g>
                        </g>
                      </svg>
                      <div className="apexcharts-legend" />
                      <div className="apexcharts-tooltip light">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                        <div className="apexcharts-tooltip-series-group">
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(13, 164, 135)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-label" />
                              <span className="apexcharts-tooltip-text-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom light">
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: 669, height: 336 }} />
                    </div>
                    <div className="contract-trigger" />
                  </div>
                </div>
              </div>
            </div>
            {/* Earning chart  end*/}
            {/* Best Selling Product Start */}
            <div className="col-xl-6 col-md-12">
              <div className="card o-hidden card-hover">
                <div className="card-header card-header-top card-header--2 px-0 pt-0">
                  <div className="card-header-title">
                    <h4>Best Selling Product</h4>
                  </div>
                  <div className="best-selling-box d-sm-flex d-none">
                    <span>Short By:</span>
                    <div className="dropdown">
                      <button
                        className="btn p-0 dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        data-bs-original-title=""
                        title=""
                      >
                        Today
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-original-title=""
                            title=""
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-original-title=""
                            title=""
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-original-title=""
                            title=""
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div>
                    <div className="table-responsive">
                      <table
                        className="best-selling-table w-image
                                      w-image
                                      w-image table border-0"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-image">
                                  <img
                                    src="http://127.0.0.1:1000/assets_admin/images/product/1.png"
                                    className="img-fluid"
                                    alt="Product"
                                  />
                                </div>
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>26-08-2022</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$29.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Orders</h6>
                                <h5>62</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Stock</h6>
                                <h5>510</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Amount</h6>
                                <h5>$1,798</h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-image">
                                  <img
                                    src="http://127.0.0.1:1000/assets_admin/images/product/2.png"
                                    className="img-fluid"
                                    alt="Product"
                                  />
                                </div>
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>26-08-2022</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$29.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Orders</h6>
                                <h5>62</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Stock</h6>
                                <h5>510</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Amount</h6>
                                <h5>$1,798</h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-image">
                                  <img
                                    src="http://127.0.0.1:1000/assets_admin/images/product/3.png"
                                    className="img-fluid"
                                    alt="Product"
                                  />
                                </div>
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>26-08-2022</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$29.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Orders</h6>
                                <h5>62</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Stock</h6>
                                <h5>510</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Amount</h6>
                                <h5>$1,798</h5>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Best Selling Product End */}
            {/* Recent orders start*/}
            <div className="col-xl-6">
              <div className="card o-hidden card-hover">
                <div className="card-header card-header-top card-header--2 px-0 pt-0">
                  <div className="card-header-title">
                    <h4>Recent Orders</h4>
                  </div>
                  <div className="best-selling-box d-sm-flex d-none">
                    <span>Short By:</span>
                    <div className="dropdown">
                      <button
                        className="btn p-0 dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        data-bs-original-title=""
                        title=""
                      >
                        Today
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-original-title=""
                            title=""
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-original-title=""
                            title=""
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-original-title=""
                            title=""
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div>
                    <div className="table-responsive">
                      <table className="best-selling-table table border-0">
                        <tbody>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>#64548</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Date Placed</h6>
                                <h5>5/1/22</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$250.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Order Status</h6>
                                <h5>Completed</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Payment</h6>
                                <h5 className="text-danger">Unpaid</h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>26-08-2022</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Date Placed</h6>
                                <h5>5/1/22</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$250.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Order Status</h6>
                                <h5>Completed</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Payment</h6>
                                <h5 className="theme-color">Paid</h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>26-08-2022</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Date Placed</h6>
                                <h5>5/1/22</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$250.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Order Status</h6>
                                <h5>Completed</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Payment</h6>
                                <h5 className="theme-color">Paid</h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="best-product-box">
                                <div className="product-name">
                                  <h5>Aata Buscuit</h5>
                                  <h6>26-08-2022</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Date Placed</h6>
                                <h5>5/1/22</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Price</h6>
                                <h5>$250.00</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Order Status</h6>
                                <h5>Completed</h5>
                              </div>
                            </td>
                            <td>
                              <div className="product-detail-box">
                                <h6>Payment</h6>
                                <h5 className="theme-color">Paid</h5>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent orders end*/}
            {/* Earning chart star*/}
            <div className="col-xl-6">
              <div className="card o-hidden card-hover">
                <div className="card-header border-0 mb-0">
                  <div className="card-header-title">
                    <h4>Earning</h4>
                  </div>
                </div>
                <div className="card-body p-0" style={{ position: "relative" }}>
                  <div id="bar-chart-earning" style={{ minHeight: 335 }}>
                    <div
                      id="apexchartssfenvpnq"
                      className="apexcharts-canvas apexchartssfenvpnq light zoomable"
                      style={{ width: 668, height: 320 }}
                    >
                      <svg
                        id="SvgjsSvg1792"
                        width={668}
                        height={320}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        className="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                      >
                        <g
                          id="SvgjsG1794"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(56.88962936401367, 30)"
                        >
                          <defs id="SvgjsDefs1793">
                            <clipPath id="gridRectMasksfenvpnq">
                              <rect
                                id="SvgjsRect1799"
                                width="606.1103706359863"
                                height={275}
                                x="-2.5"
                                y="-2.5"
                                rx={0}
                                ry={0}
                                fill="#ffffff"
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMasksfenvpnq">
                              <rect
                                id="SvgjsRect1800"
                                width="605.1103706359863"
                                height={274}
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                fill="#ffffff"
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                              />
                            </clipPath>
                          </defs>
                          <line
                            id="SvgjsLine1798"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={270}
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            className="apexcharts-xcrosshairs"
                            x={0}
                            y={0}
                            width={1}
                            height={270}
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g
                            id="SvgjsG1857"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1858"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            />
                            <line
                              id="SvgjsLine1859"
                              x1={0}
                              y1={271}
                              x2="601.1103706359863"
                              y2={271}
                              stroke="#78909c"
                              strokeDasharray={0}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="SvgjsG1869" className="apexcharts-grid">
                            <g
                              id="SvgjsG1870"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1882"
                                x1={0}
                                y1={0}
                                x2="601.1103706359863"
                                y2={0}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1883"
                                x1={0}
                                y1={45}
                                x2="601.1103706359863"
                                y2={45}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1884"
                                x1={0}
                                y1={90}
                                x2="601.1103706359863"
                                y2={90}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1885"
                                x1={0}
                                y1={135}
                                x2="601.1103706359863"
                                y2={135}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1886"
                                x1={0}
                                y1={180}
                                x2="601.1103706359863"
                                y2={180}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1887"
                                x1={0}
                                y1={225}
                                x2="601.1103706359863"
                                y2={225}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1888"
                                x1={0}
                                y1={270}
                                x2="601.1103706359863"
                                y2={270}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1871"
                              className="apexcharts-gridlines-vertical"
                            />
                            <line
                              id="SvgjsLine1872"
                              x1="54.64639733054421"
                              y1={271}
                              x2="54.64639733054421"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1873"
                              x1="109.29279466108842"
                              y1={271}
                              x2="109.29279466108842"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1874"
                              x1="163.93919199163264"
                              y1={271}
                              x2="163.93919199163264"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1875"
                              x1="218.58558932217684"
                              y1={271}
                              x2="218.58558932217684"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1876"
                              x1="273.23198665272105"
                              y1={271}
                              x2="273.23198665272105"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1877"
                              x1="327.8783839832653"
                              y1={271}
                              x2="327.8783839832653"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1878"
                              x1="382.5247813138095"
                              y1={271}
                              x2="382.5247813138095"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1879"
                              x1="437.17117864435374"
                              y1={271}
                              x2="437.17117864435374"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1880"
                              x1="491.817575974898"
                              y1={271}
                              x2="491.817575974898"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1881"
                              x1="546.4639733054422"
                              y1={271}
                              x2="546.4639733054422"
                              y2={277}
                              stroke="#78909c"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1890"
                              x1={0}
                              y1={270}
                              x2="601.1103706359863"
                              y2={270}
                              stroke="transparent"
                              strokeDasharray={0}
                            />
                            <line
                              id="SvgjsLine1889"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2={270}
                              stroke="transparent"
                              strokeDasharray={0}
                            />
                          </g>
                          <g
                            id="SvgjsG1802"
                            className="apexcharts-line-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1830"
                              className="apexcharts-series"
                              seriesname="seriesx2"
                              data:longestseries="true"
                              rel={2}
                              data:realindex={1}
                            >
                              <path
                                id="SvgjsPath1856"
                                d="M 0 74.25L 54.64639733054421 141.75L 109.29279466108842 103.5L 163.93919199163264 47.25L 218.58558932217684 101.25L 273.23198665272105 184.5L 327.8783839832653 130.5L 382.5247813138095 164.25L 437.1711786443537 85.5L 491.8175759748979 144L 546.4639733054421 168.75L 601.1103706359863 164.25"
                                fill="none"
                                fillOpacity={1}
                                stroke="rgba(36,131,226,0.85)"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={5}
                                strokeDasharray={0}
                                className="apexcharts-line"
                                index={1}
                                clipPath="url(#gridRectMasksfenvpnq)"
                                pathto="M 0 74.25L 54.64639733054421 141.75L 109.29279466108842 103.5L 163.93919199163264 47.25L 218.58558932217684 101.25L 273.23198665272105 184.5L 327.8783839832653 130.5L 382.5247813138095 164.25L 437.1711786443537 85.5L 491.8175759748979 144L 546.4639733054421 168.75L 601.1103706359863 164.25"
                                pathfrom="M -1 270L -1 270L 54.64639733054421 270L 109.29279466108842 270L 163.93919199163264 270L 218.58558932217684 270L 273.23198665272105 270L 327.8783839832653 270L 382.5247813138095 270L 437.1711786443537 270L 491.8175759748979 270L 546.4639733054421 270L 601.1103706359863 270"
                              />
                              <g
                                id="SvgjsG1831"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g
                                  id="SvgjsG1833"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1834"
                                    r={1}
                                    cx={0}
                                    cy="74.25"
                                    className="apexcharts-marker no-pointer-events wgsryt54g"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={0}
                                    j={0}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                  <circle
                                    id="SvgjsCircle1835"
                                    r={1}
                                    cx="54.64639733054421"
                                    cy="141.75"
                                    className="apexcharts-marker no-pointer-events wltvspylx"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={1}
                                    j={1}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1836"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1837"
                                    r={1}
                                    cx="109.29279466108842"
                                    cy="103.5"
                                    className="apexcharts-marker no-pointer-events w0yghxwil"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={2}
                                    j={2}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1838"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1839"
                                    r={1}
                                    cx="163.93919199163264"
                                    cy="47.25"
                                    className="apexcharts-marker no-pointer-events ws3rws3q"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={3}
                                    j={3}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1840"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1841"
                                    r={1}
                                    cx="218.58558932217684"
                                    cy="101.25"
                                    className="apexcharts-marker no-pointer-events wnibzds76"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={4}
                                    j={4}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1842"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1843"
                                    r={1}
                                    cx="273.23198665272105"
                                    cy="184.5"
                                    className="apexcharts-marker no-pointer-events wnovvj2xh"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={5}
                                    j={5}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1844"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1845"
                                    r={1}
                                    cx="327.8783839832653"
                                    cy="130.5"
                                    className="apexcharts-marker no-pointer-events w1dl557kkh"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={6}
                                    j={6}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1846"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1847"
                                    r={1}
                                    cx="382.5247813138095"
                                    cy="164.25"
                                    className="apexcharts-marker no-pointer-events wq3ctqigdh"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={7}
                                    j={7}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1848"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1849"
                                    r={1}
                                    cx="437.1711786443537"
                                    cy="85.5"
                                    className="apexcharts-marker no-pointer-events w2hgk4b9o"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={8}
                                    j={8}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1850"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1851"
                                    r={1}
                                    cx="491.8175759748979"
                                    cy={144}
                                    className="apexcharts-marker no-pointer-events w7u6ngh5t"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={9}
                                    j={9}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1852"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1853"
                                    r={1}
                                    cx="546.4639733054421"
                                    cy="168.75"
                                    className="apexcharts-marker no-pointer-events wsjsnjonm"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={10}
                                    j={10}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1854"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1855"
                                    r={1}
                                    cx="601.1103706359863"
                                    cy="164.25"
                                    className="apexcharts-marker no-pointer-events wtto1u1xwh"
                                    stroke="#ffffff"
                                    fill="#2483e2"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={11}
                                    j={11}
                                    index={1}
                                    default-marker-size={1}
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1832"
                                className="apexcharts-datalabels"
                              />
                            </g>
                            <g
                              id="SvgjsG1803"
                              className="apexcharts-series"
                              seriesname="seriesx1"
                              data:longestseries="true"
                              rel={1}
                              data:realindex={0}
                            >
                              <path
                                id="SvgjsPath1829"
                                d="M 0 191.25L 54.64639733054421 177.75L 109.29279466108842 130.5L 163.93919199163264 175.5L 218.58558932217684 240.75L 273.23198665272105 229.5L 327.8783839832653 204.75L 382.5247813138095 186.75L 437.1711786443537 189L 491.8175759748979 155.25L 546.4639733054421 198L 601.1103706359863 191.25"
                                fill="none"
                                fillOpacity={1}
                                stroke="rgba(13,164,135,0.85)"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={5}
                                strokeDasharray={0}
                                className="apexcharts-line"
                                index={0}
                                clipPath="url(#gridRectMasksfenvpnq)"
                                pathto="M 0 191.25L 54.64639733054421 177.75L 109.29279466108842 130.5L 163.93919199163264 175.5L 218.58558932217684 240.75L 273.23198665272105 229.5L 327.8783839832653 204.75L 382.5247813138095 186.75L 437.1711786443537 189L 491.8175759748979 155.25L 546.4639733054421 198L 601.1103706359863 191.25"
                                pathfrom="M -1 270L -1 270L 54.64639733054421 270L 109.29279466108842 270L 163.93919199163264 270L 218.58558932217684 270L 273.23198665272105 270L 327.8783839832653 270L 382.5247813138095 270L 437.1711786443537 270L 491.8175759748979 270L 546.4639733054421 270L 601.1103706359863 270"
                              />
                              <g
                                id="SvgjsG1804"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g
                                  id="SvgjsG1806"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1807"
                                    r={1}
                                    cx={0}
                                    cy="191.25"
                                    className="apexcharts-marker no-pointer-events w4y68lthjf"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={0}
                                    j={0}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                  <circle
                                    id="SvgjsCircle1808"
                                    r={1}
                                    cx="54.64639733054421"
                                    cy="177.75"
                                    className="apexcharts-marker no-pointer-events ww0q6hcwh"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={1}
                                    j={1}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1809"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1810"
                                    r={1}
                                    cx="109.29279466108842"
                                    cy="130.5"
                                    className="apexcharts-marker no-pointer-events wx4j616yk"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={2}
                                    j={2}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1811"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1812"
                                    r={1}
                                    cx="163.93919199163264"
                                    cy="175.5"
                                    className="apexcharts-marker no-pointer-events w8e8778sm"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={3}
                                    j={3}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1813"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1814"
                                    r={1}
                                    cx="218.58558932217684"
                                    cy="240.75"
                                    className="apexcharts-marker no-pointer-events wvhme67xq"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={4}
                                    j={4}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1815"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1816"
                                    r={1}
                                    cx="273.23198665272105"
                                    cy="229.5"
                                    className="apexcharts-marker no-pointer-events w1umsa3u3"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={5}
                                    j={5}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1817"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1818"
                                    r={1}
                                    cx="327.8783839832653"
                                    cy="204.75"
                                    className="apexcharts-marker no-pointer-events w9v28krjw"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={6}
                                    j={6}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1819"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1820"
                                    r={1}
                                    cx="382.5247813138095"
                                    cy="186.75"
                                    className="apexcharts-marker no-pointer-events wihn4n56t"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={7}
                                    j={7}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1821"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1822"
                                    r={1}
                                    cx="437.1711786443537"
                                    cy={189}
                                    className="apexcharts-marker no-pointer-events whhehwn1n"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={8}
                                    j={8}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1823"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1824"
                                    r={1}
                                    cx="491.8175759748979"
                                    cy="155.25"
                                    className="apexcharts-marker no-pointer-events w5mvhbio4i"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={9}
                                    j={9}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1825"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1826"
                                    r={1}
                                    cx="546.4639733054421"
                                    cy={198}
                                    className="apexcharts-marker no-pointer-events w7jvy25ptg"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={10}
                                    j={10}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1827"
                                  className="apexcharts-series-markers"
                                  clipPath="url(#gridRectMarkerMasksfenvpnq)"
                                >
                                  <circle
                                    id="SvgjsCircle1828"
                                    r={1}
                                    cx="601.1103706359863"
                                    cy="191.25"
                                    className="apexcharts-marker no-pointer-events wokzsk2rwg"
                                    stroke="#ffffff"
                                    fill="#0da487"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    rel={11}
                                    j={11}
                                    index={0}
                                    default-marker-size={1}
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1805"
                                className="apexcharts-datalabels"
                              />
                            </g>
                          </g>
                          <line
                            id="SvgjsLine1891"
                            x1={0}
                            y1={0}
                            x2="601.1103706359863"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1892"
                            x1={0}
                            y1={0}
                            x2="601.1103706359863"
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1893"
                            className="apexcharts-yaxis-annotations"
                          />
                          <g
                            id="SvgjsG1894"
                            className="apexcharts-xaxis-annotations"
                          />
                          <g
                            id="SvgjsG1895"
                            className="apexcharts-point-annotations"
                          />
                          <rect
                            id="SvgjsRect1896"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            fill="#fefefe"
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            className="apexcharts-zoom-rect"
                          />
                          <rect
                            id="SvgjsRect1897"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            fill="#fefefe"
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            className="apexcharts-selection-rect"
                          />
                        </g>
                        <rect
                          id="SvgjsRect1797"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          fill="#fefefe"
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                        />
                        <g
                          id="SvgjsG1860"
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(23.889629364013672, 0)"
                        >
                          <g
                            id="SvgjsG1861"
                            className="apexcharts-yaxis-texts-g"
                          >
                            <text
                              id="SvgjsText1862"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="31.6"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              120
                            </text>
                            <text
                              id="SvgjsText1863"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="76.69999999999999"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              100
                            </text>
                            <text
                              id="SvgjsText1864"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="121.79999999999998"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              80
                            </text>
                            <text
                              id="SvgjsText1865"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="166.89999999999998"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              60
                            </text>
                            <text
                              id="SvgjsText1866"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="211.99999999999997"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              40
                            </text>
                            <text
                              id="SvgjsText1867"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="257.09999999999997"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              20
                            </text>
                            <text
                              id="SvgjsText1868"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="302.2"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight="regular"
                              fill="#373d3f"
                              className="apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              0
                            </text>
                          </g>
                        </g>
                      </svg>
                      <div className="apexcharts-legend" />
                      <div className="apexcharts-tooltip light">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                        <div className="apexcharts-tooltip-series-group">
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(13, 164, 135)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-label" />
                              <span className="apexcharts-tooltip-text-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-tooltip-series-group">
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(36, 131, 226)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-label" />
                              <span className="apexcharts-tooltip-text-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom light">
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                      </div>
                      <div className="apexcharts-toolbar">
                        <div
                          className="apexcharts-zoom-in-icon"
                          title="Zoom In"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                        </div>
                        <div
                          className="apexcharts-zoom-out-icon"
                          title="Zoom Out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                        </div>
                        <div
                          className="apexcharts-zoom-icon selected"
                          title="Selection Zoom"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                          </svg>
                        </div>
                        <div className="apexcharts-pan-icon" title="Panning">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="#000000"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <defs>
                              <path d="M0 0h24v24H0z" id="a" />
                            </defs>
                            <clipPath id="b">
                              <use overflow="visible" xlinkHref="#a" />
                            </clipPath>
                            <path
                              clipPath="url(#b)"
                              d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"
                            />
                          </svg>
                        </div>
                        <div
                          className="apexcharts-reset-zoom-icon"
                          title="Reset Zoom"
                        >
                          <svg
                            fill="#000000"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </div>
                        <div className="apexcharts-menu-icon" title="Menu">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                          </svg>
                        </div>
                        <div className="apexcharts-menu">
                          <div
                            className="apexcharts-menu-item exportSVG"
                            title="Download SVG"
                          >
                            Download SVG
                          </div>
                          <div
                            className="apexcharts-menu-item exportPNG"
                            title="Download PNG"
                          >
                            Download PNG
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: 669, height: 336 }} />
                    </div>
                    <div className="contract-trigger" />
                  </div>
                </div>
              </div>
            </div>
            {/* Earning chart end*/}
            {/* Transactions start*/}
            <div className="col-xxl-4 col-md-6">
              <div className="card o-hidden card-hover">
                <div className="card-header border-0">
                  <div className="card-header-title">
                    <h4>Transactions</h4>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div>
                    <div className="table-responsive">
                      <table className="user-table transactions-table table border-0">
                        <tbody>
                          <tr>
                            <td>
                              <div className="transactions-icon">
                                <i className="ri-shield-line" />
                              </div>
                              <div className="transactions-name">
                                <h6>Wallets</h6>
                                <p>Starbucks</p>
                              </div>
                            </td>
                            <td className="lost">-$74</td>
                          </tr>
                          <tr>
                            <td className="td-color-1">
                              <div className="transactions-icon">
                                <i className="ri-check-line" />
                              </div>
                              <div className="transactions-name">
                                <h6>Bank Transfer</h6>
                                <p>Add Money</p>
                              </div>
                            </td>
                            <td className="success">+$125</td>
                          </tr>
                          <tr>
                            <td className="td-color-2">
                              <div className="transactions-icon">
                                <i className="ri-exchange-dollar-line" />
                              </div>
                              <div className="transactions-name">
                                <h6>Paypal</h6>
                                <p>Add Money</p>
                              </div>
                            </td>
                            <td className="lost">-$50</td>
                          </tr>
                          <tr>
                            <td className="td-color-3">
                              <div className="transactions-icon">
                                <i className="ri-bank-card-line" />
                              </div>
                              <div className="transactions-name">
                                <h6>Mastercard</h6>
                                <p>Ordered Food</p>
                              </div>
                            </td>
                            <td className="lost">-$40</td>
                          </tr>
                          <tr>
                            <td className="td-color-4 pb-0">
                              <div className="transactions-icon">
                                <i className="ri-bar-chart-grouped-line" />
                              </div>
                              <div className="transactions-name">
                                <h6>Transfer</h6>
                                <p>Refund</p>
                              </div>
                            </td>
                            <td className="success pb-0">+$90</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Transactions end*/}
            {/* visitors chart start*/}
            <div className="col-xxl-4 col-md-6">
              <div className="h-100">
                <div className="card o-hidden card-hover">
                  <div className="card-header border-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="card-header-title">
                        <h4>Visitors</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="pie-chart" style={{ position: "relative" }}>
                      <div
                        id="pie-chart-visitors"
                        style={{ minHeight: "265.1px" }}
                      >
                        <div
                          id="apexchartsvy8exvhwk"
                          className="apexcharts-canvas apexchartsvy8exvhwk light"
                          style={{ width: 420, height: "265.1px" }}
                        >
                          <svg
                            id="SvgjsSvg1770"
                            width={420}
                            height="265.1002739696968"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            className="apexcharts-svg"
                            xmlns:data="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject
                              x={0}
                              y={0}
                              width={420}
                              height="265.1002739696968"
                            >
                              <div
                                className="apexcharts-legend center position-bottom"
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                  inset: "auto 0px 20px 21px",
                                  position: "absolute"
                                }}
                              >
                                <div
                                  className="apexcharts-legend-series"
                                  rel={1}
                                  data:collapsed="false"
                                  style={{ margin: "5px 1px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={1}
                                    data:collapsed="false"
                                    style={{
                                      background: "rgb(40, 200, 112)",
                                      color: "rgb(40, 200, 112)",
                                      height: 10,
                                      width: 10,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={1}
                                    i={0}
                                    data:default-text="The%20Passersby"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 10,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                  >
                                    The Passersby
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel={2}
                                  data:collapsed="false"
                                  style={{ margin: "5px 1px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={2}
                                    data:collapsed="false"
                                    style={{
                                      background: "rgb(255, 160, 68)",
                                      color: "rgb(255, 160, 68)",
                                      height: 10,
                                      width: 10,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={2}
                                    i={1}
                                    data:default-text="The%20Occasionals"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 10,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                  >
                                    The Occasionals
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel={3}
                                  data:collapsed="false"
                                  style={{ margin: "5px 1px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={3}
                                    data:collapsed="false"
                                    style={{
                                      background: "rgb(158, 101, 194)",
                                      color: "rgb(158, 101, 194)",
                                      height: 10,
                                      width: 10,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={3}
                                    i={2}
                                    data:default-text="The%20Regulars"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 10,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                  >
                                    The Regulars
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel={4}
                                  data:collapsed="false"
                                  style={{ margin: "5px 1px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={4}
                                    data:collapsed="false"
                                    style={{
                                      background: "rgb(102, 112, 189)",
                                      color: "rgb(102, 112, 189)",
                                      height: 10,
                                      width: 10,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={4}
                                    i={3}
                                    data:default-text="The%20Superfans"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 10,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                  >
                                    The Superfans
                                  </span>
                                </div>
                              </div>
                              <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n      }\t\n      \t\n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                                }}
                              />
                            </foreignObject>
                            <g
                              id="SvgjsG1772"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(138.1111125946045, 0)"
                            >
                              <defs id="SvgjsDefs1771">
                                <clipPath id="gridRectMaskvy8exvhwk">
                                  <rect
                                    id="SvgjsRect1773"
                                    width="147.77777481079102"
                                    height="159.77777481079102"
                                    x={-1}
                                    y={-1}
                                    rx={0}
                                    ry={0}
                                    fill="#ffffff"
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                  />
                                </clipPath>
                                <clipPath id="gridRectMarkerMaskvy8exvhwk">
                                  <rect
                                    id="SvgjsRect1774"
                                    width="147.77777481079102"
                                    height="159.77777481079102"
                                    x={-1}
                                    y={-1}
                                    rx={0}
                                    ry={0}
                                    fill="#ffffff"
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                  />
                                </clipPath>
                              </defs>
                              <g
                                id="SvgjsG1776"
                                className="apexcharts-pie"
                                data:innertranslatex={0}
                                data:innertranslatey={-25}
                              >
                                <g
                                  id="SvgjsG1777"
                                  transform="translate(0, -5) scale(1)"
                                >
                                  <circle
                                    id="SvgjsCircle1778"
                                    r="62.68536585365854"
                                    cx="72.88888740539551"
                                    cy={105}
                                    fill="transparent"
                                  />
                                  <g
                                    id="SvgjsG1779"
                                    className="apexcharts-slices"
                                  >
                                    <g
                                      id="SvgjsG1780"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="ThexPassersby"
                                      rel={1}
                                      data:realindex={0}
                                    >
                                      <path
                                        id="SvgjsPath1781"
                                        d="M 72.88888740539551 8.560975609756085 A 96.43902439024392 96.43902439024392 0 0 1 167.59066211137377 123.22249414542911 L 134.44504096428136 116.84462119452893 A 62.68536585365854 62.68536585365854 0 0 0 72.88888740539551 42.31463414634146 L 72.88888740539551 8.560975609756085 z"
                                        fill="rgba(40,200,112,1)"
                                        fillOpacity={1}
                                        stroke="#ffffff"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={2}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-donut-slice-0"
                                        index={0}
                                        j={0}
                                        data:angle="100.89171974522293"
                                        data:startangle={0}
                                        data:strokewidth={2}
                                        data:value={44}
                                        data:pathorig="M 72.88888740539551 8.560975609756085 A 96.43902439024392 96.43902439024392 0 0 1 167.59066211137377 123.22249414542911 L 134.44504096428136 116.84462119452893 A 62.68536585365854 62.68536585365854 0 0 0 72.88888740539551 42.31463414634146 L 72.88888740539551 8.560975609756085 z"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1782"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="ThexOccasionals"
                                      rel={2}
                                      data:realindex={1}
                                    >
                                      <path
                                        id="SvgjsPath1783"
                                        d="M 167.59066211137377 123.22249414542911 A 96.43902439024392 96.43902439024392 0 0 1 2.3505387488142873 170.76341531691193 L 27.03896077861772 147.74621995599276 A 62.68536585365854 62.68536585365854 0 0 0 134.44504096428136 116.84462119452893 L 167.59066211137377 123.22249414542911 z"
                                        fill="rgba(255,160,68,1)"
                                        fillOpacity={1}
                                        stroke="#ffffff"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={2}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-donut-slice-1"
                                        index={0}
                                        j={1}
                                        data:angle="126.11464968152865"
                                        data:startangle="100.89171974522293"
                                        data:strokewidth={2}
                                        data:value={55}
                                        data:pathorig="M 167.59066211137377 123.22249414542911 A 96.43902439024392 96.43902439024392 0 0 1 2.3505387488142873 170.76341531691193 L 27.03896077861772 147.74621995599276 A 62.68536585365854 62.68536585365854 0 0 0 134.44504096428136 116.84462119452893 L 167.59066211137377 123.22249414542911 z"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1784"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="ThexRegulars"
                                      rel={3}
                                      data:realindex={2}
                                    >
                                      <path
                                        id="SvgjsPath1785"
                                        d="M 2.3505387488142873 170.76341531691193 A 96.43902439024392 96.43902439024392 0 0 1 12.2228413092245 30.032565227298093 L 33.455957442884355 56.27116739774376 A 62.68536585365854 62.68536585365854 0 0 0 27.03896077861772 147.74621995599276 L 2.3505387488142873 170.76341531691193 z"
                                        fill="rgba(158,101,194,1)"
                                        fillOpacity={1}
                                        stroke="#ffffff"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={2}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-donut-slice-2"
                                        index={0}
                                        j={2}
                                        data:angle="94.01273885350315"
                                        data:startangle="227.00636942675158"
                                        data:strokewidth={2}
                                        data:value={41}
                                        data:pathorig="M 2.3505387488142873 170.76341531691193 A 96.43902439024392 96.43902439024392 0 0 1 12.2228413092245 30.032565227298093 L 33.455957442884355 56.27116739774376 A 62.68536585365854 62.68536585365854 0 0 0 27.03896077861772 147.74621995599276 L 2.3505387488142873 170.76341531691193 z"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1786"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="ThexSuperfans"
                                      rel={4}
                                      data:realindex={3}
                                    >
                                      <path
                                        id="SvgjsPath1787"
                                        d="M 12.2228413092245 30.032565227298093 A 96.43902439024392 96.43902439024392 0 0 1 72.87205562045074 8.560977078606413 L 72.8779467451814 42.314635101094176 A 62.68536585365854 62.68536585365854 0 0 0 33.455957442884355 56.27116739774376 L 12.2228413092245 30.032565227298093 z"
                                        fill="rgba(102,112,189,1)"
                                        fillOpacity={1}
                                        stroke="#ffffff"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={2}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-donut-slice-3"
                                        index={0}
                                        j={3}
                                        data:angle="38.980891719745216"
                                        data:startangle="321.0191082802547"
                                        data:strokewidth={2}
                                        data:value={17}
                                        data:pathorig="M 12.2228413092245 30.032565227298093 A 96.43902439024392 96.43902439024392 0 0 1 72.87205562045074 8.560977078606413 L 72.8779467451814 42.314635101094176 A 62.68536585365854 62.68536585365854 0 0 0 33.455957442884355 56.27116739774376 L 12.2228413092245 30.032565227298093 z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1788"
                                x1={0}
                                y1={0}
                                x2="145.77777481079102"
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1789"
                                x1={0}
                                y1={0}
                                x2="145.77777481079102"
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                          </svg>
                          <div className="apexcharts-tooltip dark">
                            <div className="apexcharts-tooltip-series-group">
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(40, 200, 112)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-label" />
                                  <span className="apexcharts-tooltip-text-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div className="apexcharts-tooltip-series-group">
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(255, 160, 68)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-label" />
                                  <span className="apexcharts-tooltip-text-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div className="apexcharts-tooltip-series-group">
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{
                                  backgroundColor: "rgb(158, 101, 194)"
                                }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-label" />
                                  <span className="apexcharts-tooltip-text-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div className="apexcharts-tooltip-series-group">
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{
                                  backgroundColor: "rgb(102, 112, 189)"
                                }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-label" />
                                  <span className="apexcharts-tooltip-text-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="resize-triggers">
                        <div className="expand-trigger">
                          <div style={{ width: 421, height: 266 }} />
                        </div>
                        <div className="contract-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* visitors chart end*/}
            {/* To Do List start*/}
            <div className="col-xxl-4 col-md-6">
              <div className="card o-hidden card-hover">
                <div className="card-header border-0">
                  <div className="card-header-title">
                    <h4>To Do List</h4>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <ul className="to-do-list">
                    <li className="to-do-item">
                      <div className="form-check user-checkbox">
                        <input
                          className="checkbox_animated check-it"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          data-bs-original-title=""
                          title=""
                        />
                      </div>
                      <div className="to-do-list-name">
                        <strong>Pick up kids from school</strong>
                        <p>8 Hours</p>
                      </div>
                    </li>
                    <li className="to-do-item">
                      <div className="form-check user-checkbox">
                        <input
                          className="checkbox_animated check-it"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault1"
                          data-bs-original-title=""
                          title=""
                        />
                      </div>
                      <div className="to-do-list-name">
                        <strong>Prepare or presentation.</strong>
                        <p>8 Hours</p>
                      </div>
                    </li>
                    <li className="to-do-item">
                      <div className="form-check user-checkbox">
                        <input
                          className="checkbox_animated check-it"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault2"
                          data-bs-original-title=""
                          title=""
                        />
                      </div>
                      <div className="to-do-list-name">
                        <strong>Create invoice</strong>
                        <p>8 Hours</p>
                      </div>
                    </li>
                    <li className="to-do-item">
                      <div className="form-check user-checkbox">
                        <input
                          className="checkbox_animated check-it"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault3"
                          data-bs-original-title=""
                          title=""
                        />
                      </div>
                      <div className="to-do-list-name">
                        <strong>Meeting with Alisa</strong>
                        <p>8 Hours</p>
                      </div>
                    </li>
                    <li className="to-do-item">
                      <form className="row g-2">
                        <div className="col-8">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Task Name"
                            data-bs-original-title=""
                            title=""
                          />
                        </div>
                        <div className="col-4">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 h-100"
                            data-bs-original-title=""
                            title=""
                          >
                            Add task
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* To Do List end*/}
          </div>
        </div>
        {/* Container-fluid Ends*/}
        {/* footer start*/}
        <div className="container-fluid">
          <footer className="footer">
            <div className="row">
              <div className="col-md-12 footer-copyright text-center">
                <p className="mb-0">
                  Copyright 2022 © Fastkart theme by pixelstrap
                </p>
              </div>
            </div>
          </footer>
        </div>
        {/* footer End*/}
      </div>
      {/* index body end */}
      {/* Page Body End */}
    </div>
  </div>
  {/* page-wrapper End*/}
  {/* Modal Start */}
  {/* Modal End */}
  {/* latest js */}
  {/* Bootstrap js */}
  {/* feather icon js */}
  {/* scrollbar simplebar js */}
  {/* Sidebar jquery */}
  {/* tooltip init js */}
  {/* Plugins JS */}
  {/* Apexchar js */}
  {/* slick slider js */}
  <svg
    id="SvgjsSvg1207"
    width={2}
    height={0}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
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
    xmlns:svgjs="http://svgjs.dev"
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

export default DashboardScreen