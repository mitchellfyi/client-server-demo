import React from 'react';

const ItemTable = ({ items }: { items: any[] }) => {
  const keys = Object.keys(items[0] || []);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
          <th>{key}</th>
           ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td>{item[key]}</td>
           ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemTable;