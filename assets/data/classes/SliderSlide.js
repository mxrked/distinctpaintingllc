/**
 *
 *  This is the class for the Top Slider Slide
 *
 */

export default class SliderSlide {
  constructor(
    slideID,
    slideBg,
    slideTopText,
    slideBottomText,
    slideServiceLink
  ) {
    this._slideID = slideID;
    this._slideBg = slideBg;
    this._slideTopText = slideTopText;
    this._slideBottomText = slideBottomText;
    this._slideServiceLink = slideServiceLink;
  }

  get getSlideID() {
    return this._slideID;
  }
  get getSlideBg() {
    return this._slideBg;
  }
  get getSlideTopText() {
    return this._slideTopText;
  }
  get getSlideBottomText() {
    return this._slideBottomText;
  }
  get getSlideServiceLink() {
    return this._slideServiceLink;
  }
}
