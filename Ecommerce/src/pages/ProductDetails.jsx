import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import Loader from "../components/Loader";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="container">
            {loading ? (
                <div className="text-center">
                    <Loader />
                </div>
            ) : (
                product && (
                    <div className="product-details">
                        <div className="product-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <span className={`badge ${product.stock > 6 ? "text-bg-success" : "text-bg-danger"}`}>
                                {product.stock > 6 ? "In stock" : "Out of stock"}
                            </span>
                            <div className="product-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                <button className="btn btn-secondary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ProductDetails;
