interface TimelineItem {
  id: number;
  md?: string;
  year: string;
  title: string;
  description: string | React.ReactNode;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id}>
          <time>
            {item.md}
            <span className="date-year">{item.year}</span>
          </time>
          <div className="timeline-item-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
