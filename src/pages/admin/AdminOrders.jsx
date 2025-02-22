import { useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="flex justify-between items-center p-2 border-b">
            Order #{order.id} - {order.status}
            <select 
              onChange={(e) => updateOrderStatus(order.id, e.target.value)} 
              value={order.status}
              className="border p-1"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Delivered">Delivered</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminOrders;
