import { useState } from "react";

const PageList = () => {
  const initState = [
    {
      artist: 'https://skeb.jp/',
      isOrdered: false,
    },
    {
      artist: 'https://www.pixiv.net/',
      isOrdered: false,
    },
    {
      artist: 'c',
      isOrdered: false,
    },
  ];

  const [pages, setPages] = useState(initState);
  const [artist, setArtist] = useState('');

  const handleNewArtist = (event) => {
    setArtist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (artist === '') return;
    setPages((pages) => [...pages, {artist, isOrdered: false}]);
    setArtist('');
  };

  const handleRemoveArtist = (index) => {
    const newPages = [...pages];
    newPages.splice(index, 1);
    setPages(newPages);
  }

  return (
    <div class="pagelist">
      <h1>Skeb絵師リスト</h1>
      <form onSubmit={handleSubmit}>
        リンクを追加する：<input value={artist} placeholder="URLを入力" onChange={handleNewArtist} />
        <button type="submit">追加</button>
      </form>
      <ul>
        { pages.map((page, index) => (
          <li key = {index} ><a href = {page.artist} target = "_new"> {page.artist} </a><span onClick={() => handleRemoveArtist(index)}>X</span></li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;