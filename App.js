import './App.css';
import HelmetMetaData from './HelmetMetaData';
import { FacebookShareButton, FacebookIcon } from "react-share";
import pic from './assets/image.jpg';
function App() {
  //  let currentUrl = "https://t.me/+QcEUKVZ7QJiYzNk";
  //   let quote = "TINY MAGIC";
  let title = "Binary Bot Shop - World's best binary bots platform";
  let image = "https://storage.googleapis.com/cmperstribe_storage_usha/Banner/IMG_3640.JPG";
  let description = "Offering Out of The Box Binary bot Trading Expereince with Hourly Lending, You Get an Opportunity to Test the Accuracy of the Bot before deciding To Purchase, Illustrative Youtube Videos for installation and so Much More";
  // let hashtag = "#trading";
  return (
    <div className="App">

      <header className="App-header">
        <HelmetMetaData title={title} description={description} imageAlt={image} imageUrl={pic} />

        <FacebookShareButton
          url={"https://binarybotshop.com"}
          quote={"Binary Bot Shop - World's best binary bots platform"}
          hashtag="#Trading"
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
      </header>
    </div>
  );
}

export default App;
