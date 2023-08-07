import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'color',
    'background',
    'link',
    'image',
  ];

  return (
    <div className="content">
      <ReactQuill
        value={value}
        theme="snow" // Removed the curly braces since the theme is a string.
        onChange={onChange}
        modules={modules}
        formats={formats} // Fixed the formats prop
      />
    </div>
  );
}
