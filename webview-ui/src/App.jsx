import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/products`;

  const fetchProducts = async (isInitial = false, currentCursor = null) => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}?limit=12`;
      if (category) url += `&category=${category}`;
      if (currentCursor && !isInitial) url += `&cursor=${currentCursor}`;

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        if (isInitial) {
          setProducts(result.data);
        } else {
          setProducts((prev) => [...prev, ...result.data]);
        }
        setNextCursor(result.nextCursor);
      }
    } catch (error) {
      console.error("❌ Frontend Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(true, null);
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar / Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-indigo-600">
            📦 Codevector Store
          </h1>
          
          {/* Category Filter Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Category:</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Beauty">Beauty</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 mb-3">
                  {product.category}
                </span>
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">Price</span>
                <span className="text-lg font-bold text-emerald-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-500">Loading items...</span>
          </div>
        )}

        {/* Load More Trigger */}
        {nextCursor && !loading && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => fetchProducts(false, nextCursor)}
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Load More Products
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;