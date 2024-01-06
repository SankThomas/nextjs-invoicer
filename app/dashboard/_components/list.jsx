import React from "react";

export default function List({ items }) {
  return (
    <div className="text-slate-600 text-sm">
      {items.items.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <li>
            {item.quantity} {item.item}
          </li>
          <li>{item.price}</li>
        </div>
      ))}
    </div>
  );
}
