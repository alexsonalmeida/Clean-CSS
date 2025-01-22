import { CommonErrors, GoodPractices } from "@/components/ArticlesCategories";
import TerminalCodeBlock from "./components/TerminalCodeBlock";

function DocsPage() {
  const codeExample = `sudo apt-get install --verbose-versions software-properties-common && \
  add-apt-repository ppa:mycustomrepo/stable && \
  apt-get update &&`;
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-gray-800 text-2xl md:text-4xl font-semibold">Title of the article</h2>  
          <div className="flex gap-2 flex-wrap">
            <GoodPractices/>
            <CommonErrors/>
          </div>        
        </div>

        <div className="flex items-center gap-2">
          <img src="https://github.com/alexsonalmeida.png" alt="Article author profile" className="w-12 md:w-14 h-12 md:h-14 rounded-full"/>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-indigo-900 text-sm md:text-base">Alexson Almeida</span>
            <span className="text-gray-500 text-xs md:text-sm">20/01/2025</span>
          </div>
        </div>
        <p className="font-light text-sm md:text-base leading-6 md:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum blandit purus eu efficitur. Nullam fringilla euismod ante. 
          Vestibulum ultrices ex sed purus hendrerit blandit. Aliquam varius, nibh eu suscipit viverra, nisi turpis faucibus ex, id faucibus 
          arcu tortor pretium mauris. Proin scelerisque porta libero sit amet molestie. Quisque lacinia ut ante in facilisis. 
          Nulla id orci leo. Nulla pulvinar eu sapien id dictum. Cras bibendum justo fermentum, pharetra augue et, imperdiet neque. 
          Aliquam aliquet elit eu ante porttitor, vitae congue ex vehicula. 
        </p>
        <h3 className="font-medium text-lg md:text-xl">Any subsection here</h3>
        <p className="font-light text-sm md:text-base leading-6 md:leading-7">
          Suspendisse ac arcu odio. Morbi varius semper condimentum. In hac habitasse platea dictumst. Phasellus vulputate sagittis feugiat. 
          Integer a eros purus. Donec dapibus non ipsum quis aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
          inceptos himenaeos.
        </p>
        <TerminalCodeBlock code={codeExample}/>
        <p className="font-light text-sm md:text-base leading-6 md:leading-7">
          Nunc imperdiet est erat, vehicula eleifend massa pretium quis. Sed ex sapien, accumsan non egestas sit amet, congue eu dolor. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum blandit purus eu efficitur. Nullam fringilla euismod ante.
          Vestibulum ultrices ex sed purus hendrerit blandit. Aliquam varius, nibh eu suscipit viverra, nisi turpis faucibus ex, id faucibus
          arcu tortor pretium mauris. Proin scelerisque porta libero sit amet molestie. Quisque lacinia ut ante in facilisis. Nulla id orci 
          leo. Nulla pulvinar eu sapien id dictum. Cras bibendum justo fermentum, pharetra augue et, imperdiet neque. Aliquam aliquet 
          elit eu ante porttitor, vitae congue ex vehicula. Etiam augue urna, eleifend vitae facilisis eget, aliquet sit amet est. 
          Integer fermentum faucibus enim fringilla aliquet. Proin lacinia, ex volutpat pulvinar maximus, mauris arcu viverra odio, quis 
          efficitur elit massa nec nisi. Sed ac dui eget sapien dignissim euismod quis ut nunc. Duis finibus ullamcorper dictum. Nullam 
          efficitur turpis ex, quis efficitur est feugiat nec.
        </p>
      </div>
    );
  };
  
  export default DocsPage;