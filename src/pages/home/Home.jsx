import Categories from './Categories';
import Featured from './Featured';
import ProductsFile from './ProductsFile';
import Subscribe from './Subscribe';
import Offer from './Offer';
import Products from './Products';
import ImgSlide from './ImgSlide';

const Home = ({detailProduct , favorateProduct}) => {

  return (
    <>
    <ImgSlide detailProduct={detailProduct} />
    <Featured />
    <Categories  detailProduct={detailProduct}  />
    <Offer detailProduct={detailProduct}  />
    <Products detailProduct={detailProduct} favorateProduct={favorateProduct} />
    <Subscribe />
    <ProductsFile detailProduct={detailProduct} favorateProduct={favorateProduct}  />  
    </>
  )
}

export default Home