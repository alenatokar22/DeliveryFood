import { useParams } from "react-router-dom";
import { useState } from "react";
import { storesData } from "./storesData";
import StoreSelectionPage from "../Page/StoreSelectionPage";

interface StoreImageData {
  name: string;
  url: string;
  price: number;
}

interface StoreData {
  id: number;
  name: string;
  info: StoreImageData[];
}

const StorePage = () => {
  const { name } = useParams<{ name: string }>();
  const store = name ? storesData[name] : undefined;

  const [cartItems, setCartItems] = useState<StoreImageData[]>([]);

  const addItem = (item: StoreImageData) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  if (!name || !store) {
    return <div>Store not found</div>;
  }

  return (
    <div className="store-page">
      <StoreSelectionPage />
      <div className="store-page__item">
        {store.info.map((imageData: StoreImageData,  index: number) => (
          <div className="store-page__info" key="index">
            <img
              className="store-page__image"
              src={imageData.url}
              alt={imageData.name}
            />
            <p className="store-page__title">{imageData.name}</p>
            <div className="store-page__block" key="index +2">
              <button
                className="store-page__btn"
                title="The item should be added in the Shopping Cart"
                onClick={() => addItem(imageData)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
