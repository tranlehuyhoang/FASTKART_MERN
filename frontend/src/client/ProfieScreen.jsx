
import Footer from "../components/HomeScreen/Footer"
import Header from "../components/HomeScreen/Header"

const ProfieScreen = () => {
    return (
        <>
            <Header />
            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>User Dashboard</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            User Dashboard
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="user-dashboard-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4">
                            <div className="dashboard-left-sidebar">
                                <div className="close-button d-flex d-lg-none">
                                    <button className="close-sidebar">
                                        <i className="fa-solid fa-xmark" />
                                    </button>
                                </div>
                                <div className="profile-box">
                                    <div className="cover-image">
                                        <img
                                            src="assets_client/images/inner-page/cover-img.jpg"
                                            className="img-fluid blur-up lazyloaded"
                                            alt=""
                                        />
                                    </div>
                                    <div className="profile-contain">
                                        <div className="profile-image">
                                            <div className="position-relative">
                                                <img
                                                    src="assets_client/images/inner-page/user/1.jpg"
                                                    className="blur-up update_img lazyloaded"
                                                    alt=""
                                                />
                                                <div className="cover-icon">
                                                    <i className="fa-solid fa-pen">
                                                        <input type="file" />
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-name">
                                            <h3>Vicki E. Pope</h3>
                                            <h6 className="text-content">vicki.pope@gmail.com</h6>
                                        </div>
                                    </div>
                                </div>
                                <ul
                                    className="nav nav-pills user-nav-pills"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="pills-dashboard-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-dashboard"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-dashboard"
                                            aria-selected="true"
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
                                                className="feather feather-home"
                                            >
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                            DashBoard
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-order-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-order"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-order"
                                            aria-selected="false"
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
                                                className="feather feather-shopping-bag"
                                            >
                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                                <line x1={3} y1={6} x2={21} y2={6} />
                                                <path d="M16 10a4 4 0 0 1-8 0" />
                                            </svg>
                                            Order
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-wishlist-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-wishlist"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-wishlist"
                                            aria-selected="false"
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
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                            Wishlist
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-card-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-card"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-card"
                                            aria-selected="false"
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
                                                className="feather feather-credit-card"
                                            >
                                                <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                                                <line x1={1} y1={10} x2={23} y2={10} />
                                            </svg>{" "}
                                            Saved Card
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-address-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-address"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-address"
                                            aria-selected="false"
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
                                                className="feather feather-map-pin"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx={12} cy={10} r={3} />
                                            </svg>
                                            Address
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-profile"
                                            aria-selected="false"
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
                                                className="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                            Profile
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-security-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-security"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-security"
                                            aria-selected="false"
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
                                                className="feather feather-shield"
                                            >
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                            Privacy
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8">
                            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">
                                Show Menu
                            </button>
                            <div className="dashboard-right-sidebar">
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade active show"
                                        id="pills-dashboard"
                                        role="tabpanel"
                                        aria-labelledby="pills-dashboard-tab"
                                    >
                                        <div className="dashboard-home">
                                            <div className="title">
                                                <h2>My Dashboard</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="assets_client/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="dashboard-user-name">
                                                <h6 className="text-content">
                                                    Hello, <b className="text-title">Vicki E. Pope</b>
                                                </h6>
                                                <p className="text-content">
                                                    From your My Account Dashboard you have the ability to view
                                                    a snapshot of your recent account activity and update your
                                                    account information. Select a link below to view or edit
                                                    information.
                                                </p>
                                            </div>
                                            <div className="total-box">
                                                <div className="row g-sm-4 g-3">
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img
                                                                src="assets_client/images/svg/order.svg"
                                                                className="img-1 blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="assets_client/images/svg/order.svg"
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                            <div className="totle-detail">
                                                                <h5>Total Order</h5>
                                                                <h3>3658</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img
                                                                src="assets_client/images/svg/pending.svg"
                                                                className="img-1 blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="assets_client/images/svg/pending.svg"
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                            <div className="totle-detail">
                                                                <h5>Total Pending Order</h5>
                                                                <h3>254</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img
                                                                src="assets_client/images/svg/wishlist.svg"
                                                                className="img-1 blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="assets_client/images/svg/wishlist.svg"
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                            <div className="totle-detail">
                                                                <h5>Total Wishlist</h5>
                                                                <h3>32158</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dashboard-title">
                                                <h3>Account Information</h3>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-contant-title">
                                                        <h4>
                                                            Contact Information{" "}
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
                                                            >
                                                                Edit
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <h6 className="text-content">MARK JECNO</h6>
                                                        <h6 className="text-content">vicki.pope@gmail.com</h6>
                                                        <a href="javascript:void(0)">Change Password</a>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-contant-title">
                                                        <h4>
                                                            Newsletters{" "}
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
                                                            >
                                                                Edit
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <h6 className="text-content">
                                                            You are currently not subscribed to any newsletter
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="dashboard-contant-title">
                                                        <h4>
                                                            Address Book{" "}
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
                                                            >
                                                                Edit
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div className="row g-4">
                                                        <div className="col-xxl-6">
                                                            <div className="dashboard-detail">
                                                                <h6 className="text-content">
                                                                    Default Billing Address
                                                                </h6>
                                                                <h6 className="text-content">
                                                                    You have not set a default billing address.
                                                                </h6>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#editProfile"
                                                                >
                                                                    Edit Address
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6">
                                                            <div className="dashboard-detail">
                                                                <h6 className="text-content">
                                                                    Default Shipping Address
                                                                </h6>
                                                                <h6 className="text-content">
                                                                    You have not set a default shipping address.
                                                                </h6>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#editProfile"
                                                                >
                                                                    Edit Address
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="pills-wishlist"
                                        role="tabpanel"
                                        aria-labelledby="pills-wishlist-tab"
                                    >
                                        <div className="dashboard-wishlist">
                                            <div className="title">
                                                <h2>My Wishlist History</h2>
                                                <span className="title-leaf title-leaf-gray">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="assets_client/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="row g-sm-4 g-3">
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/2.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Vegetable</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        Fresh Bread and Pastry Flour 200 g
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Cheesy feet cheesy grin brie. Mascarpone cheese and
                                                                    wine hard cheese the big cheese everyone loves
                                                                    smelly cheese macaroni cheese croque monsieur.
                                                                </p>
                                                                <h6 className="unit mt-1">250 ml</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$08.02</span>
                                                                    <del>$15.15</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/3.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Vegetable</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        Peanut Butter Bite Premium Butter Cookies 600 g
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Feta taleggio croque monsieur swiss manchego
                                                                    cheesecake dolcelatte jarlsberg. Hard cheese danish
                                                                    fontina boursin melted cheese fondue.
                                                                </p>
                                                                <h6 className="unit mt-1">350 G</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$04.33</span>
                                                                    <del>$10.36</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/4.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Snacks</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        SnackAmor Combo Pack of Jowar Stick and Jowar
                                                                        Chips
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Lancashire hard cheese parmesan. Danish fontina
                                                                    mozzarella cream cheese smelly cheese cheese and
                                                                    wine cheesecake dolcelatte stilton. Cream cheese
                                                                    parmesan who moved my cheese when the cheese comes
                                                                    out everybody's happy cream cheese red leicester
                                                                    ricotta edam.
                                                                </p>
                                                                <h6 className="unit mt-1">570 G</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$12.52</span>
                                                                    <del>$13.62</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/5.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Snacks</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        Yumitos Chilli Sprinkled Potato Chips 100 g
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Cheddar cheddar pecorino hard cheese hard cheese
                                                                    cheese and biscuits bocconcini babybel. Cow goat
                                                                    paneer cream cheese fromage cottage cheese
                                                                    cauliflower cheese jarlsberg.
                                                                </p>
                                                                <h6 className="unit mt-1">100 G</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$10.25</span>
                                                                    <del>$12.36</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/6.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Vegetable</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        Fantasy Crunchy Choco Chip Cookies
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Bavarian bergkase smelly cheese swiss cut the cheese
                                                                    lancashire who moved my cheese manchego melted
                                                                    cheese. Red leicester paneer cow when the cheese
                                                                    comes out everybody's happy croque monsieur goat
                                                                    melted cheese port-salut.
                                                                </p>
                                                                <h6 className="unit mt-1">550 G</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$14.25</span>
                                                                    <del>$16.57</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/7.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Vegetable</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        Fresh Bread and Pastry Flour 200 g
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Melted cheese babybel chalk and cheese. Port-salut
                                                                    port-salut cream cheese when the cheese comes out
                                                                    everybody's happy cream cheese hard cheese cream
                                                                    cheese red leicester.
                                                                </p>
                                                                <h6 className="unit mt-1">1 Kg</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$12.68</span>
                                                                    <del>$14.69</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                                    <div className="product-box-3 theme-bg-white h-100">
                                                        <div className="product-header">
                                                            <div className="product-image">
                                                                <a href="product-left-thumbnail.html">
                                                                    <img
                                                                        src="assets_client/images/cake/product/2.png"
                                                                        className="img-fluid blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="product-header-top">
                                                                    <button className="btn wishlist-button close_button">
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
                                                                            className="feather feather-x"
                                                                        >
                                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-footer">
                                                            <div className="product-detail">
                                                                <span className="span-name">Vegetable</span>
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5 className="name">
                                                                        Fresh Bread and Pastry Flour 200 g
                                                                    </h5>
                                                                </a>
                                                                <p className="text-content mt-1 mb-2 product-content">
                                                                    Squirty cheese cottage cheese cheese strings. Red
                                                                    leicester paneer danish fontina queso lancashire
                                                                    when the cheese comes out everybody's happy cottage
                                                                    cheese paneer.
                                                                </p>
                                                                <h6 className="unit mt-1">250 ml</h6>
                                                                <h5 className="price">
                                                                    <span className="theme-color">$08.02</span>
                                                                    <del>$15.15</del>
                                                                </h5>
                                                                <div className="add-to-cart-box mt-2">
                                                                    <button
                                                                        className="btn btn-add-cart addcart-button"
                                                                        tabIndex={0}
                                                                    >
                                                                        Add
                                                                        <span className="add-icon">
                                                                            <i className="fa-solid fa-plus" />
                                                                        </span>
                                                                    </button>
                                                                    <div className="cart_qty qty-box">
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="qty-left-minus"
                                                                                data-type="minus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-minus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                            <input
                                                                                className="form-control input-number qty-input"
                                                                                type="text"
                                                                                name="quantity"
                                                                                defaultValue={0}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="qty-right-plus"
                                                                                data-type="plus"
                                                                                data-field=""
                                                                            >
                                                                                <i
                                                                                    className="fa fa-plus"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-order"
                                        role="tabpanel"
                                        aria-labelledby="pills-order-tab"
                                    >
                                        <div className="dashboard-order">
                                            <div className="title">
                                                <h2>My Orders History</h2>
                                                <span className="title-leaf title-leaf-gray">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="assets_client/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="order-contain">
                                                <div className="order-box dashboard-bg-box">
                                                    <div className="order-container">
                                                        <div className="order-icon">
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
                                                                className="feather feather-box"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                                <line x1={12} y1="22.08" x2={12} y2={12} />
                                                            </svg>
                                                        </div>
                                                        <div className="order-detail">
                                                            <a href="invoice/4404449596209624">
                                                                <h4>
                                                                    #4404449596209624{" "}
                                                                    <span className="success-bg">Đã thanh toán</span>
                                                                </h4>
                                                            </a>
                                                            <h6 className="text-content">
                                                                Gouda parmesan caerphilly mozzarella cottage cheese
                                                                cauliflower cheese taleggio gouda.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-order-detail">
                                                        <a
                                                            href="product-left-thumbnail.html"
                                                            className="order-image"
                                                        >
                                                            <img
                                                                src="assets_client/box.png"
                                                                style={{ width: 200 }}
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="order-wrap">
                                                            <a href="product-left-thumbnail.html">
                                                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                                            </a>
                                                            <p className="text-content">
                                                                Cheddar dolcelatte gouda. Macaroni cheese cheese
                                                                strings feta halloumi cottage cheese jarlsberg cheese
                                                                triangles say cheese.
                                                            </p>
                                                            <ul className="product-size">
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Price : </h6>
                                                                        <h5>$20.68</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Rate : </h6>
                                                                        <div className="product-rating ms-2">
                                                                            <ul className="rating">
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Sold By : </h6>
                                                                        <h5>Fresho</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Quantity : </h6>
                                                                        <h5>250 G</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-box dashboard-bg-box">
                                                    <div className="order-container">
                                                        <div className="order-icon">
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
                                                                className="feather feather-box"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                                <line x1={12} y1="22.08" x2={12} y2={12} />
                                                            </svg>
                                                        </div>
                                                        <div className="order-detail">
                                                            <a href="order-success/4509968953132206">
                                                                <h4>
                                                                    #4509968953132206 <span>Chưa thanh toán</span>
                                                                </h4>
                                                            </a>
                                                            <h6 className="text-content">
                                                                Gouda parmesan caerphilly mozzarella cottage cheese
                                                                cauliflower cheese taleggio gouda.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-order-detail">
                                                        <a
                                                            href="product-left-thumbnail.html"
                                                            className="order-image"
                                                        >
                                                            <img
                                                                src="assets_client/box.png"
                                                                style={{ width: 200 }}
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="order-wrap">
                                                            <a href="product-left-thumbnail.html">
                                                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                                            </a>
                                                            <p className="text-content">
                                                                Cheddar dolcelatte gouda. Macaroni cheese cheese
                                                                strings feta halloumi cottage cheese jarlsberg cheese
                                                                triangles say cheese.
                                                            </p>
                                                            <ul className="product-size">
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Price : </h6>
                                                                        <h5>$20.68</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Rate : </h6>
                                                                        <div className="product-rating ms-2">
                                                                            <ul className="rating">
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Sold By : </h6>
                                                                        <h5>Fresho</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Quantity : </h6>
                                                                        <h5>250 G</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-box dashboard-bg-box">
                                                    <div className="order-container">
                                                        <div className="order-icon">
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
                                                                className="feather feather-box"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                                <line x1={12} y1="22.08" x2={12} y2={12} />
                                                            </svg>
                                                        </div>
                                                        <div className="order-detail">
                                                            <a href="invoice/9661749379549302">
                                                                <h4>
                                                                    #9661749379549302{" "}
                                                                    <span className="success-bg">Đã thanh toán</span>
                                                                </h4>
                                                            </a>
                                                            <h6 className="text-content">
                                                                Gouda parmesan caerphilly mozzarella cottage cheese
                                                                cauliflower cheese taleggio gouda.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-order-detail">
                                                        <a
                                                            href="product-left-thumbnail.html"
                                                            className="order-image"
                                                        >
                                                            <img
                                                                src="assets_client/box.png"
                                                                style={{ width: 200 }}
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="order-wrap">
                                                            <a href="product-left-thumbnail.html">
                                                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                                            </a>
                                                            <p className="text-content">
                                                                Cheddar dolcelatte gouda. Macaroni cheese cheese
                                                                strings feta halloumi cottage cheese jarlsberg cheese
                                                                triangles say cheese.
                                                            </p>
                                                            <ul className="product-size">
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Price : </h6>
                                                                        <h5>$20.68</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Rate : </h6>
                                                                        <div className="product-rating ms-2">
                                                                            <ul className="rating">
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Sold By : </h6>
                                                                        <h5>Fresho</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Quantity : </h6>
                                                                        <h5>250 G</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-box dashboard-bg-box">
                                                    <div className="order-container">
                                                        <div className="order-icon">
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
                                                                className="feather feather-box"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                                <line x1={12} y1="22.08" x2={12} y2={12} />
                                                            </svg>
                                                        </div>
                                                        <div className="order-detail">
                                                            <a href="invoice/3943572294038977">
                                                                <h4>
                                                                    #3943572294038977{" "}
                                                                    <span className="success-bg">Đã thanh toán</span>
                                                                </h4>
                                                            </a>
                                                            <h6 className="text-content">
                                                                Gouda parmesan caerphilly mozzarella cottage cheese
                                                                cauliflower cheese taleggio gouda.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-order-detail">
                                                        <a
                                                            href="product-left-thumbnail.html"
                                                            className="order-image"
                                                        >
                                                            <img
                                                                src="assets_client/box.png"
                                                                style={{ width: 200 }}
                                                                className="blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="order-wrap">
                                                            <a href="product-left-thumbnail.html">
                                                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                                            </a>
                                                            <p className="text-content">
                                                                Cheddar dolcelatte gouda. Macaroni cheese cheese
                                                                strings feta halloumi cottage cheese jarlsberg cheese
                                                                triangles say cheese.
                                                            </p>
                                                            <ul className="product-size">
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Price : </h6>
                                                                        <h5>$20.68</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Rate : </h6>
                                                                        <div className="product-rating ms-2">
                                                                            <ul className="rating">
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Sold By : </h6>
                                                                        <h5>Fresho</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Quantity : </h6>
                                                                        <h5>250 G</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-box dashboard-bg-box">
                                                    <div className="order-container">
                                                        <div className="order-icon">
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
                                                                className="feather feather-box"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                                <line x1={12} y1="22.08" x2={12} y2={12} />
                                                            </svg>
                                                        </div>
                                                        <div className="order-detail">
                                                            <a href="invoice/0925455986098349">
                                                                <h4>
                                                                    #0925455986098349{" "}
                                                                    <span className="success-bg">Đã thanh toán</span>
                                                                </h4>
                                                            </a>
                                                            <h6 className="text-content">
                                                                Gouda parmesan caerphilly mozzarella cottage cheese
                                                                cauliflower cheese taleggio gouda.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-order-detail">
                                                        <a
                                                            href="product-left-thumbnail.html"
                                                            className="order-image"
                                                        >
                                                            <img
                                                                src="assets_client/box.png"
                                                                style={{ width: 200 }}
                                                                className="blur-up lazyload"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="order-wrap">
                                                            <a href="product-left-thumbnail.html">
                                                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                                            </a>
                                                            <p className="text-content">
                                                                Cheddar dolcelatte gouda. Macaroni cheese cheese
                                                                strings feta halloumi cottage cheese jarlsberg cheese
                                                                triangles say cheese.
                                                            </p>
                                                            <ul className="product-size">
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Price : </h6>
                                                                        <h5>$20.68</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Rate : </h6>
                                                                        <div className="product-rating ms-2">
                                                                            <ul className="rating">
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star fill"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                                <li>
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
                                                                                        className="feather feather-star"
                                                                                    >
                                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                                    </svg>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Sold By : </h6>
                                                                        <h5>Fresho</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Quantity : </h6>
                                                                        <h5>250 G</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="pills-address"
                                        role="tabpanel"
                                        aria-labelledby="pills-address-tab"
                                    >
                                        <div className="dashboard-address">
                                            <div className="title title-flex">
                                                <div>
                                                    <h2>My Address Book</h2>
                                                    <span className="title-leaf">
                                                        <svg className="icon-width bg-gray">
                                                            <use xlinkHref="assets_client/svg/leaf.svg#leaf" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <button
                                                    className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#add-address"
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
                                                        className="feather feather-plus me-2"
                                                    >
                                                        <line x1={12} y1={5} x2={12} y2={19} />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                    </svg>{" "}
                                                    Add New Address
                                                </button>
                                            </div>
                                            <div className="row g-sm-4 g-3">
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                                    <div className="address-box">
                                                        <div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="jack"
                                                                    id="flexRadioDefault2"
                                                                    defaultChecked=""
                                                                />
                                                            </div>
                                                            <div className="label">
                                                                <label>Home</label>
                                                            </div>
                                                            <div className="table-responsive address-table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>Jack Jennas</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Address :</td>
                                                                            <td>
                                                                                <p>
                                                                                    8424 James Lane South San Francisco, CA
                                                                                    94080
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Pin Code :</td>
                                                                            <td>+380</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Phone :</td>
                                                                            <td>+ 812-710-3798</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
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
                                                                    className="feather feather-edit"
                                                                >
                                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
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
                                                                    className="feather feather-trash-2"
                                                                >
                                                                    <polyline points="3 6 5 6 21 6" />
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                                    <div className="address-box">
                                                        <div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="jack"
                                                                    id="flexRadioDefault3"
                                                                />
                                                            </div>
                                                            <div className="label">
                                                                <label>Office</label>
                                                            </div>
                                                            <div className="table-responsive address-table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>Terry S. Sutton</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Address :</td>
                                                                            <td>
                                                                                <p>2280 Rose Avenue Kenner, LA 70062</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Pin Code :</td>
                                                                            <td>+25</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Phone :</td>
                                                                            <td>+ 504-228-0969</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
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
                                                                    className="feather feather-edit"
                                                                >
                                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
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
                                                                    className="feather feather-trash-2"
                                                                >
                                                                    <polyline points="3 6 5 6 21 6" />
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                                    <div className="address-box">
                                                        <div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="jack"
                                                                    id="flexRadioDefault4"
                                                                />
                                                            </div>
                                                            <div className="label">
                                                                <label>Neighbour</label>
                                                            </div>
                                                            <div className="table-responsive address-table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>Juan M. McKeon</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Address :</td>
                                                                            <td>
                                                                                <p>1703 Carson Street Lexington, KY 40593</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Pin Code :</td>
                                                                            <td>+78</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Phone :</td>
                                                                            <td>+ 859-257-0509</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
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
                                                                    className="feather feather-edit"
                                                                >
                                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
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
                                                                    className="feather feather-trash-2"
                                                                >
                                                                    <polyline points="3 6 5 6 21 6" />
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                                    <div className="address-box">
                                                        <div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="jack"
                                                                    id="flexRadioDefault5"
                                                                />
                                                            </div>
                                                            <div className="label">
                                                                <label>Home 2</label>
                                                            </div>
                                                            <div className="table-responsive address-table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>Gary M. Bailey</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Address :</td>
                                                                            <td>
                                                                                <p>
                                                                                    2135 Burning Memory Lane Philadelphia, PA
                                                                                    19135
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Pin Code :</td>
                                                                            <td>+26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Phone :</td>
                                                                            <td>+ 215-335-9916</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
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
                                                                    className="feather feather-edit"
                                                                >
                                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
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
                                                                    className="feather feather-trash-2"
                                                                >
                                                                    <polyline points="3 6 5 6 21 6" />
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                                    <div className="address-box">
                                                        <div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="jack"
                                                                    id="flexRadioDefault1"
                                                                />
                                                            </div>
                                                            <div className="label">
                                                                <label>Home 2</label>
                                                            </div>
                                                            <div className="table-responsive address-table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>Gary M. Bailey</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Address :</td>
                                                                            <td>
                                                                                <p>
                                                                                    2135 Burning Memory Lane Philadelphia, PA
                                                                                    19135
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Pin Code :</td>
                                                                            <td>+26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Phone :</td>
                                                                            <td>+ 215-335-9916</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editProfile"
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
                                                                    className="feather feather-edit"
                                                                >
                                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm add-button w-100"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
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
                                                                    className="feather feather-trash-2"
                                                                >
                                                                    <polyline points="3 6 5 6 21 6" />
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="pills-card"
                                        role="tabpanel"
                                        aria-labelledby="pills-card-tab"
                                    >
                                        <div className="dashboard-card">
                                            <div className="title title-flex">
                                                <div>
                                                    <h2>My Card Details</h2>
                                                    <span className="title-leaf">
                                                        <svg className="icon-width bg-gray">
                                                            <use xlinkHref="assets_client/svg/leaf.svg#leaf" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <button
                                                    className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#editCard"
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
                                                        className="feather feather-plus me-2"
                                                    >
                                                        <line x1={12} y1={5} x2={12} y2={19} />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                    </svg>{" "}
                                                    Add New Card
                                                </button>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="payment-card-detail">
                                                        <div className="card-details">
                                                            <div className="card-number">
                                                                <h4>XXXX - XXXX - XXXX - 2548</h4>
                                                            </div>
                                                            <div className="valid-detail">
                                                                <div className="title">
                                                                    <span>valid</span>
                                                                    <span>thru</span>
                                                                </div>
                                                                <div className="date">
                                                                    <h3>08/05</h3>
                                                                </div>
                                                                <div className="primary">
                                                                    <span className="badge bg-pill badge-light">
                                                                        primary
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="name-detail">
                                                                <div className="name">
                                                                    <h5>Audrey Carol</h5>
                                                                </div>
                                                                <div className="card-img">
                                                                    <img
                                                                        src="assets_client/images/payment-icon/1.jpg"
                                                                        className="img-fluid blur-up lazyloaded"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="edit-card">
                                                            <a
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editCard"
                                                                href="javascript:void(0)"
                                                            >
                                                                <i className="far fa-edit" /> edit
                                                            </a>
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
                                                            >
                                                                <i className="far fa-minus-square" />
                                                                delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="edit-card-mobile">
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#editCard"
                                                            href="javascript:void(0)"
                                                        >
                                                            <i className="far fa-edit" /> edit
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            <i className="far fa-minus-square" />
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="payment-card-detail">
                                                        <div className="card-details card-visa">
                                                            <div className="card-number">
                                                                <h4>XXXX - XXXX - XXXX - 1536</h4>
                                                            </div>
                                                            <div className="valid-detail">
                                                                <div className="title">
                                                                    <span>valid</span>
                                                                    <span>thru</span>
                                                                </div>
                                                                <div className="date">
                                                                    <h3>12/23</h3>
                                                                </div>
                                                                <div className="primary">
                                                                    <span className="badge bg-pill badge-light">
                                                                        primary
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="name-detail">
                                                                <div className="name">
                                                                    <h5>Leah Heather</h5>
                                                                </div>
                                                                <div className="card-img">
                                                                    <img
                                                                        src="assets_client/images/payment-icon/2.jpg"
                                                                        className="img-fluid blur-up lazyloaded"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="edit-card">
                                                            <a
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editCard"
                                                                href="javascript:void(0)"
                                                            >
                                                                <i className="far fa-edit" /> edit
                                                            </a>
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
                                                            >
                                                                <i className="far fa-minus-square" />
                                                                delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="edit-card-mobile">
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#editCard"
                                                            href="javascript:void(0)"
                                                        >
                                                            <i className="far fa-edit" /> edit
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            <i className="far fa-minus-square" />
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="payment-card-detail">
                                                        <div className="card-details dabit-card">
                                                            <div className="card-number">
                                                                <h4>XXXX - XXXX - XXXX - 1366</h4>
                                                            </div>
                                                            <div className="valid-detail">
                                                                <div className="title">
                                                                    <span>valid</span>
                                                                    <span>thru</span>
                                                                </div>
                                                                <div className="date">
                                                                    <h3>05/21</h3>
                                                                </div>
                                                                <div className="primary">
                                                                    <span className="badge bg-pill badge-light">
                                                                        primary
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="name-detail">
                                                                <div className="name">
                                                                    <h5>mark jecno</h5>
                                                                </div>
                                                                <div className="card-img">
                                                                    <img
                                                                        src="assets_client/images/payment-icon/3.jpg"
                                                                        className="img-fluid blur-up lazyloaded"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="edit-card">
                                                            <a
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editCard"
                                                                href="javascript:void(0)"
                                                            >
                                                                <i className="far fa-edit" /> edit
                                                            </a>
                                                            <a
                                                                href="javascript:void(0)"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#removeProfile"
                                                            >
                                                                <i className="far fa-minus-square" />
                                                                delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="edit-card-mobile">
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#editCard"
                                                            href="javascript:void(0)"
                                                        >
                                                            <i className="far fa-edit" /> edit
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            <i className="far fa-minus-square" />
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="pills-profile-tab"
                                    >
                                        <div className="dashboard-profile">
                                            <div className="title">
                                                <h2>My Profile</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="assets_client/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="profile-detail dashboard-bg-box">
                                                <div className="dashboard-title">
                                                    <h3>Profile Name</h3>
                                                </div>
                                                <div className="profile-name-detail">
                                                    <div className="d-sm-flex align-items-center d-block">
                                                        <h3>Vicki E. Pope</h3>
                                                        <div className="product-rating profile-rating">
                                                            <ul className="rating">
                                                                <li>
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
                                                                        className="feather feather-star fill"
                                                                    >
                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                    </svg>
                                                                </li>
                                                                <li>
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
                                                                        className="feather feather-star fill"
                                                                    >
                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                    </svg>
                                                                </li>
                                                                <li>
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
                                                                        className="feather feather-star fill"
                                                                    >
                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                    </svg>
                                                                </li>
                                                                <li>
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
                                                                        className="feather feather-star"
                                                                    >
                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                    </svg>
                                                                </li>
                                                                <li>
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
                                                                        className="feather feather-star"
                                                                    >
                                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                                    </svg>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editProfile"
                                                    >
                                                        Edit
                                                    </a>
                                                </div>
                                                <div className="location-profile">
                                                    <ul>
                                                        <li>
                                                            <div className="location-box">
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
                                                                    className="feather feather-map-pin"
                                                                >
                                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                                    <circle cx={12} cy={10} r={3} />
                                                                </svg>
                                                                <h6>Downers Grove, IL</h6>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="location-box">
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
                                                                    className="feather feather-mail"
                                                                >
                                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                                    <polyline points="22,6 12,13 2,6" />
                                                                </svg>
                                                                <h6>vicki.pope@gmail.com</h6>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="location-box">
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
                                                                    className="feather feather-check-square"
                                                                >
                                                                    <polyline points="9 11 12 14 22 4" />
                                                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                                </svg>
                                                                <h6>Licensed for 2 years</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="profile-description">
                                                    <p>
                                                        Residences can be classified by and how they are connected
                                                        to neighbouring residences and land. Different types of
                                                        housing tenure can be used for the same physical type.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="profile-about dashboard-bg-box">
                                                <div className="row">
                                                    <div className="col-xxl-7">
                                                        <div className="dashboard-title mb-3">
                                                            <h3>Profile About</h3>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Gender :</td>
                                                                        <td>Female</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Birthday :</td>
                                                                        <td>21/05/1997</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Phone Number :</td>
                                                                        <td>
                                                                            <a href="javascript:void(0)">
                                                                                {" "}
                                                                                +91 846 - 547 - 210
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Address :</td>
                                                                        <td>549 Sulphur Springs Road, Downers, IL</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="dashboard-title mb-3">
                                                            <h3>Login Details</h3>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Email :</td>
                                                                        <td>
                                                                            <a href="javascript:void(0)">
                                                                                vicki.pope@gmail.com
                                                                                <span
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#editProfile"
                                                                                >
                                                                                    Edit
                                                                                </span>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Password :</td>
                                                                        <td>
                                                                            <a href="javascript:void(0)">
                                                                                ●●●●●●
                                                                                <span
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#editProfile"
                                                                                >
                                                                                    Edit
                                                                                </span>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-5">
                                                        <div className="profile-image">
                                                            <img
                                                                src="assets_client/images/inner-page/dashboard-profile.png"
                                                                className="img-fluid blur-up lazyload"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="pills-security"
                                        role="tabpanel"
                                        aria-labelledby="pills-security-tab"
                                    >
                                        <div className="dashboard-privacy">
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Privacy</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>Allows others to see my profile</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="redio"
                                                                aria-checked="false"
                                                            />
                                                            <label className="form-check-label" htmlFor="redio" />
                                                        </div>
                                                    </div>
                                                    <p className="text-content">
                                                        all peoples will be able to see my profile
                                                    </p>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>
                                                            who has save this profile only that people see my
                                                            profile
                                                        </h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="redio2"
                                                                aria-checked="false"
                                                            />
                                                            <label className="form-check-label" htmlFor="redio2" />
                                                        </div>
                                                    </div>
                                                    <p className="text-content">
                                                        all peoples will not be able to see my profile
                                                    </p>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                                    Save Changes
                                                </button>
                                            </div>
                                            <div className="dashboard-bg-box mt-4">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Account settings</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>Deleting Your Account Will Permanently</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="redio3"
                                                                aria-checked="false"
                                                            />
                                                            <label className="form-check-label" htmlFor="redio3" />
                                                        </div>
                                                    </div>
                                                    <p className="text-content">
                                                        Once your account is deleted, you will be logged out and
                                                        will be unable to log in back.
                                                    </p>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>Deleting Your Account Will Temporary</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="redio4"
                                                                aria-checked="false"
                                                            />
                                                            <label className="form-check-label" htmlFor="redio4" />
                                                        </div>
                                                    </div>
                                                    <p className="text-content">
                                                        Once your account is deleted, you will be logged out and
                                                        you will be create new account
                                                    </p>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                                    Delete My Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default ProfieScreen