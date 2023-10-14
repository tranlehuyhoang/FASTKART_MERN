

const Banner = () => {
    return (
        <section className="home-section-2 home-section-small section-b-space">
            <div className="container-fluid-lg">
                <div className="row g-4">
                    <div className="col-xxl-6 col-md-8">
                        <div
                            className="home-contain h-100 bg-size blur-up lazyloaded"
                            style={{
                                backgroundImage: 'url("assets_client/images/veg-3/home/1.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                display: "block"
                            }}
                        >
                            <img
                                src="assets_client/images/veg-3/home/1.png"
                                className="img-fluid bg-img blur-up lazyloaded"
                                alt=""
                                style={{ display: "none" }}
                            />
                            <div className="home-detail home-width p-center-left position-relative">
                                <div>
                                    <h6 className="ls-expanded theme-color">ORGANIC</h6>
                                    <h1 className="fw-bold w-100">100% Fresh</h1>
                                    <h3 className="text-content fw-light">Fruit &amp; Vegetables</h3>
                                    <p className="d-sm-block d-none">
                                        Free shipping on all your order. we deliver you enjoy
                                    </p>
                                    <button

                                        className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
                        <div className="home-contain home-small h-100">
                            <div
                                className="h-100 bg-size blur-up lazyloaded"
                                style={{
                                    backgroundImage: 'url("assets_client/images/veg-3/home/2.png")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat",
                                    display: "block"
                                }}
                            >
                                <img
                                    src="assets_client/images/veg-3/home/2.png"
                                    className="img-fluid bg-img blur-up lazyloaded"
                                    alt=""
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="home-detail text-center p-top-center w-100 text-white">
                                <div>
                                    <h4 className="fw-bold">Fresh &amp; 100% Organic</h4>
                                    <h5 className="text-center">famers market</h5>
                                    <button
                                        className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"

                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 ratio_65 d-xxl-block d-none">
                        <div className="row g-3">
                            <div className="col-xxl-12 col-sm-6">
                                <div className="home-contain">
                                    <a
                                        href="shop-left-sidebar.html"
                                        className="bg-size blur-up lazyloaded"
                                        style={{
                                            backgroundImage:
                                                'url("assets_client/images/veg-3/home/3.png")',
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center",
                                            backgroundRepeat: "no-repeat",
                                            display: "block"
                                        }}
                                    >
                                        <img
                                            src="assets_client/images/veg-3/home/3.png"
                                            className="img-fluid bg-img blur-up lazyloaded"
                                            alt=""
                                            style={{ display: "none" }}
                                        />
                                    </a>
                                    <div className="home-detail text-white p-center text-center">
                                        <div>
                                            <h4 className="text-center">Organic Lifestyle</h4>
                                            <h5 className="text-center">Best Weekend Sales</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12 col-sm-6">
                                <div className="home-contain">
                                    <a
                                        href="shop-left-sidebar.html"
                                        className="bg-size blur-up lazyloaded"
                                        style={{
                                            backgroundImage:
                                                'url("assets_client/images/veg-3/home/4.png")',
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center",
                                            backgroundRepeat: "no-repeat",
                                            display: "block"
                                        }}
                                    >
                                        <img
                                            src="assets_client/images/veg-3/home/4.png"
                                            className="img-fluid bg-img blur-up lazyloaded"
                                            alt=""
                                            style={{ display: "none" }}
                                        />
                                    </a>
                                    <div className="home-detail text-white w-50 p-center-left home-p-sm">
                                        <div>
                                            <h4 className="fw-bold">Safe food saves lives</h4>
                                            <h5>Discount Offer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
