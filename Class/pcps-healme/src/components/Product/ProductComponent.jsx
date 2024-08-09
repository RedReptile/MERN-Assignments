import React, { useState, useEffect } from 'react';
import axios from 'axios';

const domain = "http://localhost:5000";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${domain}/api/products`);
        setProducts(Array.isArray(response.data) ? response.data : []); // Ensure the data is an array
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Fallback to an empty array if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleUpdate = (product) => {
    // Implement the update functionality here
    console.log('Update product:', product);
    // You can navigate to the form, pre-fill with product data, etc.
  };

  const handleDelete = async (productId) => {
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
  
    if (!token) {
      console.error('No token found, please log in.');
      return;
    }
  
    try {
      console.log('Attempting to delete with token:', token);
      await axios.delete(`${domain}/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(products.filter(product => product._id !== productId));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error.response?.data || error.message);
    }
  };
  

  return (
    <div>
      <div className='text-center bg-blue-950 text-white text-xl p-2'>Product Lists</div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto px-5">
          {products.length > 0 ? (
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Brand</th>
                  <th className="px-4 py-2">Actions</th> {/* New column for actions */}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className="border px-4 py-2">
                      {product.category && typeof product.category === 'object'
                        ? product.category.name
                        : 'N/A'}
                    </td>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">${product.price}</td>
                    <td className="border px-4 py-2">{product.description}</td>
                    <td className="border px-4 py-2">{product.brand}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleUpdate(product)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
