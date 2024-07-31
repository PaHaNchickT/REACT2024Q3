import '../styles/global.css'
import '../components/search/search.css'
import '../components/results/results.css'
import '../components/pagination/pagination.css'
import '../components/loader/loader.css'
import '../components/no-results/no-results.css'
import '../components/selected-panel/selected-info.css'
import '../components/error-page/errorPage.css'
import '../components/error-boundary/errorBoundary.css'
import '../components/details/details.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
