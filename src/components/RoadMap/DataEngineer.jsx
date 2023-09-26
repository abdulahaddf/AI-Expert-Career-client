import DataSvg from './Big Data.svg';

import DataSvg4 from './dataeng.svg';
import { useEffect } from 'react';

const DataEngineer = () => {
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
        Data Engineer Roadmap{' '}
      </p>
      <div>
        <div className="flex justify-center mt-6">
          <div className='relative w-[1000px]'>
            <img src={DataSvg} alt="" className='select-none pointer-events-none no-select unselectable' />

            <a className='absolute font-semibold  top-[10px] left-[320px] text-xl ' href="">Big Data Engineer</a>

            <a className='absolute font-semibold  top-[120px] left-[305px]' href="">Big Data Architectures</a>
            <a className='absolute font-semibold text-red-500 top-[175px] left-[305px] text-center text-[14px]' href="">Architectural patterns <br /> & Best Practices (video)</a>

            <a className='absolute font-semibold text-red-500 top-[280px] left-[350px]' href="">Principles</a>
            <a className='absolute font-semibold text-red-500 top-[320px] left-[280px]' href="">Horizontal vs vertical scaling</a>
            <a className='absolute font-semibold text-red-500 top-[360px] left-[340px]' href="">Map Reduce</a>
            <a className='absolute font-semibold text-red-500 top-[400px] left-[325px]' href="">Data Replication</a>
            <a className='absolute font-semibold text-red-500 top-[440px] left-[305px]' href="">Name & Data Nodes</a>
            <a className='absolute font-semibold text-red-500 top-[480px] left-[315px]' href="">Job & Task Tracker</a>



            <a className='absolute font-semibold  top-[640px] left-[135px]' href="">Tools</a>
            <a className='absolute font-semibold text-red-500 top-[683px] left-[35px]' href="">Check the Awesome Big Data List</a>
            <a className='absolute font-semibold text-red-500 top-[725px] left-[80px]' href="">Hasoop (large data)</a>
            <a className='absolute font-semibold text-red-500 top-[765px] left-[85px]' href="">Spark (in memory)</a>
            <a className='absolute font-semibold text-red-500 top-[805px] left-[87px]' href="">RAPIDS (on GPU)</a>
            <a className='absolute font-semibold text-red-500 top-[845px] left-[50px]' href="">Flume, Scrie: For Unstruct Data</a>
            <a className='absolute font-semibold text-red-500 top-[885px] left-[70px]' href="">Data Warehouse with hive</a>
            <a className='absolute font-semibold text-red-500 top-[925px] left-[90px]' href="">Elastic (EKL) Stack</a>
            <a className='absolute font-semibold text-red-500 top-[965px] left-[135px]' href="">Avro</a>
            <a className='absolute font-semibold text-red-500 top-[1005px] left-[135px]' href="">Flink</a>
            <a className='absolute font-semibold text-red-500 top-[1045px] left-[135px]' href="">Dask</a>
            <a className='absolute font-semibold text-red-500 top-[1085px] left-[125px]' href="">Numba</a>
            <a className='absolute font-semibold text-red-500 top-[1125px] left-[135px]' href="">Onnx</a>
            <a className='absolute font-semibold text-red-500 top-[1165px] left-[125px]' href="">Openvino</a>
            <a className='absolute font-semibold text-red-500 top-[1205px] left-[130px]' href="">MLFlow</a>
            <a className='absolute font-semibold text-red-500 top-[1245px] left-[100px]' href="">Kafka & KSQL</a>
            <a className='absolute font-semibold text-red-500 top-[1285px] left-[115px]' href="">Databases</a>
            <a className='absolute font-semibold text-red-500 top-[1325px] left-[120px]' href="">Scalability</a>
            <a className='absolute font-semibold text-red-500 top-[1365px] left-[95px]' href="">Cloud Services</a>
            <a className='absolute font-semibold text-red-500 top-[1405px] left-[75px]' href="">Awesome production ML</a>


            <a className='absolute font-semibold text-red-500 top-[620px] left-[620px]' href="">HDFS</a>
            <a className='absolute font-semibold text-red-500 top-[660px] left-[530px]' href="">Loading data with Sqoop and Plg</a>
            <a className='absolute font-semibold text-red-500 top-[700px] left-[570px]' href="">Strom: Hadop Realtime</a>

            <h1 className='text-center absolute font-semibold text-red-500 top-[900px] left-[600px]'>
              to get data (e.g. logging),
              <br />
              search, analyze
              <br />
              and visualize it in real time
            </h1>

            <a className=' absolute font-semibold text-red-500 top-[1170px] left-[550px]' href="">Cassandra</a>
            <a className=' absolute font-semibold text-red-500 top-[1210px] left-[530px]' href="">MongoDB, Neo4j </a>



            <a className=' absolute font-semibold text-red-500 top-[1285px] left-[550px]' href="">Zookeeper</a>
            <a className=' absolute font-semibold text-red-500 top-[1325px] left-[550px]' href="">Kubernetes</a>


            <a className=' absolute font-semibold text-red-500 top-[1400px] left-[525px]' href="">AWS SageMaker</a>
            <a className=' absolute font-semibold text-red-500 top-[1440px] left-[520px]' href="">Google ML Engine</a>
            <a className=' absolute font-semibold text-red-500 top-[1475px] left-[500px] text-center text-[14px]' href="">Microsoft Azure
              <br />
              Machine Learning Studio
            </a>




          </div>
        </div>



        <div className="flex justify-center mt-10">
          <div className='relative'>
            <img src={DataSvg4} alt="" className='select-none pointer-events-none no-select unselectable' />
            <h1 className='absolute font-semibold  top-[10px] left-[90px]'>Data Engineer</h1>
            <a className='absolute font-semibold text-red-500 top-[130px] left-[55px]' href="">Summary of Data Formats</a>
            <a className='absolute font-semibold text-red-500 top-[170px] left-[105px]' href="">Data Discovery</a>
            <a className='absolute font-semibold text-red-500 top-[210px] left-[60px]' href="">Data Source & Acquisition</a>
            <a className='absolute font-semibold text-red-500 top-[250px] left-[90px]' href="">Data Integration</a>
            <a className='absolute font-semibold text-red-500 top-[290px] left-[105px]' href="">Data Fusion</a>
            <a className='absolute font-semibold text-red-500 top-[330px] left-[55px]' href="">Transformation & Enrichment</a>
            <a className='absolute font-semibold text-red-500 top-[370px] left-[90px]' href="">Data Survey</a>
            <a className='absolute font-semibold text-red-500 top-[410px] left-[90px]' href="">OpenRefine</a>
            <a className='absolute font-semibold text-red-500 top-[450px] left-[80px]' href="">How much Data</a>
            <a className='absolute font-semibold text-red-500 top-[490px] left-[100px]' href="">Using ELT</a>
            <a className='absolute font-semibold text-red-500 top-[530px] left-[35px]' href="">Data Lake vs Data Warehouse</a>
            <a className='absolute font-semibold text-red-500 top-[570px] left-[25px]' href="">Dockerize your Python Application</a>
            <a className='absolute font-semibold text-red-500 top-[705px] left-[60px] text-[15px] text-center' href="">Keep exploring and stay <br />up-to-date</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineer;
