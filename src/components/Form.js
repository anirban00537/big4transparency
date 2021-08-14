import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-8 offset-md-2">
          <h2
            className="
          d-block
          sw-font-size-4xl
          sw-text-color-default
          sw-font-family-default
          sw-font-weight-default
          sw-padding-top-none
          sw-padding-bottom-4xs
          sw-letter-spacing-normal
          sw-line-height-normal
          sw-width-full
        "
          >
            Contribute your information
          </h2>
          <p
            className="
          sw-font-size-l
          sw-text-color-default
          sw-font-family-default
          sw-font-weight-default
          sw-padding-top-none
          sw-padding-bottom-4xs
          sw-letter-spacing-normal
          sw-line-height-normal
        "
          >
            This data source is only as good as you make it. Together, we can
            crowd source the ultimate tool for earnings transparency in the
            industry. Before consulting the submitted answers, my only ask is
            that you please enter your information. By clicking submit, you
            consent to having your information included in the anonymous
            spreadsheet linked below.
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="
        col-11 col-lg-8
        mx-auto
        sw-background-color-ffffff
        sw-border-style-solid
        sw-border-width-xs
        sw-border-color-f3f4f9
        sw-border-radius-l
        sw-box-shadow-2xl
        sw-padding-top-xs
        sw-padding-bottom-xs
        sw-padding-left-2xs
        sw-padding-right-2xs
      "
        >
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Firm Name</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Firm Name"
                type="text"
                data-type="short_text"
                data-required="true"
                name="Firm Name"
                placeholder="Firm Name (No LLP  for consistency)"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Stream</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <select
                className="
              sw-form-capture-element
              d-none
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                name="Stream"
                id="sw-form-capture-Stream"
                title="Tax, Audit, Advisory, Consulting..."
                data-type="dropdown"
                data-required="true"
              >
                <option value="Consulting">Consulting</option>
                <option value=" Audit">Audit</option>
                <option value=" Tax">Tax</option>
                <option value=" Financial Advisory">Financial Advisory</option>
                <option value=" Risk">Risk</option>
                <option value=" Industry">Industry</option>
                <option value=" Other (Please specify in notes)">
                  Other (Please specify in notes)
                </option>
              </select>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Sub-Stream</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Sub-Stream"
                type="text"
                data-type="short_text"
                data-required="true"
                name="Sub-Stream"
                placeholder="Private, Public, Strategy, International..."
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Level</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Level"
                type="text"
                data-type="short_text"
                data-required="true"
                name="Level"
                placeholder="Senior 1,  Manager 3, Income Partner, Equity Partner...."
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Years of experience</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Years of experience"
                type="text"
                data-type="short_text"
                data-required="true"
                name="Years of experience"
                placeholder="Digits only, single decimal point"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Certification</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <select
                className="
              sw-form-capture-element
              d-none
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                name="Certification"
                id="sw-form-capture-Certification"
                title="Indicate your professional designation"
                // multiple
                data-selected-text-format="count > 3"
                data-type="multi_select"
                data-required="false"
              >
                <option value="CPA">CPA</option>
                <option value=" MBA">MBA</option>
                <option value=" JD">JD</option>
                <option value=" Other">Other</option>
                <option value=" None">None</option>
              </select>
            </div>
          </div>

          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>City</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-City"
                type="text"
                data-type="short_text"
                data-required="false"
                name="City"
                placeholder="Full city name is ideal. If not, use LCOL, MCOL, HCOL"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Currency</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <select
                className="
              sw-form-capture-element
              d-none
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                name="Currency"
                id="sw-form-capture-Currency"
                title="Currency of compensation"
                data-type="dropdown"
                data-required="false"
              >
                <option value="$ CAD">$ CAD</option>
                <option value=" $ USD">$ USD</option>
                <option value=" € Euro">€ Euro</option>
                <option value=" £ Pounds">£ Pounds</option>
                <option value=" Other">Other</option>
              </select>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Salary (Include partner draws)</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Salary"
                type="text"
                data-type="short_text"
                data-required="false"
                name="Salary"
                placeholder="Only enter digits. No commas or $"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Last bonus received</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Last bonus received"
                type="text"
                data-type="short_text"
                data-required="false"
                name="Last bonus received"
                placeholder="Most recent bonus you received. Only enter digits"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Annual equity grant</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Annual equity grant"
                type="text"
                data-type="short_text"
                data-required="false"
                name="Annual equity grant"
                placeholder="Dollar value annual equity grant"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Internal promotion / External hire</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <select
                className="
              sw-form-capture-element
              d-none
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                name="Internal promotion / External hire"
                id="sw-form-capture-Internal promotion / External hire"
                title="For the last wage increase, were you an..."
                data-type="dropdown"
                data-required="false"
              >
                <option value="Internal promotion">Internal promotion</option>
                <option value=" External hire">External hire</option>
              </select>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Average weekly hours</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <input
                className="
              sw-form-capture-element
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                id="sw-form-capture-Average weekly hours"
                type="text"
                data-type="short_text"
                data-required="false"
                name="Average weekly hours"
                placeholder="Total expected workload. Only digits"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Ethnicity</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <select
                className="
              sw-form-capture-element
              d-none
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                name="Ethnicity"
                id="sw-form-capture-Ethnicity"
                title="Choose from the list"
                data-type="dropdown"
                data-required="false"
              >
                <option value="Caucasian">Caucasian</option>
                <option value=" Black">Black</option>
                <option value=" Latin">Latin</option>
                <option value=" Asian">Asian</option>
                <option value=" Arab">Arab</option>
                <option value=" Indigenous">Indigenous</option>
                <option value=" Other / Prefer not to say">
                  Other / Prefer not to say
                </option>
              </select>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Gender</label>
            </div>
            <div className="col-12 col-md-8 text-center">
              <select
                className="
              sw-form-capture-element
              d-none
              sw-font-size-s
              sw-text-color-000000
              sw-font-family-default
              sw-border-radius-m
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-solid
              sw-border-width-xs
              sw-border-color-000000
              sw-box-shadow-s
              sw-margin-bottom-6xs
              sw-display-inline-block
              sw-padding-left-5xs
              sw-outline-none
              sw-width-full
              sw-background-color-ffffff
            "
                name="Gender"
                id="sw-form-capture-Gender"
                title="Choose from the list"
                data-type="dropdown"
                data-required="false"
              >
                <option value="Male">Male</option>
                <option value=" Female">Female</option>
                <option value=" Non-binary">Non-binary</option>
                <option value=" Other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-right">
              <a
                data-element="button"
                id="sw-form-capture-submit-btn"
                className="
              sw-font-size-m
              sw-text-color-default
              sw-font-family-default
              sw-font-weight-semibold
              sw-border-radius-default
              sw-background-color-default
              sw-padding-left-xs
              sw-padding-right-xs
              sw-padding-top-5xs
              sw-padding-bottom-5xs
              sw-border-style-none
              sw-border-width-xs
              sw-border-color-000000
              sw-letter-spacing-normal
              sw-text-decoration-no-underline
              hover:sw-text-decoration-no-underline
              hover:sw-box-shadow-m
              sw-margin-bottom-6xs
              sw-margin-top-5xs
              sw-display-inline-block
            "
                href="javascript:void(0);"
              >
                Submit Entry
                <div
                  className="spinner-border sw-btn-spinner d-none text-light"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
                <i className="fa fa-fw fa-check d-none" aria-hidden="true" />
              </a>
            </div>
            <p
              id="sw-form-success-message"
              data-success-action-state="OPEN_PAGE"
              data-success-action-path="/"
              className="
            col-12
            text-right
            d-none
            sw-font-size-xl
            sw-text-color-default
            sw-font-family-default
            sw-font-weight-default
            sw-padding-top-none
            sw-padding-bottom-none
            sw-letter-spacing-normal
          "
            >
              Thank you for getting in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
