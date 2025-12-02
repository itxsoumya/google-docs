"use client"
import React from 'react'
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from '@tiptap/starter-kit'
import { styleText } from 'util'
import { TaskItem, TaskList } from '@tiptap/extension-list'
function Editor() {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
                style: "padding-left: 56px; padding-right:56px"
            }
        },
        extensions: [StarterKit,
            TaskItem.configure({
                nested: true
            }),
            TaskList],
        content: '<p>Hello world!</p>',
        immediatelyRender: false,
    });

    return (
        <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:overflow-visible'>
            <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>

                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default Editor
