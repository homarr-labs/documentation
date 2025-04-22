import { useLocation } from "@docusaurus/router";
import React, { useEffect } from "react";

export function Carbon() {
	const ref = React.useRef<HTMLDivElement>(null!);
	const location = useLocation();
	if (process.env.NODE_ENV === "development") {
		return null;
	}

	useEffect(() => {
		const serve = "CW7IP27L";
		const placement = "homarrdev";
		ref.current.innerHTML = "";
		const s = document.createElement("script");
		s.id = "_carbonads_js";
		s.src = `//cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}&format=responsive`;
		ref.current.appendChild(s);
	}, [location]);

	return <div ref={ref} />;
}
