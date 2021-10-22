function Child(props) {
  const { name = 'Child element' } = props;
  const STYLE = { width: 400, height: 400, background: 'lightgreen' };

  return <div style={STYLE}>{name}</div>;
}

export default Child;
