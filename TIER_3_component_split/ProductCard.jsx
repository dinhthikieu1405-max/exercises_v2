function ProductCard({ name, price, image }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "220px"
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%" }}
      />

      <h3>{name}</h3>

      <p
        style={{
          color: "red",
          fontWeight: "bold"
        }}
      >
        {price}đ
      </p>

      <button>Thêm vào giỏ</button>
    </div>
  );
}

export default ProductCard;