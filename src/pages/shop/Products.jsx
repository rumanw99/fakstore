import React from 'react';
import {Link} from 'react-router-dom';


const Products = ({detailProduct,favorateProduct , products , loading , error , ward , pen}) => {
    
    
  return (
    <div style={{display : "flex" , flexWrap:"wrap" , padding:"50px"}}>
    {loading && <p>Loading...</p>}
        {pen === false ?
            products.map(product =>   
            <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={product.id}
        
        >
        <div className="card product-item border-0 mb-4" style={{height:"500px"}} >
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={product.image} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.category}</h6>
                <div className="d-flex justify-content-center">
                    <h6>{product.price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
            <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(product.id - 1)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
            <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(product.id - 1)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
    </div>)
    :
            ward.map(product =>   
            <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={product.id}
        
        >
        <div className="card product-item border-0 mb-4" style={{height:"500px"}} >
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={product.image} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.category}</h6>
                <div className="d-flex justify-content-center">
                    <h6>{product.price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
            <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(product.id - 1)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
            <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(product.id - 1)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
        </div>
    
    )
    
}
{ward.length <= 0 && <h2>Products Not Found This Price</h2>}
        {error && <p>{error}</p>}
    </div>
  )
}

export default Products