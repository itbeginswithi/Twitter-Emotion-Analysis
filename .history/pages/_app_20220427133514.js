import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>

      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp