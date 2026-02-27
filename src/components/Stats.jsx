const stats = [
  { value: "98%", label: "Satisfaction Rate" },
  { value: "4.2M", label: "Cans Sold" },
  { value: "63%", label: "Repeat Buyers" },
  { value: "12x", label: "Flavor Variety" },
];

function Stats() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-12">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-4xl font-bold text-green-400">{stat.value}</p>
          <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
