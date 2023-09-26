import { useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import SubTitle from './SubTitle';
import {
  aiSubTitles,
  statisticalSubTitles,
  visualizationSubTitles,
  machineGeneral,
  machineMethods,
  machineUseCases,
  machineImportantLibraries,
  deepNeuralNetworks,
  deepArchitectures,
  deepTraining,
  deepTools,
  deepModel,
  dataEngineer,
} from './AllSubTitles';
import { Link } from 'react-router-dom';

const LeftNav = ({ onItemClick }) => {
  const [aiSubTitle, setAiSubTitle] = useState(false);
  const [dataSubTitle, setDataSubTitle] = useState(false);
  const [machineSubTitle, setMachineSubTitle] = useState(false);
  const [deepSubTitle, setDeepSubTitle] = useState(false);
  const [dataEngSubTitle, setDataEngSubTitle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    onItemClick(item);
  };

  return (
    <div>
      <div className=" px-0 lg:px-12 ">
        {/* Ai Expert Career items */}
        <div>
          <div className="text-[#283357] text-2xl font-bold cursor-pointer flex items-center">
            <Link to="aiexpert">
              <p
                style={{ fontFamily: 'Josefin Sans' }}
                onClick={() => handleItemClick('AiExpert')}
                className="py-2 "
              >
                Ai Expert Career Roadmap fundamantal
              </p>
            </Link>
            <span
              onClick={() => {
                setAiSubTitle(!aiSubTitle);
              }}
            >
              {aiSubTitle ? (
                <FaPlusSquare className="text-red-500 text-2xl" />
              ) : (
                <FaMinusSquare className="text-red-500 text-2xl" />
              )}
            </span>
          </div>
          <div className={aiSubTitle ? 'hidden' : 'block py-5 '}>
            <SubTitle subtitles={aiSubTitles} />
          </div>
        </div>
        {/* Data Science Roadmap */}
        <div>
          <div className="text-[#283357] text-2xl font-bold cursor-pointer flex items-center">
            <Link to="aiexpert/dataScience">
              <p
                style={{ fontFamily: 'Josefin Sans' }}
                onClick={() => handleItemClick('DataScience')}
                className="py-2"
              >
                Data Science Roadmap
              </p>
            </Link>
            <span
              onClick={() => {
                setDataSubTitle(!dataSubTitle);
              }}
            >
              {dataSubTitle ? (
                <FaPlusSquare className="text-red-500 text-2xl" />
              ) : (
                <FaMinusSquare className="text-red-500 text-2xl" />
              )}
            </span>
          </div>
          <div className={dataSubTitle ? 'hidden' : 'block  '}>
            <div>
              <p className="mx-4 pb-3">Statistical Skills</p>

              <SubTitle subtitles={statisticalSubTitles} />
            </div>
            <div>
              <p className="mx-4 pb-3">Visualization</p>

              <SubTitle subtitles={visualizationSubTitles} />
            </div>
          </div>
        </div>
        {/* Machine Learning Roadmap */}
        <div>
          <div className="text-[#283357] text-2xl font-bold cursor-pointer flex items-center">
            <Link to="aiexpert/machinelearning">
              <p
                style={{ fontFamily: 'Josefin Sans' }}
                onClick={() => handleItemClick('MachineLearning')}
                className="py-2"
              >
                Machine Learning Roadmap
              </p>
            </Link>
            <span
              onClick={() => {
                setMachineSubTitle(!machineSubTitle);
              }}
            >
              {machineSubTitle ? (
                <FaPlusSquare className="text-red-500 text-2xl" />
              ) : (
                <FaMinusSquare className="text-red-500 text-2xl" />
              )}
            </span>
          </div>
          <div className={machineSubTitle ? 'hidden' : 'block py-5'}>
            <div>
              <p className="mx-4 pb-3">General</p>
              <SubTitle subtitles={machineGeneral} />
            </div>
            <div>
              <p className="mx-4 pb-3">Methods</p>
              <SubTitle subtitles={machineMethods} />
            </div>
            <div>
              <p className="mx-4 pb-3">Important Libraries</p>
              <SubTitle subtitles={machineImportantLibraries} />
            </div>
          </div>
        </div>


        {/* Deep Learning Roadmap */}
        <div>
          <div className="text-[#283357] text-2xl font-bold cursor-pointer flex items-center">
            <Link to="aiexpert/deeplearning">
              <p
                style={{ fontFamily: 'Josefin Sans' }}
                onClick={() => handleItemClick('DeepLearning')}
                className="py-2"
              >
                Deep Learning Roadmap
              </p>
            </Link>
            <span
              onClick={() => {
                setDeepSubTitle(!deepSubTitle);
              }}
            >
              {deepSubTitle ? (
                <FaPlusSquare className="text-red-500 text-2xl" />
              ) : (
                <FaMinusSquare className="text-red-500 text-2xl" />
              )}
            </span>
          </div>
          <div className={deepSubTitle ? 'hidden' : 'block py-5'}>
            <div>
              <p className="mx-4 pb-3">Neural networks</p>
              <SubTitle subtitles={deepNeuralNetworks} />
            </div>
            <div>
              <p className="mx-4 pb-3">Architectures</p>
              <SubTitle subtitles={deepArchitectures} />
            </div>
            <div>
              <p className="mx-4 pb-3">Training</p>
              <SubTitle subtitles={deepTraining} />
            </div>
            <div>
              <p className="mx-4 pb-3">Tools</p>
              <SubTitle subtitles={deepTools} />
            </div>
            <div>
              <p className="mx-4 pb-3">Model optimization - Advanced</p>
              <SubTitle subtitles={deepModel} />
            </div>
          </div>
        </div>
        <div>
          <div className="text-[#283357] text-2xl font-bold cursor-pointer flex items-center">
            <Link to="aiexpert/dataengineer">
              <p
                style={{ fontFamily: 'Josefin Sans' }}
                onClick={() => handleItemClick('DataEngineer')}
                className="py-2"
              >
                Data Engineer Roadmap
              </p>
            </Link>
            <span
              onClick={() => {
                setDataEngSubTitle(!dataEngSubTitle);
              }}
            >
              {dataEngSubTitle ? (
                <FaPlusSquare className="text-red-500 text-2xl" />
              ) : (
                <FaMinusSquare className="text-red-500 text-2xl" />
              )}
            </span>
          </div>
          <div className={dataEngSubTitle ? 'hidden' : 'block py-5 border-l-2'}>
            <SubTitle subtitles={dataEngineer} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftNav;
