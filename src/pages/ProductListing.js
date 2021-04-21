import faker from "faker";
import { Action } from "history";
import { useReducer } from "react";
function ProductListing({}) {
  //use faker to get random products until back-end is ready
  const data = [...Array(50)].map((item) => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    image: faker.random.image(),
    price: faker.commerce.price()
  }));
  faker.seed(123);
  const [{ sortBy }, dispatch] = useReducer(
    function reducer(state, action) {
      switch (action.type) {
        case "SORT":
          return {
            ...state,
            sortBy: action.payload
          };
        default:
          return state;
      }
    },
    {
      sortBy: null
    }
  );

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    return productList;
  }

  function getFilteredData(productList) {
    return productList;
  }

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData);

  return (
    <div>
      <div>
        <fieldset>
          <legend> Sort by Price </legend>
          <input
            type="radio"
            name="sort-option"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            // checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          />
          <label for="low-to-high"> Low to High </label>
          <input
            type="radio"
            name="sort-option"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            // checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          <label for="high-to-low"> High to Low </label>

          <input
            type="radio"
            name="sort-option"
            onChange={() => dispatch({ type: "SORT", payload: "None" })}
            // checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          <label for="high-to-low"> None </label>
        </fieldset>
      </div>
      <div className="product-listing">
        {data.map((item) => (
          <div key={item.id}>
            <div className="card-with-image">
              <div className="card-design product-list-item">
                <img src={item.image} />
                <div>
                  <div>{item.name}</div>
                </div>
                <div> Rs. {item.price}</div>

                <div className="card-buttons">
                  <button className="button button-secondary">
                    {" "}
                    <i class="far fa-heart"></i> Wishlist{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
