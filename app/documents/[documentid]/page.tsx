import Editor from "./editor";

interface DocumentIdPage {
    params:Promise<{documentid:string}>;
}

async function DocumentIdPage({params}:DocumentIdPage) {

    const awaitedParams = await params;
    const documentId = awaitedParams.documentid
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* document id: {documentId} */}
      <Editor/>
    </div>
  )
}

export default DocumentIdPage
