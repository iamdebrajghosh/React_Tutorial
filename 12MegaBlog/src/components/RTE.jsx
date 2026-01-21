import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({control, name, defaultValue = '', label}) {

    return (
        <div className='w-full'>
            {label && <label className='block mb-2 font-medium'>{label}</label>}
            <Controller
                name={name || 'content'}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                        onInit={(evt, editor) => editor.setContent(value || '')}
                        initialValue={value || ''}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "imagetools",
                                "codesample",
                                "fullscreen"
                            ],
                            toolbar: "undo redo | blocks | image | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

