/**
 *
 *  This is used to check what service the user selected based on the url and will
 *  set the select option
 *
 *  @param {Object} rooter - next router
 *  @param {string} service - service value
 *  @param {Object} element_A - label
 *  @param {Object} element_B - select
 *  @param {integer} index - index value
 *
 */

import ManipElement from "../manip/ManipElement";

export default function CheckServiceTypeSelect(
  rooter,
  service,
  element_A,
  element_B,
  index
) {
  if (element_A && element_B) {
    if (rooter.asPath.indexOf(service) > -1) {
      ManipElement(element_A, "disable");
      ManipElement(element_B, "disable");
      element_B.selectedIndex = index;
    }
  }
}
