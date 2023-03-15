import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Select from "./components/Select";

class Main extends React.Component {



    render() {
        let data = [
            { label: "Mishra", id: 1 },
            { label: "Dubey", id: 2 },
            { label: "Dheeraj", id: 3 },
            { label: "Satya", id: 4 },
            { label: "Amit", id: 5 },
            { label: "Abhishek", id: 6 },
            { label: "Mohit", id: 7 },
        ]
        return (
            <div>
                {/* <Header /> */}
                <Select data={data} />
            </div>
        );
    }
}

let App = document.getElementById("app");

ReactDOM.render(<Main />, App);
