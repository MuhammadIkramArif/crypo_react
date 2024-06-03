import React from 'react';
import { useLocation } from 'react-router-dom';

// icons

import { ReactComponent as Menu } from '../../../assets/sidebar-icons/menu.svg';

export const InformationSidebar = ({ linksArr, onClick, className }) => {
  const [show, setShow] = React.useState(false);

  const { hash } = useLocation();

  return (
    <>
      <button
        style={{ top: '15%' }}
        onClick={() => setShow(!show)}
        type='button'
        className='sidebar-btn rounded-circle btn btn-color'
      >
        <Menu />
      </button>
      <section
        className={`sidebar-width ${show ? 'sidebar-show' : 'sidebar-hide'}`}
      >
        {/* Sidebar */}
        <div
          className='sidebar-container bg-black text-white p-4 text-truncate position-sticky position-fixed'
          style={{ top: 120 }}
        >
          <div>
            <ul className='nav flex-column'>
              {linksArr.map((data) => (
                <li className='nav-item pb-3'>
                  <a
                    onClick={onClick}
                    className={`nav-link ${hash === data.set && className}`}
                    href={data.set}
                  >
                    <div className='d-flex align-items-center'>
                      <span className='me-3 '>{data.icon}</span>
                      <span className='text-small'>{data.title}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
