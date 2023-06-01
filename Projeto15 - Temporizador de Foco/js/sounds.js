export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  )
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )
  const bgAudio = new Audio(
    "https://vgmsite.com/soundtracks/days-gone-original-soundtrack/gssvpcwwpx/01.%20Days%20Gone.mp3"
  )

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return { pressButton, timeEnd, bgAudio }
}
