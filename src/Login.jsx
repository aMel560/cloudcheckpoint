export default function Login({ content, Name, type }) {
  return (
    <form className="form">
      <label type={type} htmlFor={content}>
        {Name}
      </label>
      <br />
      <input type="text" />
    </form>
  );
}
