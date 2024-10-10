import EventComponent from "./EventComponent";
import React, { useState } from "react";
import { events16 } from "../../public/js/timelineElements";

function Mar16() {
	const [event, setEvent] = useState(events16);
	return (
		<>
			{event.map((e) => {
				return <EventComponent key={e.id} title={e.title} time={e.time} />;
			})}
		</>
	);
}
export default Mar16;