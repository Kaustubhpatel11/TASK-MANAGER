import React, { useState } from 'react';
import { Popover } from '@headlessui/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import AddProjectModal from './AddProjectModal';

const ProjectDropdown = ({ id, navigate }) => {
  const [isModalOpen, setModalState] = useState(false);

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:9000/project/${id}`);
      if (data.deletedCount > 0) {
        toast.success('Record deleted successfully');
        navigate('/');
        document.dispatchEvent(new CustomEvent('projectUpdate'));
      } else {
        toast.error('Record is already deleted');
      }
    } catch (e) {
      toast.error('Something went wrong');
    }
  };

  const closeModal = () => setModalState(false);

  return (
    <>
      <Popover className="relative">
        <Popover.Button className="duration-75 rounded-sm focus:outline-none">
          {/* Gear Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width={16}
            className="text-slate-500/90"
            viewBox="0 0 512 512"
          >
            <path d="M495.9 166.6c3.2 8.7 ... 80 80z" />
          </svg>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 left-0">
          <div className="w-48 bg-white rounded-md border shadow select-none p-1 divide-y">
            {/* Edit Button */}
            <div className="py-[3px]">
              <button
                onClick={() => setModalState(true)}
                className="transition-colors duration-75 flex w-full items-center rounded-md px-2.5 py-2 text-sm space-x-2.5 text-slate-500 hover:bg-indigo-500 hover:text-gray-100"
              >
                {/* Pencil Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width={15}
                  viewBox="0 0 512 512"
                >
                  <path d="M362.7 19.3L314.3 67.7 ... 291.7 90.3z" />
                </svg>
                <span>Edit</span>
              </button>
            </div>

            {/* Delete Button */}
            <div className="py-[3px]">
              <button
                onClick={handleDelete}
                className="transition-colors duration-75 flex w-full items-center rounded-md px-2.5 py-2 text-sm space-x-2 text-slate-500 hover:bg-red-500 hover:text-gray-100"
              >
                {/* Trash Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width={17}
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <span>Delete</span>
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Popover>

      <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} edit={true} id={id} />
    </>
  );
};

export default ProjectDropdown;
