import React from "react";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import MbLogo from "../assets/mb-black.jpeg";
import EventFlowBite from "./EventFlowBite";
// Custom Icon for displaying posters of mindbend
const Icon = ({ link = MbLogo }) => {
	return <img src={link} style={{ borderRadius: "40px" }}></img>;
};

function EventComponent({ title, time }) {
	return (
		<>
			<VerticalTimelineElement
				lineColor={"white"}
				contentStyle={{
					backgroundColor: "rgb(30, 41, 59)",
				}}
				date={time}
				icon={<Icon />}>
				<EventFlowBite title={title} />
			</VerticalTimelineElement>
		</>
	);
}

export default EventComponent;
