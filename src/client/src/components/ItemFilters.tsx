import React, { useState, useEffect } from 'react';

const FILTERS = ['category_1', 'category_2', 'Audience country(mostly)']

const ItemFilters = ({ items, onFilterChange }: { items: any[], onFilterChange: Function }) => {
  const keys = Object.keys(items[0] || []).filter((key) => FILTERS.includes(key));

  const [selectedKey, setSelectedKey] = useState('');
  const [values, setValues] = useState<any[]>([]);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChangeKey = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value;
    setSelectedKey(key);
    setSelectedValue('');

    onFilterChange(key, selectedValue);
  };

  useEffect(() => {
    if (selectedKey) {
      const values = items.map((item) => item[selectedKey])
        .filter((value, index, self) => value && self.indexOf(value) === index);
    
      setValues(values);
    } else {
      setValues([]);
    }
  }, [selectedKey, items]);

  const handleChangeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);

    onFilterChange(selectedKey, value);
  };

  return (
    <div className="grid">
      <select value={selectedKey} onChange={handleChangeKey}>
        <option value="">Choose a filter</option>
        {keys.map((key) => (
          <option key={key} value={key}>
            By {key}
          </option>
        ))}
      </select>
      {selectedKey && (
        <select value={selectedValue} onChange={handleChangeValue}>
          <option value="">Choose a value</option>
          {values.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ItemFilters;
