import React from 'react';
import ProductsCard from './ProductsCard';
import './Products.scss';
import Footer from './Footer/Footer';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productsListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ categoryList: res.categoryData });
        this.setState({ productsList: res.listData });
      });
  }

  render() {
    return (
      <div className="productContainer">
        <section className="productHeader">
          <h1 className="productHeaderTitle">베스트</h1>
          <div className="productHeaderCategory">
            {this.state.categoryList.map(category => {
              const { id, name } = category;
              return (
                <ul className="categoryUnorderedList">
                  <li className="categoryList">
                    <a href="#" key={id}>
                      {name}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
        </section>
        <section className="productMain">
          <div className="productMainInfo">
            <article className="productQuantity">229개의 상품</article>
            <article className="productSort">
              <div className="dropDown">
                상품정렬
                <div className="dropDownCategory">
                  <a href="#">낮은가격</a>
                  <a href="#">높은가격</a>
                  <a href="#">인기상품</a>
                  <a href="#">조회수</a>
                </div>
              </div>
            </article>
          </div>
          <div className="productMainList">
            {this.state.productsList.map(list => {
              const {
                id,
                img1,
                img2,
                review,
                name,
                price,
                colorAmount,
                textBox,
              } = list;
              return (
                <ProductsCard
                  key={id}
                  img1={img1}
                  img2={img2}
                  review={review}
                  name={name}
                  price={price}
                  colorAmount={colorAmount}
                  textBox={textBox}
                />
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Products;
