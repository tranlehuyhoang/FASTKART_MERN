
import Footer from "../components/HomeScreen/Footer"
import Header from "../components/HomeScreen/Header"

const RegisterScreen = () => {
    return (
        <>
            <Header />
            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>Sign In</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Sign In</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="log-in-section section-b-space">
                <div className="container-fluid-lg w-100">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                            <div className="image-contain">
                                <img
                                    src="http://127.0.0.1:1000/assets_client/images/inner-page/sign-up.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                            <div className="log-in-box">
                                <div className="log-in-title">
                                    <h3>Welcome To Fastkart</h3>
                                    <h4>Create New Account</h4>
                                </div>
                                <div className="input-box">
                                    <form className="row g-4" method="POST" action="/register">
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="B7ZQmTLgUgQi5fcKEn7Ys92kr5JmeSxhHunaOECB"
                                            autoComplete="off"
                                        />{" "}
                                        <div className="col-12">
                                            <div className="form-floating theme-form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullname"
                                                    name="name"
                                                    placeholder="Full Name"
                                                />
                                                <label htmlFor="fullname">Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating theme-form-floating">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email Address"
                                                />
                                                <label htmlFor="email">Email Address</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating theme-form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    name="password"
                                                />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="forgot-box">
                                                <div className="form-check ps-0 m-0 remember-box">
                                                    <input
                                                        className="checkbox_animated check-box"
                                                        type="checkbox"
                                                        id="flexCheckDefault"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefault"
                                                    >
                                                        I agree with
                                                        <span>Terms</span> and <span>Privacy</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-animation w-100" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="other-log-in">
                                    <h6>or</h6>
                                </div>
                                <div className="log-in-button">
                                    <ul>
                                        <li>
                                            <a
                                                href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                                className="btn google-button w-100"
                                            >
                                                <img
                                                    src="http://127.0.0.1:1000/assets_client/images/inner-page/google.png"
                                                    className="blur-up lazyloaded"
                                                    alt=""
                                                />
                                                Sign up with Google
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.facebook.com/"
                                                className="btn google-button w-100"
                                            >
                                                <img
                                                    src="http://127.0.0.1:1000/assets_client/images/inner-page/facebook.png"
                                                    className="blur-up lazyloaded"
                                                    alt=""
                                                />
                                                Sign up with Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="other-log-in">
                                    <h6 />
                                </div>
                                <div className="sign-up-box">
                                    <h4>Already have an account?</h4>
                                    <a href="login.php">Log In</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6 col-lg-6" />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default RegisterScreen