import { useLocation } from "@docusaurus/router";
import type { WrapperProps } from "@docusaurus/types";
import DocSidebar from "@theme-original/DocSidebar";
import type DocSidebarType from "@theme/DocSidebar";
import React, { type ReactNode } from "react";

export function Carbon() {
	const ref = React.useRef<HTMLDivElement>(null!);
	const location = useLocation();
	if (process.env.NODE_ENV === "development") {
		return null;
	}

	React.useEffect(() => {
		const serve = "CW7IP27L";
		const placement = "homarrdev";
		ref.current.innerHTML = "";
		const s = document.createElement("script");
		s.id = "_carbonads_js";
		s.src = `//cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`;
		ref.current.appendChild(s);
	}, [location]);

	return (
		<>
			<style>
				{`
					#carbonads_1 { display: none; }
					#carbonads * { margin: initial; padding: initial; }
					#carbonads {
						font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
							Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
							sans-serif;
						display: flex;
					}
					#carbonads a {
						text-decoration: none;
						color: inherit;
					}
					#carbonads span {
						position: relative;
						display: block;
						overflow: hidden;
						width: 100%;
					}
					#carbonads .carbon-wrap {
						display: flex;
						flex-direction: column;
					}
					#carbonads .carbon-img {
						display: block;
						margin: 0;
						line-height: 1;
					}
					#carbonads .carbon-img img {
						display: block;
						height: 100%;
						max-width: 100% !important;
						width: 100%;
						border-radius: 4px;
					}
					#carbonads .carbon-text {
						font-size: 11px;
						padding: 10px;
						margin-bottom: 16px;
						line-height: 1.5;
						text-align: left;
					}
					#carbonads .carbon-poweredby {
						display: block;
						padding: 6px 8px;
						text-align: center;
						text-transform: uppercase;
						letter-spacing: 0.5px;
						font-weight: 600;
						font-size: 8px;
						line-height: 1;
						border-top-left-radius: 3px;
						position: absolute;
						bottom: 0;
						right: 0;
						background: rgba(128, 128, 128, 0.1);
					}
				`}
			</style>
			<div
				ref={ref}
				className="bg-background shadow-xl flex flex-col m-4 space-y-2 rounded-l-lg carbon-outer"
			/>
		</>
	);
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
