import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const bricks = [
  {  name: "بلوك خفيف 3 فتحة " },
  { name: "بلوك خفيف  " },
  { name: "بلوك خفيف 8 فتحة"},
  { name: "بلوك ثقيل " },
  { name: "بلوك حرف U" },
  { name: "بلوك ثقيل 3 فتحة " },
  {  name: "بلوك ثقيل 8 فتحة" },
  { name: "بلوك خفيف" },
  { name: "بلك بركانى خفيف 3 فتحات " },
  { name:"بلك  بركانى معزول شريحة أبيض 7 فتحات" },
  { name: "بلك  بركانى معزول مشرشر (مضلع)  أزرق" },
  { name: "بلك بركانى خفيف 3 فتحات" },
  { name: "بلك  بركانى خفيف تمديدات حرف U" },
  { name: "بلك  بركانى معزول شريحة أبيض 3 فتحات" },
  { name: "بلك  بركانى معزول شريحة أبيض 7 فتحات" },
  { name: "بلك  بركانى معزول شريحة أزرق 5 فتحات" },
  { name: "بلك  بركانى معزول شريحة أزرق 7 فتحات" },
  { name: "بلك  بركانى معزول مشرشر (مضلع)  أبيض" },
  { name: "بلك  بركانى معزول شريحة أزرق 7 فتحات" },
  { name: "بلك  بركانى معزول شريحة أبيض 7 فتحات"},
  { name: "بلك  بركانى معزول مشرشر (مضلع)  أبيض" },
];

const InvoiceDropdown = ({ onEditItem, cellData }) => {
  const [selected, setSelected] = useState(
    bricks.find((brick) => brick.name === cellData.value) || bricks[0]
  );

  useEffect(() => {
    // When the cellData.value changes, update the selected value
    setSelected(bricks.find((brick) => brick.name === cellData.value) || bricks[0]);
  }, [cellData.value]);

  const handleSelectChange = (newValue) => {
    setSelected(newValue);
    // Call the onEditItem function with the new selected value
    onEditItem({
      target: {
        name: cellData.name,
        value: newValue.name, // Set the selected value
        id: cellData.id,
      },
    });
  };

  return (
    <div dir="rtl" >
      <Listbox value={selected} onChange={handleSelectChange} >
        <div className="relative mt-1 text-right" dir="rtl">
          <Listbox.Button
            className="relative w-full cursor-default border-1 border-green-50 bg-white py-2 pl-3 pr-10 text-right shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{selected ? selected.name : ''}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {bricks.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default InvoiceDropdown;
