import Banner from "../components/HomeScreen/Banner"
import Footer from "../components/HomeScreen/Footer"
import Header from "../components/HomeScreen/Header"



function HomeScreen() {


    return (
        <>
            <Header />
            <Banner />
            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="title title-flex-2">
                        <h2 className="">Our Products</h2>
                        <ul className="nav nav-tabs tab-style-color-2 tab-style-color" id="myTab">
                            <li className="nav-item">
                                <button
                                    className="nav-link btn active"
                                    id="all-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#all"
                                    type="button"
                                >
                                    All
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link btn"
                                    id="tab-5"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab51"
                                    type="button"
                                >
                                    rau củ 2
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link btn"
                                    id="tab-4"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab41"
                                    type="button"
                                >
                                    rau củ
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link btn"
                                    id="tab-3"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab31"
                                    type="button"
                                >
                                    rau củ1
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="all"
                            role="tabpanel"
                            aria-labelledby="all-tab"
                        >
                            <div className="row g-8">

                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/8">
                                                <img
                                                    src="images/1696159447_2.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">2</h5>
                                            </a>
                                            <h5 className="price theme-color">$2.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                                    style={{ visibility: "hidden", animationName: "none" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/6">
                                                <img
                                                    src="images/1696159332_1.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">1</h5>
                                            </a>
                                            <h5 className="price theme-color">$1.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="tab51"
                            role="tabpanel"
                            aria-labelledby="tab-5"
                        >
                            <div className="row g-8">
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp animated"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/6">
                                                <img
                                                    src="images/1696159332_1.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">1</h5>
                                            </a>
                                            <h5 className="price theme-color">$1.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp animated"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/8">
                                                <img
                                                    src="images/1696159447_2.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">2</h5>
                                            </a>
                                            <h5 className="price theme-color">$2.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="tab41"
                            role="tabpanel"
                            aria-labelledby="tab-4"
                        >
                            <div className="row g-8">
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp animated"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/11">
                                                <img
                                                    src="images/1696159481_5.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">ớt ngon</h5>
                                            </a>
                                            <h5 className="price theme-color">$100.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp animated"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/12">
                                                <img
                                                    src="images/1696159488_6.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">3</h5>
                                            </a>
                                            <h5 className="price theme-color">$3.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="tab31"
                            role="tabpanel"
                            aria-labelledby="tab-3"
                        >
                            <div className="row g-8">
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp animated"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/15">
                                                <img
                                                    src="images/1696159508_9.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">4</h5>
                                            </a>
                                            <h5 className="price theme-color">$4.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp animated"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                >
                                    <div className="product-box-4">
                                        <div className="product-image">
                                            <div className="label-flex">
                                                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                                    <i className="iconly-Heart icli" />
                                                </button>
                                            </div>
                                            <a href="product/16">
                                                <img
                                                    src="images/1696159512_10.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Quick View"
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <i className="iconly-Show icli" />
                                                    </a>
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title=""
                                                    data-bs-original-title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <i className="iconly-Swap icli" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail">
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
                                            <a href="product-left-thumbnail.html">
                                                <h5 className="name">4</h5>
                                            </a>
                                            <h5 className="price theme-color">$4.00</h5>
                                            <div className="price-qty">
                                                <div className="counter-number">
                                                    <div className="counter">
                                                        <div
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-minus" />
                                                        </div>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="number"
                                                            name="quantity"
                                                            defaultValue={1}
                                                        />
                                                        <div
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa-solid fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="buy-button buy-button-2 btn btn-cart">
                                                    <i className="iconly-Buy icli text-white m-0" />
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

            {/* Main modal */}


        </>


    )
}

export default HomeScreen
