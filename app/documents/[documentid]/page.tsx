import Editor from "./editor";
import ToolBar from "./toolbar";

interface DocumentIdPage {
    params:Promise<{documentid:string}>;
}

async function DocumentIdPage({params}:DocumentIdPage) {

    const awaitedParams = await params;
    const documentId = awaitedParams.documentid
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* document id: {documentId} */}
      <ToolBar/>
      <Editor/>
    </div>
  )
}

export default DocumentIdPage
