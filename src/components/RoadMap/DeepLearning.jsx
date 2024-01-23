import deepLearningSvg from './deeplearnig.svg';

import { useEffect } from 'react';

const DeepLearning = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 50);
  }, []);
  return (
    <div className="mb-28 ">
      <p
        style={{ fontFamily: 'Josefin Sans' }}
        className="text-3xl font-bold text-red-600 border-b-2 border-red-600 py-5"
      >
        Deep Learning Roadmap{' '}
      </p>
      <div className="mt-10 lg:flex justify-center">
        <div className="relative w-[1000px]">
          <img src={deepLearningSvg} alt="" className='select-none pointer-events-none no-select unselectable' />

          <h1 className='absolute font-semibold top-[15px] left-[480px]'>Deep Learning</h1>

          <a className='absolute font-semibold top-[125px] left-[520px]' href="">Papers</a>
          <a className='absolute font-semibold top-[175px] left-[405px] text-[15px] text-center' href="">Deep Learning Papers Reading Roadmap</a>
          <a className='absolute font-semibold top-[220px] left-[480px]' href="">Papers with code</a>
          <a className='absolute font-semibold top-[260px] left-[420px]' href="">Papers with code - state of the art</a>


          <a className='absolute font-semibold top-[355px] left-[480px]' href="">Neural Networks</a>
          <a className='absolute font-semibold top-[400px] left-[425px]' href="">Understanding Neural Networks</a>
          <a className='absolute font-semibold top-[435px] left-[490px]' href="">Loss Functions</a>
          <a className='absolute font-semibold top-[475px] left-[480px]' href="">Activation Functions</a>
          <a className='absolute font-semibold top-[515px] left-[480px]' href="">Weight Initialization</a>
          <a className='absolute font-semibold top-[555px] left-[400px]' href="">Vanishing / Exploding Gradient Problem</a>


          <a className='absolute font-semibold top-[640px] left-[500px]' href="">Architectures </a>
          <a className='absolute font-semibold top-[685px] left-[450px]' href="">Feedforwaard neural network </a>
          <a className='absolute font-semibold top-[725px] left-[500px]' href="">Autoencoder </a>
          <a className='absolute font-semibold top-[765px] left-[410px]' href="">Convolutional Neural Network (CNN) </a>
          <a className='absolute font-semibold top-[803px] left-[430px]' href="">Recurrent Neural Network (RNN) </a>
          <a className='absolute font-semibold top-[841px] left-[500px]' href="">Transformer </a>
          <a className='absolute font-semibold top-[880px] left-[485px]' href="">Siamese network </a>
          <a className='absolute font-semibold top-[920px] left-[405px]' href="">Generative Adversarial Network (GAN) </a>
          <a className='absolute font-semibold top-[960px] left-[435px]' href="">Evolving Architectures / NEAT </a>
          <a className='absolute font-semibold top-[1000px] left-[480px]' href="">Residual Connections </a>





          <a className='absolute font-semibold top-[670px] left-[850px]' href="">Pooling </a>

          <a className='absolute font-semibold top-[783px] left-[860px]' href="">LSTM </a>
          <a className='absolute font-semibold top-[822px] left-[865px]' href="">GRU </a>


          <a className='absolute font-semibold top-[900px] left-[850px]' href="">Encoder </a>
          <a className='absolute font-semibold top-[940px] left-[850px]' href="">Decoder </a>
          <a className='absolute font-semibold top-[978px] left-[850px]' href="">Altention </a>



          <a className='absolute font-semibold top-[1043px] left-[100px]' href="">SOD </a>
          <a className='absolute font-semibold top-[1083px] left-[80px]' href="">Momenturn </a>
          <a className='absolute font-semibold top-[1123px] left-[100px]' href="">Adam </a>
          <a className='absolute font-semibold top-[1160px] left-[90px]' href="">AdaGrad </a>
          <a className='absolute font-semibold top-[1200px] left-[95px]' href="">AdaDelta </a>
          <a className='absolute font-semibold top-[1240px] left-[100px]' href="">Nadam </a>
          <a className='absolute font-semibold top-[1280px] left-[92px]' href="">KMSProp </a>

          <a className='absolute font-semibold top-[1178px] left-[470px]' href="">Training </a>
          <a className='absolute font-semibold top-[1222px] left-[470px]' href="">Optimizers </a>
          <a className='absolute font-semibold top-[1260px] left-[470px]' href="">Learning Rate Schedule </a>
          <a className='absolute font-semibold top-[1300px] left-[470px]' href="">Batch Normalization </a>
          <a className='absolute font-semibold top-[1340px] left-[470px]' href="">Batch Size Effects </a>
          <a className='absolute font-semibold top-[1380px] left-[470px]' href="">Regularization </a>
          <a className='absolute font-semibold top-[1418px] left-[470px]' href=""> Multitask learning</a>
          <a className='absolute font-semibold top-[1458px] left-[470px]' href=""> Transfer Learning </a>
          <a className='absolute font-semibold top-[1498px] left-[470px]' href="">Curriculam Learning </a>



          <a className='absolute font-semibold top-[1300px] left-[850px]' href="">Early Shopping </a>
          <a className='absolute font-semibold top-[1340px] left-[875px]' href="">Dropout </a>
          <a className='absolute font-semibold top-[1380px] left-[830px]' href="">Parameter Penalties </a>
          <a className='absolute font-semibold top-[1418px] left-[831px]' href="">Data Augmentation </a>
          <a className='absolute font-semibold top-[1458px] left-[830px]' href="">Adversarial Training </a>




          <a className='absolute font-semibold top-[1600px] left-[490px]' href="">Tools </a>
          <a className='absolute font-semibold top-[1642px] left-[445px]' href="">Important Libraries </a>
          <a className='absolute font-semibold top-[1682px] left-[480px]' href="">Tensorflow </a>
          <a className='absolute font-semibold top-[1720px] left-[485px]' href="">PyTorchv </a>
          <a className='absolute font-semibold top-[1760px] left-[480px]' href="">Tensorboard </a>
          <a className='absolute font-semibold top-[1800px] left-[490px]' href="">MLFlow </a>


          <a className='absolute font-semibold top-[1642px] left-[30px]' href="">Awesome Deep Learning </a>
          <a className='absolute font-semibold top-[1680px] left-[20px]' href="">Hugging face Transformers </a>


          <a className='absolute font-semibold top-[1910px] left-[590px]' href="">Model optimization (advanced) </a>
          <a className='absolute font-semibold top-[1953px] left-[670px]' href="">Distillation </a>
          <a className='absolute font-semibold top-[1990px] left-[665px]' href="">Quantization </a>
          <a className='absolute font-semibold top-[2030px] left-[585px]' href="">Neural Architecture Search (NAS)</a>


          <a className='absolute font-semibold top-[2165px] text-center left-[430px] text-2xl' href="">Keep exploring and stay <br />up-to-date</a>


        </div>

      </div>
    </div>
  );
};

export default DeepLearning;
