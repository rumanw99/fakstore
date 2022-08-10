import React from 'react'
import {Link} from 'react-router-dom'
import { useFetch } from '../../useFetch'

const Categories = ({detailProduct}) => {
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <>
    {loading && <p>Loading...</p>}
{products.length > 0 && 
        
    <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px",height:"400px"}}>
                <p className="text-right">{products[6].category}</p>
                <Link to="/deta" onClick={() => detailProduct(6)} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={products[6].image} alt="" />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{products[6].title}</h5>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px",height:"400px"}}>
                <p className="text-right">{products[7].category}</p>
                <Link to="/deta" onClick={() => detailProduct(7)} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={products[7].image} alt="" />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{products[7].title}</h5>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px",height:"400px"}}>
                <p className="text-right">{products[8].category}</p>
                <Link to="/deta" onClick={() => detailProduct(8)} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={products[8].image} alt="" />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{products[8].title}</h5>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px",height:"400px"}}>
                <p className="text-right">{products[9].category}</p>
                <Link to="/deta" onClick={() => detailProduct(9)} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={products[9].image} alt="" />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{products[9].title}</h5>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px", height:"400px"}}>
                <p className="text-right">{products[10].category}</p>
                <Link to="/deta" onClick={() => detailProduct(10)} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={products[10].image} alt="" />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{products[10].title}</h5>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px" , height:"400px"}}>
                <p className="text-right">{products[11].category}</p>
                <Link to="/deta" onClick={() => detailProduct(11)} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src={products[11].image} alt="" />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{products[11].title}</h5>
            </div>
        </div>
    </div>
</div>
}
{error && <p>{error}</p>}
    </>
  )
}

export default Categories