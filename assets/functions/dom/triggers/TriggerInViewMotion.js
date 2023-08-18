/**
 *
 *  This is used to trigger a inView framer-motion motion
 *  @param {Object} controls - The controls variable(object) for the parent motion.div
 *  @param {Object} inview - The inview variable(object) for the parent motion.div
 *
 */

export default function TriggerInViewMotion(controls, inview) {
  if (inview) {
    controls.start("visible");
  }
}
