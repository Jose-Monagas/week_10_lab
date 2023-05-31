const React = require("react");

function Edit(props) {
  const { name, _id, readyToEat, color } = props.vegetable; // de-structuring -- this will create a const variable in the form of props.vegetable.name (and so on) for every one
  return (
    <div>
      <h1>{name} Edit Page</h1>
      <a href="/vegetables">Go back to Index Page</a>
      <form action={`/vegetables/${_id}? _method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={name} />
        <br />
        Color: <input type="type" name="color" defaultValue={color} />
        <br />
        Is Ready To Eat:{" "}
        {readyToEat ? (
          <input type="checkbox" name="readyToEat" defaultCheck />
        ) : (
          <input type="chekbox" name="readyToEat" />
        )}
        <br />
        <input type="submit" value="Upate Vegetable" />
      </form>
    </div>
  );
}

module.exports = Edit;
