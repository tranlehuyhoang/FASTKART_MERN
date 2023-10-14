import Footer from "../components/Footer"
import Header from "../components/Header"


const CartScreen = () => {
    return (
        <>
            <Header />
            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>Cart</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Cart
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cart-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row g-sm-5 g-3">
                        <div className="col-xxl-9">
                            <div className="cart-table">
                                <div className="table-responsive-xl">
                                    <table className="table">
                                        <tbody>
                                            <tr className="product-box-contain">
                                                <td className="product-detail">
                                                    <div className="product border-0">
                                                        <a
                                                            href="product-left-thumbnail.html"
                                                            className="product-image"
                                                        >
                                                            <img
                                                                src="images/1696159520_12.png"
                                                                className="img-fluid blur-up lazyloaded"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-detail">
                                                            <ul>
                                                                <li className="name">
                                                                    <a href="product-left-thumbnail.html">4</a>
                                                                </li>
                                                                <li className="text-content">
                                                                    <span className="text-title">Category :</span> rau
                                                                    củ1
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <h4 className="table-title text-content">Price</h4>
                                                    <h6 className="theme-color">You Save : $4.00</h6>
                                                </td>
                                                <td className="quantity">
                                                    <h4 className="table-title text-content">Qty</h4>
                                                    <div className="quantity-price">
                                                        <div className="cart_qty">
                                                            <div className="input-group">
                                                                <button
                                                                    type="button"
                                                                    className="btn qty-left-minus"
                                                                    data-type="minus"
                                                                    data-field=""
                                                                >
                                                                    <i
                                                                        className="fa fa-minus ms-0"
                                                                        aria-hidden="true"
                                                                    />
                                                                </button>
                                                                <input
                                                                    className="form-control input-number qty-input"
                                                                    type=" number"
                                                                    name="quantity"
                                                                    defaultValue={1}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="btn qty-right-plus"
                                                                    data-type="plus"
                                                                    data-field=""
                                                                >
                                                                    <i className="fa fa-plus ms-0" aria-hidden="true" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="subtotal">
                                                    <h4 className="table-title text-content">Total</h4>
                                                    <h5>$4.00</h5>
                                                </td>
                                                <td className="save-remove">
                                                    <h4 className="table-title text-content">Action</h4>
                                                    <a
                                                        className="save notifi-wishlist"
                                                        href="javascript:void(0)"
                                                    >
                                                        Save for later
                                                    </a>
                                                    <a
                                                        className="remove close_button"
                                                        style={{ cursor: "pointer" }}

                                                    >
                                                        Remove
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                            <div className="summery-box p-sticky">
                                <div className="summery-header">
                                    <h3>Cart Total</h3>
                                </div>
                                <div className="summery-contain">
                                    <div className="coupon-cart">
                                        <h6 className="text-content mb-2">Coupon Apply</h6>
                                        <div className="mb-3 coupon-box input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter Coupon Code Here..."
                                            />
                                            <button className="btn-apply">Apply</button>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <h4>Subtotal</h4>
                                            <h4 className="price">$4.00</h4>
                                        </li>
                                        <li>
                                            <h4>Coupon Discount</h4>
                                            <h4 className="price">(-) 0.00</h4>
                                        </li>
                                        <li className="align-items-start">
                                            <h4>Shipping</h4>
                                            <h4 className="price text-end">$0.00</h4>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="summery-total">
                                    <li className="list-total border-top-0">
                                        <h4>Total (USD)</h4>
                                        <h4 className="price theme-color">$4.00</h4>
                                    </li>
                                </ul>
                                <div className="button-group cart-button">
                                    <ul>
                                        <li>
                                            <button

                                                className="btn btn-animation proceed-btn fw-bold"
                                            >
                                                Process To Checkout
                                            </button>
                                        </li>
                                        <li>
                                            <button

                                                className="btn btn-light shopping-button text-dark"
                                            >
                                                <i className="fa-solid fa-arrow-left-long" />
                                                Return To Shopping
                                            </button>
                                        </li>
                                    </ul>
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

export default CartScreen