import type { WrapperProps } from "@docusaurus/types";
import DocPaginator from "@theme-original/DocPaginator";
import type DocPaginatorType from "@theme/DocPaginator";
import { type ReactNode } from "react";

type Props = WrapperProps<typeof DocPaginatorType>;

export default function DocPaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <DocPaginator {...props} />
    </>
  );
}
