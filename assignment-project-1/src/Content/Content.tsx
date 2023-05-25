function Content() {
  var title = "Title";
  if (title) return <h4>This is {title}</h4>;
  return (
    <div>
      <h3>This is the Content</h3>
    </div>
  );
}

export default Content;
