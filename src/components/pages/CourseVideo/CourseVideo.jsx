
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import 'video-react/dist/video-react.css'; // import css
import mediaIcon from '../../../assets/Dashboard/mediaLogo.png'
import mediaIcon2 from '../../../assets/Dashboard/mediaLogo-2.png'
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton,
    BigPlayButton,
    // BigPlayButton
} from 'video-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { MyContext } from '../../../Contaxt/Context';

const CourseVideo = () => {
    const { language } = useContext(MyContext)
    const [videoSource, setVideoSource] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
    const [selected, setSelected] = useState('Introduction to Web designing preview topic1');
    const playerRef = useRef(null);

    const handleList = (video, title) => {
        setSelected(title);
        setVideoSource(video);
    };

    useEffect(() => {
        if (playerRef.current) {
            const videoElement = playerRef.current.video.video;
            videoElement.src = videoSource;
            videoElement.load();
        }
    }, [videoSource]);
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const moduleVideos = [
        {
            "id": 0,
            "title": "0 course module is here ",
            "content": [
                {
                    "id": 0,
                    "title": " Introduction to Web designing preview topic1",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                },
                {
                    "id": 1,
                    "title": " Introduction to Web designing preview topic2",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                },
                {
                    "id": 2,
                    "title": " Introduction to Web designing preview topic3",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                }
            ]
        },
        {
            "id": 1,
            "title": "1 course module is here ",
            "content": [
                {
                    "id": 0,
                    "title": " Introduction to Web designing preview topic4",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                },
                {
                    "id": 1,
                    "title": " Introduction to Web designing preview topic5",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                },
                {
                    "id": 2,
                    "title": " Introduction to Web designing preview topic6",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                }
            ]
        },
        {
            "id": 2,
            "title": "2 course module is here ",
            "content": [
                {
                    "id": 0,
                    "title": " Introduction to Web designing preview topic7",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                },
                {
                    "id": 1,
                    "title": " Introduction to Web designing preview topic8",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                },
                {
                    "id": 2,
                    "title": " Introduction to Web designing preview topic9",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                }
            ]
        },
        {
            "id": 3,
            "title": "3 course module is here",
            "content": [
                {
                    "id": 0,
                    "title": " Introduction to Web designing preview topic10",
                    "video": "https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    "id": 1,
                    "title": " Introduction to Web designing preview topic11",
                    "video": "https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    "id": 2,
                    "title": " Introduction to Web designing preview topic12",
                    "video": "https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    "id": 3,
                    "title": " Introduction to Web designing preview topic13",
                    "video": "https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    "id": 4,
                    "title": " Introduction to Web designing preview topic14",
                    "video": "https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
            ]
        },
        {
            "id": 4,
            "title": "4 course module is here ",
            "content": [
                {
                    "id": 0,
                    "title": " Introduction to Web designing preview topic15",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                },
                {
                    "id": 1,
                    "title": " Introduction to Web designing preview topic16",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                },
                {
                    "id": 2,
                    "title": " Introduction to Web designing preview topic17",
                    "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                }
            ]
        }
    ]

    return (
        <div className='grid grid-cols-3 gap-x-4 mt-24 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8'>
            <div className='col-span-12 md:col-span-2'>
                <h3 className='text-[24px] font-bold'>After Effects - Animated Infographic Video & Data Visualisation</h3>
                <Player ref={playerRef} poster="/assets/poster.png" autoPlay>
                    <source src={videoSource} />
                    <BigPlayButton position="center" />
                    <ControlBar>
                        <ReplayControl seconds={10} order={1} />
                        <ForwardControl seconds={30} order={2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton />
                    </ControlBar>
                </Player>
                <div className='lg:flex mt-3 w-full justify-between items-center'>
                    <h3 className='text-xl font-bold'>How to animate an object filling up to make</h3>
                    <div>
                        <button className='py-[8px]  rounded-[7px] px-5 border border-[#ED1B24] hover:bg-[#ED1B24] hover:text-white'>
                        {language === 'bn' ? 'পূর্ববর্তী' : "Previous"}
                            </button>
                        <button className='py-[10px] ml-5 rounded-[7px] px-6 text-white border border-[#ED1B24] bg-[#ED1B24] my-btn'>
                        {language === 'bn' ? 'পরবর্তী' : "Next"}
                            </button>
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-1 mt-5 md:mt-0' >
                <h3 className='text-[24px] font-semibold'>
                {language === 'bn' ? 'ক্লাস লিস্ট' : " Class List"}
                   </h3>
                <div className="w-full ">
                    <div className=" w-full  bg-black/20 p-3 h-[523px]" id='listDiv'>
                        {moduleVideos.map(item => <Disclosure key={item.id} className='mb-2'>
                            {({ open }) => (
                                <div>
                                    <Disclosure.Button className={`flex w-full justify-between  ${open ? 'bg-white' : ''} px-4 py-2 text-left text-[16px] font-bold `}>
                                        <span>{item.title}</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-0 transform' : 'rotate-180 transform'
                                                } h-5 w-5 text-[#EB3223] `}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 py-2.5 text-sm  bg-white space-y-1  ">
                                        {item.content.map((con, i) => <div onClick={() => handleList(con.video, con.title)} key={con.id} className={`${selected === con.title ? 'bg-[#ED1B24]/80 flex h-10 items-center cursor-pointer px-2.5 py-3' : 'bg-black/10 flex h-10 items-center cursor-pointer px-2.5 py-3 '}`}>
                                            {selected === con.title ? <img src={mediaIcon2} alt="" className='h-4 w-4 mr-2' /> : <img src={mediaIcon} alt="" className='h-4 w-4 mr-2' />}
                                            <p className='text-sm font-semibold'>{i + 1}. {con.title}</p>
                                        </div>)}
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseVideo;