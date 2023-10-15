

const CreateCategoryScreen = () => {
    return (
        <div className="page-body">
            {/* New Product Add Start */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-8 m-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-header-2">
                                            <h5>Category Information</h5>
                                        </div>
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
                                            <div className="mb-4 row align-items-center">
                                                <label className="form-label-title col-sm-3 mb-0">
                                                    Category Name
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Category Name"
                                                        data-bs-original-title=""
                                                        title=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 row align-items-center">
                                                <label className="col-sm-3 col-form-label form-label-title">
                                                    Category Image
                                                </label>
                                                <div className="form-group col-sm-9">
                                                    <div className="dropzone-wrapper">
                                                        <div className="dropzone-desc">
                                                            <i className="ri-upload-2-line" />
                                                            <p>Choose an image file or drag it here.</p>
                                                        </div>
                                                        <input
                                                            type="file"
                                                            name="image"
                                                            className="dropzone"
                                                            data-bs-original-title=""
                                                            title=""
                                                        />
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

export default CreateCategoryScreen