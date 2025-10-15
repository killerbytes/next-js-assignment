export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="card-content">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="card-footer">{children}</div>;
}
