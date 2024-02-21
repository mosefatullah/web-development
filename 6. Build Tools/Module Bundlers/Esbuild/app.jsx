import * as React from "react";
import * as Client from "react-dom/client";
import * as Server from "react-dom/server";

let Greet = () => <h1>Hello, world!</h1>;
Client.createRoot(document.getElementById("root")).render(<Greet />);

console.log(Server.renderToString(<Greet />));
