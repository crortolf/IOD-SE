function Greeting({ name, children }) {
  if (children) return <>{children}</>;
  if (name) return <p>Hello {name}</p>;
  return <p>Hello world</p>;
}

export default Greeting;
