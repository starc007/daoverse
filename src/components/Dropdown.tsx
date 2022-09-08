import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Dropdown = () => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="">
          <FaUserCircle className="text-2xl" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute px-1 py-1 right-0 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Add Collaborator
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/"
                className={`${
                  active ? "bg-gray-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                View
              </Link>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Link
                to="/"
                className={`${
                  active ? "bg-gray-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Edit
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Remove
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
