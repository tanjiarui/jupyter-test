import {useMemo} from 'react'
import {JupyterReactTheme, Notebook2, useJupyter} from '@datalayer/jupyter-react'

export default function MyNotebook() {
	const {kernel, serviceManager} = useJupyter({
		lite: true,
		startDefaultKernel: false
	}), format = useMemo(() => ({
		cells: [
			{
				cell_type: "markdown",
				metadata: {},
				source: [
					"# Hello Jupyter Notebook\n",
					"\n",
					"This is a markdown cell.",
				]
			},
			{
				cell_type: "code",
				execution_count: null,
				metadata: {},
				outputs: [],
				source: ['print("Hello from code cell!")']
			}
		],
		metadata: {
			kernelspec: {
				display_name: "Python 3",
				language: "python",
				name: "python3"
			}
		},
		nbformat: 4,
		nbformat_minor: 5
	}), [])
	return <JupyterReactTheme>
		{serviceManager && kernel && <Notebook2
			nbformat={format} id='notebook' height='calc(100vh - 2.6rem)' kernelId={kernel.id} serviceManager={serviceManager}/>}
	</JupyterReactTheme>
}