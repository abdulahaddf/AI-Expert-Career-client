import { useEffect } from 'react';
import exploratorySvg from './Group 651.svg';
const MachineLearning = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-28">
      <p
        style={{ fontFamily: 'Josefin Sans' }}
        className="text-3xl font-bold text-red-600 border-b-2 border-red-600 py-5"
      >
        Machine Learning Roadmap{' '}
      </p>

      <div className='lg:flex justify-center'>
        <div className=" w-[800px] mt-6 relative">
          <img src={exploratorySvg} alt="" className='' />


          <h1 className='absolute  font-semibold  top-2  text-[16px] left-[330px]'>Machine Learning</h1>



          <h1 className='absolute  font-semibold  top-[110px]  text-[16px]  left-[370px]'>General</h1>
          <a className='absolute text-red-500 font-semibold  top-[158px] left-[300px] text-[16px]' href="">concepts, Inputs & Attributes</a>
          <a className='absolute text-red-500 font-semibold top-[193px] left-[275px] text-[15px]' href="">Cost functions and gradient descent</a>
          <a className='absolute text-red-500 font-semibold top-[230px] left-[300px] text-[16px]' href="">Overfilling / Undercutting</a>
          <a className='absolute text-red-500 font-semibold top-[263px] left-[273px] text-[16px]' href="">Training, validation and test data</a>
          <a className='absolute text-red-500 font-semibold top-[300px] left-[320px] text-[16px]' href="">Precision vs Recall</a>
          <a className='absolute text-red-500 font-semibold top-[335px] left-[329px] text-[16px]' href="">Bias & Variance</a>
          <a className='absolute text-red-500 font-semibold top-[372px] left-[383px] text-[16px]' href="">Lift</a>



          <a className='absolute text-red-500 font-semibold top-[159px] left-[638px] text-[16px]' href="">categorical Variables</a>
          <a className='absolute text-red-500 font-semibold top-[195px] left-[646px] text-[16px]' href="">Ordinal Variables</a>
          <a className='absolute text-red-500 font-semibold top-[232px] left-[640px] text-[16px]' href="">Numerical Variables</a>

          <a className='absolute text-red-500 font-semibold top-[350px] left-[50px] text-[16px]' href="">Regression</a>
          <a className='absolute text-red-500 font-semibold top-[392px] left-[25px] text-[16px]' href="">Linear Regressino</a>
          <a className='absolute text-red-500 font-semibold top-[429px] left-[25px] text-[16px]' href="">Poison Regression</a>



          <h1 className='absolute  font-semibold top-[445px] left-[370px] text-[16px]' >Methods</h1>
          <a className='absolute text-red-500 font-semibold top-[478px] left-[325px] text-[16px]' href="">Supervised Learning</a>
          <a className='absolute text-red-500 font-semibold top-[515px] left-[318px] text-[15px]' href="">Unsupervised Learning</a>
          <a className='absolute text-red-500 font-semibold top-[550px] left-[327px] text-[16px]' href="">Ensemble Learning</a>
          <a className='absolute text-red-500 font-semibold top-[585px] left-[318px] text-[15px]' href="">Reinforcement learning</a>

          <h1 className='absolute  font-semibold top-[310px] left-[665px] text-[16px]' >Clustering</h1>
          <h1 className='absolute text-red-500 font-semibold top-[350px] left-[625px] text-[16px]' >Hierarchical Clustering</h1>
          <h1 className='absolute text-red-500 font-semibold top-[385px] left-[630px] text-[16px]' >K-Means Clustering</h1>
          <h1 className='absolute text-red-500 font-semibold top-[423px] left-[665px] text-[16px]' >DBSCAN</h1>
          <h1 className='absolute text-red-500 font-semibold top-[458px] left-[660px] text-[16px]' >HDBSCAN</h1>
          <h1 className='absolute text-red-500 font-semibold top-[492px] left-[650px] text-[16px]' >Fuzzy C-Means</h1>
          <h1 className='absolute text-red-500 font-semibold top-[528px] left-[665px] text-[16px]' >Mean Shift</h1>
          <h1 className='absolute text-red-500 font-semibold top-[562px] left-[650px] text-[16px]' >Agglomerative</h1>
          <h1 className='absolute text-red-500 font-semibold top-[600px] left-[680px] text-[16px]' >OPTICS</h1>


          <a className='absolute text-red-500 font-semibold top-[650px] left-[405px] text-[16px]' href="">Boosting</a>
          <a className='absolute text-red-500 font-semibold top-[685px] left-[405px] text-[16px]' href="">Bagging</a>
          <a className='absolute text-red-500 font-semibold top-[720px] left-[405px] text-[16px]' href="">Stacking</a>




          <a className='absolute  font-semibold top-[670px] left-[613px] text-[15px]' href="">Association Rule Learning</a>
          <a className='absolute text-red-500 font-semibold top-[710px] left-[640px] text-[16px]' href="">Aprlorl Algorithm</a>
          <a className='absolute text-red-500 font-semibold top-[745px] left-[640px] text-[16px]' href="">ECLAT Algorithm</a>
          <a className='absolute text-red-500 font-semibold top-[780px] left-[675px] text-[16px]' href="">FP Trees</a>





          <a className='absolute text-red-500 font-semibold top-[520px] left-[65px] text-[16px]' href="">Classification</a>
          <a className='absolute text-red-500 font-semibold top-[568px] left-[45px] text-[16px]' href="">Classification rule</a>
          <a className='absolute text-red-500 font-semibold top-[603px] left-[55px] text-[16px]' href="">Decision Trees</a>
          <a className='absolute text-red-500 font-semibold top-[640px] left-[40px] text-[16px]' href="">Logistic Regression</a>
          <a className='absolute text-red-500 font-semibold top-[675px] left-[15px] text-[15px]' href="">Native Bayer Classification</a>
          <a className='absolute text-red-500 font-semibold top-[710px] left-[35px] text-[16px]' href="">K-Nearest Neighbor</a>
          <a className='absolute text-red-500 font-semibold top-[745px] left-[85px] text-[16px]' href="">SVM</a>
          <a className='absolute text-red-500 font-semibold top-[780px] left-[12px] text-[16px]' href="">Gaussian Mixture Models</a>



          <a className='absolute  font-semibold top-[838px] left-[60px] text-[16px]' href="">Q-Learning</a>




          <a className='absolute font-semibold top-[838px] left-[360px] text-[16px]' href="">Use Cases</a>
          <a className='absolute text-red-500 font-semibold top-[872px] left-[330px] text-[16px]' href="">Sentiment Analysis</a>
          <a className='absolute text-red-500 font-semibold top-[910px] left-[315px] text-[16px]' href="">Collaborative Filtering</a>
          <a className='absolute text-red-500 font-semibold top-[945px] left-[360px] text-[16px]' href="">Tagging</a>
          <a className='absolute text-red-500 font-semibold top-[980px] left-[355px] text-[16px]' href="">Prediction</a>





          <a className='absolute  font-semibold top-[838px] left-[560px] text-[16px]' href="">UsDimensionality Reduction</a>
          <a className='absolute text-red-500 font-semibold top-[878px] left-[548px] text-[14px]' href="">Principle Component Analysis (PCA)</a>
          <a className='absolute text-red-500 font-semibold top-[914px] left-[588px] text-[16px]' href="">ECLAT Algorithm</a>
          <a className='absolute text-red-500 font-semibold top-[950px] left-[635px] text-[16px]' href="">FP Trees</a>
          <a className='absolute text-red-500 font-semibold top-[985px] left-[590px] text-[16px]' href="">Random projection</a>
          <a className='absolute text-red-500 font-semibold top-[1020px] left-[640px] text-[16px]' href="">NMF</a>
          <a className='absolute text-red-500 font-semibold top-[1055px] left-[635px] text-[16px]' href="">T-SNE</a>
          <a className='absolute text-red-500 font-semibold top-[1090px] left-[638px] text-[16px]' href="">UMAP</a>


          <a className='absolute  font-semibold top-[1055px] left-[380px] text-[16px]' href="">Tools</a>
          <a className='absolute text-red-500 font-semibold top-[1090px] left-[330px] text-[16px]' href="">Important libraries</a>


          <a className='absolute text-red-500 font-semibold top-[1040px] left-[100px] text-[16px]' href="">scikit-learn</a>
          <a className='absolute text-red-500 font-semibold top-[1075px] left-[90px] text-[16px]' href="">spacy (NLP)</a>



          <a className='absolute  font-semibold top-[1260px] left-[320px] text-[16px]' href="">Deep Learning</a>


        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
