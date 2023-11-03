import { useState } from "react";
import AddPage from './AddPage';
import PageList from './PageList';

const ArtistPage = () => {
  const initState = [
    {
      artist: 'https://skeb.jp/',
      isOrdered: false,
    },
    {
      artist: 'https://www.pixiv.net/',
      isOrdered: false,
    },
  ];

  const [pages, setPages] = useState(initState);



  return (
    <div class="pagelist">
      <h1>絵師リスト</h1>
      <AddPage setPages={setPages} />
      <PageList pages={pages} setPages={setPages} />
    </div>
  );
};

export default ArtistPage;