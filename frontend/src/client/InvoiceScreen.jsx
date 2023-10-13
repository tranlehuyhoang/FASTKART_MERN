

const InvoiceScreen = () => {
    return (
        <>

            <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                style={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)",
                    WebkitBoxShadow: "0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)"
                }}
            >
                <tbody>
                    <tr>
                        <td>
                            <table
                                className="header-table"
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                            >
                                <tbody>
                                    <tr
                                        className="header"
                                        style={{
                                            backgroundColor: "#f7f7f7",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "100%"
                                        }}
                                    >
                                        <td className="header-logo" style={{ padding: "10px 32px" }}>
                                            <a
                                                href="../front-end/index.html"
                                                style={{ display: "block", textAlign: "left" }}
                                            >
                                                <img
                                                    src="http://127.0.0.1:1000/assets_client/logo.png"
                                                    className="main-logo"
                                                    alt="logo"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                style={{ padding: 27 }}
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src="http://127.0.0.1:1000/assets_client/order-success-poster.png"
                                                alt=""
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                                style={{ padding: "0 27px" }}
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="title title-2 text-center">
                                                <h2
                                                    style={{
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        margin: "24px 0 0"
                                                    }}
                                                >
                                                    Thanks For your Order
                                                </h2>
                                                <p
                                                    style={{
                                                        fontSize: 14,
                                                        margin: "5px auto 0",
                                                        lineHeight: "1.5",
                                                        color: "#939393",
                                                        fontWeight: 500,
                                                        width: "70%"
                                                    }}
                                                >
                                                    You ll receive an email when your items are shipped. if you
                                                    have any questions, Call Us 1-978-8767.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                className="dilivery-table"
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                                style={{
                                    margin: "25px 27px",
                                    padding: "20px 32px",
                                    width: "fit-content",
                                    backgroundColor: "#f7f7f7"
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                textAlign: "left",
                                                paddingRight: 28,
                                                borderRight: "2px solid rgba(217, 217, 217, 0.5)"
                                            }}
                                        >
                                            <div className="title title-2" style={{ textAlign: "left" }}>
                                                <h2
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        margin: "0 0 12px"
                                                    }}
                                                >
                                                    Thanks For your Order
                                                </h2>
                                                <p
                                                    style={{
                                                        fontSize: 14,
                                                        margin: 0,
                                                        lineHeight: "1.5",
                                                        color: "#939393",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    268 Cambridge Lane New Albany, IN 47150268 Cambridge Lane
                                                    New Albany, IN 47150
                                                </p>
                                            </div>
                                        </td>
                                        <td style={{ textAlign: "left", paddingLeft: 32 }}>
                                            <div className="title title-2" style={{ textAlign: "left" }}>
                                                <h2
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        margin: "0 0 12px"
                                                    }}
                                                >
                                                    Thanks For your Order
                                                </h2>
                                                <p
                                                    style={{
                                                        fontSize: 14,
                                                        margin: 0,
                                                        lineHeight: "1.5",
                                                        color: "#939393",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    You ll receive an email when your items are shipped. if you
                                                    have any questions, Call Us 1-978-8767.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                className="shipping-table"
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                                style={{ padding: "0 27px" }}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                fontSize: 17,
                                                fontWeight: 700,
                                                paddingBottom: 8,
                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)",
                                                textAlign: "left"
                                            }}
                                        >
                                            Shipped Items
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        style={{
                                            columnCount: 2,
                                            columnRuleStyle: "dashed",
                                            columnRuleColor: "rgba(82, 82, 108, 0.7)",
                                            columnGap: 22,
                                            columnRuleWidth: 1,
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <td style={{ width: "100%" }}>
                                            <table
                                                className="product-table"
                                                align="center"
                                                border={0}
                                                cellPadding={0}
                                                cellSpacing={0}
                                                width="100%"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: "28px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            <a href="http://127.0.0.1:1000/product/16">
                                                                <img
                                                                    src="http://127.0.0.1:1000/images/1696159512_10.png"
                                                                    alt=""
                                                                    style={{ height: 80 }}
                                                                />
                                                            </a>
                                                        </td>
                                                        <td
                                                            style={{
                                                                padding: "28px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            <ul className="product-detail">
                                                                <li>4</li>
                                                                <li>
                                                                    QTY: <span>4</span>
                                                                </li>
                                                                <li>
                                                                    Price: <span>$4.00</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: "28px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            <a href="http://127.0.0.1:1000/product/17">
                                                                <img
                                                                    src="http://127.0.0.1:1000/images/1696159516_11.png"
                                                                    alt=""
                                                                    style={{ height: 80 }}
                                                                />
                                                            </a>
                                                        </td>
                                                        <td
                                                            style={{
                                                                padding: "28px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            <ul className="product-detail">
                                                                <li>4</li>
                                                                <li>
                                                                    QTY: <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Price: <span>$4.00</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{ width: "70%" }}>
                                            <table
                                                className="dilivery-table"
                                                align="center"
                                                border={0}
                                                cellPadding={0}
                                                style={{ backgroundColor: "#F7F7F7", padding: 14 }}
                                                cellSpacing={0}
                                                width="100%"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                fontWeight: 700,
                                                                fontSize: 17,
                                                                paddingBottom: 15,
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                            colSpan={2}
                                                        >
                                                            Order summary
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                textAlign: "left",
                                                                fontSize: 15,
                                                                fontWeight: 400,
                                                                padding: "15px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            Subtotal
                                                        </td>
                                                        <td
                                                            style={{
                                                                textAlign: "right",
                                                                fontSize: 15,
                                                                fontWeight: 400,
                                                                padding: "15px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            $20.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                textAlign: "left",
                                                                fontSize: 15,
                                                                fontWeight: 400,
                                                                padding: "15px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            Discount
                                                        </td>
                                                        <td
                                                            style={{
                                                                textAlign: "right",
                                                                fontSize: 15,
                                                                fontWeight: 400,
                                                                padding: "15px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            -$0.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                textAlign: "left",
                                                                fontSize: 15,
                                                                fontWeight: 400,
                                                                padding: "15px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            Shipping
                                                        </td>
                                                        <td
                                                            style={{
                                                                textAlign: "right",
                                                                fontSize: 15,
                                                                fontWeight: 400,
                                                                padding: "15px 0",
                                                                borderBottom: "1px solid rgba(217, 217, 217, 0.5)"
                                                            }}
                                                        >
                                                            $0.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                textAlign: "left",
                                                                fontSize: 15,
                                                                fontWeight: 600,
                                                                paddingTop: 15
                                                            }}
                                                        >
                                                            Total
                                                        </td>
                                                        <td
                                                            style={{
                                                                textAlign: "right",
                                                                fontSize: 15,
                                                                fontWeight: 600,
                                                                paddingTop: 15
                                                            }}
                                                        >
                                                            $20.00
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                                className="order-table"
                                style={{
                                    backgroundImage:
                                        "url(http://127.0.0.1:1000/assets_client/order-poster.jpg)"
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="text-center">
                                                <h5
                                                    style={{
                                                        fontSize: 18,
                                                        fontWeight: 700,
                                                        margin: 0,
                                                        color: "#fff"
                                                    }}
                                                >
                                                    Get 25% off your next order
                                                </h5>
                                                <button
                                                    style={{
                                                        marginTop: 10,
                                                        padding: "9px 21px",
                                                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                        border: "none",
                                                        color: "#fff",
                                                        fontWeight: 700,
                                                        fontSize: 14
                                                    }}
                                                >
                                                    Awesome
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                className="text-center footer-table"
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="100%"
                                style={{
                                    backgroundColor: "#282834",
                                    color: "white",
                                    padding: 24,
                                    overflow: "hidden",
                                    zIndex: 0
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            <table
                                                border={0}
                                                cellPadding={0}
                                                cellSpacing={0}
                                                className="footer-social-icon text-center"
                                                align="center"
                                                style={{ margin: "8px auto 20px" }}
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontSize: 19, fontWeight: 700 }}>
                                                            Shop For <span className="theme-color">Fastkart</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table
                                                border={0}
                                                cellPadding={0}
                                                cellSpacing={0}
                                                className="footer-social-icon text-center"
                                                align="center"
                                                style={{ margin: "8px auto 20px" }}
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a
                                                                href="javascript:void(0)"
                                                                style={{
                                                                    fontSize: 14,
                                                                    fontWeight: 600,
                                                                    color: "#fff",
                                                                    textDecoration: "underline",
                                                                    textTransform: "capitalize"
                                                                }}
                                                            >
                                                                Contact Us
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="javascript:void(0)"
                                                                style={{
                                                                    fontSize: 14,
                                                                    fontWeight: 600,
                                                                    color: "#fff",
                                                                    textDecoration: "underline",
                                                                    textTransform: "capitalize",
                                                                    marginLeft: 20
                                                                }}
                                                            >
                                                                unsubscribe
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="javascript:void(0)"
                                                                style={{
                                                                    fontSize: 14,
                                                                    fontWeight: 600,
                                                                    color: "#fff",
                                                                    textDecoration: "underline",
                                                                    textTransform: "capitalize",
                                                                    marginLeft: 20
                                                                }}
                                                            >
                                                                privacy Policy
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table
                                                border={0}
                                                cellPadding={0}
                                                cellSpacing={0}
                                                className="footer-social-icon text-center"
                                                align="center"
                                                style={{ margin: "23px auto" }}
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="www.facebook.com">
                                                                <img
                                                                    src="images/fb.png"
                                                                    style={{
                                                                        fontSize: 25,
                                                                        margin: "0 18px 0 0",
                                                                        width: 22,
                                                                        filter: "invert(1)"
                                                                    }}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="www.twitter.com">
                                                                <img
                                                                    src="images/twitter.png"
                                                                    style={{
                                                                        fontSize: 25,
                                                                        margin: "0 18px 0 0",
                                                                        width: 22,
                                                                        filter: "invert(1)"
                                                                    }}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="www.instagram.com">
                                                                <img
                                                                    src="images/insta.png"
                                                                    style={{
                                                                        fontSize: 25,
                                                                        margin: "0 18px 0 0",
                                                                        width: 22,
                                                                        filter: "invert(1)"
                                                                    }}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="www.pinterest.com">
                                                                <img
                                                                    src="images/pinterest.png"
                                                                    style={{
                                                                        fontSize: 25,
                                                                        margin: "0 18px 0 0",
                                                                        width: 22,
                                                                        filter: "invert(1)"
                                                                    }}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h5
                                                                style={{
                                                                    fontSize: 13,
                                                                    textTransform: "uppercase",
                                                                    margin: 0,
                                                                    color: "#ddd",
                                                                    letterSpacing: 1,
                                                                    fontWeight: 500
                                                                }}
                                                            >
                                                                Want to change how you receive these emails?
                                                            </h5>
                                                            <h5
                                                                style={{
                                                                    fontSize: 13,
                                                                    textTransform: "uppercase",
                                                                    margin: "10px 0 0",
                                                                    color: "#ddd",
                                                                    letterSpacing: 1,
                                                                    fontWeight: 500
                                                                }}
                                                            >
                                                                2021-22 copy right by themeforest powerd by pixelstrap
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default InvoiceScreen