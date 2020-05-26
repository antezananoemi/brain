import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = ({ setFormData }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    setFormData(data);
  };

  return (
    <div className="columns mt-2">
      <div className="column col-6 col-mx-auto">
        <div className="form-group">
          <h2>Brain dominance</h2>
          <em>Please Fill the form</em>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label">
              {" "}
              Which of these options describes your better?
            </label>
            <label className="form-radio">
              <input
                type="radio"
                name="options"
                value="Analytics"
                ref={register({ required: true })}
              />
              <i className="form-icon"></i> Analytics
            </label>
            <label className="form-radio">
              <input
                type="radio"
                name="options"
                value="Routine"
                ref={register({ required: true })}
              />
              <i className="form-icon"></i> Routine
            </label>
            <label className="form-radio">
              <input
                type="radio"
                name="options"
                value="Creativity"
                ref={register({ required: true })}
              />
              <i className="form-icon"></i> Creativity
            </label>
            <label className="form-radio">
              <input
                type="radio"
                name="options"
                value="Harmonious"
                ref={register({ required: true })}
              />
              <i className="form-icon"></i> Harmonious
            </label>
            {errors.options && (
              <p className="form-input-hint">Please select an option</p>
            )}
            <label className="form-label">
              You feel more comfortable working
            </label>
            <select
              name="comfortable"
              className="form-select"
              ref={register({ required: true })}
            >
              <option>Connecting with people</option>
              <option>Innovative and creative ideas</option>
              <option>Critical and analytical thinking</option>
              <option>Guided by specific instructions and procedures</option>
            </select>
            <label className="form-label">You feel uncomfortable with</label>
            <select
              name="uncomfortable"
              className="form-select"
              ref={register({ required: true })}
            >
              <option>Ambiguity and lack of foresight</option>
              <option>In conflict situations</option>
              <option>Routine tasks or activities</option>
              <option>Improvisation and little seriousness</option>
            </select>
            <label className="form-label">What I value most is</label>
            <select
              name="most"
              className="form-select"
              ref={register({ required: true })}
            >
              <option>Effectiveness and rationality above all else</option>
              <option>Novelty, originality, and evolution</option>
              <option>Cooperation and harmony</option>
              <option>Order, discipline and reliability</option>
            </select>
            <label className="form-label" htmlFor="input-example-3">
              What skills do you think are most developed in you?
            </label>
            <textarea
              className="form-input mb-2"
              id="input-example-3"
              placeholder="Textarea"
              rows="3"
              name="description"
              ref={register({ required: true })}
            ></textarea>
            {errors.description && (
              <p className="form-input-hint">This field is required</p>
            )}
            <input
              type="submit"
              className="mt-2 btn btn-primary input-group-btn btn-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormComponent;
