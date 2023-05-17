import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import '@/styles/globals.css';

export const metadata = {
  title: "Prompt nexus",
  description: "Find and share AI prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className='bg-bg'>
        <Provider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;