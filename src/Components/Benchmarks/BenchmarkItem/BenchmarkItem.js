function BenchmarkItem({ id, title, allocations, indices }) {
  return (
    <li>
      <span>{id}</span>
      <span>{title}</span>
      <div>
        <span>allocations</span>
        <ul>
          {allocations.map(({ value, title, security }) => (
            <div key={title}>
              <span className={security ? "security" : "index"}>{value}</span>
              <span>{title}</span>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {indices.map(({ period, value }) => (
            <div key={period}>
              <span>{period}</span>
              <span>{value}</span>
            </div>
          ))}
        </ul>
      </div>
      <button type="button">...</button>
    </li>
  );
}

export default BenchmarkItem;
