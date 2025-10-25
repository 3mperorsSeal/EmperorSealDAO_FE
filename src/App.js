import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet-async";


function App() {
  return (
    <div className="App">
          <Helmet>
      {/* Primary Meta Tags */}
      <title>Decentralized NFT Marketplace | Buy, Sell & Manage Digital Assets Securely</title>
      <meta
        name="description"
        content="Buy, sell, and manage NFTs securely on the world’s most trusted blockchain platform. Experience decentralized ownership of digital assets with EMPX NFT Marketplace."
      />
      <meta
        name="keywords"
        content="NFT, Blockchain, NFT Marketplace, Decentralized, Web3, Buy NFTs, Sell NFTs, Digital Assets, Ethereum, Polygon, Secure NFT trading, Crypto Collectibles"
      />
      <meta name="author" content="EMPX Team" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0d1117" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:title" content="EMPX - Decentralised NFT Marketplace" />
      <meta
        property="og:description"
        content="Buy, sell, and manage NFTs securely on the world’s most trusted blockchain platform."
      />
      <meta property="og:image" content="https://yourdomain.com/og-image.png" />

      {/* Twitter Cards */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yourdomain.com/" />
      <meta property="twitter:title" content="EMPX - Decentralised NFT Marketplace" />
      <meta
        property="twitter:description"
        content="Buy, sell, and manage NFTs securely on the world’s most trusted blockchain platform."
      />
      <meta property="twitter:image" content="https://yourdomain.com/og-image.png" />


      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "EMPX - Decentralised NFT Marketplace",
          "url": "https://yourdomain.com",
          "description": "Buy, sell, and manage NFTs securely on the world’s most trusted blockchain platform.",
          "applicationCategory": "Blockchain Application",
          "operatingSystem": "Web",
          "creator": {
            "@type": "Organization",
            "name": "EMPX Team"
          }
        }
        `}
      </script>
    </Helmet>
      <Banner />
    </div>
  );
}

export default App;
