import React from "react";

const CategorySection = ({ title, products }) => {
  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, idx) => (
            <a
              href={`/produk_detail/${product.id}`}
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h5 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h5>
              <div className="text-center">
                <p className="text-pink-500 font-bold mb-2">Rp {product.harga.toLocaleString("id-ID")}</p>
                <a
                  href="#"
                  className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600"
                >
                  Tambah ke Keranjang
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
