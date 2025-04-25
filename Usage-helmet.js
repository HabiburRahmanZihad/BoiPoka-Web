/**

✅ Option 1: Use --legacy-peer-deps
        npm install react-helmet-async --legacy-peer-deps


✅ Option 2: Use --force (if legacy-peer-deps doesn’t work)
        npm install react-helmet-async --force


🛑 Option 3: Downgrade React (not recommended unless you have to)
    If react-helmet-async is critical and starts breaking, and no patch comes soon, you could drop back to React 18:
        npm install react@18 react-dom@18


🧠 Pro Tip: Want to make sure everything's smooth after install?
npm ls react
npm ls react-helmet-async



✅ 1. Wrap Your App in <HelmetProvider>
import { HelmetProvider } from 'react-helmet-async';
    <HelmetProvider>
        <App />
    </HelmetProvider>


✅ 2. Use Helmet in Any Component
import { Helmet } from 'react-helmet-async';
    <Helmet>
        <title>Boipoka Book Vibe 📚</title>
        <meta name="description" content="Explore amazing books on Boipoka Book Vibe!" />
    </Helmet>

    <h1>Welcome to Boipoka Book Vibe</h1>



🧪 Bonus (Optional): Dynamic Title
    <Helmet>
        <title>{book?.title ?? "Boipoka Book Vibe"}</title>
    </Helmet>

 */