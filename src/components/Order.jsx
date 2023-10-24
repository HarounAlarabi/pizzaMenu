function Order({ closeTime, openTime }) {
  return (
    <div>
      <div className="order">
        <p>
          we're open at {openTime}:00 until {closeTime}:00 come to visit us or order online
        </p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}

export default Order;
