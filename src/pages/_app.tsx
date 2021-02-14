import '~/styles/main.scss'

import NextApp from 'next/app'
import Head from 'next/head'

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props
		return (
			<>
				<Head>
					<meta charSet="utf-8" />
					<title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
					<meta
						name="viewport"
						content="minimum-scale=1,initial-scale=1,width=device-width"
					/>
					<meta
						name="description"
						content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<Component {...pageProps} />
			</>
		)
	}
}

export default App
