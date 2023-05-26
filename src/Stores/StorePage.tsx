import { useParams } from "react-router-dom";
import { storesData } from "./storesData";

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

  if (!name || !store) {
    return <div>Store not found</div>;
  }

  return (
    <div className="store-page">
      <div className="store-page__item">
        {store.info.map((imageData: StoreImageData) => (
          <div className="store-page__info" key="index">
            <img
              className="store-page__image"
              src={imageData.url}
              alt={imageData.name}
            />
            <p className="store-page__title">{imageData.name}</p>
            <div className="store-page__block" key="index2">
              <button
                className="store-page__btn"
                title="The item should be added in the Shopping Cart"
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
