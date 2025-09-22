import React from 'react';

export function Badge({ children, ...props }) {
  return <span className="badge" {...props}>{children}</span>;
}
