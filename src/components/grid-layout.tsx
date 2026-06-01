interface GridItem {
  xOffset: number;
  yOffset: number;
  width?: number;
  height?: number;
  content: string;
}

interface GridLayoutProps {
  gap: number;
  width: number;
  columns: number;
  items: GridItem[];
}

export const GridLayout = (props: GridLayoutProps) => {
  const size = (props.width - props.gap * (props.columns - 1)) / props.columns;
  const rows = Math.max(...props.items.map((item) => item.yOffset + (item.height ?? 1)));

  return (
    <div
      className="bg-[#fa5252] grid p-1 m-2 h-min"
      style={{
        gridTemplateColumns: `repeat(${props.columns}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
        gap: props.gap,
        width: props.width + 8, // padding
      }}
    >
      {props.items.map((item) => (
        <GridItem key={item.content} item={item} size={size} gap={props.gap} />
      ))}
    </div>
  );
};

interface GridItemProps {
  item: GridItem;
  size: number;
  gap: number;
}

const GridItem = (props: GridItemProps) => {
  return (
    <div
      className="bg-gray-600 flex justify-center items-center rounded-md"
      style={{
        width: (props.item.width ?? 1) * props.size + ((props.item.width ?? 1) - 1) * props.gap,
        height: (props.item.height ?? 1) * props.size + ((props.item.height ?? 1) - 1) * props.gap,
        gridColumnStart: props.item.xOffset + 1,
        gridColumnEnd: props.item.xOffset + (props.item.width ?? 1) + 1,
        gridRowStart: props.item.yOffset + 1,
        gridRowEnd: props.item.yOffset + (props.item.height ?? 1) + 1,
      }}
    >
      {props.item.content}
    </div>
  );
};
