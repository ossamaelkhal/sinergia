import React from 'react';

export function Card({ children, ...props }) {
  return <div className="card" {...props}>{children}</div>;
}
export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}
export function CardDescription({ children }) {
  return <div className="card-description">{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}
export function CardTitle({ children }) {
  return <h3 className="card-title">{children}</h3>;
}
