import React from 'react';

export function Progress({ value, max = 100, ...props }) {
  return (
    <progress value={value} max={max} {...props} />
  );
}
