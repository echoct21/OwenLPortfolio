import "../../App.css";
import {useEffect, useLayoutEffect} from "react";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import PDF from "../../PDFs/ImbalanceOfAHea_70a_Art_Variant.pdf"
import TitleBar from "../../components/TitleBar";
import Name from "../../assets/Name.png";
import Footer from "../../components/Footer";
import ButtonGeneric from "../../components/ButtonGeneric";
import MenuBar from "../../components/MenuBar";
import Spacer from "../../components/Spacer";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface pnum {
    pageNum: number;
}

function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function PDFPage ({pageNum} : pnum) {
    const width = useWindowSize();
    if(width * 0.76 > 600) {
        return <Page width={600} pageNumber={pageNum}></Page>;
    }
    return <Page width={width * 0.76} pageNumber={pageNum}></Page>;
}

export default function MobyDick () {
    // Setup, needed to make the PDF display work at all
    // eslint-disable-next-line react-hooks/immutability
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }



    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <div className={"page_object"}>
                    <ButtonGeneric label={"Back"} dest={"/writing"}></ButtonGeneric>
                </div>
                <Document className={"page_object"} file={PDF} onLoadError={console.error}
                          onLoadSuccess={onDocumentLoadSuccess}>
                    <PDFPage pageNum={pageNumber}></PDFPage>
                </Document>
                <Spacer count={2}></Spacer>
                <div className={"page_object"}>
                    <div>
                        <p className={"paragraph_text"}>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <Spacer count={1}></Spacer>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
};
