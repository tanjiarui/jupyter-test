/*
 * Copyright (c) 2021-2023 Datalayer, Inc.
 *
 * MIT License
 */

import { useMemo } from 'react';
import { Box } from '@primer/react';
import {
  Notebook2,
  Kernel,
  NotebookToolbar,
  CellSidebarExtension,
  CellSidebarButton,
} from '@datalayer/jupyter-react';
import { ServiceManager } from '@jupyterlab/services';

const NOTEBOOK_ID = 'notebook-example-1';

type INotebookExampleProps = {
  kernel: Kernel;
  serviceManager: ServiceManager.IManager;
};

export const NotebookExample = (props: INotebookExampleProps) => {
  const { kernel, serviceManager } = props;
  const extensions = useMemo(
    () => [new CellSidebarExtension({ factory: CellSidebarButton })],
    [],
  );
  return (
    <>
      <Notebook2
        path="ipywidgets.ipynb"
        id={NOTEBOOK_ID}
        serviceManager={serviceManager}
        kernelId={kernel.id}
        height="calc(100vh - 2.6rem)"
        extensions={extensions}
        Toolbar={NotebookToolbar}
      />
    </>
  );
};

// 旧代码（注释）：
/*
import { Jupyter, Notebook, Kernel } from "@datalayer/jupyter-react";
import type { ServiceManager } from "@jupyterlab/services";

export const NotebookExample = (props: {
  kernel: Kernel;
  serviceManager: ServiceManager.IManager;
}) => {
  const { kernel, serviceManager } = props;
  return (
    <>
        <Notebook
          nbformat={{
            cells: [
              {
                cell_type: "markdown",
                metadata: {},
                source: [
                  "# Hello Jupyter Notebook\n",
                  "\n",
                  "This is a markdown cell.",
                ],
              },
              {
                cell_type: "code",
                execution_count: null,
                metadata: {},
                outputs: [],
                source: ['print("Hello from code cell!")'],
              },
            ],
            metadata: {
              kernelspec: {
                display_name: "Python 3",
                language: "python",
                name: "python3",
              },
            },
            nbformat: 4,
            nbformat_minor: 5,
          }}
        />
    </>
  );
};
*/

export default NotebookExample;
