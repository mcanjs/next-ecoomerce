import { IAttributeItem } from '@/interfaces/Attribute';
import { addAttribute, changeAttributeById } from '@/slices/attribute';
import { RootState } from '@/store';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function RadioAttributes(data: IAttributeItem) {
  const dispatch = useDispatch();
  const { attributes } = useSelector((state: RootState) => state.attribute);

  const initialAttribute = useCallback(() => {
    const old = attributes.filter(a => a.attributeId === data._id);
    if (old.length === 0) {
      dispatch(
        addAttribute({
          attributeId: data._id,
          attributeTitle: data.title,
          attributeType: data.type,
          selecteds: []
        })
      );
    }
  }, [dispatch, data, attributes]);

  useEffect(() => {
    initialAttribute();
  }, [initialAttribute]);

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
              name={`${data._id}-choice-${data.title}`}
              id={`${data._id}-choice-${choice}`}
              className="hidden"
              onChange={e =>
                dispatch(
                  changeAttributeById({
                    attributeId: data._id,
                    attributeTitle: data.title,
                    attributeType: data.type,
                    selecteds: [choice]
                  })
                )
              }
            />
            <label
              htmlFor={`${data._id}-choice-${choice}`}
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
  const dispatch = useDispatch();
  const { attributes } = useSelector((state: RootState) => state.attribute);
  const initialAttribute = useCallback(() => {
    const old = attributes.filter(a => a.attributeId === data._id);
    if (old.length === 0) {
      dispatch(
        addAttribute({
          attributeId: data._id,
          attributeTitle: data.title,
          attributeType: data.type,
          selecteds: []
        })
      );
    }
  }, [dispatch, data, attributes]);

  useEffect(() => {
    initialAttribute();
  }, [initialAttribute]);

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
              name={`${data._id}-choice-${data.title}`}
              id={`${data._id}-choice-${choice}`}
              className="hidden"
              onChange={e => {
                if (e.target.checked) {
                  const beforeSelecteds: any = attributes
                    .filter(a => a.attributeId === data._id)
                    .flatMap(a => a.selecteds);
                  dispatch(
                    changeAttributeById({
                      attributeId: data._id,
                      attributeTitle: data.title,
                      attributeType: data.type,
                      selecteds: [...beforeSelecteds, choice]
                    })
                  );
                } else {
                  const beforeSelecteds: any = attributes
                    .filter(a => a.attributeId === data._id)
                    .flatMap(a => a.selecteds?.filter(s => s !== choice));
                  dispatch(
                    changeAttributeById({
                      attributeId: data._id,
                      attributeTitle: data.title,
                      attributeType: data.type,
                      selecteds: beforeSelecteds
                    })
                  );
                }
              }}
            />
            <label
              htmlFor={`${data._id}-choice-${choice}`}
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
  const dispatch = useDispatch();
  const { attributes } = useSelector((state: RootState) => state.attribute);

  const initialAttribute = useCallback(() => {
    const old = attributes.filter(a => a.attributeId === data._id);
    if (old.length === 0) {
      dispatch(
        addAttribute({
          attributeId: data._id,
          attributeTitle: data.title,
          attributeType: data.type,
          selecteds: [data.choices[0]]
        })
      );
    }
  }, [dispatch, data, attributes]);

  useEffect(() => {
    initialAttribute();
  }, [initialAttribute]);
  return (
    <div className="pt-4 attribute">
      <h3 className="text-sm text-gray-800 uppercase mb-1">
        {data.title}
        {data.required && <span className="pl-1 text-error">*</span>}
      </h3>
      <div className="flex items-center gap-2">
        <select
          className="select select-bordered w-full max-w-xs"
          name={`${data._id}-choice-${data.title}`}
          id={`${data._id}-choice-${data.title}`}
          onChange={e =>
            dispatch(
              changeAttributeById({
                attributeId: data._id,
                attributeTitle: data.title,
                attributeType: data.type,
                selecteds: [e.currentTarget.value]
              })
            )
          }
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
  const dispatch = useDispatch();
  const { attributes } = useSelector((state: RootState) => state.attribute);

  const initialAttribute = useCallback(() => {
    const old = attributes.filter(a => a.attributeId === data._id);
    if (old.length === 0) {
      dispatch(
        addAttribute({
          attributeId: data._id,
          attributeTitle: data.title,
          attributeType: data.type,
          texts: ''
        })
      );
    }
  }, [dispatch, data, attributes]);
  useEffect(() => {
    initialAttribute();
  }, [initialAttribute]);

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
          name={`${data._id}-choice-${data.title}`}
          id={`${data._id}-choice-${data.title}`}
          onChange={e =>
            dispatch(
              changeAttributeById({
                attributeId: data._id,
                attributeTitle: data.title,
                attributeType: data.type,
                texts: e.currentTarget.value
              })
            )
          }
        />
      </div>
    </div>
  );
}

export function TextareaAttributes(data: IAttributeItem) {
  const dispatch = useDispatch();
  const { attributes } = useSelector((state: RootState) => state.attribute);

  const initialAttribute = useCallback(() => {
    const old = attributes.filter(a => a.attributeId === data._id);
    if (old.length === 0) {
      dispatch(
        addAttribute({
          attributeId: data._id,
          attributeTitle: data.title,
          attributeType: data.type,
          texts: ''
        })
      );
    }
  }, [dispatch, data, attributes]);

  useEffect(() => {
    initialAttribute();
  }, [initialAttribute]);
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
          name={`${data._id}-choice-${data.title}`}
          id={`${data._id}-choice-${data.title}`}
          onChange={e =>
            dispatch(
              changeAttributeById({
                attributeId: data._id,
                attributeTitle: data.title,
                attributeType: data.type,
                texts: e.currentTarget.value
              })
            )
          }
        ></textarea>
      </div>
    </div>
  );
}
