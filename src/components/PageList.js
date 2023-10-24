import React from 'react';

const PageList = ({pages, setPages}) => {

  const handleUpdateTask = (index) => {
    let newPages = pages.map((page, pageIndex) => {
      if (pageIndex === index) {
        page.isOrdered = !page.isOrdered;
      }
      return page;
    });
    setPages(newPages);
  };

  const handleRemoveArtist = (index) => {
    const newPages = [...pages];
    newPages.splice(index, 1);
    setPages(newPages);
  }

  return (
    <ul>
      { pages.map((page, index) => (
        <li
          key = {index}
          class={
            page.isOrdered === true ? 'ordered' : ''
          }
        >
          <input
            type="checkbox"
            checked={page.isOrdered}
            onChange={() => handleUpdateTask(index)}
          />
          <a
            href = {page.artist}
            target = "_new"
          >
            {page.artist}
          </a>
          <span 
            class="eraser"
            onClick={() => handleRemoveArtist(index)}
          ></span>
        </li>
      ))}
    </ul>
  );
};

export default PageList;