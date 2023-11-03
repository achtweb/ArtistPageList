import { useState } from "react";

const AddPage = ({setPages}) => {
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

  return (
    <form onSubmit={handleSubmit}>
    リンクを追加する：<input value={artist} placeholder="URLを入力" onChange={handleNewArtist} />
    <button type="submit">追加</button>
  </form>
  );
};

export default AddPage;