/**
 *
 *  This is the Contact Main
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { FADE_IN } from "@/assets/animations/FADES";
import { CONTACT_MAP_BG } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import EmailSend from "@/assets/functions/data/email/EmailSend";
import ManipElement from "@/assets/functions/dom/manip/ManipElement";
import CheckServiceTypeSelect from "@/assets/functions/dom/checkers/CheckServiceTypeSelect";

import styles from "../../../styles/modules/Contact/Contact.module.css";

const ContactMain = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Selecting service based on url
  useEffect(() => {
    CheckServiceTypeSelect(
      router,
      "painting",
      document.getElementById("emailServiceLabel"),
      document.getElementById("emailService"),
      2
    );
    CheckServiceTypeSelect(
      router,
      "pressure_washing",
      document.getElementById("emailServiceLabel"),
      document.getElementById("emailService"),
      3
    );
    CheckServiceTypeSelect(
      router,
      "drywall_repair",
      document.getElementById("emailServiceLabel"),
      document.getElementById("emailService"),
      4
    );
    CheckServiceTypeSelect(
      router,
      "carpentry",
      document.getElementById("emailServiceLabel"),
      document.getElementById("emailService"),
      5
    );
  }, []);

  const SERVICES_ARRAY = [
    "Help/Contact",
    "House Painting",
    "Pressure Washing",
    "Drywall Repair",
    "Carpentry/Woodcraft",
  ];

  const STATES_ARRAY = [
    "AL : Alabama",
    "AK : Alaska",
    "AZ : Arizona",
    "AR : Arkansas",
    "CA : California",
    "CO : Colorado",
    "CT : Connecticut",
    "DC : District of Columbia",
    "DE : Delaware",
    "FL : Florida",
    "GA : Georgia",
    "HI : Hawaii",
    "ID : Idaho",
    "IL : Illinois",
    "IN : Indiana",
    "IA : Iowa",
    "KS : Kansas",
    "KY : Kentucky",
    "LA : Louisiana",
    "ME : Maine",
    "MD : Maryland",
    "MA : Massachusetts",
    "MI : Michigan",
    "MN : Minnesota",
    "MS : Mississippi",
    "MO : Missouri",
    "MT : Montana",
    "NE : Nebraska",
    "NV : Nevada",
    "NH : New Hampshire",
    "NJ : New Jersey",
    "NM : New Mexico",
    "NY : New York",
    "NC : North Carolina",
    "ND : North Dakota",
    "OH : Ohio",
    "OK : Oklahoma",
    "OR : Oregon",
    "PA : Pennsylvania",
    "RI : Rhode Island",
    "SC : South Carolina",
    "SD : South Dakota",
    "TN : Tennessee",
    "TX : Texas",
    "UT : Utah",
    "VT : Vermont",
    "VA : Virginia",
    "WA : Washington",
    "WV : West Virginia",
    "WI : Wisconsin",
    "WY : Wyoming",
  ];

  return (
    <section
      id="contactMain"
      className={`${styles.contact_main} overrides_ContactMain`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
        className={`${styles.contact_main_inner} fm-motion fade-in fade-in-fix full-second`}
      >
        <div className={`${styles.contact_main_inner_box} container-fluid`}>
          <div className={`${styles.contact_main_inner_row} row`}>
            <div
              className={`${styles.contact_main_inner_side} ${styles.contact_main_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.contact_main_inner_side_cnt}`}>
                <span
                  className={`${styles.section_name} orientation-change-element half-second`}
                >
                  Contact Form
                </span>

                <form
                  id="contactForm"
                  noValidate="noValidate"
                  autoComplete={"false"}
                  onSubmit={(e) => {
                    EmailSend(router, e);
                  }}
                  onReset={() => {
                    ManipElement(
                      document.getElementById("emailServiceLabel"),
                      "enable"
                    );
                    ManipElement(
                      document.getElementById("emailService"),
                      "enable"
                    );
                    document.getElementById("emailService").selectedIndex = 0;
                  }}
                >
                  <div className={`${styles.form_inner}`}>
                    <span
                      id="formNotice"
                      className={`${styles.form_notice} orientation-change-element half-second`}
                    >
                      - Type in the correct information below.
                    </span>

                    <div className={`${styles.form_inner_box} container-fluid`}>
                      <div
                        className={`${styles.form_inner_row} ${styles.double_row} row`}
                      >
                        <div
                          className={`${styles.form_inner_side} ${styles.side_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailFirstName"
                              id="emailFirstNameLabel"
                              className="orientation-change-element half-second"
                            >
                              First Name:
                            </label>

                            <input
                              type="text"
                              id="emailFirstName"
                              name="email_first_name"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_inner_side} ${styles.side_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailLastName"
                              id="emailLastNameLabel"
                              className="orientation-change-element half-second"
                            >
                              Last Name:
                            </label>

                            <input
                              type="text"
                              id="emailLastName"
                              name="email_last_name"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_inner_row} ${styles.double_row} row`}
                      >
                        <div
                          className={`${styles.form_inner_side} ${styles.side_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailClientEmail"
                              id="emailClientEmailLabel"
                              className="orientation-change-element half-second"
                            >
                              Email Address:
                            </label>

                            <input
                              type="email"
                              id="emailClientEmail"
                              name="email_client_email"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_inner_side} ${styles.side_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailPhoneNumber"
                              id="emailPhoneNumberLabel"
                              className="orientation-change-element half-second"
                            >
                              Phone Number: <span>(Ex: +1336....)</span>
                            </label>

                            <input
                              type="tel"
                              id="emailPhoneNumber"
                              name="email_phone_number"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_inner_row} ${styles.double_row} row`}
                      >
                        <div
                          className={`${styles.form_inner_side} ${styles.side_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailStreetAddres"
                              id="emailStreetAddressLabel"
                              className="orientation-change-element half-second"
                            >
                              Street Address:
                            </label>

                            <input
                              type="text"
                              id="emailStreetAddress"
                              name="email_street_address"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_inner_side} ${styles.side_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailCity"
                              id="emailCityLabel"
                              className="orientation-change-element half-second"
                            >
                              City:
                            </label>

                            <input
                              type="text"
                              id="emailCity"
                              name="email_city"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_inner_row} ${styles.double_row} row`}
                      >
                        <div
                          className={`${styles.form_inner_side} ${styles.side_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailState"
                              id="emailStateLabel"
                              className="orientation-change-element half-second"
                            >
                              State:
                            </label>

                            <select
                              id="emailState"
                              name="email_state"
                              className="orientation-change-element half-second"
                            >
                              <option>-- NOT SELECTED --</option>

                              {STATES_ARRAY.map((s) => (
                                <option>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_inner_side} ${styles.side_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailZipCode"
                              id="emailZipCodeLabel"
                              className="orientation-change-element half-second"
                            >
                              ZIP Code:
                            </label>

                            <input
                              type="text"
                              id="emailZipCode"
                              name="email_zip_code"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_inner_row} ${styles.single_row} row`}
                      >
                        <div
                          className={`${styles.form_inner_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailService"
                              id="emailServiceLabel"
                              className="orientation-change-element half-second"
                            >
                              Type of Service:
                            </label>

                            <select
                              id="emailService"
                              name="email_service"
                              className="orientation-change-element half-second"
                            >
                              <option>-- NOT SELECTED --</option>

                              {SERVICES_ARRAY.map((s) => (
                                <option>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_inner_row} ${styles.single_row} row`}
                      >
                        <div
                          className={`${styles.form_inner_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                        >
                          <div className={`${styles.form_inner_side_cnt}`}>
                            <label
                              for="emailMessage"
                              id="emailMessageLabel"
                              className="orientation-change-element half-second"
                            >
                              Message/Details:
                            </label>

                            <textarea
                              id="emailMessage"
                              name="email_message"
                              className="orientation-change-element half-second"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.form_btns}`}>
                      <button
                        type={"reset"}
                        className={`${styles.btn} ${styles.reset_btn} orientation-change-element half-second`}
                      >
                        <span>Clear</span>
                      </button>
                      <button
                        type={"submit"}
                        className={`${styles.btn} ${styles.submit_btn} orientation-change-element half-second`}
                      >
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className={`${styles.contact_main_inner_side} ${styles.contact_main_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.contact_main_inner_side_cnt}`}>
                <div className={`${styles.contact_info}`}>
                  <span
                    className={`${styles.section_name} orientation-change-element half-second`}
                  >
                    Contact Info
                  </span>

                  <ul>
                    <li className="orientation-change-element half-second">
                      distinctpaintingllc@gmail.com
                    </li>
                    <li className="orientation-change-element half-second">
                      (336) 500-7283
                    </li>
                  </ul>
                </div>
                <div className={`${styles.working_hours}`}>
                  <span
                    className={`${styles.section_name} orientation-change-element half-second`}
                  >
                    Working Hours
                  </span>

                  <ul>
                    <li className="orientation-change-element half-second">
                      Open 24/7!
                    </li>
                  </ul>
                </div>
                <div className={`${styles.location}`}>
                  <span
                    className={`${styles.section_name} orientation-change-element half-second`}
                  >
                    Location
                  </span>

                  <div className={`${styles.map}`}>
                    <BackgroundImage
                      src={CONTACT_MAP_BG}
                      className={`${styles.bg}`}
                      width="100%"
                      height="100%"
                    />
                  </div>

                  <p className="orientation-change-element half-second">
                    4200 Us Highway 29 North # 329 Greensboro, NC 27405
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMain;
