import React from "react";
import './index.css'

export default function Footer() {
    return (
        <>
            <div className="container">
                <hr></hr>
                <div className="row">
                    <h5 className="col-md-3 footerCol">
                        About
                    </h5>
                    <h5 className="col-md-3 footerCol">
                        Partnerships
                    </h5>
                    <h5 className="col-md-3 footerCol">
                        Resources
                    </h5>
                    <h5 className="col-md-3 footerCol">
                        Follow Us!
                    </h5>
                </div>
            </div>

        </>
    )
}