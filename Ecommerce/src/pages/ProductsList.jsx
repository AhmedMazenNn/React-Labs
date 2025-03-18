import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import "./ProductsList.css";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const handleProductClick = (id) => {
        navigate(`/product-detail/${id}`);
    };

    return (
        <div className="container">
            <h2>All Products</h2>
            <hr />
            {loading ? (
                <div className="text-center">
                    <Loader />
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">${product.price}</p>
                                    <span className={`badge ${product.stock > 6 ? "text-bg-success" : "text-bg-danger"}`}>
                                        {product.stock > 6 ? "In stock" : "Out of stock"}
                                    </span>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary me-3" onClick={() => handleProductClick(product.id)}>
                                        Show Details
                                    </button>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsList;
