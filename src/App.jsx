// import "./App.css";
import "../public/css/styles.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Mar15 from "./components/Mar15";
import Mar16 from "./components/Mar16";
import Mar17 from "./components/Mar17";

function App() {
	return (
		<>
			<VerticalTimeline>
				<h1>March 15th </h1>
				<Mar15 />
				<br />
				<br />
				<br />
				<h1>March 16th </h1>
				<Mar16 />
				<br />
				<br />
				<br />
				<h1>March 17th </h1>
				<Mar17 />
			</VerticalTimeline>
		</>
	);
}
export default App;
