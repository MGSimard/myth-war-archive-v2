interface TimelineItem {
  id: number;
  md: string;
  year: string;
  title: string;
  description: string | React.ReactNode;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <div className="date">
              {item.md}
              <span className="date-year">{item.year}</span>
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
