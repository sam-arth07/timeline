import EventComponent from "./EventComponent";
import React, { useState } from "react";
import { events15 } from "../../public/js/timelineElements";

function Mar15() {
	const [event, setEvent] = useState(events15);
	return (
		<>
			{event.map((e) => {
				return <EventComponent key={e.id} title={e.title} time={e.time} />;
			})}
		</>
	);
}
export default Mar15;
