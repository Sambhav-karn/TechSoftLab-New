import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import '../App.css';
import { BsFiletypeJsx } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { FaChevronRight, FaClapperboard, FaComputer } from "react-icons/fa6";
import { IoHardwareChipOutline, IoBusinessOutline } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaAppStore } from "react-icons/fa";
import { PiFileHtml } from "react-icons/pi";
import { LiaAndroid } from "react-icons/lia";
import { RiFlutterLine } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { TbBrandPython, TbDeviceCctvFilled } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";
import EnqForm from '../enqForm/EnqForm';
import logo from '../Images/logo.png'

export default function Header() {
  const [activeService, setActiveService] = useState('development');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showEnqForm, setShowEnqForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  const menuData = [
    {
      title: 'Development',
      icon: <BsFiletypeJsx />,
      submenus: [
        {
          title: 'Website Development',
          items: [
            { title: 'Website', icon: <PiFileHtml />, path: '/website' },
            { title: 'Business Website', icon: <IoBusinessOutline />, path: '/business-website' },
            { title: 'Web Application', icon: <FaClapperboard />, path: '/web-application' }
          ]
        },
        {
          title: 'Mobile Development',
          items: [
            { title: 'iOS App', icon: <FaAppStore />, path: '/ios-app' },
            { title: 'Android App', icon: <LiaAndroid />, path: '/android-app' },
            { title: 'Flutter App', icon: <RiFlutterLine />, path: '/flutter-app' }
          ]
        }
      ]
    },
    {
      title: 'IT Hardware',
      icon: <IoHardwareChipOutline />,
      submenus: [
        {
          title: 'Hardware Services',
          items: [
            { title: 'Networking', icon: <GiNetworkBars />, path: '/hardware/networking' },
            { title: 'IT Product', icon: <FaComputer />, path: '/hardware/networking' },
            { title: 'CCTV Solution', icon: <TbDeviceCctvFilled />, path: '/hardware/networking' }
          ]
        }
      ]
    },
    {
      title: 'Data Lake',
      icon: <LuDatabaseBackup />,
      submenus: [
        {
          title: 'Data Services',
          items: [
            { title: 'Data Analysis', icon: <IoMdAnalytics />, path: '/data-analysis' },
            { title: 'Web Automation', icon: <TbBrandPython />, path: '/web-automation' },
            { title: 'Database Management', icon: <SiMongodb />, path: '/database-management' }
          ]
        }
      ]
    }
  ];

  return (
    <div className='bg-white'>
      <div className='max-w-[1320px] mx-auto p-3 shadow-lg relative'>
        {/* Desktop Layout */}
        <div className='hidden md:grid md:grid-cols-[43%_40%_auto] md:items-center md:gap-5'>
          {/* <h1 className='text-2xl font-serif'>Triveni <span className='text-orange-400'>Media</span></h1> */}
          <Link to={'/'}>
            <img src={logo} alt="TechSoft Lab" className='w-[60px]' />
          </Link>
          <div>
            <ul className='flex justify-between items-center text-black font-semibold'>
              <Link to={'/'}>
                <li className='hover:opacity-80 cursor-pointer'>Home</li>
              </Link>
              <Link to={'/about-us'}>
                <li className='hover:opacity-80 cursor-pointer'>About</li>
              </Link>
              <li className='relative group px-3 py-2'>
                <button className='hover:opacity-50'>Services</button>
                <div className='min-w-[750px] absolute top-0 -left-110 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform'>
                  <div className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <div className='w-5 h-5 bg-white transform rotate-45 absolute -top-2 z-0 translate-x-0 transition-transform group-hover:translate-x-[28rem] duration-500 ease-in-out rounded-sm'></div>
                    <div className='grid grid-cols-[25%_auto] gap-5' onMouseLeave={() => setActiveService('development')}>
                      <div className='space-y-3'>
                        <div className='p-3 hover:bg-gray-100 rounded cursor-pointer bg-gray-200' onMouseEnter={() => setActiveService('development')}>
                          <div className={`flex items-center justify-between text-gray-700 font-bold ${activeService === 'development' ? 'text-orange-500' : ''}`}>
                            <div className='flex items-center gap-1'><BsFiletypeJsx />Development</div>
                            <div><FaChevronRight className='pt-1' /></div>
                          </div>
                        </div>
                        <div className='p-3 hover:bg-gray-100 rounded cursor-pointer bg-gray-200' onMouseEnter={() => setActiveService('hardware')}>
                          <div className={`flex items-center justify-between text-gray-700 font-bold ${activeService === 'hardware' ? 'text-orange-500' : ''}`}>
                            <div className='flex items-center gap-1'><IoHardwareChipOutline />IT Hardware</div>
                            <div><FaChevronRight className='pt-1' /></div>
                          </div>
                        </div>
                        <div className='p-3 hover:bg-gray-100 rounded cursor-pointer bg-gray-200' onMouseEnter={() => setActiveService('data')}>
                          <div className={`flex items-center justify-between text-gray-700 font-bold ${activeService === 'data' ? 'text-orange-500' : ''}`}>
                            <div className='flex items-center gap-1'><LuDatabaseBackup />Data Lake</div>
                            <div><FaChevronRight className='pt-1' /></div>
                          </div>
                        </div>
                      </div>
                      <div className='relative min-h-[100px]' onMouseEnter={() => setActiveService(activeService)}>
                        {activeService === 'development' && (
                          <div className='transition-opacity duration-300 flex gap-5'>
                            <div>
                              <h3 className='text-lg font-semibold text-gray-800'>Website</h3>
                              <ul className='mt-2 space-y-1 text-black'>
                                <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><PiFileHtml /> Website Development</li>
                                <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><IoBusinessOutline /> Business Website</li>
                                <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><FaClapperboard />Web Application</li>
                              </ul>
                            </div>
                            <div>
                              <h3 className='text-lg font-semibold text-gray-800'>Mobile Application</h3>
                              <ul className='mt-2 space-y-1 text-black'>
                                <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><FaAppStore /> IOS App Development</li>
                                <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><LiaAndroid /> Mobile App Development</li>
                                <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><RiFlutterLine />Flutter App Development</li>
                              </ul>
                            </div>
                          </div>
                        )}
                        {activeService === 'hardware' && (
                          <div className='transition-opacity duration-300'>
                            <h3 className='text-lg font-semibold text-gray-800'>Hardware</h3>
                            <ul className='mt-2 space-y-1 text-black'>
                              <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><GiNetworkBars /> Networking</li>
                              <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><FaComputer /> IT Product</li>
                              <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><TbDeviceCctvFilled />CCTV Solution</li>
                            </ul>
                          </div>
                        )}
                        {activeService === 'data' && (
                          <div className='transition-opacity duration-300'>
                            <h3 className='text-lg font-semibold text-gray-800'>Data Services</h3>
                            <ul className='mt-2 space-y-1 text-black'>
                              <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><IoMdAnalytics /> Data Analysis</li>
                              <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><TbBrandPython />Web Automation </li>
                              <li className='flex items-center gap-1 hover:translate-x-2 p-2 hover:text-blue-900'><SiMongodb />Database Management</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <Link to={'/contact-us'}>
                <li className='hover:opacity-80 cursor-pointer'>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className='flex justify-between items-center'>
            <div className='relative group'>
              <MdContactPhone className='text-2xl text-orange-400 cursor-pointer' />
              <div className='absolute top-full -left-30 mt-2 w-75 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10'>
                <div className='p-6'>
                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-3'>For Sales Inquiry</h3>
                    <div className='flex items-center mb-2'>
                      <span className='text-blue-500 mr-2'>📞</span>
                      <span className='mr-2'>🇮🇳</span>
                      <span className='text-gray-700'>+91 93193 47957</span>
                    </div>
                    <div className='flex items-center mb-2'>
                      <span className='text-blue-500 mr-2'>📞</span>
                      <span className='mr-2'>In</span>
                      <span className='text-gray-700'>+91 85060 72686</span>
                    </div>
                    <div className='flex items-center mb-2'>
                      <span className='text-blue-500 mr-2'>📞</span>
                      <span className='mr-2'>In</span>
                      <span className='text-gray-700'>+91 93109 33514</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-blue-500 mr-2'>✉️</span>
                      <span className='text-gray-700'>info@techsoftlab.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='bg-white py-2 px-5 rounded uppercase border-2 border-orange-400 hover:bg-orange-500 hover:text-white duration-300 hover:border-orange-500 hover:font-semibold'
              onClick={() => setShowEnqForm(true)}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='flex justify-between items-center md:hidden'>
          <h1 className='text-xl text-black font-serif'>TechSoft <span className='text-orange-400'>Lab</span></h1>
          <div className='flex items-center gap-4'>
            <button
              className='bg-white py-1 px-3 text-sm rounded uppercase border-2 border-orange-400 hover:bg-transparent hover:text-white'
              onClick={() => setShowEnqForm(true)}
            >
              Let's Talk
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-orange-400 focus:outline-none'
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 h-screen w-1/2 bg-orange-300 shadow-xl transform transition-transform duration-300 ease-in-out z-60 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className='pt-16 px-4 pb-4 h-full overflow-y-auto'>
            {menuData.map((menu, index) => (
              <div key={index} className='mb-2'>
                <div
                  className='flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer'
                  onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                >
                  <div className='flex items-center gap-2'>
                    {menu.icon}
                    <span className='font-semibold'>{menu.title}</span>
                  </div>
                  <FaChevronRight
                    className={`transition-transform duration-200 ${activeMenu === index ? 'rotate-90' : ''}`}
                  />
                </div>

                {activeMenu === index && (
                  <div className='ml-4'>
                    {menu.submenus.map((submenu, subIndex) => (
                      <div key={subIndex} className='mb-2'>
                        <div
                          className='flex items-center justify-between p-2 hover:bg-gray-200 cursor-pointer'
                          onClick={() => setActiveSubmenu(activeSubmenu === subIndex ? null : subIndex)}
                        >
                          <span>{submenu.title}</span>
                          <FaChevronRight
                            className={`transition-transform duration-200 ${activeSubmenu === subIndex ? 'rotate-90' : ''}`}
                          />
                        </div>

                        {activeSubmenu === subIndex && (
                          <div className='ml-4'>
                            {submenu.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={item.path}
                                onClick={closeSidebar} // Close sidebar on click
                              >
                                <div className='flex items-center gap-2 p-2 hover:bg-gray-300 cursor-pointer'>
                                  {item.icon}
                                  <span>{item.title}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Additional Mobile Menu Items */}
            <div className='mt-4 border-t pt-4'>
              <Link to={'/'} onClick={closeSidebar}>
                <div className='p-3 font-semibold hover:bg-gray-100 cursor-pointer'>Home</div>
              </Link>
              <Link to={'/about-us'} onClick={closeSidebar}>
                <div className='p-3 font-semibold hover:bg-gray-100 cursor-pointer'>About</div>
              </Link>
              <Link to={'/contact-us'} onClick={closeSidebar}>
                <div className='p-3 font-semibold hover:bg-gray-100 cursor-pointer'>Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Enquiry Form */}
      {showEnqForm && (
        <>
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
            onClick={() => setShowEnqForm(false)}
          />
          <div
            className="fixed inset-x-0 top-0 z-50 transform transition-transform duration-500 ease-in-out"
            style={{ transform: showEnqForm ? 'translateY(0)' : 'translateY(-100%)' }}
          >
            <EnqForm onClose={() => setShowEnqForm(false)} />
          </div>
        </>
      )}
    </div>
  );
}