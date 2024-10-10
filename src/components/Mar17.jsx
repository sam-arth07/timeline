import EventComponent from "./EventComponent";
import React, { useState } from "react";
import { events17 } from "../../public/js/timelineElements";

function Mar17() {
	const [event, setEvent] = useState(events17);
	return (
		<>
			{event.map((e) => {
				return (
					<EventComponent key={e.id} title={e.title} time={e.time} />
				);
			})}
		</>
	);
}
export default Mar17;
