import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function ProductItem({ product }) {
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${product.image}`} alt={product.name}/>
                <div>
                    <h3>{product.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(product.price)}</p>
                    <p className="meal-item-description">{product.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button className="">Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}