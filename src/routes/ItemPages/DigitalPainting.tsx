import "../../App.css";
import {useEffect, useLayoutEffect} from "react";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import PaintingPDF from "../../PDFs/OwenL_DigitalPaintingPortfolio.pdf"
import ConceptPDF from "../../PDFs/Owen_Lacey_ConceptArt_Portfolio_Fall2024.pdf"
import TitleBar from "../../components/TitleBar";
import Name from "../../assets/Name.png";
import Footer from "../../components/Footer";
import ButtonGeneric from "../../components/ButtonGeneric";
import Spacer from "../../components/Spacer";
import MenuBar from "../../components/MenuBar";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import ParagraphText from "../../components/ParagraphText.tsx";

interface pnumA {
    pageNumA : number;
}

interface pnumB {
    pageNumB : number;
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

function PDFPageA ({pageNumA} : pnumA) {
    const width = useWindowSize();
    if(width * 0.76 > 1100) {
        return <Page width={1100} pageNumber={pageNumA}></Page>;
    }
    return <Page width={width * 0.76} pageNumber={pageNumA}></Page>;
}

function PDFPageB ({pageNumB} : pnumB) {
    const width = useWindowSize();
    if(width * 0.76 > 1100) {
        return <Page width={1100} pageNumber={pageNumB}></Page>;
    }
    return <Page width={width * 0.76} pageNumber={pageNumB}></Page>;
}

export default function DigitalPainting () {
    // Setup, needed to make the PDF display work at all
    // eslint-disable-next-line react-hooks/immutability
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // First PDF Functions and Variables
    const [numPagesA, setNumPagesA] = useState<number>(0);
    const [pageNumberA, setPageNumberA] = useState<number>(1);

    function onDocumentLoadSuccessA({ numPages }: { numPages: number }): void {
        setNumPagesA(numPages);
    }
    function changePageA(offset: number) {
        setPageNumberA(prevPageNumber => prevPageNumber + offset);
    }
    function previousPageA() {
        changePageA(-1);
    }
    function nextPageA() {
        changePageA(1);
    }

    // Second PDF Functions and Variables
    const [numPagesB, setNumPagesB] = useState<number>(0);
    const [pageNumberB, setPageNumberB] = useState<number>(1);
    function onDocumentLoadSuccessB({ numPages }: { numPages: number }): void {
        setNumPagesB(numPages);
    }
    function changePageB(offset: number) {
        setPageNumberB(prevPageNumber => prevPageNumber + offset);
    }
    function previousPageB() {
        changePageB(-1);
    }
    function nextPageB() {
        changePageB(1);
    }

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <div className={"page_object"}>
                    <ButtonGeneric label={"Back"} dest={"/visualart"}></ButtonGeneric>
                </div>
                <ParagraphText title={"Digital Painting Class"} text={"This is my portfolio from a digital painting class " +
                    "where I went through the process of learning to paint in photoshop, starting from value studies " +
                    "and moving to color."}></ParagraphText>
                <div className={"page_object"}>
                    <Document file={PaintingPDF} onLoadError={console.error}
                              onLoadSuccess={onDocumentLoadSuccessA}>
                        <PDFPageA pageNumA={pageNumberA}></PDFPageA>
                        {/*<Page width={1100} pageNumber={pageNumberA}></Page>*/}
                    </Document>
                </div>
                <div className={"page_object"}>
                    <div>
                        <p className={"paragraph_text"}>
                            Page {pageNumberA || (numPagesA ? 1 : '--')} of {numPagesA || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumberA <= 1}
                            onClick={previousPageA}
                            className={"pdf_nav_button"}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumberA >= numPagesA}
                            onClick={nextPageA}
                            className={"pdf_nav_button"}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <Spacer count={2}></Spacer>
                {/*Start of PDF B - Concept Art*/}
                <ParagraphText title={"Concept Art"} text={"This is a portfolio from a concept art class where I made concept art" +
                    " for a game pitch. The game I pitched was an underwater mystery/survival game called Ars Aquae, and the" +
                    " concept art is of the characters, landside dock, and a couple of underwater installations. Each piece starts with" +
                    " a sketch, and moves to a color painting."}></ParagraphText>
                <div className={"page_object"}>
                    <Document className={'pdf_display'} file={ConceptPDF} onLoadError={console.error}
                              onLoadSuccess={onDocumentLoadSuccessB}>
                        <PDFPageB pageNumB={pageNumberB}></PDFPageB>
                    </Document>
                </div>
                <div className={"page_object"}>
                    <div>
                        <p className={"paragraph_text"}>
                            Page {pageNumberB || (numPagesB ? 1 : '--')} of {numPagesB || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumberB <= 1}
                            onClick={previousPageB}
                            className={"pdf_nav_button"}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumberB >= numPagesB}
                            onClick={nextPageB}
                            className={"pdf_nav_button"}
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