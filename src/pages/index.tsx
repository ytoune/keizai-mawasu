import { useLayoutEffect, useRef, useState } from 'react'

const getClassName = (mawaru: number) => {
	if (!mawaru) return 'teitai'
	if (mawaru < 2) return 'mawatteru'
	if (2 <= mawaru && mawaru <= 9) return 'mawatteru-' + mawaru
	if (15 <= mawaru) return 'mottomotto-mawatteru'
	return 'motto-mawatteru'
}

const Index = () => {
	const [mawaru, setmawaru] = useState(0)
	const [count, setcount] = useState(0)
	const ref = useRef<HTMLParagraphElement>(null)
	useLayoutEffect(() => {
		if (!ref.current) return
		ref.current.addEventListener('animationiteration', () => {
			setcount(c => c + 1)
		})
	}, [ref])
	const names: string[] = []
	names.push('keizai')
	names.push(getClassName(mawaru))
	return (
		<div>
			<p ref={ref} className={names.join(' ')}>
				経済
			</p>
			<p className="description">
				<button
					onClick={e => {
						e.preventDefault()
						setmawaru(m => 1 + m)
					}}
				>
					経済を回す
				</button>
				<button
					onClick={e => {
						e.preventDefault()
						setmawaru(0)
					}}
				>
					停滞させる
				</button>
			</p>
			{0 < count && <p className="description">{count} 回 回しました</p>}
		</div>
	)
}

export default Index
