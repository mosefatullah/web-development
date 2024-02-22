import { animated, useSpring } from "@react-spring/web";

function App() {
 const springs1 = useSpring({
  from: { x: 0 },
  to: { x: 100 },
 });

 const [springs2, api] = useSpring(() => ({
  from: { x: 0 },
 }));

 const springs3 = useSpring({
  from: { marginTop: -50, opacity: 0 },
  to: { marginTop: 0, opacity: 1 },
 });

 const startSpring2 = () => {
  api.start({ x: 100 });
 };
 const backSpring2 = () => {
  api.start({ x: 0 });
 };

 return (
  <>
   <animated.div
    style={{
     width: 80,
     height: 80,
     background: "#ff6d6d",
     borderRadius: 8,
     ...springs1,
    }}
   />
   <br />
   <br />
   <animated.div
    style={{
     width: 80,
     height: 80,
     background: "#ff6d6d",
     borderRadius: 8,
     ...springs2,
    }}
   />
   <br />
   <button onClick={startSpring2}>Start</button>
   <button onClick={backSpring2}>Back</button>
   <br />
   <br />
   <br />
   <animated.p
    style={{
     fontSize: 24,
     ...springs3,
    }}
   >
    Hello, world!
   </animated.p>
  </>
 );
}

export default App;
