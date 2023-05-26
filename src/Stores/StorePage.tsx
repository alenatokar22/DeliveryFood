import { useParams } from "react-router-dom";
import storesData from "../Stores/storesData";
import "../scss/storePage.scss";

interface StoreData {
  id: number;
  name: string;
  info: ImageData[];
}

interface ImageData {
  name: string;
  url: string;
}

const StorePage = () => {
  const { name } = useParams<{ name: string }>();
  const store = storesData[name];

  if (!store || !Array.isArray(store.info)) {
    return <div>Store not found</div>;
  }

  return (
    <div className="store-page">
      <div className="store-page__item">
        {store.info.map((imageData: ImageData) => (
          <div className="store-page__info" key={imageData.id}>
            <img
              className="store-page__image"
              src={imageData.url}
              alt={imageData.name}
            />
            <p className="store-page__title">{imageData.name}</p>
            <div className="store-page__block">
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
