import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "./Form.css";
const Form = ({ setloader }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emailSend, setemailSend] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [submitted, setsubmitted] = useState(false);
  const [information, setinformation] = useState({
    FirmName: "",
    Position: "",
    Experience: "",
    Mainpracticearea: "",
    Plaintiff: "",
    City: "",
    State: "",
    Salary: "",
    Annualbonus: "",
    Annualbillingrequiremen: "",
    Ethnicity: "",
    Gender: "",
  });

  const handleSubmit = async () => {
    const { data } = await axios.post(
      "https://big4transparancy.herokuapp.com/",
      information
    );
    setinformation({
      FirmName: "",
      Position: "",
      Experience: "",
      Mainpracticearea: "",
      Plaintiff: "",
      City: "",
      State: "",
      Salary: "",
      Annualbonus: "",
      Annualbillingrequiremen: "",
      Ethnicity: "",
      Gender: "",
    });
    setsubmitted(true);
    setloader(data);
    console.log("done", data);
  };

  return (
    <div className=" mainFrmCon">
      <div className="row text-center">
        <div className="col-md-8 offset-md-2">
          <h2
            className="
          h1
        "
          >
            Contribute your information
          </h2>
          <div className="myFormaContainer">
            <p className="p m-3 mb-5 myForma">
              This data source is only as good as you make it. Together, we can
              crowd source the ultimate tool for earnings transparency in the
              industry. Before consulting the submitted answers, my only ask is
              that you please enter your information. By clicking submit, you
              consent to having your information included in the anonymous
              spreadsheet linked below.
            </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div
          className="
        col-11 col-lg-8
        mx-auto   customFrmSec   "
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
                placeholder="Firm Name "
                value={information.FirmName}
                onChange={(e) =>
                  setinformation({ ...information, FirmName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Position</label>
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
                value={information.Position}
                onChange={(e) =>
                  setinformation({ ...information, Position: e.target.value })
                }
              >
                <option>select one</option>
                <option value="Associate">Associate</option>
                <option value="Attorney">Attorney</option>
                <option value="Sr. attorney">Sr. attorney</option>
                <option value="Non-equity partner">Non-equity partner</option>
              </select>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Experience</label>
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
                value={information.Experience}
                placeholder="1 year, 2 year, 3 year, etc"
                onChange={(e) =>
                  setinformation({ ...information, Experience: e.target.value })
                }
              >
                <option>select one</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option
                  value="1-2 years 
"
                >
                  1-2 years
                </option>

                <option value="2-3 years">2-3 years</option>
                <option value="3-4 years">3-4 years</option>
                <option value="4-5 years">4-5 years</option>
                <option
                  value="5-6 years
"
                >
                  5-6 years
                </option>
                <option
                  value="6-7 years
"
                >
                  6-7 years
                </option>

                <option value="7-8 years">7-8 years</option>
                <option value="8-9 years">8-9 years</option>
                <option
                  value="9-10 years
"
                >
                  9-10 years
                </option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Main practice area </label>
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
                value={information.Mainpracticearea}
                onChange={(e) =>
                  setinformation({
                    ...information,
                    Mainpracticearea: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Plaintiff, defense or other (to the left of form)</label>
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
                value={information.Plaintiff}
                onChange={(e) =>
                  setinformation({ ...information, Plaintiff: e.target.value })
                }
              >
                <option>select one</option>

                <option value="Plaintiff">Plaintiff</option>
                <option value="Defense">Defense</option>
                <option value="Other">Other</option>
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
                placeholder="Full city name is ideal."
                value={information.City}
                onChange={(e) =>
                  setinformation({ ...information, City: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>State </label>
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
                placeholder="abbreviation"
                value={information.State}
                onChange={(e) =>
                  setinformation({ ...information, State: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Salary (not including bonus) </label>
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
                placeholder="Only enter digits. No commas or $"
                value={information.Salary}
                onChange={(e) =>
                  setinformation({
                    ...information,
                    Salary: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Annual bonus </label>
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
                placeholder="Only enter digits. No commas or $"
                value={information.Annualbonus}
                onChange={(e) =>
                  setinformation({
                    ...information,
                    Annualbonus: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="row" style={{}}>
            <div className="col-12 col-md-4">
              <label>Annual billing requirement</label>
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
                placeholder="Digits only. Annual billable hours"
                value={information.Annualbillingrequiremen}
                onChange={(e) =>
                  setinformation({
                    ...information,
                    Annualbillingrequiremen: e.target.value,
                  })
                }
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
                value={information.Ethnicity}
                onChange={(e) =>
                  setinformation({ ...information, Ethnicity: e.target.value })
                }
              >
                <option>select one</option>
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
                value={information.Gender}
                onChange={(e) =>
                  setinformation({ ...information, Gender: e.target.value })
                }
              >
                <option value="Male">select one</option>
                <option value="Male">Male</option>
                <option value=" Female">Female</option>
                <option value=" Non-binary">Non-binary</option>
                <option value=" Other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <button
              type="button"
              class="btn btn-primary mt-5"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={() => {
                handleSubmit();
                onOpen();
              }}
            >
              Submit
            </button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader> Wait! Before reviewing the data!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <h2 className="p text-secondary mb-2">
                    Before reviewing the data!: We are sponsored by Holtz &
                    Bernard, an attorney recruitment firm in Miami, FL. Are you
                    open to hearing about new attorney opportunities? If so,
                    enter your info and they will reach out!
                  </h2>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="First name"
                      value={information.firstname}
                      onChange={(e) => {
                        setemailSend({
                          ...emailSend,
                          firstname: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Last name"
                      value={information.Lastname}
                      onChange={(e) => {
                        setemailSend({
                          ...emailSend,
                          Lastname: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone number"
                      value={information.phone}
                      onChange={(e) => {
                        setemailSend({
                          ...emailSend,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      value={information.email}
                      onChange={(e) => {
                        setemailSend({
                          ...emailSend,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={async () => {
                      onClose();
                      await axios.post(
                        "https://big4transparancy.herokuapp.com/",
                        emailSend
                      );
                    }}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

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
