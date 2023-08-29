/**
 *
 *  This is used to send an contact form to an email
 *  @param {Object} input - The input element
 *  @param {Object} rooter - The router variable
 *  @param {Object} formTarget - The form variable
 *
 */

import emailjs from "@emailjs/browser";

import CheckValidEmail from "./CheckValidEmail";
import CheckValidPhoneNumber from "./CheckValidPhoneNumber";
import CheckValidZip from "./CheckZipCode";
import DeclareStorageVariable from "../storage/DeclareStorageVariable";

const SERVICE_ID = "service_8p72ccn";
const TEMPLATE_ID = "template_7e9ob4e";
const PUBLIC_KEY = "9f1hVWFncUz7ATjYn";

emailjs.init(PUBLIC_KEY);

function CheckForSpaceInFirstCharacter(input) {
  const CHECK_FOR_SPACE = /^\s/.test(input.value);

  if (CHECK_FOR_SPACE) {
    return true;
  } else {
    return false;
  }
}

function ManipFormNotice(formNotice, color, text) {
  formNotice.style.color = color;
  formNotice.innerText = text;
}

function ManipFormItem(formItem, borderColor) {
  formItem.style.borderColor = borderColor;
}

// function AppendSpaceInputToArray(spaceChecker, array) {
//   /**
//     This is used to add a space checker to an array to keep up with
//     which input has a space as the first character
//   */

//   if (spaceChecker) {
//     const ARRAY_INDEX = array.indexOf(spaceChecker);

//     if (ARRAY_INDEX > -1) {
//       array.splice(ARRAY_INDEX, 1);
//       array.push(spaceChecker);
//     } else {
//       array.push(spaceChecker);
//     }
//   }
// }

export default function EmailSend(rooter, formTarget) {
  const COMPANY_NAME = "Distinct Painting LLC";
  const RECEIVER_EMAIL = "distinctpaintingllc@gmail.com";

  const FORM_NOTICE = document.getElementById("formNotice");
  const FIRST_NAME = document.getElementById("emailFirstName");
  const LAST_NAME = document.getElementById("emailLastName");
  const EMAIL_ADDRESS = document.getElementById("emailClientEmail");
  const PHONE_NUMBER = document.getElementById("emailPhoneNumber");
  const STREET_ADDRESS = document.getElementById("emailStreetAddress");
  const CITY = document.getElementById("emailCity");
  const STATE = document.getElementById("emailState");
  const STATE_SELECTED_INDEX = STATE.selectedIndex;
  const ZIP_CODE = document.getElementById("emailZipCode");
  const SERVICE = document.getElementById("emailService");
  const SERVICE_SELECTED_INDEX = SERVICE.selectedIndex;
  const MESSAGE = document.getElementById("emailMessage");

  const TEMPLATE_PARAMS = {
    company_name: COMPANY_NAME,
    reciever_email: RECEIVER_EMAIL,
    email_first_name: FIRST_NAME.value,
    email_last_name: LAST_NAME.value,
    email_phone_number: PHONE_NUMBER.value,
    email_client_email: EMAIL_ADDRESS.value,
    email_street_address: STREET_ADDRESS.value,
    email_city: CITY.value,
    email_state: STATE.options[STATE_SELECTED_INDEX].text,
    email_zip_code: ZIP_CODE.value,
    email_service: SERVICE.options[SERVICE_SELECTED_INDEX].text,
    email_message: MESSAGE.value,
  };

  // Value checkers
  const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(PHONE_NUMBER);
  const CHECK_EMAIL = CheckValidEmail(EMAIL_ADDRESS);
  const CHECK_ZIP = CheckValidZip(ZIP_CODE);

  // Space checkers
  const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(FIRST_NAME);
  const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(LAST_NAME);
  const SPACE_EMAIL = CheckForSpaceInFirstCharacter(EMAIL_ADDRESS);
  const SPACE_STREET = CheckForSpaceInFirstCharacter(STREET_ADDRESS);
  const SPACE_PHONE_NUMBER = CheckForSpaceInFirstCharacter(PHONE_NUMBER);
  const SPACE_CITY = CheckForSpaceInFirstCharacter(CITY);
  const SPACE_ZIP = CheckForSpaceInFirstCharacter(ZIP_CODE);

  // Appending space checkers to array
  // const SPACE_AS_FIRST_INPUTS = [];
  // AppendSpaceInputToArray(SPACE_FIRST_NAME, SPACE_AS_FIRST_INPUTS);
  // AppendSpaceInputToArray(SPACE_LAST_NAME, SPACE_AS_FIRST_INPUTS);
  // AppendSpaceInputToArray(SPACE_EMAIL, SPACE_AS_FIRST_INPUTS);
  // AppendSpaceInputToArray(SPACE_STREET, SPACE_AS_FIRST_INPUTS);
  // AppendSpaceInputToArray(SPACE_PHONE_NUMBER, SPACE_AS_FIRST_INPUTS);
  // AppendSpaceInputToArray(SPACE_CITY, SPACE_AS_FIRST_INPUTS);
  // AppendSpaceInputToArray(SPACE_ZIP, SPACE_AS_FIRST_INPUTS);

  // Validation checkers
  let nonEmptyInputs = false;
  let noSpacesAsFirstCharacter = false;
  let validEmail = false;
  let validPhone = false;
  let validZip = false;
  let sentSuccess = false; // This is used to trigger the form success notice

  // Prevents form send
  formTarget.preventDefault();

  // Validation checks
  if (
    FIRST_NAME.value != "" &&
    LAST_NAME.value != "" &&
    EMAIL_ADDRESS.value != "" &&
    PHONE_NUMBER.value != "" &&
    STREET_ADDRESS.value != "" &&
    CITY.value != "" &&
    STATE.value != "-- NOT SELECTED --" &&
    ZIP_CODE.value != "" &&
    SERVICE.value != "-- NOT SELECTED --" &&
    MESSAGE.value != ""
  ) {
    nonEmptyInputs = true;

    ManipFormItem(FIRST_NAME, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(LAST_NAME, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(EMAIL_ADDRESS, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(PHONE_NUMBER, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(ZIP_CODE, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(CITY, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(STATE, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(STREET_ADDRESS, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(SERVICE, "rgba(238, 238, 238, 0.546)");
    ManipFormItem(MESSAGE, "rgba(238, 238, 238, 0.546)");

    if (CHECK_EMAIL) {
      validEmail = true;

      EMAIL_ADDRESS.style.borderColor = "rgba(238, 238, 238, 0.546)";

      if (CHECK_PHONE_NUMBER) {
        validPhone = true;

        PHONE_NUMBER.style.borderColor = "rgba(238, 238, 238, 0.546)";

        if (CHECK_ZIP) {
          validZip = true;

          ZIP_CODE.style.borderColor = "rgba(238, 238, 238, 0.546)";

          if (
            !SPACE_FIRST_NAME &&
            !SPACE_LAST_NAME &&
            !SPACE_EMAIL &&
            !SPACE_CITY &&
            !SPACE_PHONE_NUMBER &&
            !SPACE_STREET &&
            !SPACE_ZIP
          ) {
            noSpacesAsFirstCharacter = true;

            formTarget.preventDefault();

            // Sending the email
            emailjs
              .send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS)
              .then((res) => {
                console.log("Email sent successfully: " + res);

                sentSuccess = true;

                DeclareStorageVariable("session", "Submission Sent", true);

                setTimeout(() => {
                  if (sentSuccess) {
                    rooter.reload();
                  }
                }, 300);
              })
              .catch((error) => {
                console.error("Error sending email: " + error);
              });
          } else {
            // Adding a red border around input with a space as first character
            // if (SPACE_AS_FIRST_INPUTS.length > 0) {
            //   for (let i = 0; i < SPACE_AS_FIRST_INPUTS.length; i++) {
            //     SPACE_AS_FIRST_INPUTS[i].style.border = "2px solid red";
            //   }
            // } else {
            //   console.log("There are no items in the space checker array..");
            // }

            noSpacesAsFirstCharacter = false;

            if (SPACE_FIRST_NAME) {
              ManipFormItem(FIRST_NAME, "red");
            }
            if (SPACE_LAST_NAME) {
              ManipFormItem(LAST_NAME, "red");
            }
            if (SPACE_CITY) {
              ManipFormItem(CITY, "red");
            }
            if (SPACE_EMAIL) {
              ManipFormItem(EMAIL_ADDRESS, "red");
            }
            if (SPACE_PHONE_NUMBER) {
              ManipFormItem(PHONE_NUMBER, "red");
            }
            if (SPACE_STREET) {
              ManipFormItem(STREET_ADDRESS, "red");
            }
            if (SPACE_ZIP) {
              ManipFormItem(ZIP_CODE, "red");
            }
          }
        } else {
          validZip = false;
          ManipFormNotice(FORM_NOTICE, "red", "Error: Invalid ZIP Code..");

          ZIP_CODE.style.borderColor = "red";

          document.getElementById("sectionName").scrollIntoView();
        }
      } else {
        validPhone = false;
        ManipFormNotice(FORM_NOTICE, "red", "Error: Invalid Phone Number..");

        PHONE_NUMBER.style.borderColor = "red";

        document.getElementById("sectionName").scrollIntoView();
      }
    } else {
      validEmail = false;
      ManipFormNotice(FORM_NOTICE, "red", "Error: Invalid Email Address..");

      EMAIL_ADDRESS.style.borderColor = "red";

      document.getElementById("sectionName").scrollIntoView();
    }
  } else {
    nonEmptyInputs = false;
    ManipFormNotice(FORM_NOTICE, "red", "Error: Cannot have empty inputs..");

    if (FIRST_NAME.value.length == 0) {
      ManipFormItem(FIRST_NAME, "red");
    }
    if (LAST_NAME.value.length == 0) {
      ManipFormItem(LAST_NAME, "red");
    }
    if (EMAIL_ADDRESS.value.length == 0) {
      ManipFormItem(EMAIL_ADDRESS, "red");
    }
    if (PHONE_NUMBER.value.length == 0) {
      ManipFormItem(PHONE_NUMBER, "red");
    }
    if (CITY.value.length == 0) {
      ManipFormItem(CITY, "red");
    }
    if (ZIP_CODE.value.length == 0) {
      ManipFormItem(ZIP_CODE, "red");
    }
    if (STATE.value == "-- NOT SELECTED --") {
      ManipFormItem(STATE, "red");
    }
    if (STREET_ADDRESS.value.length == 0) {
      ManipFormItem(STREET_ADDRESS, "red");
    }
    if (SERVICE.value == "-- NOT SELECTED --") {
      ManipFormItem(SERVICE, "red");
    }
    if (MESSAGE.value.length == 0) {
      ManipFormItem(MESSAGE, "red");
    }

    document.getElementById("sectionName").scrollIntoView();
  }
}
