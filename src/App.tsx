import {Jupyter, Notebook} from '@datalayer/jupyter-react'
import './App.css'

export default function App() {
	return <Jupyter lite>
		<Notebook
			nbformat={{
				cells: [
					{
						cell_type: 'code',
						metadata: Object(),
						outputs: [],
						source:
							"import micropip\nawait micropip.install('ipywidgets')",
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
			}}
		/>
	</Jupyter>
}