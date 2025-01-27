
import Product from '../model/Product';
import ProductCard from './ProductCard';
let products: Product[] = [
    {
      "productDescription":"The iPhone X models with Super Retina with 3D Touch",
     "productId":1,
     "productImageUrl":"/images/iphone-x-in-hand.jpg",
     "productName":"Apple iPhone X 64,GB ",
     "productPrice":87049,
     "productQuantity":5,
     "productSeller":"Apple",
     "ratings":4
    },
    {
      "productDescription":"4 GB RAM 15.7 cm Full HD+ Display,20MP Front Camera 3500 mAh Battery Qualcomm Snapdragon 710 Processor",
      "productId":2,
      "productImageUrl":"/images/nokia8-1.jpg",
      "productName":"Nokia 8.1",
      "productPrice":26000,
      "productQuantity":3,
      "productSeller":"Nokia",
      "ratings":3
    },
    {
      "productDescription":"13MP primary camera with beautify, filter, HDR, panorama, ultra HD and 8MP front facing camera 15.2",
      "productId":3,
      "productImageUrl":"/images/realme1.jpg",
      "productName":"Realme 1",
      "productPrice":10999,
      "productQuantity":3,
      "productSeller":"Realme",
      "ratings":3
    },
    {
      "productDescription":"12+5MP dual rear cameras (f/1.8, single LED flash) with creative camera system; 16MP front facing camera",
      "productId":4,
      "productImageUrl":"/images/moto-g6-2.jpg",
      "productName":"Moto G6 (Indigo Black)",
      "productPrice":15999,
      "productQuantity":9,
      "productSeller":"Motorolla",
      "ratings":4
    },
    {
      "productDescription":"3 GB RAM | 32 GB ROM | Expandable Upto 256 GB 15.75 cm (6.2 inch) HD+ Display 13MP + 2MP | 8MP Front",
      "productId":5,
      "productImageUrl":"/images/realme-2.jpg",
      "productName":"Realme 2",
      "productPrice":9850,
      "productQuantity":9,
      "productSeller":"Motorolla",
      "ratings":4
    }
  ];

export default function ProductList() {
    return <div className="container">
        <div className="row">
            {
                products.map(p => <ProductCard product={p}/>)
            }
        </div>
    </div>
}

