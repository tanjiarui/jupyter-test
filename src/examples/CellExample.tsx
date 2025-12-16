import { Cell, Kernel } from "@datalayer/jupyter-react";

export const CellExample = (props: { kernel: Kernel }) => {
  const { kernel } = props;
  return (
    <>
      <Cell source="print('Hello from Jupyter Cell!')" kernel={kernel} />
    </>
  );
};
