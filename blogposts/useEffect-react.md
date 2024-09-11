---
title: 'When to Use useEffect in React'
date: '2024-09-10'
---

In React, the **useEffect** hook allows you to perform side effects in function components, such as fetching data, updating the DOM, or subscribing to external events.

You should use **useEffect** when:

- You need to fetch data from an API after the component renders
- You need to set up event listeners or subscriptions (e.g., WebSocket connections)
- You need to update the DOM or run logic based on changes to state or props

### Example:

```'jsx
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array to run only once after the component mounts

  return <div>{data ? data.name : 'Loading...'}</div>;
}'
```