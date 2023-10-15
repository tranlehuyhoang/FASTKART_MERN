
const CreateProductScreen = () => {
    return (
        <div className="page-body">
            {/* New Product Add Start */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-8 m-auto">
                                <form
                                    className="theme-form theme-form-2 mega-form"
                                    method="POST"
                                    action=""
                                    encType="multipart/form-data"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="IjlXCCKF9soniAQd9wZ3xXCpwSfgtKbM0Q4i33vy"
                                        autoComplete="off"
                                        data-bs-original-title=""
                                        title=""
                                    />
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header-2">
                                                <h5>Product Information</h5>
                                            </div>
                                            <div className="mb-4 row align-items-center">
                                                <label className="form-label-title col-sm-3 mb-0">
                                                    Product Name
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Product Name"
                                                        name="name"
                                                        data-bs-original-title=""
                                                        title=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 row align-items-center">
                                                <label className="col-sm-3 col-form-label form-label-title">
                                                    Category
                                                </label>
                                                <div className="col-sm-9">
                                                    <select
                                                        className="js-example-basic-single w-100"
                                                        name="category"
                                                    >
                                                        <option disabled="">Category Menu</option>
                                                        <option value={5}>rau củ 2</option>
                                                        <option value={4}>rau củ</option>
                                                        <option value={3}>rau củ1</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-4 row align-items-center">
                                                <label className="form-label-title col-sm-3 mb-0">
                                                    Product Price
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="price"
                                                        data-bs-original-title=""
                                                        title=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header-2">
                                                <h5>Product Images</h5>
                                            </div>
                                            <div className="theme-form theme-form-2 mega-form">
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-sm-3 col-form-label form-label-title">
                                                        Images
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            className="form-control form-choose"
                                                            name="image"
                                                            type="file"
                                                            id="formFile"
                                                            multiple=""
                                                            data-bs-original-title=""
                                                            title=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary ms-auto mt-4"
                                        data-bs-original-title=""
                                        title=""
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Product Add End */}
            {/* footer Start */}
            <div className="container-fluid">
                <footer className="footer">
                    <div className="row">
                        <div className="col-md-12 footer-copyright text-center">
                            <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
                        </div>
                    </div>
                </footer>
            </div>
            {/* footer En */}
        </div>



    )
}

export default CreateProductScreen