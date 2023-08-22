/**
 *
 *  This is the class for the Top Slider Slide
 *
 */

export default class SliderSlide {
  constructor(
    slideID,
    slideBg,
    slideTopTextA,
    slideTopTextB,
    slideBottomText,
    slideServiceLink
  ) {
    this._slideID = slideID;
    this._slideBg = slideBg;
    this._slideTopTextA = slideTopTextA;
    this._slideTopTextB = slideTopTextB;
    this._slideBottomText = slideBottomText;
    this._slideServiceLink = slideServiceLink;
  }

  get getSlideID() {
    return this._slideID;
  }
  get getSlideBg() {
    return this._slideBg;
  }
  get getSlideTopTextA() {
    return this._slideTopTextA;
  }
  get getSlideTopTextB() {
    return this._slideTopTextB;
  }
  get getSlideBottomText() {
    return this._slideBottomText;
  }
  get getSlideServiceLink() {
    return this._slideServiceLink;
  }
}
