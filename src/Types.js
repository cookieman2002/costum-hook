export default function Types({ types }) {
  return (
    <>
      <ul>
        <h1>Types</h1>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </>
  );
}
