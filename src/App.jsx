import './App.css';
import numberOfSoldProducts from './helpers/numberOfSoldProducts.js';
import numberOfPurchasedProducts from "./helpers/numberOfPurchasedProducts.js";
import numberOfStockProducts from "./helpers/numberOfStockProducts.js";
import productInformation from "./helpers/productInformation.js";
import formatPrice from "./helpers/formatPrice.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import availableSizes from "./helpers/availableSizes.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {sortMostSold, sortLowestPrice, sortRefreshRate} from "./helpers/sort.js";

function App() {
    function buttonClick(e) {
        console.log(e.target.innerText)
    }
    return (
        <div>
            <main className="outerContainer">
                <h1>Tech It Easy Dashboard</h1>
                <h2>Verkoop overzicht</h2>
                <div className="statistics">
                    <article className="statisticsTile soldProducts">
                        <h3>Aantal verkochte producten</h3>
                        <p>{numberOfSoldProducts()}</p>
                    </article>
                    <article className="statisticsTile purchasedProducts">
                        <h3>Aantal ingekochte producten</h3>
                        <p>{numberOfPurchasedProducts()}</p>
                    </article>
                    <article className="statisticsTile stockProducts">
                        <h3>Aantal te verkopen producten</h3>
                        <p>{numberOfStockProducts()}</p>
                    </article>
                </div>
                <h2>Best verkochte Tv</h2>
                <article className="tvTile">
                        <span>
                            <img src={bestSellingTv.sourceImg} alt="tv" className="tvImage"/>
                        </span>
                    <div className="tvInformation">
                        <h3>{productInformation(bestSellingTv)}</h3>
                        <p>{formatPrice(bestSellingTv.price)}</p>
                        <p>{availableSizes(bestSellingTv.availableSizes)}</p>
                        <ul className="tvOptions">
                            <li><img src={check} alt="check" className="icon"/>wifi</li>
                            <li><img src={minus} alt="not check" className="icon"/>speech</li>
                            <li><img src={check} alt="check" className="icon"/>hdr</li>
                            <li><img src={check} alt="check" className="icon"/>bluetooth</li>
                            <li><img src={minus} alt="not check" className="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
                <div className="buttons">
                    <button onClick={(e) => {
                        buttonClick(e)
                        sortMostSold(inventory);
                    }}>Meest verkocht eerst
                    </button>
                    <button onClick={(e) => {
                        buttonClick(e)
                        sortLowestPrice(inventory);
                    }}>Goedkoopste eerst
                    </button>
                    <button onClick={(e) => {
                        buttonClick(e)
                        sortRefreshRate(inventory);
                    }}>Meest geschikt voor sport eerst
                    </button>
                </div>
                <ul className="listTvs">
                    {inventory.map((tv) => {
                        return <li key={tv.type}>
                            <article className="tvTile">
                                 <span>
                                    <img src={tv.sourceImg} alt="tv" className="tvImage"/>
                                </span>
                                <div className="tvInformation">
                                    <h3>{productInformation(tv)}</h3>
                                    <p>{formatPrice(tv.price)}</p>
                                    <p>{availableSizes(tv.availableSizes)}</p>
                                    <ul className="tvOptions">
                                        {tv.options.map((option) => {
                                            switch (option.applicable) {
                                                case false:
                                                    return <li key={option.name}><img src={minus} alt="not check" className="icon"/><p>{option.name}</p>
                                                    </li>
                                                default:
                                                    return <li key={option.name}><img src={check} alt="check" className="icon"/><p>{option.name}</p>
                                                    </li>
                                            }
                                        })}
                                    </ul>
                                </div>
                            </article>
                        </li>
                    })}
                </ul>
            </main>
        </div>
    )
}

export default App
