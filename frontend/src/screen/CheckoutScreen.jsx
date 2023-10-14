import Footer from "../components/Footer"
import Header from "../components/Header"
const CheckoutScreen = () => {
    return (
        <>
            <Header />
            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>Checkout</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Checkout
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout-section-2 section-b-space">
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-lg-8">
                            <div className="left-sidebar-checkout">
                                <div className="checkout-detail-box">
                                    <ul>
                                        <li>
                                            <div className="checkout-icon">
                                                <lord-icon
                                                    target=".nav-item"
                                                    src="https://cdn.lordicon.com/ggihhudh.json"
                                                    trigger="loop-on-hover"
                                                    colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a"
                                                    className="lord-icon"
                                                ></lord-icon>
                                            </div>
                                            <div className="checkout-box">
                                                <div className="checkout-title">
                                                    <h4>Delivery Address</h4>
                                                </div>
                                                <div className="checkout-detail">
                                                    <div className="row g-4">
                                                        <div className="col-xxl-6 col-lg-12 col-md-6">
                                                            <div className="delivery-address-box">
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
                                                                        <label>Home</label>
                                                                    </div>
                                                                    <ul className="delivery-address-detail">
                                                                        <li>
                                                                            <h4 className="fw-500">Jack Jennas</h4>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-content">
                                                                                <span className="text-title">Address : </span>
                                                                                8424 James Lane South San Francisco, CA 94080
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="text-content">
                                                                                <span className="text-title">Pin Code :</span>{" "}
                                                                                +380
                                                                            </h6>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="text-content mb-0">
                                                                                <span className="text-title">Phone :</span> +
                                                                                380 (0564) 53 - 29 - 68
                                                                            </h6>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-lg-12 col-md-6">
                                                            <div className="delivery-address-box">
                                                                <div>
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="jack"
                                                                            id="flexRadioDefault2"
                                                                            defaultChecked="checked"
                                                                        />
                                                                    </div>
                                                                    <div className="label">
                                                                        <label>Office</label>
                                                                    </div>
                                                                    <ul className="delivery-address-detail">
                                                                        <li>
                                                                            <h4 className="fw-500">Jack Jennas</h4>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-content">
                                                                                <span className="text-title">Address :</span>
                                                                                Nakhimovskiy R-N / Lastovaya Ul., bld. 5/A,
                                                                                appt. 12
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="text-content">
                                                                                <span className="text-title">Pin Code :</span>{" "}
                                                                                +380
                                                                            </h6>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="text-content mb-0">
                                                                                <span className="text-title">Phone :</span> +
                                                                                380 (0564) 53 - 29 - 68
                                                                            </h6>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkout-icon">
                                                <lord-icon
                                                    target=".nav-item"
                                                    src="https://cdn.lordicon.com/oaflahpk.json"
                                                    trigger="loop-on-hover"
                                                    colors="primary:#0baf9a"
                                                    className="lord-icon"
                                                ></lord-icon>
                                            </div>
                                            <div className="checkout-box">
                                                <div className="checkout-title">
                                                    <h4>Delivery Option</h4>
                                                </div>
                                                <div className="checkout-detail">
                                                    <div className="row g-4">
                                                        <div className="col-xxl-6">
                                                            <div className="delivery-option">
                                                                <div className="delivery-category">
                                                                    <div className="shipment-detail">
                                                                        <div className="form-check custom-form-check hide-check-box">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="standard"
                                                                                id="standard"
                                                                                defaultChecked=""
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="standard"
                                                                            >
                                                                                Standard Delivery Option
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6">
                                                            <div className="delivery-option">
                                                                <div className="delivery-category">
                                                                    <div className="shipment-detail">
                                                                        <div className="form-check mb-0 custom-form-check show-box-checked">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="standard"
                                                                                id="future"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="future"
                                                                            >
                                                                                Future Delivery Option
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 future-box">
                                                            <div className="future-option">
                                                                <div className="row g-md-0 gy-4">
                                                                    <div className="col-md-6">
                                                                        <div className="delivery-items">
                                                                            <div>
                                                                                <h5 className="items text-content">
                                                                                    <span>3 Items</span>@ $693.48
                                                                                </h5>
                                                                                <h5 className="charge text-content">
                                                                                    Delivery Charge $34.67
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn p-0"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-placement="top"
                                                                                        title=""
                                                                                        data-bs-original-title="Extra Charge"
                                                                                    >
                                                                                        <i className="fa-solid fa-circle-exclamation" />
                                                                                    </button>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <form className="form-floating theme-form-floating date-box">
                                                                            <input type="date" className="form-control" />
                                                                            <label>Select Date</label>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkout-icon">
                                                <lord-icon
                                                    target=".nav-item"
                                                    src="https://cdn.lordicon.com/qmcsqnle.json"
                                                    trigger="loop-on-hover"
                                                    colors="primary:#0baf9a,secondary:#0baf9a"
                                                    className="lord-icon"
                                                ></lord-icon>
                                            </div>
                                            <div className="checkout-box">
                                                <div className="checkout-title">
                                                    <h4>Payment Option</h4>
                                                </div>
                                                <div className="checkout-detail">
                                                    <div
                                                        className="accordion accordion-flush custom-accordion"
                                                        id="accordionFlushExample"
                                                    >
                                                        <div className="accordion-item">
                                                            <div
                                                                className="accordion-header"
                                                                id="flush-headingFour"
                                                            >
                                                                <div
                                                                    className="accordion-button collapsed"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseFour"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="custom-form-check form-check mb-0">
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="cash"
                                                                        >
                                                                            <input
                                                                                className="form-check-input mt-0"
                                                                                type="radio"
                                                                                name="flexRadioDefault"
                                                                                id="cash"
                                                                                defaultChecked=""
                                                                            />
                                                                            Cash On Delivery
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="flush-collapseFour"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                                style={{}}
                                                            >
                                                                <div className="accordion-body">
                                                                    <p className="cod-review">
                                                                        Pay digitally with SMS Pay Link. Cash may not be
                                                                        accepted in COVID restricted areas.{" "}
                                                                        <a href="javascript:void(0)">Know more.</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <div className="accordion-header" id="flush-headingOne">
                                                                <div
                                                                    className="accordion-button collapsed"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseOne"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="custom-form-check form-check mb-0">
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="credit"
                                                                        >
                                                                            <input
                                                                                className="form-check-input mt-0"
                                                                                type="radio"
                                                                                name="flexRadioDefault"
                                                                                id="credit"
                                                                            />
                                                                            Credit or Debit Card
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="flush-collapseOne"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="row g-2">
                                                                        <div className="col-12">
                                                                            <div className="payment-method">
                                                                                <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="credit2"
                                                                                        placeholder="Enter Credit & Debit Card Number"
                                                                                    />
                                                                                    <label htmlFor="credit2">
                                                                                        Enter Credit &amp; Debit Card Number
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xxl-4">
                                                                            <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="expiry"
                                                                                    placeholder="Enter Expiry Date"
                                                                                />
                                                                                <label htmlFor="expiry">Expiry Date</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xxl-4">
                                                                            <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="cvv"
                                                                                    placeholder="Enter CVV Number"
                                                                                />
                                                                                <label htmlFor="cvv">CVV Number</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xxl-4">
                                                                            <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                                <input
                                                                                    type="password"
                                                                                    className="form-control"
                                                                                    id="password"
                                                                                    placeholder="Enter Password"
                                                                                />
                                                                                <label htmlFor="password">Password</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="button-group mt-0">
                                                                            <ul>
                                                                                <li>
                                                                                    <button className="btn btn-light shopping-button">
                                                                                        Cancel
                                                                                    </button>
                                                                                </li>
                                                                                <li>
                                                                                    <button className="btn btn-animation">
                                                                                        Use This Card
                                                                                    </button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <div className="accordion-header" id="flush-headingTwo">
                                                                <div
                                                                    className="accordion-button collapsed"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseTwo"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="custom-form-check form-check mb-0">
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="banking"
                                                                        >
                                                                            <input
                                                                                className="form-check-input mt-0"
                                                                                type="radio"
                                                                                name="flexRadioDefault"
                                                                                id="banking"
                                                                            />
                                                                            Net Banking
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="flush-collapseTwo"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <h5 className="text-uppercase mb-4">
                                                                        Select Your Bank
                                                                    </h5>
                                                                    <div className="row g-2">
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="bank1"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="bank1"
                                                                                >
                                                                                    Industrial &amp; Commercial Bank
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="bank2"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="bank2"
                                                                                >
                                                                                    Agricultural Bank
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="bank3"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="bank3"
                                                                                >
                                                                                    Bank of America
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="bank4"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="bank4"
                                                                                >
                                                                                    Construction Bank Corp.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="bank5"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="bank5"
                                                                                >
                                                                                    HSBC Holdings
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="bank6"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="bank6"
                                                                                >
                                                                                    JPMorgan Chase &amp; Co.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="select-option">
                                                                                <div className="form-floating theme-form-floating">
                                                                                    <select
                                                                                        className="form-select theme-form-select"
                                                                                        aria-label="Default select example"
                                                                                    >
                                                                                        <option value="hsbc">
                                                                                            HSBC Holdings
                                                                                        </option>
                                                                                        <option value="loyds">
                                                                                            Lloyds Banking Group
                                                                                        </option>
                                                                                        <option value="natwest">
                                                                                            Nat West Group
                                                                                        </option>
                                                                                        <option value="Barclays">Barclays</option>
                                                                                        <option value="other">Others Bank</option>
                                                                                    </select>
                                                                                    <label>Select Other Bank</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <div
                                                                className="accordion-header"
                                                                id="flush-headingThree"
                                                            >
                                                                <div
                                                                    className="accordion-button collapsed"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseThree"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="custom-form-check form-check mb-0">
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="wallet"
                                                                        >
                                                                            <input
                                                                                className="form-check-input mt-0"
                                                                                type="radio"
                                                                                name="flexRadioDefault"
                                                                                id="wallet"
                                                                            />
                                                                            My Wallet
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="flush-collapseThree"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <h5 className="text-uppercase mb-4">
                                                                        Select Your Wallet
                                                                    </h5>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="amazon"
                                                                                >
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="radio"
                                                                                        name="flexRadioDefault"
                                                                                        id="amazon"
                                                                                    />
                                                                                    Amazon Pay
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="gpay"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="gpay"
                                                                                >
                                                                                    Google Pay
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="airtel"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="airtel"
                                                                                >
                                                                                    Airtel Money
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="paytm"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="paytm"
                                                                                >
                                                                                    Paytm Pay
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="jio"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="jio"
                                                                                >
                                                                                    JIO Money
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="radio"
                                                                                    name="flexRadioDefault"
                                                                                    id="free"
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor="free"
                                                                                >
                                                                                    Freecharge
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-side-summery-box">
                                <div className="summery-box-2">
                                    <div className="summery-header">
                                        <h3>Order Summery</h3>
                                    </div>
                                    <ul className="summery-contain">
                                        <li>
                                            <img
                                                src="images/1696159520_12.png"
                                                className="img-fluid blur-up lazyloaded checkout-image"
                                                alt=""
                                            />
                                            <h4>
                                                4<span>X 1</span>
                                            </h4>
                                            <h4 className="price">$4.00</h4>
                                        </li>
                                    </ul>
                                    <ul className="summery-total">
                                        <li>
                                            <h4>Subtotal</h4>
                                            <h4 className="price">$4.00</h4>
                                        </li>
                                        <li>
                                            <h4>Shipping</h4>
                                            <h4 className="price">$0.00</h4>
                                        </li>
                                        <li>
                                            <h4>Tax</h4>
                                            <h4 className="price">$0.00</h4>
                                        </li>
                                        <li>
                                            <h4>Coupon/Code</h4>
                                            <h4 className="price">$-0.00</h4>
                                        </li>
                                        <li className="list-total">
                                            <h4>Total (USD)</h4>
                                            <h4 className="price">$4.00</h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="checkout-offer">
                                    <div className="offer-title">
                                        <div className="offer-icon">
                                            <img
                                                src="assets_client/images/inner-page/offer.svg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="offer-name">
                                            <h6>Available Offers</h6>
                                        </div>
                                    </div>
                                    <ul className="offer-detail">
                                        <li>
                                            <p>
                                                Combo: BB Royal Almond/Badam Californian, Extra Bold 100 gm...
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                combo: Royal Cashew Californian, Extra Bold 100 gm + BB Royal
                                                Honey 500 gm
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <form action="checkout/create" method="post">
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="B7ZQmTLgUgQi5fcKEn7Ys92kr5JmeSxhHunaOECB"
                                        autoComplete="off"
                                    />{" "}
                                    <input
                                        type="number"
                                        style={{ display: "none" }}
                                        name="totalPrice"
                                        defaultValue={4}
                                    />
                                    <button
                                        type="submit"
                                        className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CheckoutScreen