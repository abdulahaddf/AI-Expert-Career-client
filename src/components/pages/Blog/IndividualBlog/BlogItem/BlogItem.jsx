import BlogOption from "./BlogOption";
import { useContext } from 'react';
import { MyContext } from '../../../../../Contaxt/Context';

    
const BlogItem = () => {

  const {language} = useContext(MyContext)
  
const data = [
      {
         title : "Chatbot Chat with AI, Artificial ",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      },
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
      ,
      {
         title : "Chatbot Chat with AI, Artificial  2",
        options :  [
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]
      }
    ]
   
  return (
     <div className="">
          <h2 className="text-3xl font-bold">
              {language == 'bn' ? 'বিষয়সমূহ -' : 'Our more blogs'}
          </h2>
            <ul className="mt-3">
              {
                  data.map((data, index) => <BlogOption key={index} data={data} />)
                }
            </ul>
     </div>
  );
};

export default BlogItem;