import React from 'react'

function Header() {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            <h1 className="display-2">
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                                officiis tempora recusandae voluptate quam, nisi odio officiis
                                tempora recusandae
                            </p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input
                                    type="text"
                                    className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                                    placeholder="Enter Your Email"
                                />
                                <div className="input-group-button">Get it now</div>
                            </div>
                        </div>
                        {/*  --------------- main header right side--------------  */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img
                                src="https://images.pexels.com/photos/8938730/pexels-photo-8938730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="heroimg"
                                className="img-fluid"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                                alt="heroimg4"
                                className="img-fluid main-hero-img2"
                            />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
