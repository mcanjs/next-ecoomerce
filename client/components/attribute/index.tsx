import { IAttributeItem } from '@/interfaces/Attribute';

export function RadioAttributes(data: IAttributeItem) {
  return (
    <div className="pt-4 attribute">
      <h3 className="text-sm text-gray-800 uppercase mb-1">
        {data.title}
        {data.required && <span className="pl-1 text-error">*</span>}
      </h3>
      <div className="flex items-center gap-2">
        {data.choices.map((choice, index) => (
          <div key={`choice-${index}`}>
            <input
              type="radio"
              name={data.title}
              id={`choice-${choice}`}
              className="hidden"
            />
            <label
              htmlFor={`choice-${choice}`}
              className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
            >
              {choice}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CheckboxAttributes(data: IAttributeItem) {
  return (
    <div className="pt-4 attribute">
      <h3 className="text-sm text-gray-800 uppercase mb-1">
        {data.title}
        {data.required && <span className="pl-1 text-error">*</span>}
      </h3>
      <div className="flex items-center gap-2">
        {data.choices.map((choice, index) => (
          <div key={`choice-${index}`}>
            <input
              type="checkbox"
              name={`choice-${data.title}`}
              id={`choice-${choice}`}
              className="hidden"
            />
            <label
              htmlFor={`choice-${choice}`}
              className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
            >
              {choice}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SelectAttributes(data: IAttributeItem) {
  return (
    <div className="pt-4 attribute">
      <h3 className="text-sm text-gray-800 uppercase mb-1">
        {data.title}
        {data.required && <span className="pl-1 text-error">*</span>}
      </h3>
      <div className="flex items-center gap-2">
        <select
          className="select select-bordered w-full max-w-xs"
          name={`choice-${data.title}`}
          id={`choice-${data.title}`}
        >
          {data.choices.map((choice, index) => (
            <option key={index} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function InputAttributes(data: IAttributeItem) {
  return (
    <div className="pt-4 attribute">
      <label
        htmlFor={`choice-${data.title}`}
        className="text-sm text-gray-800 uppercase mb-1"
      >
        {data.title}
        {data.required && <span className="pl-1 text-error">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="input input-sm input-bordered block"
          name={`choice-${data.title}`}
          id={`choice-${data.title}`}
        />
      </div>
    </div>
  );
}

export function TextareaAttributes(data: IAttributeItem) {
  return (
    <div className="pt-4 attribute">
      <label
        htmlFor={`choice-${data.title}`}
        className="text-sm text-gray-800 uppercase mb-1"
      >
        {data.title}
        {data.required && <span className="pl-1 text-error">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <textarea
          className="textarea textarea-bordered block resize-none w-full max-w-lg"
          name={`choice-${data.title}`}
          id={`choice-${data.title}`}
        ></textarea>
      </div>
    </div>
  );
}
