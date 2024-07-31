import App from './client'

export function generateStaticParams() {
  return [{ slug: ['films'] }]
}

export default function Page() {
  return <App />
}
