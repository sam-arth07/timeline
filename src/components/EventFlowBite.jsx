import { Button, Card } from "flowbite-react";
import React from "react";

function EventFlowBite({ title }) {
	return (
		<>
			<div className="flex justify-center bg-slate-800 text-white">
				<div>
					<h5 className="text-2xl font-bold tracking-tight dark:text-white">
						{title}
					</h5>
					{/* <p className="font-normal dark:text-gray-400">
            ECE dept
          </p> */}
					<Button className="mx-auto my-5">
						Read more
						<svg
							className="-mr-1 ml-2 h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</Button>
				</div>
			</div>
		</>
	);
}

export default EventFlowBite;
