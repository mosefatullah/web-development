import {
 useCopyToClipboard,
 useDocumentTitle,
 useGeolocation,
 useMediaQuery,
 useWindowSize,
 useToggle,
 useFavicon,
 useCounter,
 useScript,
 useLongPress,
 usePrevious,
} from "@uidotdev/usehooks";
import React from "react";

function App() {
 const [copied, copy] = useCopyToClipboard();
 useDocumentTitle(copied ? "(1) Copied!" : "UseHooks - React");
 const geolocation = useGeolocation();
 const isWide = useMediaQuery("(min-width: 600px)");
 const { width, height } = useWindowSize();
 const [on, toggle] = useToggle();
 const [onFav, toggleFav] = useToggle();
 const [count, { increment, decrement, set, reset }] = useCounter(5, {
  min: 5,
  max: 10,
 });
 const isSwalLoaded = useScript(
  "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"
 );
 const longPressProps = useLongPress(() => {
  if (typeof swal !== "function") {
   alert("Long press!");
  } else {
   swal("Long Pressed!", "This alert was created with useLongPress", "error");
  }
 });
 const prevCount = usePrevious(count);

 React.useEffect(() => {
  const interval = setInterval(() => {
   toggleFav();
  }, 700);
  return () => clearInterval(interval);
 }, []);
 useFavicon(
  onFav ? "https://emojicdn.elk.sh/🦄" : "https://emojicdn.elk.sh/🐉"
 );

 React.useEffect(() => {
  if (typeof swal === "function") {
   swal(
    "Hello from useScript!",
    "This alert was created with useScript",
    "success"
   );
  }
 }, [isSwalLoaded]);
 return (
  <div
   style={{
    padding: "2rem",
   }}
  >
   <h1>UseHooks</h1>
   <button onClick={() => copy("Hello, world!")}>
    {copied ? "Copied!" : "Copy to clipboard"}
   </button>
   <pre>{JSON.stringify(geolocation, null, 2)}</pre>
   <p>Screen is wide: {isWide ? "Yes" : "No"}</p>
   <p>
    Window dimensions: {width} x {height}
   </p>
   <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
    <button onClick={() => toggle()}>{on ? "Hide" : "Show"} content</button>
    {on && (
     <div style={{ width: "200px", height: "200px", background: "red" }} />
    )}
   </div>
   <br />
   <br />
   <section>
    <h3>UseCounter</h3>
    <button disabled={count >= 10} className="link" onClick={increment}>
     Increment
    </button>
    <button disabled={count <= 5} className="link" onClick={decrement}>
     Decrement
    </button>
    <button className="link" onClick={() => set(6)}>
     Set to 6
    </button>
    <button className="link" onClick={reset}>
     Reset
    </button>
    <p>{count}</p>
   </section>
   <br />
   <br />
   <section>
    <h3>useLongPress</h3>
    <button {...longPressProps}>Long press me</button>
   </section>
   <br />
   <br />
   <section>
    <h3>usePrevious</h3>
    <p>
     Current: {count} - Previous: {prevCount}
    </p>
   </section>
  </div>
 );
}

export default App;
