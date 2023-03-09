import React, { useState, useEffect } from 'react';
import ItemTable from './components/ItemTable';
import ItemFilters from './components/ItemFilters';
import type { Influencer } from "../../app/services/influencers/types";
import * as api from './services/api';

function App() {
  const [items, setItems] = useState<Influencer[]>([]);
  const [filter, setFilter] = useState({ filterKey: '', filterValue: '' });

  useEffect(() => {
    async function fetchItems() {
      const items = await api.getInfluencers({ ...filter });
      setItems(items);
    }
    fetchItems();
  }, [filter]);


  const handleFilterChange = (key: string, value: string) => {
    setFilter({ filterKey: key, filterValue: value});
  };

  return (
    <div className="App container">
      <br />
      <h1>Influencers</h1>
      {items.length > 0 && (
        <div>
          <ItemFilters items={items} onFilterChange={handleFilterChange}></ItemFilters>
          <figure>
            <ItemTable items={items}></ItemTable>
          </figure>
        </div>
      )}
    </div>
  );
}

export default App;
