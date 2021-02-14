import { useState } from 'react'

const Index = () => {
	const [mawaru, setmawaru] = useState(false)
	const names: string[] = []
	names.push('keizai')
	if (mawaru) names.push('mawatteru')
	else names.push('teitai')
	return (
		<div>
			<p className={names.join(' ')}>経済</p>
			<p className="description">
				<button
					onClick={e => {
						e.preventDefault()
						setmawaru(true)
					}}
				>
					経済を回す
				</button>
				<button
					onClick={e => {
						e.preventDefault()
						setmawaru(false)
					}}
				>
					停滞させる
				</button>
			</p>
		</div>
	)
}

export default Index
