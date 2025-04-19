type formGrpType = {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  className?: string;
  inputType: boolean;
  value?: string;
  changeHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};
const FormGrp = ({
  label,
  type,
  name,
  className,
  placeholder,
  inputType,
  value,
  changeHandler,
}: formGrpType) => {
  return (
    <div className='bg-red-100 rounded flex flex-col items-start p-10'>
      <label htmlFor={name} className='font-medium'>
        {label}
      </label>
      {inputType === true ? (
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          required
          onChange={changeHandler}
          value={value}
          name={name}
          className={`h-10 p-2.5 border border-gray-400 w-full rounded focus:border-[#e74c3c] outline-none ${className}`}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={changeHandler}
          className={`h-24 p-2.5 border w-full min-h-24 max-h-52 border-gray-400 rounded focus:border-[#e74c3c] outline-none resize-y ${className}`}
        />
      )}
    </div>
  );
};

export default FormGrp;
