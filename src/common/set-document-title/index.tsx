import { useEffect } from "react";

const SetDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Lendsqr | ${title}`;
  }, [title]);
};

export { SetDocumentTitle };
