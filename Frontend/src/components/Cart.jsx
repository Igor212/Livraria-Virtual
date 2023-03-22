import { ContainerCart,
UpCart,
TitleCart,
Product,
ContainerInfoProduct,
TitleProduct,
AuthorProduct,
SelectAmount,
PriceProduct,
DownCart,
TextDownCart,
BuyButton, } from "../styles/Cart";

import { FaShoppingCart, FaTimes } from "react-icons/fa";

export const Cart = () => {
  return(
    <ContainerCart>
      <div>
        <UpCart>
          <div className="row-icon-text">

          <FaShoppingCart color="white" fontSize="2.4em"/>
          <TitleCart>Cart</TitleCart>
          </div>
          <FaTimes color="black" fontSize="2.4em"/>
        </UpCart>
        
        <Product>
          <img src="images/book.png" alt="book"></img>
          <ContainerInfoProduct>
            <TitleProduct>
              What I Learned From The Trees
            </TitleProduct>
            <AuthorProduct>
              L.E. Bowman
            </AuthorProduct>

            <SelectAmount>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </SelectAmount>
            <PriceProduct>$ 20.00</PriceProduct>
          </ContainerInfoProduct>
          <FaTimes color="black" fontSize="1.4em"/>
        </Product>

        <Product>
          <img src="images/book.png" alt="book"></img>
          <ContainerInfoProduct>
            <TitleProduct>
              What I Learned From The Trees
            </TitleProduct>
            <AuthorProduct>
              L.E. Bowman
            </AuthorProduct>

            <SelectAmount>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </SelectAmount>
            <PriceProduct>$ 20.00</PriceProduct>
          </ContainerInfoProduct>
          <FaTimes color="black" fontSize="1.4em"/>
        </Product>
      </div>

      <DownCart>
        <div className="row-text-down-cart">

          <TextDownCart>Total</TextDownCart>
          <TextDownCart>$ 40.00</TextDownCart>
        </div>

        <BuyButton>Buy</BuyButton>
      </DownCart>
      
    </ContainerCart>
  );
}