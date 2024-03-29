import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <div className="selection:bg-red-600 bg-white font-white selection:text-white text-xl fixed w-full text-black py-4 bottom-0 text-center">Made by <span className='text-red-600'>me</span> with ❤️</div>
  </>
}
