import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({categoryProducts}) => {
  return (
   
    <div className="container-fluid">
    <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: "65px" , marginTop: "-1px" , padding: "0 30px"}}>
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: "calc(100% - 30px)" , zIndex: "1"}}>
                <div className="navbar-nav w-100 overflow-hidden" style={{height: "200px"}}>
                    <div className="nav-item dropdown">
                       
                            <Link to="/categoryProducts" onClick={() => categoryProducts("men's clothing")} className="dropdown-item">Men's Clothing</Link>
                            <Link to="/categoryProducts" onClick={() => categoryProducts("jewelery")} className="dropdown-item">Jewelery</Link>
                            <Link to="/categoryProducts" onClick={() => categoryProducts("electronics")} className="dropdown-item">Electronics</Link>
                            <Link to="/categoryProducts" onClick={() => categoryProducts("women's clothing")} className="dropdown-item">Women's Clothing</Link>
                  
                    </div>
                </div>
            </nav>
        </div>
        <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/shop" className="nav-item nav-link">Shop</Link>
                        <Link to="/details" className="nav-item nav-link">Shop Detail</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                        <a href="" className="nav-item nav-link">Login</a>
                        <a href="" className="nav-item nav-link">Register</a>
                    </div>
                </div>
            </nav>

        </div>
    </div>
</div>

  )
}

export default Navbar