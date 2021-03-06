import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { useWindowWidth } from '@wojtekmaj/react-hooks'

export default function AllPages(props) {
  const [numPagesState, setNumPages] = useState(null);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
 const width = useWindowWidth();
 const height= window.screen.height;
 const rapport= width/height;
 
  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
      // onLoadSuccess={(obj) => numPagesNew = obj. }

    >
      {Array.from(new Array(numPagesState), (el, index) => (
        <Page 
          key={`page_${index + 1}`} 
          pageNumber={index + 1} 
          width={width*0.9}
         
        />
      ))}
    </Document>
  );
}
