import './App.css';
import numberOfSoldProducts from './helpers/numberOfSoldProducts.js';
import numberOfPurchasedProducts from "./helpers/numberOfPurchasedProducts.js";
import numberOfStockProducts from "./helpers/numberOfStockProducts.js";
import productInformation from "./helpers/productInformation.js";
import formatPrice from "./helpers/formatPrice.js";
import {bestSellingTv} from "./constants/inventory.js";
import availableSizes from "./helpers/availableSizes.js";

function App() {
    return (
        <div className="outerContainer">
            <header className="innerContainer">
                <h1>Tech It Easy Dashboard</h1>
            </header>
            <main>
                <div className="innerContainer">
                    <h2>Verkoop overzicht</h2>
                    <article className="statisticsTile soldProducts">
                        <article>
                            <h3>Aantal verkochte producten</h3>
                            <p>{numberOfSoldProducts()}</p>
                        </article>
                    </article>
                    <article className="statisticsTile purchasedProducts">
                        <article>
                            <h3>Aantal ingekochte producten</h3>
                            <p>{numberOfPurchasedProducts()}</p>
                        </article>
                    </article>
                    <article className="statisticsTile stockProducts">
                        <article>
                            <h3>Aantal te verkopen producten</h3>
                            <p>{numberOfStockProducts()}</p>
                        </article>
                    </article>
                </div>
                <div className="innerContainer">
                    <h2>Best verkochte Tv</h2>
                    <article className="bestSellerTile">
                        <span>
                            <img src={bestSellingTv.sourceImg} alt="tv"/>
                        </span>
                        <div className="bestSellerInformation">
                            <h3>{productInformation()}</h3>
                            <p>{formatPrice(bestSellingTv.price)}</p>
                            <p>{availableSizes(bestSellingTv.availableSizes)}</p>
                        </div>
                    </article>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default App
