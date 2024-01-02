import CreateAndShare from './components/sections/Home/CreateAndShare';
import BeautifulStories from './components/sections/Home/BeautifulStories';
import DesignForEveryone from './components/sections/Home/DesignForEveryone';
import StoriesGrid from './components/sections/StoriesGrid';
import FeaturesGrid from './components/sections/FeaturesGrid';

export default function Home() {
  return (
    <main id="home">
      <CreateAndShare />
      <BeautifulStories />
      <DesignForEveryone />
      <StoriesGrid condition={4} />
      <FeaturesGrid condition={3} />
    </main>
  );
}
