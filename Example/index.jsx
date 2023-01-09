import { useEffect, useState } from "react";
import { Button } from "flowbite-react";

const Green = ({ children, name, getMsg, setColor }) => {
  const msg = "hello from green";
  const onClick = () => {
    getMsg(msg);
    setColor("green");
  };
  return (
    <div style={{ background: "green", height: "300px", width: "300px" }}>
      {children}
      <p>My name is {name}</p>
      <Button onClick={onClick}>Click me</Button>
    </div>
  );
};
const Blue = ({ children, name, getMsg, setColor }) => {
  const msg = "hello from blue";
  const onClick = () => {
    getMsg(msg);
    setColor("blue");
  };
  return (
    <div style={{ background: "blue", height: "300px", width: "300px" }}>
      {children}
      <p>My name is {name}</p>
      <Button onClick={onClick}>Click me</Button>
    </div>
  );
};
const Yellow = ({ list }) => {
  return (
    <div style={{ background: "yellow", height: "300px", width: "300px" }}>
      {list.map((element, index) => {
        return (
          <div key={element}>
            {" "}
            <p>the element is {element} </p>
            <p>index: {index}</p>
          </div>
        );
      })}
    </div>
  );
};

const Index = () => {
  const [childrinName, setChildrinName] = useState("");
  const blueName = "blue test";
  const greenName = "green test";
  const list1 = [1, 2, 3, 4, 5];
  const list2 = [6, 7, 8, 9, 10];
  const [selectedList, setSelectedList] = useState(list1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const getMsg = (msg) => {
    setChildrinName(msg);
  };
  const setColor = (color) => {
    setSelectedColor(color);
  };
  useEffect(() => {
    if (selectedColor === "blue") {
      setSelectedList(list2);
    } else {
      setSelectedList(list1);
    }
  }, [selectedColor]);
  return (
    <div
      style={{
        background: "red",
        display: "flex",
        height: "900px",
        width: "900px",
      }}
    >
      <Green name={greenName} getMsg={getMsg} setColor={setColor} />
      <Blue name={blueName} getMsg={getMsg} setColor={setColor} />
      <Yellow list={selectedList} />
      <p>My children is {childrinName}</p>
    </div>
  );
};
export default Index;
