"use client";
import Navbar from '../_components/navbar'
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const lesson = {
  title: "Move forward",
  pathToImage: "/imagen1.png",
  description: "this is a brief description of the actual lesson contents",
  key: 0
}
const lesson2 = {
  title: "Move backward",
  pathToImage: "/imagen2.png",
  description: "this is a brief description of another one of the contents",
  key: 1
}
const lesson3 = {
  title: "Move middle",
  pathToImage: "/imagen3.png",
  description: "this is another brief description of the contents of another lesson", 
  key: 2
}

const lessons = [lesson, lesson2, lesson3, lesson, lesson2, lesson3, lesson, lesson2]


export default function Home() {
  const editorRef = useRef(null);
  const [code, setCode] = useState("");

  const log = () => {
    if (editorRef.current) {
        // aqui mandar lo que actualmente hay al API
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="root-layoutSim">
      <Navbar/>
      <div className="codeEditorUnity">
        <div className="codeEditor">
            <Editor
                apiKey='7pd2k3jdfcnbj63vx5w175rqled6y75246b2hn85x0q0uqhx'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log} className="saveBtn">Save</button>
        </div>
        <div className="UnityPart">
            
        </div>
        
      </div>
      
    </div>
  )
}