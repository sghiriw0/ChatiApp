import flatpickr from 'flatpickr';
import { useEffect } from 'react';

const DateRangePicker = () => {
  useEffect(() => {
    // Init flatpickr
    flatpickr('.form-datepicker', {
      mode: 'range',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'Y-m-d',
      inline: true,
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });

    
  }, []);

  return (
    <div>
      <label className="mb-3 block font-medium text-black dark:text-white">
        Select Date Range
      </label>
      <div className="">
        <div className='form-datepicker'></div>
      </div>
    </div>
  );
};

export default DateRangePicker;
