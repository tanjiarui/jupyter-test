import {JupyterReactTheme, Notebook2, useJupyter} from '@datalayer/jupyter-react'
import './App.css'

export default function App() {
	const {kernel, serviceManager} = useJupyter({
		lite:true,
		startDefaultKernel: false
	})
	return <JupyterReactTheme>
		{serviceManager && kernel && <Notebook2
			nbformat={{
				cells: [
					{
						cell_type: 'code',
						metadata: Object(),
						outputs: [],
						source: "import micropip\nawait micropip.install('ipywidgets')",
					},
					{
						cell_type: 'code',
						metadata: Object(),
						outputs: [],
						source: 'import ipywidgets as widgets\nw = widgets.IntSlider()\nw',
					}
				],
				metadata: {
					kernelspec: {
						display_name: 'notebook',
						language: 'python',
						name: 'python3',
					},
				},
				nbformat: 4,
				nbformat_minor: 5,
			}} id='notebook' kernelId={kernel.id} serviceManager={serviceManager}/>}
	</JupyterReactTheme>
}