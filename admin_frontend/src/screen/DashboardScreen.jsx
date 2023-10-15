



const DashboardScreen = () => {


  return (
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

  )
}

export default DashboardScreen