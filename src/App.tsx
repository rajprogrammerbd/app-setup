/* eslint-disable no-param-reassign */
import React, { useEffect, useMemo, useState } from 'react';

export const formContent = {
  nationalID: {
    heading: 'national_ID?',
    placeHolder: 'enter_national_ID',
    maxLength: 13,
    minLength: 13,
    type: 'number',
    notAllowed: ['-', '.', 'e'],
    id: 1,
  },
  passport: {
    heading: 'passport_number?',
    placeHolder: 'enter_passport_number',
    maxLength: 20,
    minLength: 8,
    type: 'text',
    notAllowed: ['.'],
    id: 2,
  },
  taxID: {
    heading: 'tax_ID',
    placeHolder: 'enter_tax_ID',
    maxLength: 13,
    minLength: 13,
    type: 'number',
    notAllowed: ['-', '.', 'e'],
    id: 3,
  },
};

export enum FormContentTypes {
  nationalID = 'nationalID',
  passport = 'passport',
  taxID = 'taxID',
}

export function capitalizeFirstLetter(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

type AuthFormContentProps = {
  selectedType: FormContentTypes;
  id: number;
};

function App({
  selectedType,
  id,
}: AuthFormContentProps) {
  const [formValue, setFormValue] = useState<string>('');
  const [, setFormattedData] = useState({ id: 0, formValue: '' });
  const isLoading = false;
  const isError = false;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^a-z0-9 ]/gi, '');
    const { value } = event.target;

    if (value.length > event.target.maxLength) {
      const trimmedValue = value.slice(0, event.target.maxLength);
      setFormValue(trimmedValue);
    } else {
      setFormValue(
        selectedType === FormContentTypes.passport
          ? event.target.value.toUpperCase()
          : event.target.value,
      );
    }
  };

  useEffect(() => {
    setFormattedData({ id: 0, formValue: '' });
    setFormValue('');
  }, [selectedType]);

  const validateformValue = useMemo(
    () => formValue.length < formContent[selectedType].minLength,
    [formValue, selectedType],
  );

  const validateData = (event: React.KeyboardEvent<HTMLInputElement>) => {
    /* istanbul ignore else */
    if (event.key === '.') {
      event.preventDefault();
    }
  };
  const handleValidation = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setFormattedData({ id, formValue });
  };

  return (
    <div>
      <div className="mb-parent block sm:flex justify-between bg-white ">
        <h4>Demo heading</h4>
        <div className="mb-right-data sm:w-custom-bw">
          <form data-testid="form-validation" onSubmit={handleValidation}>
            <input
              data-testid="input-element"
              className={
                !isError
                  ? 'border-solid border border-grey-200 py-3 pl-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:primary-blue focus:border-transparent placeholder-pacehoder'
                  : 'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              }
              placeholder="demo placeholder"
              value={formValue}
              onChange={handleChange}
              onKeyDown={validateData}
              maxLength={formContent[selectedType].maxLength}
              type={formContent[selectedType].type}
            />
            {isError ? (
              <p className="text-red-500 text-xs">
                Not Found
              </p>
            ) : (
              ''
            )}
            <button
              type="submit"
              disabled={validateformValue}
              data-testid="submit-button"
              className={` w-full py-3 mt-5 font-bold  ${
                !isError && validateformValue
                  ? 'bg-bag-light text-pacehoder'
                  : 'bg-primary-blue text-white'
              } uppercase rounded-lg  transition transform block focus:outline-none`}
            >
              {isLoading ? <small>Spinner</small> : <p>Next</p>}
            </button>
          </form>
          <div className="prob-className mt-5">
            <p className="text-font text-sm font-normal">
              Having a problem
              {' '}
              <a href="tel:1438">
                <span className="text-sm font-normal text-primary-blue underline">
                  Contact Us
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
