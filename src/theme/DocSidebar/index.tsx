import type { WrapperProps } from "@docusaurus/types";
import DocSidebar from "@theme-original/DocSidebar";
import type DocSidebarType from "@theme/DocSidebar";
import React, { type ReactNode } from "react";

function Carbon() {
	const ref = React.useRef<HTMLDivElement>(null!);

	React.useEffect(() => {
		const serve = "CW7IP27L";
		const placement = "homarrdev";
		ref.current.innerHTML = "";
		const s = document.createElement("script");
		s.id = "_carbonads_js";
		s.src = `//cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`;
		ref.current.appendChild(s);
	}, []);

	return <div ref={ref} className="carbon-outer h-[299px]" />;
}

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): ReactNode {
	return (
		<div>
			<DocSidebar {...props} />
			<Carbon />
		</div>
	);
}
